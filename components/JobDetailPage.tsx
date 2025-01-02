// import { FavouriteButton } from "./FavouriteButton";
// import { ApplyJobForm } from "./ApplyJobForm";

interface IJobDetailProps {
  job: {
    id: number;
    title: string;
    description: string;
    company: string;
    location: string;
    favourites?: boolean;
  };
}

export function JobDetailPage({ job }: IJobDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg text-gray-600">{job.company}</p>
        {/* <p className="text-lg text-gray-600">{job.location}</p> */}
      </div>
      {/* <FavouriteButton jobId={job.id} isFavourite={job.favourites || false} /> */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700">{job.description}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Apply for this job</h2>
        {/* <ApplyJobForm jobId={job.id} /> */}
      </div>
    </div>
  );
}
