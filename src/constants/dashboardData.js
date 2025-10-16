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

export const DASHBOARD_DATA = {
  stats: [
    {
      title: 'Applications Sent',
      value: '45',
      trend: '+12.5%',
      icon: Briefcase,
      color: 'text-blue-400',
    },
    {
      title: 'Interviews Scheduled',
      value: '5',
      trend: '+5.1%',
      icon: Calendar,
      color: 'text-green-400',
    },
    {
      title: 'Offers Received',
      value: '1',
      trend: '+0.01%',
      icon: Award,
      color: 'text-yellow-400',
    },
    { title: 'Follow-ups Due', value: '8', trend: '-1.2%', icon: Mail, color: 'text-red-400' },
  ],
  activity: [
    {
      id: 1,
      type: 'Application Submitted',
      message: "Sent application to 'Innovatech' (Senior Dev).",
      time: '2 minutes ago',
    },
    {
      id: 2,
      type: 'Interview Scheduled',
      message: "Initial screen with 'DataCorp' booked for next week.",
      time: '1 hour ago',
    },
    {
      id: 3,
      type: 'Follow-up Sent',
      message: "Sent thank you email after interview with 'Fusion'.",
      time: '4 hours ago',
    },
    {
      id: 4,
      type: 'Profile Update',
      message: 'Resume updated with new project links.',
      time: '1 day ago',
    },
  ],
  chartData: [
    { name: 'Jan', value: 10 },
    { name: 'Feb', value: 15 },
    { name: 'Mar', value: 25 },
    { name: 'Apr', value: 35 },
    { name: 'May', value: 30 },
    { name: 'Jun', value: 45 },
  ],
};
