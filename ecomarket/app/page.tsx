import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-600">
            EcoMarket
          </Link>
          <nav className="flex gap-4">
            <Link href="/marketplace" className="text-gray-600 hover:text-green-600">
              Marketplace
            </Link>
            <Link href="/auth/login" className="text-gray-600 hover:text-green-600">
              Iniciar Sesión
            </Link>
            <Link href="/auth/register">
              <Button variant="outline">Registrarse</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Materiales Reciclables
          <span className="text-green-600 block">para un Futuro Sostenible</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Conecta con empresas para comprar y vender residuos reutilizables.
          Cáscaras de papa, plásticos, vidrios, metales y más.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/marketplace">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Explorar Productos
            </Button>
          </Link>
          <Link href="/products/new">
            <Button size="lg" variant="outline">
              Vender Materiales
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">¿Cómo Funciona?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">1. Regístrate</CardTitle>
              <CardDescription>
                Crea tu cuenta como empresa o usuario individual
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Accede a nuestra plataforma de manera gratuita y segura.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">2. Publica o Busca</CardTitle>
              <CardDescription>
                Vende tus excedentes o encuentra materiales para tu negocio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sube tus productos con fotos, descripción y ubicación.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">3. Compra y Vende</CardTitle>
              <CardDescription>
                Realiza transacciones seguras con integración de pagos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Pagos seguros con Stripe. Entrega directa entre empresas.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Únete a la Economía Circular
          </h2>
          <p className="text-xl mb-8">
            Ayuda al planeta reutilizando materiales que de otra manera se desperdiciarían.
          </p>
          <Link href="/auth/register">
            <Button size="lg" variant="secondary">
              Comenzar Ahora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 EcoMarket. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
