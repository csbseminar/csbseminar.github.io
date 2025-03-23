import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { TalksList } from "@/components/talks-list"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mail, Video } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="w-full h-2 bg-background"></div>
      
      {/* Cover photo with increased height */}
      <div className="w-full h-72 relative overflow-hidden">
        <img
          src="/cover-photo.svg"
          alt="Computational Spatial Biology cover image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-bold text-foreground">Computational Spatial Biology Seminar</h1>
          <ThemeToggle />
        </header>

        <main className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About the Seminar</h2>
            <p className="text-muted-foreground">
              [Your description will go here. Describe what the seminar series is about, who should attend, and any
              other relevant information about the computational spatial biology focus.]
            </p>
          </section>

          <Separator className="my-8" />

          <div className="grid gap-12 md:grid-cols-2">
            <section className="border p-6">
              <h2 className="text-2xl font-semibold mb-4">Join the Webinar</h2>
              <p className="text-muted-foreground mb-4">Connect with us via Zoom</p>
              <div className="space-y-4">
                <Button className="w-full" asChild>
                  <a href="/api/redirect?type=zoom" target="_blank" rel="noopener noreferrer">
                    <Video className="mr-2 h-4 w-4" />
                    Join Zoom Webinar
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Click the button above to join our upcoming webinar sessions.
                </p>
              </div>
            </section>

            <section className="border p-6">
              <h2 className="text-2xl font-semibold mb-4">Join Our Mailing List</h2>
              <p className="text-muted-foreground mb-4">Stay updated on upcoming seminars</p>
              <div className="space-y-4">
                <Button className="w-full" asChild>
                  <a href="/api/redirect?type=group" target="_blank" rel="noopener noreferrer">
                    <Mail className="mr-2 h-4 w-4" />
                    Join our Google Group
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Subscribe to our Google Group to receive notifications about upcoming talks and recordings.
                </p>
              </div>
            </section>
          </div>

          <Separator className="my-8" />

          <section>
            <h2 className="text-2xl font-semibold mb-4">Seminar Schedule</h2>
            <p className="text-muted-foreground mb-6">All upcoming and past talks in our series</p>
            <TalksList />
          </section>
        </main>

        <Separator className="my-8" />

        <footer className="py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Computational Spatial Biology Seminar Series</p>
        </footer>
      </div>
    </div>
  )
}

