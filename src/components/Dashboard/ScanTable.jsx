import React from "react";
import { useRouter } from "next/router";

const ScanTable = ({ scans }) => {
  const router = useRouter();

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400";
      case "Scheduled":
        return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400";
      case "Failed":
        return "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400";
    }
  };

  const VulnerabilityBadge = ({ count, severity }) => {
    if (count === 0) return null;
    
    const colors = {
      critical: "bg-red-500",
      high: "bg-orange-500",
      medium: "bg-yellow-500",
      low: "bg-green-500"
    };

    return (
      <span className={`${colors[severity]} text-white text-xs font-semibold px-2 py-1 rounded`}>
        {count}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-gray-200 dark:border-[#2A2A2A] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-[#0F0F0F] border-b border-gray-200 dark:border-[#2A2A2A]">
            <tr className="text-nowrap">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Scan Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Vulnerability
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Last Scan
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-[#2A2A2A]">
            {scans.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => router.push("/scan-detail")}
                className="hover:bg-gray-50 dark:hover:bg-[#2A2A2A] cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {scan.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  {scan.type}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(scan.status)}`}>
                    {scan.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 min-w-[80px] max-w-[120px]">
                      <div
                        className="bg-[#0CC8A8] h-2 rounded-full transition-all"
                        style={{ width: `${scan.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {scan.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1.5">
                    <VulnerabilityBadge count={scan.vulnerabilities.critical} severity="critical" />
                    <VulnerabilityBadge count={scan.vulnerabilities.high} severity="high" />
                    <VulnerabilityBadge count={scan.vulnerabilities.medium} severity="medium" />
                    <VulnerabilityBadge count={scan.vulnerabilities.low} severity="low" />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  {scan.lastScan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScanTable;
