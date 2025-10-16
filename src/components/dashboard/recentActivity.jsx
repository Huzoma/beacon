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
import { DASHBOARD_DATA } from '@/constants/dashboardData';

const Card = ({ children, className = '' }) => (
  <div
    className={`p-6 rounded-2xl bg-white/5 border border-[#1E90FF]/20 shadow-xl backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

const CustomButton = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 
                    bg-[#1E90FF]/20 border border-[#1E90FF]/40 text-[#1E90FF] hover:bg-[#1E90FF]/30 ${className}`}
    {...props}
  >
    {children}
  </button>
);

/**
 * 5. RecentActivity Component
 * Displays a list of recent job search events
 */
export const RecentActivity = () => (
  <Card className="col-span-1">
    <h3 className="text-xl font-semibold text-white mb-6">Recent Application Activity</h3>
    <ul className="space-y-4">
      {DASHBOARD_DATA.activity.map((item) => (
        <li
          key={item.id}
          className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
        >
          <Clock className="w-4 h-4 mt-1 text-[#1E90FF] flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">{item.type}</span>
            <span className="text-xs text-white/70">{item.message}</span>
            <span className="text-xs text-white/50 mt-0.5">{item.time}</span>
          </div>
        </li>
      ))}
    </ul>
    <div className="mt-6 text-center">
      <CustomButton className="bg-[#1E90FF]/10 text-white/80 border-white/10 hover:bg-white/10">
        View Full Log
      </CustomButton>
    </div>
  </Card>
);
