import { ProductCard } from "@/app/components/Product-card"
import { SiteHeader } from "@/app/components/site-header"

const products = [
  {
    id: "1",
    name: "Urban Night Hoodie",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "2",
    name: "Street Culture Tee",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Midnight Cargo Pants",
    price: 119.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  // Add more products as needed
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Latest Drops</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}


