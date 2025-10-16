import React, { useState } from 'react';
import {
  Menu,
  X,
  User,
  Settings,
  LayoutDashboard,
  LogOut,
  Briefcase,
  Calendar,
} from 'lucide-react';

// --- UI PRIMITIVES (Components used by Sidebar) ---

// Custom Button primitive, primarily used for the Logout button
const CustomButton = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 
                    bg-[#1E90FF]/20 border border-[#1E90FF]/40 text-[#1E90FF] hover:bg-[#1E90FF]/30 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Icon Button primitive, used for the expand/collapse toggle
const IconButton = ({ icon: Icon, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-full text-white/70 hover:bg-white/10 transition-colors ${className}`}
  >
    <Icon className="w-5 h-5" />
  </button>
);

// --- MODULAR COMPONENT (The Sidebar with conditional icon sizing) ---

/**
 * 1. Sidebar Component
 * Manages jobseeker-specific navigation and conditional icon sizing.
 * * Logic Explanation:
 * - The 'iconSizeClasses' variable checks the 'isExpanded' prop.
 * - When collapsed (!isExpanded), the size is set to 'w-7 h-7'.
 * - When expanded (isExpanded), the size is set back to the smaller 'w-5 h-5'.
 * - The surrounding <a> tag's padding is also adjusted to keep the icon centered
 * when the sidebar is narrow.
 */
export const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const NavLink = ({ icon: Icon, text }) => {
    // Conditional icon sizing logic (w-7 h-7 when collapsed, w-5 h-5 when expanded)
    const iconSizeClasses = isExpanded ? 'w-5 h-5 mr-3' : 'w-5 h-5';

    return (
      <a
        href="#"
        // Adjust padding when collapsed for centered look (p-2 when collapsed, p-3 when expanded)
        className={`flex items-center rounded-xl transition-all duration-200 text-white/80 hover:bg-[#1E90FF]/20 hover:text-[#1E90FF] 
                   ${isExpanded ? 'p-3' : 'p-2 justify-center'}`}
      >
        <Icon className={`${iconSizeClasses} transition-all duration-300`} />
        {isExpanded && <span className="text-sm font-medium">{text}</span>}
      </a>
    );
  };

  return (
    <div
      className={`h-full fixed lg:relative z-40 transition-all duration-300 ease-in-out
                  bg-gradient-to-br from-[#0a0f1a] to-black border-r border-[#1E90FF]/20 
                  ${isExpanded ? 'w-60 p-4' : 'w-20 p-4'} ${!isExpanded ? 'hidden md:block' : 'block'}`}
    >
      <div className="flex items-center justify-end mb-8 h-10">
        <IconButton
          icon={isExpanded ? X : Menu}
          onClick={toggleSidebar}
          className="text-[#1E90FF] bg-transparent hover:bg-[#1E90FF]/20"
        />
      </div>

      <nav className="space-y-2 mb-70">
        <NavLink icon={LayoutDashboard} text="Dashboard" />
        <NavLink icon={Briefcase} text="Applications" />
        <NavLink icon={Calendar} text="Interviews" />
        <NavLink icon={User} text="Profile" />
        <NavLink icon={Settings} text="Settings" />
      </nav>

      {/* User / Logout at bottom */}
      <div
        className={`absolute bottom-6 w-[calc(100%-32px)] transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}
      >
        <hr className="border-t border-white/10 mb-4" />
        <CustomButton className="w-full flex justify-center gap-2 py-5 items-center bg-red-900/30 border-red-500/50 text-red-400 hover:bg-red-900/50">
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </CustomButton>
      </div>
    </div>
  );
};

// --- MINIMAL RUNNABLE APP ---

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0a0f1a] to-black text-white font-inter">
      {/* Sidebar Component */}
      <Sidebar isExpanded={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Placeholder Main Content to demonstrate layout shift */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 p-8 ${isSidebarOpen ? 'ml-60 md:ml-0' : 'ml-0'}`}
      >
        <h1 className="text-3xl font-bold text-white mb-4">Minimal App Shell</h1>
        <p className="text-white/70">
          Click the menu icon to toggle the sidebar and see the conditional icon sizing change.
        </p>
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
