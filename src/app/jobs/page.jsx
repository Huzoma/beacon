'use client';

import React, { useState } from 'react';
import SearchBar from '@/components/search-bar/page';
import CategoryButtons from '@/components/search-bar/categoryButtons';
import JobCard from '@/components/ui/jobCard';
import { jobs } from '@/constants/jobsData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import MaxWidthContainer from '@/components/shared/max-width-container';

const ITEMS_PER_PAGE = 10;

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setActiveCategory('All'); // Reset category filter when searching
    setCurrentPage(1); // Reset to the first page on new search
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchTerm(''); // Clear search term when a category is selected
    setCurrentPage(1); // Reset to the first page on new category change
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = activeCategory === 'All' || job.category === activeCategory; // checks if job belongs to activeCategory or if "All" is selected
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()); // checks if job title matches searchTerm (case insensitive)
    return matchesCategory && matchesSearch; // include job only if it matches both criteria
  });

  // Calculate the jobs for the current page
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE); // total number of pages regardless of available jobs (e.g if number of jobs = 53 match, totalPages will be 6 with the last page having 3 jobs)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; // index of the first job on the current page
  const endIndex = startIndex + ITEMS_PER_PAGE; // index after the last job on the current page
  const currentJobs = filteredJobs.slice(startIndex, endIndex); // jobs to be displayed on the current page (includes up to 10 jobs)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] to-black text-white">
      <MaxWidthContainer>
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold max-w-4xl leading-tight">
            Find your next opportunity
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl">
            Type a few keywords into the search field, jump to a category, or use our filters to
            find your perfect match.
          </p>
          <div className="w-full mt-8 flex flex-col items-center">
            <SearchBar onSearch={handleSearch} />
            <CategoryButtons
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </div>

        {/* Job Listings: Render the list of jobs for the current page. If there are jobs, map over currentJobs and render a JobCard for each. If not, show a 'no jobs found' message. */}
        <main className="p-8">
          <h2 className="text-center text-3xl font-bold mb-8">Job Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentJobs.length > 0 ? (
              // For each job in currentJobs, render a JobCard component
              currentJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              // If no jobs match the filters, show a message
              <p className="text-center text-gray-500 col-span-full">
                No jobs found matching your criteria.
              </p>
            )}
          </div>

          {/* Pagination Controls: Show pagination if there is more than one page of jobs. Includes previous/next arrows and page number buttons. */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 space-x-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-6 py-2 rounded-full disabled:opacity-50 transition-colors duration-200 bg-[#1E90FF]/20 border border-[#1E90FF]/40 text-[#1E90FF] font-semibold backdrop-blur-md hover:bg-[#1E90FF]/30"
              >
                <ArrowLeft className="inline-block" />
              </button>
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      i + 1 === currentPage
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600 transition-colors duration-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-6 py-2 rounded-full disabled:opacity-50 transition-colors duration-200 bg-[#1E90FF]/20 border border-[#1E90FF]/40 text-[#1E90FF] font-semibold backdrop-blur-md hover:bg-[#1E90FF]/30"
              >
                <ArrowRight className="inline-block" />
              </button>
            </div>
          )}
        </main>
      </MaxWidthContainer>
    </div>
  );
}
