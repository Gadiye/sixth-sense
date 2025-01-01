import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-8 p-4">
      <div className="text-center space-y-4">
        <h1 className="neon-text text-6xl sm:text-8xl mb-2">SIXTH</h1>
        <h1 className="neon-text text-6xl sm:text-8xl">SENSE</h1>
        <p className="text-xl tracking-widest mt-4">STREETWEAR</p>
        <p className="text-sm tracking-wider">ESTD 2023</p>
      </div>
      <div className="flex gap-4">
        <Button asChild variant="outline" className="text-lg">
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
    </main>
  )
}


