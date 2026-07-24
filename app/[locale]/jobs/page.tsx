import { JobApplicationForm } from "@/components/jobs/job-application";

export default function JobApplicationPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Apply for a Position
          </h1>
          <p className="mt-3 text-gray-600">
            Fill out the form below and attach your resume. We&apos;ll be in touch soon.
          </p>
        </div>
        <JobApplicationForm />
      </div>
    </main>
  );
}