"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Product {
  id: string
  title: string
  description: string
  price: number
  quantity: number
  unit: string
  category: string
  condition: string
  images: string
  location: string
  seller: {
    name: string
    businessName?: string
  }
}

export default function Marketplace() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [city, setCity] = useState("")

  useEffect(() => {
    fetchProducts()
  }, [search, category, city])

  const fetchProducts = async () => {
    try {
      const params = new URLSearchParams()
      if (search) params.append("search", search)
      if (category && category !== "all") params.append("category", category)
      if (city) params.append("city", city)

      const response = await fetch(`/api/products?${params}`)
      const data = await response.json()
      setProducts(data.products || [])
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Cargando...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-2xl font-bold text-green-600">
              EcoMarket
            </Link>
            <Link href="/products/new">
              <Button>Vender Producto</Button>
            </Link>
          </div>

          {/* Filters */}
          <div className="flex gap-4 flex-wrap">
            <Input
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-xs"
            />
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="max-w-xs">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="organico">Orgánico</SelectItem>
                <SelectItem value="plastico">Plástico</SelectItem>
                <SelectItem value="vidrio">Vidrio</SelectItem>
                <SelectItem value="metal">Metal</SelectItem>
                <SelectItem value="papel">Papel</SelectItem>
                <SelectItem value="textil">Textil</SelectItem>
                <SelectItem value="electronico">Electrónico</SelectItem>
                <SelectItem value="otros">Otros</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="max-w-xs"
            />
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                {product.images && JSON.parse(product.images).length > 0 && (
                  <img
                    src={JSON.parse(product.images)[0]}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <CardTitle className="text-lg">{product.title}</CardTitle>
                <CardDescription>
                  {product.seller.businessName || product.seller.name} • {JSON.parse(product.location).city}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price}/{product.unit}
                  </span>
                  <span className="text-sm text-gray-500">
                    {product.quantity} disponible
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {product.category}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                    {product.condition}
                  </span>
                </div>
                <Link href={`/products/${product.id}`}>
                  <Button className="w-full mt-4">Ver Detalles</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos.</p>
          </div>
        )}
      </main>
    </div>
  )
}