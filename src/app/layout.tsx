import { Inter } from 'next/font/google'
import { cn } from '@/app/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.className,
        "min-h-screen bg-black text-white antialiased"
      )}>
        {children}
      </body>
    </html>
  )
}


