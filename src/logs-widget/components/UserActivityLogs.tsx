import { format } from 'date-fns';
import _ from 'lodash';
import { Calendar, Filter, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { mockActivityLogs } from '../constants/mockData';
import { FilterOptions } from '../types/activityTypes';
import ActivityFilters from './ActivityFilters';
import ActivityLogTable from './ActivityLogTable';
import ActivityStats from './ActivityStats';
import Pagination from './Pagination';

const ITEMS_PER_PAGE = 10;

export default function UserActivityLogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterOptions>({
    dateRange: 'all',
    activityType: 'all',
    user: 'all',
    status: 'all'
  });

  const filteredLogs = useMemo(() => {
    let filtered = mockActivityLogs;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(log =>
        log.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.resource.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.details.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Date range filter
    if (filters.dateRange !== 'all') {
      const now = new Date();
      const filterDate = new Date();

      switch (filters.dateRange) {
        case 'today':
          filterDate.setHours(0, 0, 0, 0);
          break;
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          break;
      }

      filtered = filtered.filter(log => new Date(log.timestamp) >= filterDate);
    }

    // Activity type filter
    if (filters.activityType !== 'all') {
      filtered = filtered.filter(log => log.type === filters.activityType);
    }

    // User filter
    if (filters.user !== 'all') {
      filtered = filtered.filter(log => log.user.id === filters.user);
    }

    // Status filter
    if (filters.status !== 'all') {
      filtered = filtered.filter(log => log.status === filters.status);
    }

    return _.orderBy(filtered, ['timestamp'], ['desc']);
  }, [searchTerm, filters]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredLogs.length / ITEMS_PER_PAGE);
  const paginatedLogs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredLogs.slice(startIndex, endIndex);
  }, [filteredLogs, currentPage]);

  // Reset to first page when filters change
  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Stats */}
        <ActivityStats logs={filteredLogs} />

        {/* Search and Filters */}
        <div className="bg-surface rounded-xl border border-border p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by user, action, resource, or details..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  data-name="activity-search-input"
                  data-description="Search through activity logs by user name, action, resource, or details"
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                />
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              data-name="toggle-filters-button"
              data-description="Show or hide advanced filtering options"
              className={`flex items-center gap-2 px-4 py-3 border rounded-lg transition-colors ${showFilters
                  ? 'bg-primary text-white border-primary'
                  : 'border-border hover:bg-accent'
                }`}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border">
              <ActivityFilters filters={filters} onFiltersChange={handleFiltersChange} />
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-textSecondary">
            Showing {paginatedLogs.length} of {filteredLogs.length} activities
            {filteredLogs.length !== mockActivityLogs.length && ` (filtered from ${mockActivityLogs.length} total)`}
          </p>
          <div className="flex items-center gap-2 text-sm text-textSecondary">
            <Calendar className="w-4 h-4" />
            Last updated: {format(new Date(), 'MMM dd, yyyy HH:mm')}
          </div>
        </div>

        {/* Activity Table */}
        <div className="bg-surface rounded-xl border border-border overflow-hidden">
          <ActivityLogTable logs={paginatedLogs} />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredLogs.length}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}