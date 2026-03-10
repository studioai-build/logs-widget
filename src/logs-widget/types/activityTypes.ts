export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  user: User;
  action: string;
  type: 'report' | 'data_change' | 'view' | 'login' | 'logout';
  resource: string;
  details: string;
  oldValue?: string;
  newValue?: string;
  status: 'success' | 'failed' | 'pending';
  ipAddress: string;
}

export interface FilterOptions {
  dateRange: 'all' | 'today' | 'week' | 'month';
  activityType: 'all' | 'report' | 'data_change' | 'view' | 'login' | 'logout';
  user: 'all' | string;
  status: 'all' | 'success' | 'failed' | 'pending';
}
