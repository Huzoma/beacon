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

/**
 * 3. StatCards Component
 * Displays key application metrics
 */

const Card = ({ children, className = '' }) => (
  <div
    className={`p-6 rounded-2xl bg-white/5 border border-[#1E90FF]/20 shadow-xl backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

export const StatCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {DASHBOARD_DATA.stats.map((stat, index) => (
      <Card key={index} className="flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-white/70">{stat.title}</span>
          <stat.icon className={`w-6 h-6 ${stat.color} p-1 rounded-full bg-white/5`} />
        </div>
        <div className="text-3xl font-extrabold text-white mb-2">{stat.value}</div>
        <div className="flex items-center">
          <TrendingUp className={`w-4 h-4 mr-1 ${stat.color}`} />
          <span className={`text-xs font-medium ${stat.color}`}>{stat.trend}</span>
          <span className="text-xs text-white/50 ml-2">from last month</span>
        </div>
      </Card>
    ))}
  </div>
);
