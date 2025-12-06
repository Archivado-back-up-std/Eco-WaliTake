import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { productId, quantity } = await request.json()

    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { seller: true }
    })

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      )
    }

    const totalPrice = product.price * quantity

    // Create order first
    const order = await prisma.order.create({
      data: {
        productId,
        buyerId: session.user.id,
        sellerId: product.sellerId,
        quantity,
        totalPrice
      }
    })

    // Simulate successful payment (for testing without real Stripe)
    const simulatedCheckoutUrl = `${process.env.NEXTAUTH_URL}/dashboard?success=true&order=${order.id}`

    // Update order with simulated payment
    await prisma.order.update({
      where: { id: order.id },
      data: {
        stripePaymentIntentId: `simulated_${Date.now()}`,
        status: "completed" // Mark as completed for simulation
      }
    })

    // Update product quantity
    await prisma.product.update({
      where: { id: productId },
      data: {
        quantity: { decrement: quantity }
      }
    })

    return NextResponse.json({
      url: simulatedCheckoutUrl,
      sessionId: `simulated_${order.id}`
    })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}