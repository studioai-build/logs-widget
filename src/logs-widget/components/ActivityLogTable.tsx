import { format } from 'date-fns';
import { User, Clock, FileText, Settings, Eye, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { ActivityLog } from '../types/activityTypes';

interface ActivityLogTableProps {
  logs: ActivityLog[];
}

export default function ActivityLogTable({ logs }: ActivityLogTableProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'report':
        return <FileText className="w-4 h-4 text-blue-500" />;
      case 'data_change':
        return <Settings className="w-4 h-4 text-orange-500" />;
      case 'view':
        return <Eye className="w-4 h-4 text-green-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-error" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-warning" />;
      default:
        return <AlertCircle className="w-4 h-4 text-textSecondary" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'success':
        return `${baseClasses} bg-success/10 text-success`;
      case 'failed':
        return `${baseClasses} bg-error/10 text-error`;
      case 'pending':
        return `${baseClasses} bg-warning/10 text-warning`;
      default:
        return `${baseClasses} bg-textSecondary/10 text-textSecondary`;
    }
  };

  if (logs.length === 0) {
    return (
      <div className="p-12 text-center">
        <FileText className="w-12 h-12 text-textSecondary mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-text mb-2">No Activity Found</h3>
        <p className="text-textSecondary">
          No activity logs match your current search and filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-accent/30 border-b border-border">
          <tr>
            <th className="text-left px-6 py-4 font-semibold text-text">Activity</th>
            <th className="text-left px-6 py-4 font-semibold text-text">User</th>
            <th className="text-left px-6 py-4 font-semibold text-text">Resource</th>
            <th className="text-left px-6 py-4 font-semibold text-text">Changes</th>
            <th className="text-left px-6 py-4 font-semibold text-text">Status</th>
            <th className="text-left px-6 py-4 font-semibold text-text">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr 
              key={log.id} 
              className={`border-b border-border hover:bg-accent/20 transition-colors ${
                index % 2 === 0 ? 'bg-background/50' : 'bg-surface'
              }`}
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  {getActivityIcon(log.type)}
                  <div>
                    <div className="font-medium text-text">{log.action}</div>
                    <div className="text-sm text-textSecondary">{log.details}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-text">{log.user.name}</div>
                    <div className="text-sm text-textSecondary">{log.user.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="font-medium text-text">{log.resource}</div>
              </td>
              <td className="px-6 py-4">
                {log.oldValue || log.newValue ? (
                  <div className="space-y-1">
                    {log.oldValue && (
                      <div className="text-sm">
                        <span className="text-textSecondary">From:</span>
                        <span className="ml-1 text-error font-mono bg-error/10 px-1 rounded">
                          {log.oldValue}
                        </span>
                      </div>
                    )}
                    {log.newValue && (
                      <div className="text-sm">
                        <span className="text-textSecondary">To:</span>
                        <span className="ml-1 text-success font-mono bg-success/10 px-1 rounded">
                          {log.newValue}
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-textSecondary text-sm">No changes</span>
                )}
              </td>
              <td className="px-6 py-4">
                <span className={getStatusBadge(log.status)}>
                  {getStatusIcon(log.status)}
                  {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm">
                  <div className="font-medium text-text">
                    {format(new Date(log.timestamp), 'MMM dd, yyyy')}
                  </div>
                  <div className="text-textSecondary">
                    {format(new Date(log.timestamp), 'HH:mm:ss')}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}