import { JobApplicationForm } from "@/components/jobs/job-application";
import { Suspense } from "react";

export default function JobApplicationPage() {
  return (
    <main className="bg-gray-50 py-24 px-4">
      <div className="mx-auto max-w-3xl mt-10 ">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Apply for a Position
          </h1>
          <p className="mt-3 text-gray-600">
            Fill out the form below and attach your resume. We&apos;ll be in touch soon.
          </p>
        </div>
        <Suspense fallback={<div className="text-center text-gray-500">Loading form...</div>}>
          <JobApplicationForm />
        </Suspense>

      </div>
    </main>
  );
}