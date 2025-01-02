'use client'

import { useState } from 'react'
import { Heart, MapPin, Clock, Briefcase, DollarSign, IndianRupee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Progress } from '@/components/ui/progress'

interface Job {
  id: number
  title: string
  description: string
  location: string
  favourites: boolean
  progress: string
  jobType: string
  pay: {
    min: number
    max: number
    currency: string
    period: string
  }
  schedule: string
}

interface JobListingGridProps {
  jobs: Job[]
}

export function JobListingGrid({ jobs }: JobListingGridProps) {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {jobs.map((job) => (
        <Card key={job.id} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <CardHeader className="pb-4">
            <CardTitle className="flex justify-between items-start">
              <span className="text-xl font-bold text-primary">{job.title}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleFavorite(job.id)}
                aria-label={favorites.includes(job.id) ? "Remove from favorites" : "Add to favorites"}
                className="transition-colors duration-300 hover:bg-primary/10"
              >
                <Heart className={favorites.includes(job.id) ? "fill-current text-primary" : "text-gray-400"} />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <p className="text-sm text-muted-foreground line-clamp-3">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {job.location}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                {job.jobType}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {job.schedule}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <IndianRupee className="w-4 h-4 text-primary" />
              <span>
                {job.pay.currency} {job.pay.min.toLocaleString()} - {job.pay.max.toLocaleString()} {job.pay.period}
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Application Progress</span>
                <span className="font-medium">{job.progress}</span>
              </div>
              <Progress value={parseInt(job.progress)} className="h-2" />
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/careers/${job.id}`} className="w-full">
              <Button variant="default" className="w-full font-semibold">
                Apply Now
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
