import React from 'react';
import Link from 'next/link';
import { jobs } from '@/constants/jobsData';
import { slugify } from '@/lib/utils';
import JobCard from '@/components/ui/jobCard';
import ApplyModal from '@/components/job-page/apply-modal';
import MaxWidthContainer from '@/components/shared/max-width-container';

export async function generateStaticParams() {
  // Pre-render pages for all jobs using slug if available, otherwise a slugified title
  return jobs.map((job) => ({ slug: String(job.slug ?? slugify(job.title) ?? job.id) }));
}

export default function JobDetailsPage({ params }) {
  const { slug } = params;

  // Try to find by slug first, then by slugified title, then numeric id fallback
  const job =
    jobs.find((j) => String(j.slug) === String(slug)) ||
    jobs.find((j) => slugify(j.title) === String(slug)) ||
    jobs.find((j) => String(j.id) === String(slug));

  if (!job) {
    return <div className="p-8 text-center text-white">Job not found.</div>;
  }

  const relatedJobs = jobs
    .filter((relatedJob) => relatedJob.category === job.category && relatedJob.id !== job.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] to-black text-white px-4 sm:px-6 md:px-10 lg:px-16 py-8">
      <MaxWidthContainer>
        <Link href="/jobs" className="text-blue-400 hover:underline mb-6 block text-sm">
          &larr; Back to Job Listings
        </Link>

        <div className="bg-white/5 border border-[#1E90FF]/20 backdrop-blur-xl transition p-4 sm:p-6 md:p-8 rounded-xl shadow-md">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              {job.title}
            </h1>
            <div className="w-full sm:w-auto flex justify-start sm:justify-end">
              {/* Keep the Apply modal aligned to the right on larger viewports, but stacked on mobile */}
              <div className="w-full sm:w-auto">
                <ApplyModal jobTitle={job.title} />
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-400 mb-3">
            <span className="block sm:inline">{job.location}</span>
            <span className="hidden sm:inline">{' | '}</span>
            <span className="block sm:inline">{job.jobType}</span>
            <span className="hidden sm:inline">{' | '}</span>
            <span className="block sm:inline">{job.pay}</span>
          </p>
          <p className="text-gray-300 text-base sm:text-lg mb-6">{job.shortDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {job.longDesc &&
              Object.entries(job.longDesc).map(([section, items]) => (
                <div
                  key={section}
                  className="bg-[#1E90FF]/20 border border-[#1E90FF]/40 p-4 md:p-6 rounded-lg"
                >
                  <h2 className="text-lg md:text-xl font-semibold text-gray-200 mb-3 capitalize">
                    {section}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {relatedJobs.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Related Jobs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedJobs.map((relatedJob) => (
                <JobCard key={relatedJob.id} job={relatedJob} />
              ))}
            </div>
          </div>
        )}
      </MaxWidthContainer>
    </div>
  );
}
