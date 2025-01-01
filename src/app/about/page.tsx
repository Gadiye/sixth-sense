import { SiteHeader } from "@/app/components/site-header"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="neon-text text-4xl sm:text-5xl text-center mb-8">About Us</h1>
          
          <div className="space-y-6 text-lg">
            <p>
              SIXTH SENSE was born in 2023 from a passion for authentic streetwear culture. 
              We believe in creating clothing that embodies the raw energy and creativity of 
              urban life.
            </p>
            
            <p>
              Our designs are more than just clothing – they're a statement of individuality 
              and self-expression. Each piece is carefully crafted to blend contemporary 
              street style with premium quality materials.
            </p>

            <p>
              Based in the heart of the city, we draw inspiration from urban architecture, 
              street art, and the diverse communities that make our culture unique. Our 
              mission is to create streetwear that resonates with those who see fashion 
              as a form of personal expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-2">
              <h3 className="font-bold text-xl">Quality First</h3>
              <p className="text-muted-foreground">Premium materials and expert craftsmanship</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-bold text-xl">Authentic Design</h3>
              <p className="text-muted-foreground">True to streetwear culture and heritage</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-bold text-xl">Community Driven</h3>
              <p className="text-muted-foreground">Created for and by the culture</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


