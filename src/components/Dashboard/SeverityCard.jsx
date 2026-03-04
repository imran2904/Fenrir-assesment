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
    critical: { 
      color: "bg-red-500", 
      icon: faCircleXmark, 
      textColor: "text-gray-700 dark:text-gray-300",
      label: "Critical Severity"
    },
    high: { 
      color: "bg-orange-500", 
      icon: faTriangleExclamation, 
      textColor: "text-gray-700 dark:text-gray-300",
      label: "High Severity"
    },
    medium: { 
      color: "bg-yellow-500", 
      icon: faCircleExclamation, 
      textColor: "text-gray-700 dark:text-gray-300",
      label: "Medium Severity"
    },
    low: { 
      color: "bg-blue-500", 
      icon: faMagnifyingGlass, 
      textColor: "text-gray-700 dark:text-gray-300",
      label: "Low Severity"
    }
  };

  const config = severityConfig[severity];
  const isIncrease = trend === "up";

  return (
    <div className="">
      <div className="flex items-center gap-2.5 mb-4">
         <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {config.label}
        </span>
        <div className={`xl:w-8 w-6 xl:h-8 h-6 ${config.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
          <FontAwesomeIcon icon={config.icon} className="xl:w-4 w-2 xl:h-4 h-2" />
        </div>
       
      </div>
      
      <div className="flex items-center gap-2">
        <div className="text-xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 dark:text-white">
          {count}
        </div>
        <div className={`text-xs font-medium ${isIncrease ? 'text-red-500' : 'text-green-500'}`}>
          {isIncrease ? '↑' : '↓'} {change}
        </div>
      </div>
    </div>
  );
};

export default SeverityCard;
