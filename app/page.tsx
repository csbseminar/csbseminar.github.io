import { ThemeToggle } from "@/components/theme-toggle"
import { TalksList } from "@/components/talks-list"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Cover photo (Notion style) */}
      <div className="w-full h-48 bg-gradient-to-r from-primary/10 to-primary/5 relative">
        <div className="absolute bottom-4 right-4">
          <span className="text-xs text-muted-foreground bg-background/80 px-2 py-1">Cover Photo</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-foreground">Computational Spatial Biology Seminar</h1>
            <div className="w-10 h-10 bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Logo</span>
            </div>
          </div>
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
                <div className="p-4 border bg-muted/50">
                  <p className="font-medium">Zoom Link:</p>
                  <p className="text-primary break-all">[Your Zoom link will go here]</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Click the link above to join our upcoming webinar sessions.
                </p>
              </div>
            </section>

            <section className="border p-6">
              <h2 className="text-2xl font-semibold mb-4">Join Our Mailing List</h2>
              <p className="text-muted-foreground mb-4">Stay updated on upcoming seminars</p>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input placeholder="Enter your email" type="email" className="rounded-none" />
                  <Button className="rounded-none">
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  We'll send you notifications about upcoming talks and recordings.
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

