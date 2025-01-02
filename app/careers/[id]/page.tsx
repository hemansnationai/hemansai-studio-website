import { notFound } from 'next/navigation'
import { JobDescription } from '@/components/JobDescription'
// import { ApplicationForm } from '@/components/ApplicationForm'

async function getJob(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const jobs = [
    {
      id: 7,
      title: "Graphic Designer",
      description: "At Mayakrit, we see graphic design as visual storytelling that engages, informs, and inspires. We are looking for a highly creative graphic designer who can take conceptual ideas and create visual representations, both in print and electronic media. The ideal candidate will have proficiency in current design software and be skilled in every step of the design process from concept to final deliverable. The graphic designer should be able to take direction from ideas and convert them into a design that connects, collaborating with teams to meet brand and marketing goals.",
      location: "Remote",
      jobType: "Fresher",
      pay: {
        min: 20000,
        max: 28000,
        currency: "INR",
        period: "per month",
      },
      schedule: "Flexible shift",
      objectives: [
        "Work on a wide range of projects and media, using various computer software to visualize and develop innovative graphic designs that meet business goals",
        "Obtain input from management, ensuring designs meet organizational standards and brand expectations",
        "Work independently and cooperatively on multiple projects with the marketing team, meeting deadlines and budget constraints",
        "Examine existing processes, identifying flaws and creating solutions to improve design capabilities",
        "Update and maintain internal databases of designs, photography, and video",
      ],
      dailyResponsibilities: [
        "Collaborate, brainstorm, and strategize with multiple teams or clients for materials including web pages, presentations, signage, newsletters, and marketing materials",
        "Translate strategic direction into high-quality design within an established brand identity",
        "Develop concepts by hand or with software, and execute original content using color, text, font style, imagery, and layout",
        "Manage the design and uploading process of all project material, understanding best practices for content management systems",
        "Use trend intelligence and business/market understanding to design and execute specific classifications",
      ],
      skillsAndQualifications: [
        "Bachelor's degree in graphic design, art, or similar discipline",
        "Exceptional creativity and innovative design skills",
        "1+ years experience (academic and professional) with design software, including Illustrator, InDesign, Photoshop, Dreamweaver",
        "Proven experience with graphic design, with a strong portfolio of work",
        "Excellent communication and presentation skills",
        "Organizational and time-management skills for meeting deadlines in a fast-paced environment",
      ],
      preferredQualifications: [
        "2+ years in professional graphic design, preferably with a creative or marketing agency",
        "Knowledge of WordPress and content management systems a plus",
        "Photography experience and proficiency with photo-editing software",
        "Desire to continue to grow skill set with ongoing education and training",
      ],
    },
  ]

  const job = jobs.find(job => job.id === parseInt(id))
  if (!job) notFound()
  return job
}

export default async function JobDescriptionPage({ params }: { params: { id: string } }) {
  const job = await getJob(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <JobDescription job={job} />
      {/* <ApplicationForm jobId={job.id} jobTitle={job.title} /> */}
    </div>
  )
}
