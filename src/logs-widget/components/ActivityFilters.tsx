import { Calendar, User, FileText, CheckCircle } from 'lucide-react';
import { FilterOptions } from '../types/activityTypes';

interface ActivityFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export default function ActivityFilters({ filters, onFiltersChange }: ActivityFiltersProps) {
  const updateFilter = (key: keyof FilterOptions, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-text mb-2">
          <Calendar className="w-4 h-4" />
          Date Range
        </label>
        <select
          value={filters.dateRange}
          onChange={(e) => updateFilter('dateRange', e.target.value)}
          data-name="date-range-filter"
          data-description="Filter activity logs by date range"
          className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
        >
          <option value="all">All Time</option>
          <option value="today">Today</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-text mb-2">
          <FileText className="w-4 h-4" />
          Activity Type
        </label>
        <select
          value={filters.activityType}
          onChange={(e) => updateFilter('activityType', e.target.value)}
          data-name="activity-type-filter"
          data-description="Filter by type of activity performed"
          className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
        >
          <option value="all">All Types</option>
          <option value="report">Reports</option>
          <option value="data_change">Data Changes</option>
          <option value="view">Views</option>
          <option value="login">Login</option>
          <option value="logout">Logout</option>
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-text mb-2">
          <User className="w-4 h-4" />
          User
        </label>
        <select
          value={filters.user}
          onChange={(e) => updateFilter('user', e.target.value)}
          data-name="user-filter"
          data-description="Filter activities by specific user"
          className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
        >
          <option value="all">All Users</option>
          <option value="1">John Smith</option>
          <option value="2">Sarah Johnson</option>
          <option value="3">Mike Davis</option>
          <option value="4">Emily Brown</option>
          <option value="5">David Wilson</option>
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-text mb-2">
          <CheckCircle className="w-4 h-4" />
          Status
        </label>
        <select
          value={filters.status}
          onChange={(e) => updateFilter('status', e.target.value)}
          data-name="status-filter"
          data-description="Filter activities by completion status"
          className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
        >
          <option value="all">All Status</option>
          <option value="success">Success</option>
          <option value="failed">Failed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  );
}
