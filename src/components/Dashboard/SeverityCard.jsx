import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faTriangleExclamation,
  faCircleExclamation,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

const SeverityCard = ({ severity, count, change, trend }) => {
  const severityConfig = {
    critical: { color: "bg-red-500", icon: faCircleXmark, textColor: "text-red-600 dark:text-red-400" },
    high: { color: "bg-orange-500", icon: faTriangleExclamation, textColor: "text-orange-600 dark:text-orange-400" },
    medium: { color: "bg-yellow-500", icon: faCircleExclamation, textColor: "text-yellow-600 dark:text-yellow-400" },
    low: { color: "bg-blue-500", icon: faMagnifyingGlass, textColor: "text-blue-600 dark:text-blue-400" }
  };

  const config = severityConfig[severity];

  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-5 border border-gray-200 dark:border-[#2A2A2A]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 ${config.color} rounded-full flex items-center justify-center text-white`}>
            <FontAwesomeIcon icon={config.icon} className="w-3 h-3" />
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
            {severity} Severity
          </span>
        </div>
      </div>
      
      <div className="flex items-end justify-between">
        <div className={`text-4xl font-bold ${config.textColor}`}>
          {count}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {change}
        </div>
      </div>
    </div>
  );
};

export default SeverityCard;
