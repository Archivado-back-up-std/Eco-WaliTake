# EcoMarket - Marketplace de Materiales Reciclables

EcoMarket es una plataforma de comercio electrónico sostenible dedicada a la compra y venta de materiales reciclables. Conecta a vendedores de residuos reciclables con compradores interesados en productos ecológicos, promoviendo la economía circular y la reducción de residuos.

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 16**: Framework React con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework CSS utilitario
- **Radix UI**: Componentes primitivos accesibles

### Backend
- **Next.js API Routes**: API RESTful integrada
- **Prisma**: ORM para base de datos
- **SQLite**: Base de datos local para desarrollo

### Autenticación y Pagos
- **NextAuth.js**: Autenticación con JWT
- **Stripe**: Procesamiento de pagos (simulado en desarrollo)

### Desarrollo
- **ESLint**: Linting de código
- **Turbopack**: Empaquetador rápido de Next.js

## 🏗️ Arquitectura

```
ecomarket/
├── app/                    # Páginas y API routes (App Router)
│   ├── api/               # Endpoints de API
│   │   ├── auth/         # Autenticación
│   │   ├── products/     # Gestión de productos
│   │   ├── checkout/     # Procesamiento de pagos
│   │   └── orders/       # Gestión de pedidos
│   ├── marketplace/      # Página principal del marketplace
│   ├── dashboard/        # Panel de usuario
│   ├── auth/            # Páginas de login/registro
│   └── layout.tsx       # Layout principal
├── components/           # Componentes reutilizables
│   ├── ui/              # Componentes de UI (Radix)
│   └── forms/           # Formularios
├── lib/                 # Utilidades y configuraciones
│   ├── auth.ts          # Configuración de NextAuth
│   ├── prisma.ts        # Cliente de Prisma
│   ├── stripe.ts        # Configuración de Stripe
│   └── utils.ts         # Funciones auxiliares
├── prisma/              # Esquema de base de datos
│   ├── schema.prisma    # Definición del esquema
│   └── seed.ts          # Datos de prueba
└── public/              # Archivos estáticos
```

## 📋 Prerrequisitos

- **Node.js**: Versión 18 o superior
- **npm**: Gestor de paquetes
- **Git**: Para clonar el repositorio

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/srllamadev/Ecommmerce-WaliTake.git
cd Ecommmerce-WaliTake/ecomarket
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Base de datos
DATABASE_URL="file:./dev.db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu-secreto-aqui"

# Stripe (opcional para desarrollo)
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# GitHub OAuth (opcional)
GITHUB_ID="tu-github-client-id"
GITHUB_SECRET="tu-github-client-secret"
```

### 4. Configurar la base de datos
```bash
# Generar cliente de Prisma
npx prisma generate

# Crear y migrar la base de datos
npx prisma db push

# Poblar con datos de prueba
npm run seed
```

### 5. Ejecutar el proyecto
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📖 Uso

### Para vendedores:
1. Regístrate como vendedor
2. Agrega productos al marketplace
3. Gestiona tus productos desde el dashboard
4. Recibe pedidos de compradores

### Para compradores:
1. Explora productos en el marketplace
2. Filtra por categoría, precio o ubicación
3. Compra productos con simulación de pago
4. Visualiza tu historial de pedidos

## 🧪 Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción
npm run lint         # Ejecuta ESLint
npm run seed         # Pobla base de datos con datos de prueba
```

## 🔧 Desarrollo

### Estructura de la base de datos
El esquema de Prisma incluye las siguientes entidades principales:
- **User**: Usuarios (compradores/vendedores)
- **Product**: Productos en venta
- **Order**: Pedidos realizados
- **Contact**: Información de contacto

### API Endpoints
- `GET /api/products` - Lista productos
- `POST /api/products` - Crear producto
- `GET /api/products/[id]` - Detalles de producto
- `PUT /api/products/[id]` - Actualizar producto
- `DELETE /api/products/[id]` - Eliminar producto
- `POST /api/checkout` - Procesar pago
- `GET /api/orders` - Lista pedidos del usuario

### Autenticación
La aplicación usa NextAuth.js con soporte para:
- Credenciales (email/password)
- OAuth con GitHub (opcional)

## 🚀 Despliegue

### Desarrollo Local
Sigue los pasos de instalación arriba.

### Producción
1. Configura variables de entorno de producción
2. Ejecuta `npm run build`
3. Despliega en Vercel, Netlify o similar
4. Configura base de datos PostgreSQL en producción

### Compartir con ngrok
Para compartir localmente con el equipo:
```bash
npm run dev  # En una terminal
ngrok http 3000  # En otra terminal
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Autor**: srllamadev
- **Repositorio**: [GitHub](https://github.com/srllamadev/Ecommmerce-WaliTake)
- **Issues**: [Reportar problemas](https://github.com/srllamadev/Ecommmerce-WaliTake/issues)

---

¡Gracias por contribuir a un futuro más sostenible con EcoMarket! 🌱♻️
