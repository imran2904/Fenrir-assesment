import React, { useState } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewScanModal, setShowNewScanModal] = useState(false);

  const filteredScans = scansData.filter(scan =>
    scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scan.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStartScan = () => {
    setShowNewScanModal(false);
    router.push("/scan-detail");
  };

  const handleExportReport = () => {
    alert("Report export functionality is under development. Your report will be available soon!");
  };

  return (
    <div className="space-y-2 py-4 lg:space-y-4">
     <div className="flex px-2 w-full justify-end gap-3">
            <button
              onClick={handleExportReport}
              className="px-3 md:px-4 py-2 border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-xs md:text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors"
            >
              Export Report
            </button>
          </div>
      <div className="bg-white dark:bg-[#1A1A1A]  p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">Org:</span>
              <span className="font-semibold text-gray-900 dark:text-white">{scanMetadata.org}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">Owner:</span>
              <span className="font-semibold text-gray-900 dark:text-white">{scanMetadata.owner}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">Total Scans:</span>
              <span className="font-semibold text-gray-900 dark:text-white">{scanMetadata.totalScans}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">Scheduled:</span>
              <span className="font-semibold text-gray-900 dark:text-white">{scanMetadata.scheduled}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">Rescans:</span>
              <span className="font-semibold text-gray-900 dark:text-white">100</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">Failed Scans:</span>
              <span className="font-semibold text-gray-900 dark:text-white">{scanMetadata.failedScans}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 ">
              <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
              <span className="text-sm">{scanMetadata.lastUpdate}</span>
            </div>
          </div>
        
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
      <div className="px-2">
        <div className="space-y-4 p-4 bg-white dark:bg-[#1A1A1A] rounded-lg">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search scans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 bg-white dark:bg-[#0F0F0F] border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-transparent"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex-1 sm:flex-none px-4 py-2.5 border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faFilter} className="w-4 h-4" />
                <span className="hidden sm:inline">Filter</span>
              </button>
              <button className="flex-1 sm:flex-none px-4 py-2.5 border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faTableColumns} className="w-4 h-4" />
                <span className="hidden sm:inline">Column</span>
              </button>
              <button
                onClick={() => setShowNewScanModal(true)}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#0CC8A8] text-white rounded-lg text-sm font-semibold hover:bg-[#0bb39a] transition-colors flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                New scan
              </button>
            </div>
          </div>

          <ScanTable scans={filteredScans} />
        </div>
      </div>


      {showNewScanModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                New Scan
              </h3>
              <button
                onClick={() => setShowNewScanModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Scan Name
                </label>
                <input
                  type="text"
                  placeholder="Enter scan name"
                  className="w-full px-4 py-2.5 bg-white dark:bg-[#0F0F0F] border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Target URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com"
                  className="w-full px-4 py-2.5 bg-white dark:bg-[#0F0F0F] border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Scan Type
                </label>
                <select className="w-full px-4 py-2.5 bg-white dark:bg-[#0F0F0F] border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-transparent">
                  <option>Grey Box</option>
                  <option>Black Box</option>
                  <option>White Box</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowNewScanModal(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-[#2A2A2A] rounded-xl text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleStartScan}
                className="flex-1 px-6 py-3 bg-[#0CC8A8] hover:bg-[#0bb39a] rounded-xl text-white font-semibold transition-colors"
              >
                Start Scan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;