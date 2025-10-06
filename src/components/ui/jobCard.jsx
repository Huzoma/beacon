// src/components/ui/jobCard.jsx
'use client';

import React from 'react';
// Import PropTypes for runtime type checking
import PropTypes from './propTypes';
import { DollarSign } from 'lucide-react';
import Link from 'next/link';
import { slugify } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from './Button';
function JobCard({ job }) {
  // Defensive check for the job prop
  if (!job) {
    return null; // Or return a placeholder if needed
  }

  return (
    <Link
      href={`/jobs/${job.slug ?? slugify(job.title) ?? job.id}`}
      // Accessibility: Make the card act as a button for screen readers
      role="button"
      aria-label={`View details for ${job.title}`}
    >
      <Card
        className="h-full bg-white/5 
                   border border-[#1E90FF]/20 backdrop-blur-xl
                   hover:shadow-lg hover:shadow-[#1E90FF]/40 transition-all duration-300 ease-in-out
                   hover:scale-102 cursor-pointer flex flex-col"
      >
        <div className="flex-grow p-6">
          <CardHeader>
            <CardTitle className="text-xl text-white font-bold">{job.title}</CardTitle>
            <div className="flex space-x-2 text-gray-400 text-sm">
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.jobType}</span>
            </div>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>{job.shortDesc}</p>
            {job.pay && (
              <div className="flex items-center gap-2 mt-4 text-blue-400 font-semibold text-lg">
                <DollarSign className="w-5 h-5" />
                <span>{job.pay}</span>
              </div>
            )}
          </CardContent>
        </div>

        <div className="p-6 pt-0">
          <Button>View Details</Button>
        </div>
      </Card>
    </Link>
  );
}

// Add PropTypes for JobCard component
// This helps catch bugs by validating the types of props at runtime
JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    location: PropTypes.string,
    jobType: PropTypes.string,
    shortDesc: PropTypes.string,
    pay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    longDesc: PropTypes.object,
  }),
};

export default JobCard;
