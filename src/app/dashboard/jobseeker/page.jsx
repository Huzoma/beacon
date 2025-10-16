'use client';
import React, { useState, useMemo } from 'react';
import { StatCards } from '@/components/dashboard/statcard';
import DashboardHeader from '@/components/dashboard/dashBHeader';
import { Sidebar } from '@/components/dashboard/sidebar';
import { MockLineChart } from '@/components/dashboard/mockChart';
import { RecentActivity } from '@/components/dashboard/recentActivity';

// --- MAIN DASHBOARD APP (Simulating the main app/Dashboard.jsx file) ---

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    // Main Layout Container: Dark theme applied globally
    <div className="flex min-h-screen bg-gradient-to-br from-[#0a0f1a] to-black text-white font-inter">
      {/* The Sidebar is "imported" here, simulating the file structure: */}
      <Sidebar isExpanded={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-60 md:ml-0' : 'ml-0'}`}
      >
        {/* The Header is "imported" here: */}
        <DashboardHeader toggleSidebar={toggleSidebar} />

        {/* Dashboard Body */}
        <main className="flex-1 p-6 lg:p-10 space-y-10 overflow-auto">
          {/* StatCards are "imported" here: */}
          <StatCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* MockLineChart is "imported" here: */}
            <MockLineChart />

            {/* RecentActivity is "imported" here: */}
            <RecentActivity />
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        ></div>
      )}
    </div>
  );
}

export default App;
