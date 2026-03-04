import React, { useState } from "react";
import { activeScanData } from "@/data/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpider,
    faMap,
    faFlask,
    faCheckCircle,
    faFileAlt,
    faChevronDown,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

const ScanConsole = () => {
    const [activeTab, setActiveTab] = useState("activity");
    const [consoleExpanded, setConsoleExpanded] = useState(true);

    const getSeverityColor = (severity) => {
        switch (severity) {
            case "Critical":
                return "bg-red-500";
            case "High":
                return "bg-orange-500";
            case "Medium":
                return "bg-yellow-500";
            case "Low":
                return "bg-green-500";
            default:
                return "bg-gray-500";
        }
    };

    const getStepIcon = (iconName) => {
        switch (iconName) {
            case "spider":
                return faSpider;
            case "map":
                return faMap;
            case "flask":
                return faFlask;
            case "check-circle":
                return faCheckCircle;
            case "file-alt":
                return faFileAlt;
            default:
                return faCheckCircle;
        }
    };

    return (
        <div className="space-y-4 md:space-y-6 pb-0 p-2">
            <div className="flex items-center justify-end gap-2 md:gap-3">
                <button className="px-3 md:px-4 py-2 border border-gray-300 dark:border-[#2A2A2A] rounded-lg text-xs md:text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
                    Export Report
                </button>
                <button className="px-3 md:px-4 py-2 bg-red-500/20 dark:bg-red-500/10 text-red-500 rounded-lg text-xs md:text-sm font-medium hover:bg-red-600/20 transition-colors">
                    Stop Scan
                </button>
            </div>

            <div className="bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-[#2A2A2A] overflow-hidden">
                <div className="flex p-4  flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-16">
                    <div className="flex-shrink-0 mx-auto md:mx-0 md:border-e-2 border-gray-200 dark:border-[#2A2A2A] md:pe-6">
                        <div className="relative w-24 h-24 md:w-28 md:h-28 bg-[#1A1D29] rounded-full flex items-center justify-center">

                            <div className="flex flex-col items-center justify-center">
                                <div className="text-2xl md:text-3xl font-bold text-[#0CC8A8]">
                                    {activeScanData.progress}%
                                </div>
                                <div className="text-[10px] text-gray-400 mt-0.5">
                                    {activeScanData.status}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 min-w-0 w-full md:pt-2">
                        <div className="relative md:border-b-2 border-gray-200 dark:border-[#2A2A2A] pb-4 mb-4">
                            <div className="hidden md:block absolute top-7 left-0 right-0 h-[1px] bg-gray-200 dark:bg-[#2A2A2A]"></div>

                            <div className="flex items-start justify-between overflow-x-auto pb-2 md:pb-0">
                                {activeScanData.steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="relative flex flex-col items-center gap-2 md:gap-3 z-10 min-w-[60px] md:min-w-0"
                                    >
                                        <div
                                            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-colors ${step.active
                                                    ? "bg-[#0CC8A8] text-white"
                                                    : "bg-gray-100 dark:bg-[#2A2A2A] text-gray-400 dark:text-gray-500"
                                                }`}
                                        >
                                            <FontAwesomeIcon
                                                icon={getStepIcon(step.icon)}
                                                className="w-4 h-4 md:w-5 md:h-5"
                                            />
                                        </div>
                                        <span
                                            className={`text-xs md:text-sm whitespace-nowrap ${step.active
                                                    ? "text-gray-900 dark:text-white font-medium"
                                                    : "text-gray-500 dark:text-gray-400"
                                                }`}
                                        >
                                            {step.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 text-sm">
                            <div>
                                <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                                    Scan Type
                                </div>
                                <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm">
                                    {activeScanData.metadata.scanType}
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                                    Targets
                                </div>
                                <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm break-all">
                                    {activeScanData.metadata.targets}
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                                    Started At
                                </div>
                                <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm">
                                    {activeScanData.metadata.startedAt}
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                                    Credentials
                                </div>
                                <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm">
                                    {activeScanData.metadata.credentials}
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                                    Files
                                </div>
                                <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm">
                                    {activeScanData.metadata.files}
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                                    Checklists
                                </div>
                                <div className="font-semibold text-[#0CC8A8] text-xs md:text-sm">
                                    {activeScanData.metadata.checklists}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-gray-200 dark:border-[#2A2A2A] overflow-hidden">
                <div className="flex items-center justify-between p-3 md:p-4 border-b border-gray-200 dark:border-[#2A2A2A]">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#0CC8A8] rounded-full"></div>
                        <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">Live Scan Console</h3>
                        <span className="text-xs text-gray-400 ml-1 md:ml-2">Running...</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setConsoleExpanded(!consoleExpanded)}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-[#2A2A2A] rounded transition-colors"
                        >
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${!consoleExpanded ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-[#2A2A2A] rounded transition-colors">
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="w-3 h-3 text-gray-400"
                            />
                        </button>
                    </div>
                </div>

                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${consoleExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex flex-col lg:grid lg:grid-cols-3 lg:divide-x divide-gray-200 dark:divide-[#2A2A2A]">
                        <div className="lg:col-span-2">
                            <div className="border-b border-gray-200 dark:border-[#2A2A2A]">
                                <div className="flex gap-4 md:gap-6 px-3 md:px-4 overflow-x-auto">
                                    <button
                                        onClick={() => setActiveTab("activity")}
                                        className={`py-2 md:py-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === "activity"
                                                ? "border-[#0CC8A8] text-[#0CC8A8]"
                                                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                            }`}
                                    >
                                        Activity Log
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("verification")}
                                        className={`py-2 md:py-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === "verification"
                                                ? "border-[#0CC8A8] text-[#0CC8A8]"
                                                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                            }`}
                                    >
                                        Verification Loops
                                    </button>
                                </div>
                            </div>

                            <div className="p-3 md:p-4 h-[300px] md:h-[400px] lg:h-[500px] overflow-y-auto bg-[#FAFAFA] dark:bg-[#0F0F0F] font-mono text-[10px] md:text-xs">
                                {activeTab === "activity" &&
                                    activeScanData.activityLog.map((log, index) => (
                                        <div key={index} className="mb-2 md:mb-3 flex gap-2">
                                            {log.time && (
                                                <span className="text-gray-400 flex-shrink-0">
                                                    [{log.time}]
                                                </span>
                                            )}
                                            <div className="flex-1 break-words">
                                                <span className="text-gray-700 dark:text-gray-300">
                                                    {log.message}
                                                </span>
                                                {log.highlight && (
                                                    <span className="text-[#0CC8A8] font-medium">
                                                        {log.highlight}
                                                    </span>
                                                )}
                                                {log.suffix && (
                                                    <span className="text-gray-700 dark:text-gray-300">
                                                        {log.suffix}
                                                    </span>
                                                )}
                                                {log.highlight2 && (
                                                    <span className="text-yellow-500 font-medium">
                                                        {log.highlight2}
                                                    </span>
                                                )}
                                                {log.suffix2 && (
                                                    <span className="text-gray-700 dark:text-gray-300">
                                                        {log.suffix2}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                {activeTab === "verification" && (
                                    <div className="text-gray-500 dark:text-gray-400">
                                        No verification loops running...
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-1 border-t lg:border-t-0 border-gray-200 dark:border-[#2A2A2A]">
                            <div className="p-3 md:p-4 border-b border-gray-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
                                <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">Finding Log</h3>
                            </div>

                            <div className="p-3 md:p-4 h-[300px] md:h-[400px] lg:h-[500px] overflow-y-auto bg-white dark:bg-[#1A1A1A] space-y-2 md:space-y-3">
                                {activeScanData.findings.map((finding, index) => (
                                    <div
                                        key={index}
                                        className="p-2 md:p-3 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#2A2A2A]"
                                    >
                                        <div className="flex items-start justify-between mb-1 md:mb-2">
                                            <span
                                                className={`px-2 py-0.5 md:py-1 rounded text-[10px] md:text-xs font-semibold text-white ${getSeverityColor(
                                                    finding.severity
                                                )}`}
                                            >
                                                {finding.severity}
                                            </span>
                                            <span className="text-[10px] md:text-xs text-gray-400">{finding.time}</span>
                                        </div>
                                        <h4 className="font-medium text-xs md:text-sm mb-1 text-gray-900 dark:text-white">{finding.title}</h4>
                                        <p className="text-[10px] md:text-xs text-[#0CC8A8] mb-1 md:mb-2 break-all">
                                            {finding.endpoint}
                                        </p>
                                        <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {finding.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-gray-200 dark:border-[#2A2A2A] p-3 md:p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 text-xs md:text-sm">
                    <div className="flex flex-wrap items-center gap-3 md:gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 dark:text-gray-400">
                                Sub-agents:
                            </span>
                            <span className="font-medium">{activeScanData.stats.subAgents}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 dark:text-gray-400">
                                Parallel Executions:
                            </span>
                            <span className="font-medium">
                                {activeScanData.stats.parallelExecutions}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 dark:text-gray-400">
                                Operations:
                            </span>
                            <span className="font-medium">
                                {activeScanData.stats.operations}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-red-500 font-semibold">Critical:</span>
                            <span>{activeScanData.stats.critical}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-orange-500 font-semibold">High:</span>
                            <span>{activeScanData.stats.high}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-500 font-semibold">Medium:</span>
                            <span>{activeScanData.stats.medium}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 font-semibold">Low:</span>
                            <span>{activeScanData.stats.low}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScanConsole;
