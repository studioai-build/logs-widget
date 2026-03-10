import { ActivityLog } from '../types/activityTypes';

export const mockActivityLogs: ActivityLog[] = [
  {
    id: '1',
    timestamp: '2025-01-14T10:30:00Z',
    user: {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@company.com'
    },
    action: 'Generated Sales Report',
    type: 'report',
    resource: 'Sales Dashboard',
    details: 'Monthly sales report for December 2024',
    status: 'success',
    ipAddress: '192.168.1.100'
  },
  {
    id: '2',
    timestamp: '2025-01-14T09:45:00Z',
    user: {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com'
    },
    action: 'Updated Customer Record',
    type: 'data_change',
    resource: 'Customer Database',
    details: 'Modified customer contact information',
    oldValue: 'old-email@example.com',
    newValue: 'new-email@example.com',
    status: 'success',
    ipAddress: '192.168.1.101'
  },
  {
    id: '3',
    timestamp: '2025-01-14T09:15:00Z',
    user: {
      id: '3',
      name: 'Mike Davis',
      email: 'mike.davis@company.com'
    },
    action: 'Viewed Financial Report',
    type: 'view',
    resource: 'Financial Dashboard',
    details: 'Accessed Q4 financial summary',
    status: 'success',
    ipAddress: '192.168.1.102'
  },
  {
    id: '4',
    timestamp: '2025-01-14T08:30:00Z',
    user: {
      id: '4',
      name: 'Emily Brown',
      email: 'emily.brown@company.com'
    },
    action: 'Failed Report Generation',
    type: 'report',
    resource: 'Inventory System',
    details: 'Attempted to generate inventory report',
    status: 'failed',
    ipAddress: '192.168.1.103'
  },
  {
    id: '5',
    timestamp: '2025-01-14T08:00:00Z',
    user: {
      id: '5',
      name: 'David Wilson',
      email: 'david.wilson@company.com'
    },
    action: 'User Login',
    type: 'login',
    resource: 'Authentication System',
    details: 'Successful login to the system',
    status: 'success',
    ipAddress: '192.168.1.104'
  },
  {
    id: '6',
    timestamp: '2025-01-13T16:45:00Z',
    user: {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@company.com'
    },
    action: 'Updated Product Price',
    type: 'data_change',
    resource: 'Product Catalog',
    details: 'Changed pricing for Product SKU-12345',
    oldValue: '$99.99',
    newValue: '$89.99',
    status: 'success',
    ipAddress: '192.168.1.100'
  },
  {
    id: '7',
    timestamp: '2025-01-13T15:30:00Z',
    user: {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com'
    },
    action: 'Generated User Report',
    type: 'report',
    resource: 'User Management',
    details: 'Active users report for January 2025',
    status: 'success',
    ipAddress: '192.168.1.101'
  },
  {
    id: '8',
    timestamp: '2025-01-13T14:15:00Z',
    user: {
      id: '3',
      name: 'Mike Davis',
      email: 'mike.davis@company.com'
    },
    action: 'Modified System Settings',
    type: 'data_change',
    resource: 'System Configuration',
    details: 'Updated notification preferences',
    oldValue: 'Email + SMS',
    newValue: 'Email Only',
    status: 'success',
    ipAddress: '192.168.1.102'
  },
  {
    id: '9',
    timestamp: '2025-01-13T13:00:00Z',
    user: {
      id: '4',
      name: 'Emily Brown',
      email: 'emily.brown@company.com'
    },
    action: 'Accessed Analytics Dashboard',
    type: 'view',
    resource: 'Analytics Platform',
    details: 'Viewed website traffic analytics',
    status: 'success',
    ipAddress: '192.168.1.103'
  },
  {
    id: '10',
    timestamp: '2025-01-13T12:30:00Z',
    user: {
      id: '5',
      name: 'David Wilson',
      email: 'david.wilson@company.com'
    },
    action: 'Export Failed',
    type: 'report',
    resource: 'Data Export Service',
    details: 'Failed to export customer data',
    status: 'failed',
    ipAddress: '192.168.1.104'
  },
  {
    id: '11',
    timestamp: '2025-01-13T11:45:00Z',
    user: {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@company.com'
    },
    action: 'Updated User Role',
    type: 'data_change',
    resource: 'User Management',
    details: 'Changed user permissions for team member',
    oldValue: 'Viewer',
    newValue: 'Editor',
    status: 'success',
    ipAddress: '192.168.1.100'
  },
  {
    id: '12',
    timestamp: '2025-01-13T10:20:00Z',
    user: {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com'
    },
    action: 'Generated Compliance Report',
    type: 'report',
    resource: 'Compliance Dashboard',
    details: 'Monthly compliance audit report',
    status: 'pending',
    ipAddress: '192.168.1.101'
  }
];
