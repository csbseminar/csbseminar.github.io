import { Button } from "@/components/ui/button"
import { ExternalLink, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

type Talk = {
  id: string
  title: string
  speaker: string
  affiliation: string
  date: string
  time: string
  isPast: boolean
  youtubeUrl?: string
  slidesUrl?: string
}

// Combined list of talks
const allTalks: Talk[] = [
  {
    id: "1",
    title: "Spatial Transcriptomics in Cancer Research",
    speaker: "Dr. Jane Smith",
    affiliation: "University of Science",
    date: "April 15, 2023",
    time: "3:00 PM - 4:30 PM EST",
    isPast: false,
  },
  {
    id: "2",
    title: "Computational Methods for Spatial Proteomics",
    speaker: "Dr. John Doe",
    affiliation: "Institute of Computational Biology",
    date: "May 2, 2023",
    time: "2:00 PM - 3:30 PM EST",
    isPast: false,
  },
  {
    id: "3",
    title: "Integrating Spatial and Single-cell Data",
    speaker: "Dr. Sarah Johnson",
    affiliation: "Genomics Institute",
    date: "March 10, 2023",
    time: "3:00 PM - 4:30 PM EST",
    isPast: true,
    youtubeUrl: "https://youtube.com/watch?v=example1",
    slidesUrl: "https://example.com/slides1",
  },
  {
    id: "4",
    title: "Machine Learning for Spatial Biology",
    speaker: "Dr. Michael Brown",
    affiliation: "AI Research Center",
    date: "February 15, 2023",
    time: "2:00 PM - 3:30 PM EST",
    isPast: true,
    youtubeUrl: "https://youtube.com/watch?v=example2",
    slidesUrl: "https://example.com/slides2",
  },
]

export function TalksList() {
  if (allTalks.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No talks scheduled at this time.</div>
  }

  return (
    <div className="space-y-6">
      {allTalks.map((talk, index) => (
        <div key={talk.id}>
          <div className={cn("py-4", talk.isPast ? "opacity-80" : "")}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{talk.title}</h3>
              <div
                className={cn(
                  "px-2 py-1 text-xs font-medium",
                  talk.isPast ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary",
                )}
              >
                {talk.isPast ? "Past" : "Upcoming"}
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium">{talk.speaker}</p>
              <p className="text-muted-foreground">{talk.affiliation}</p>
              <div className="text-sm text-muted-foreground">
                <p>{talk.date}</p>
                <p>{talk.time}</p>
              </div>
            </div>

            {talk.isPast && (talk.youtubeUrl || talk.slidesUrl) && (
              <div className="flex gap-2 mt-4">
                {talk.youtubeUrl && (
                  <Button variant="outline" size="sm" className="rounded-none" asChild>
                    <a href={talk.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-4 w-4" />
                      Recording
                    </a>
                  </Button>
                )}
                {talk.slidesUrl && (
                  <Button variant="outline" size="sm" className="rounded-none" asChild>
                    <a href={talk.slidesUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Slides
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
          {index < allTalks.length - 1 && <Separator className="my-2" />}
        </div>
      ))}
    </div>
  )
}

