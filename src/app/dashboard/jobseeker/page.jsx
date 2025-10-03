'use client';

import React from 'react';
import MaxWidthContainer from '@/components/shared/max-width-container';
import Link from 'next/link';
import { ChevronRight, ClipboardList, Bookmark, CheckCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { mockAppliedJobs, mockSavedJobs, dashboardSummary } from '@/constants/dashboardData';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] to-black text-white p-4 sm:p-6 md:p-12 lg:p-16 font-sans">
      <MaxWidthContainer>
        {/* Dashboard Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-clip-text bg-gradient-to-r text-white leading-tight">
            Your Jobseeker Dashboard
          </h1>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
            A quick overview of your job search activity and progress.
          </p>
        </header>

        {/* --- Summary Cards Section --- */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Card for Total Applications */}
          <Card className="bg-white/5 border border-blue-500/20 backdrop-blur-md text-white rounded-2xl p-4 sm:p-6 shadow-xl transition-transform transform hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between p-0">
              <CardTitle className="text-lg sm:text-xl font-semibold text-gray-200">
                Applications
              </CardTitle>
              <ClipboardList className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
            </CardHeader>
            <CardContent className="mt-2 sm:mt-4 p-0">
              <p className="text-3xl sm:text-5xl font-bold text-blue-400">
                {dashboardSummary.appliedJobs}
              </p>
            </CardContent>
            <CardFooter className="mt-2 sm:mt-4 p-0">
              <CardDescription className="text-xs sm:text-sm text-gray-400">
                Total jobs you've applied for.
              </CardDescription>
            </CardFooter>
          </Card>

          {/* Card for Saved Jobs */}
          <Card className="bg-white/5 border border-purple-500/20 backdrop-blur-md text-white rounded-2xl p-4 sm:p-6 shadow-xl transition-transform transform hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between p-0">
              <CardTitle className="text-lg sm:text-xl font-semibold text-gray-200">
                Saved Jobs
              </CardTitle>
              <Bookmark className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
            </CardHeader>
            <CardContent className="mt-2 sm:mt-4 p-0">
              <p className="text-3xl sm:text-5xl font-bold text-purple-400">
                {dashboardSummary.savedJobs}
              </p>
            </CardContent>
            <CardFooter className="mt-2 sm:mt-4 p-0">
              <CardDescription className="text-xs sm:text-sm text-gray-400">
                Jobs you've bookmarked to apply for later.
              </CardDescription>
            </CardFooter>
          </Card>

          {/* Card for Interviews Scheduled */}
          <Card className="bg-white/5 border border-green-500/20 backdrop-blur-md text-white rounded-2xl p-4 sm:p-6 shadow-xl transition-transform transform hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between p-0">
              <CardTitle className="text-lg sm:text-xl font-semibold text-gray-200">
                Interviews
              </CardTitle>
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
            </CardHeader>
            <CardContent className="mt-2 sm:mt-4 p-0">
              <p className="text-3xl sm:text-5xl font-bold text-green-400">
                {dashboardSummary.interviewsScheduled}
              </p>
            </CardContent>
            <CardFooter className="mt-2 sm:mt-4 p-0">
              <CardDescription className="text-xs sm:text-sm text-gray-400">
                Interviews scheduled with employers.
              </CardDescription>
            </CardFooter>
          </Card>
        </section>

        {/* --- Recent Applications Section --- */}
        <section className="mb-8 sm:mb-12">
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">Recent Applications</h2>
            <Link
              href="/jobs"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
            >
              <span className="text-base sm:text-lg">View All</span>{' '}
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />
            </Link>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mockAppliedJobs.map((job) => (
              <Card
                key={job.id}
                className="bg-white/5 border border-gray-700/50 p-4 sm:p-6 rounded-xl transition-transform transform hover:-translate-y-1"
              >
                <CardHeader className="p-0 mb-1 sm:mb-2">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-100">
                    {job.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <p>{job.company}</p>
                  <p>
                    <span className="font-semibold text-gray-300">Status:</span>{' '}
                    <span className="text-green-400">{job.status}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-300">Applied on:</span> {job.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* --- Saved Jobs Section --- */}
        <section>
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">Saved Jobs</h2>
            <Link
              href="/jobs"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
            >
              <span className="text-base sm:text-lg">View All</span>{' '}
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />
            </Link>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mockSavedJobs.map((job) => (
              <Card
                key={job.id}
                className="bg-white/5 border border-gray-700/50 p-4 sm:p-6 rounded-xl transition-transform transform hover:-translate-y-1"
              >
                <CardHeader className="p-0 mb-1 sm:mb-2">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-100">
                    {job.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <p>{job.company}</p>
                  <p>
                    <span className="font-semibold text-gray-300">Saved on:</span> {job.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </MaxWidthContainer>
    </div>
  );
}
