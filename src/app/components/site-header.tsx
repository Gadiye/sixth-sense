import Link from "next/link"
import { Instagram, ShoppingCart } from 'lucide-react'
import { Button } from "@/app/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="neon-text text-2xl mr-8">
          SIXTH SENSE
        </Link>
        <nav className="flex-1 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/products" className="text-sm hover:text-primary">
              Products
            </Link>
            <Link href="/about" className="text-sm hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.instagram.com/sixth_sense254/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}


