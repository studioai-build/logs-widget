import { TrendingUp, Users, FileText, AlertCircle } from 'lucide-react';
import _ from 'lodash';
import { ActivityLog } from '../types/activityTypes';

interface ActivityStatsProps {
  logs: ActivityLog[];
}

export default function ActivityStats({ logs }: ActivityStatsProps) {
  const stats = {
    totalActivities: logs.length,
    uniqueUsers: _.uniqBy(logs, 'user.id').length,
    successfulActions: logs.filter(log => log.status === 'success').length,
    failedActions: logs.filter(log => log.status === 'failed').length
  };

  const successRate = stats.totalActivities > 0 
    ? Math.round((stats.successfulActions / stats.totalActivities) * 100) 
    : 0;

  const statCards = [
    {
      title: 'Total Activities',
      value: stats.totalActivities.toLocaleString(),
      icon: TrendingUp,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Active Users',
      value: stats.uniqueUsers.toString(),
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Success Rate',
      value: `${successRate}%`,
      icon: FileText,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      title: 'Failed Actions',
      value: stats.failedActions.toString(),
      icon: AlertCircle,
      color: 'text-error',
      bgColor: 'bg-error/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {statCards.map((stat, index) => (
        <div key={index} className="bg-surface rounded-xl border border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-textSecondary text-sm font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-text mt-1">{stat.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
