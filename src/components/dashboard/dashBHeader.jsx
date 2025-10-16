import {
  Menu,
  X,
  Search,
  Bell,
  User,
  Settings,
  BarChart3,
  TrendingUp,
  DollarSign,
  Clock,
  LayoutDashboard,
  LogOut,
  Briefcase,
  Calendar,
  Award,
  Mail,
} from 'lucide-react';
/**
 * 2. DashboardHeader Component
 * Contains search bar, user profile, and notifications
 */

const IconButton = ({ icon: Icon, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-full text-white/70 hover:bg-white/10 transition-colors ${className}`}
  >
    <Icon className="w-5 h-5" />
  </button>
);

const DashboardHeader = ({ toggleSidebar }) => (
  <header className="flex items-center justify-between p-4 border-b border-[#1E90FF]/20 bg-[#0a0f1a]/80 backdrop-blur-sm">
    <div className="flex items-center space-x-4">
      <IconButton icon={Menu} onClick={toggleSidebar} className="md:hidden" />
      <h2 className="text-2xl font-bold text-white hidden md:block">Job Seeker Dashboard</h2>
    </div>

    <div className="flex items-center space-x-4">
      <div className="relative hidden sm:block">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
        <input
          type="text"
          placeholder="Search applications..."
          className="w-64 py-2 pl-10 pr-4 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:border-[#1E90FF]"
        />
      </div>
      <IconButton icon={Bell} onClick={() => alert('Notifications clicked')} />
      <IconButton icon={User} onClick={() => alert('User profile clicked')} />
    </div>
  </header>
);
export default DashboardHeader;
