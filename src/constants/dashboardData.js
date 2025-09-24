// This file contains mock data for the job seeker dashboard.
// In a real application, this data would be fetched from a database.

export const mockAppliedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Innovate Solutions",
    status: "Reviewing",
    date: "2024-10-25",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Hub",
    status: "Interview Scheduled",
    date: "2024-10-22",
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "Tech Corp",
    status: "Application Submitted",
    date: "2024-10-20",
  },
];

export const mockSavedJobs = [
  {
    id: 4,
    title: "Mobile App Developer",
    company: "NextGen Apps",
    date: "2024-10-24",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Data Insights Inc.",
    date: "2024-10-21",
  },
  {
    id: 6,
    title: "Product Manager",
    company: "Growth Labs",
    date: "2024-10-18",
  },
];

export const dashboardSummary = {
  appliedJobs: mockAppliedJobs.length,
  savedJobs: mockSavedJobs.length,
  interviewsScheduled: mockAppliedJobs.filter(job => job.status === "Interview Scheduled").length,
};
