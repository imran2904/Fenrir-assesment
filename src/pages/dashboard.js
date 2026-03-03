import React, { useState } from "react";
import { scansData, severityStats, scanMetadata } from "@/data/mockData";
import SeverityCard from "@/components/Dashboard/SeverityCard";
import ScanTable from "@/components/Dashboard/ScanTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFilter,
  faTableColumns,
  faPlus,
  faClock
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs lg:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Org:</span>
            <span className="font-medium">{scanMetadata.org}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Owner:</span>
            <span className="font-medium">{scanMetadata.owner}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Total:</span>
            <span className="font-medium">{scanMetadata.totalScans}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Scheduled:</span>
            <span className="font-medium">{scanMetadata.scheduled}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Failed:</span>
            <span className="font-medium">{scanMetadata.failedScans}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 ml-auto">
            <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
            <span>{scanMetadata.lastUpdate}</span>
          </div>
        </div>
        <div className="flex gap-2 lg:gap-3">
          <button className="px-3 lg:px-4 py-2 border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-xs lg:text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
            Export Report
          </button>
          <button className="px-3 lg:px-4 py-2 bg-red-500 text-white rounded-lg text-xs lg:text-sm font-medium hover:bg-red-600 transition-colors">
            Stop Scan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        <SeverityCard
          severity="critical"
          count={severityStats.critical.count}
          change={severityStats.critical.change}
          trend={severityStats.critical.trend}
        />
        <SeverityCard
          severity="high"
          count={severityStats.high.count}
          change={severityStats.high.change}
          trend={severityStats.high.trend}
        />
        <SeverityCard
          severity="medium"
          count={severityStats.medium.count}
          change={severityStats.medium.change}
          trend={severityStats.medium.trend}
        />
        <SeverityCard
          severity="low"
          count={severityStats.low.count}
          change={severityStats.low.change}
          trend={severityStats.low.trend}
        />
      </div>

      <div className="space-y-3 lg:space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 lg:gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search scans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 lg:py-2.5 pl-10 bg-white dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-transparent"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex-1 sm:flex-none px-3 lg:px-4 py-2 lg:py-2.5 border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-xs lg:text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faFilter} className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">Filter</span>
            </button>
            <button className="flex-1 sm:flex-none px-3 lg:px-4 py-2 lg:py-2.5 border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-xs lg:text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faTableColumns} className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">Column</span>
            </button>
            <button className="flex-1 sm:flex-none px-4 lg:px-5 py-2 lg:py-2.5 bg-[#0CC8A8] text-white rounded-lg text-xs lg:text-sm font-semibold hover:bg-[#0bb39a] transition-colors flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faPlus} className="w-3 h-3 lg:w-4 lg:h-4" />
              New scan
            </button>
          </div>
        </div>

        <ScanTable scans={scansData} />
      </div>
    </div>
  );
};

export default Dashboard;