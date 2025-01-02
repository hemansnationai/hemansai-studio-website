import { Badge } from "@/components/ui/badge";

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  jobType: string;
  pay: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  schedule: string;
  objectives: string[];
  dailyResponsibilities: string[];
  skillsAndQualifications: string[];
  preferredQualifications: string[];
}

export function JobDescription({ job }: { job: Job }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{job.location}</Badge>
          <Badge variant="secondary">{job.jobType}</Badge>
          <Badge variant="secondary">{job.schedule}</Badge>
        </div>
      <div className="flex flex-col md:flex-row gap-2">

          <video
            src="/hiring.mp4"
            className="w-[400px] h aspect-auto"
            autoPlay
            loop
            muted
            playsInline
          />
        <div className="flex flex-col">

      <p className="text-lg font-semibold my-4">
        {job.title} - {job.jobType} <br/>
        Salary: {job.pay.currency} {job.pay.min.toLocaleString()} -{" "}
        {job.pay.max.toLocaleString()} {job.pay.period}
      </p>
      <p className="mb-6">{job.description}</p>
      <h2 className="text-2xl font-bold mb-2">Objectives</h2>
      <ul className="list-disc pl-6 mb-6">
        {job.objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
      </div>
      </div>

      <h2 className="text-2xl font-bold mb-2">Daily Responsibilities</h2>
      <ul className="list-disc pl-6 mb-6">
        {job.dailyResponsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2">Skills and Qualifications</h2>
      <ul className="list-disc pl-6 mb-6">
        {job.skillsAndQualifications.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2">Preferred Qualifications</h2>
      <ul className="list-disc pl-6 mb-6">
        {job.preferredQualifications.map((qualification, index) => (
          <li key={index}>{qualification}</li>
        ))}
      </ul>
    </div>
  );
}
