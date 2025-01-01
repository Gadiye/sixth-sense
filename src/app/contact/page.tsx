import { SiteHeader } from "@/app/components/site-header"
import { Button } from "@/app/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Textarea } from "@/app/components/ui/textarea"
import { Instagram } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="neon-text text-4xl sm:text-5xl">Get In Touch</h1>
            <p className="text-muted-foreground">
              Have a question? We'd love to hear from you.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[150px]"
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="w-full" size="lg" type="submit">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold">Follow us on social media</h2>
            <div className="flex justify-center">
              <Button variant="ghost" size="lg" asChild>
                <Link
                  href="https://instagram.com/sixthsense"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  @sixthsense
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
