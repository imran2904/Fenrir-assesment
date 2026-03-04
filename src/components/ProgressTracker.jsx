import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpider,
  faMap,
  faFlask,
  faCheckCircle,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const ProgressTracker = ({ steps, metadata, isStopped }) => {
  const [progress, setProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

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

  useEffect(() => {
    setIsRunning(!isStopped);
  }, [isStopped]);

  useEffect(() => {
    if (!isRunning) return;

    const intervalTime = 50;
    const totalSteps = 100;
    const increment = 100 / totalSteps;
    const stepsCount = steps.length;
    const progressPerStep = 100 / stepsCount;

    let currentProgress = 0;
    
    const timer = setInterval(() => {
      currentProgress += increment;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setActiveStepIndex(stepsCount - 1);
        setIsRunning(false);
        clearInterval(timer);
        return;
      }
      
      setProgress(Math.floor(currentProgress));
      
      const newActiveStep = Math.min(
        Math.floor(currentProgress / progressPerStep),
        stepsCount - 1
      );
      setActiveStepIndex(newActiveStep);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [steps.length, isRunning]);

  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-[#2A2A2A] overflow-hidden">
      <div className="flex p-4 flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-16">
        <div className="flex-shrink-0 mx-auto md:mx-0 md:border-e-2 border-gray-200 dark:border-[#2A2A2A] md:pe-6">
          <div className="relative w-24 h-24 md:w-28 md:h-28 bg-[#1A1D29] rounded-full flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-gray-700"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray="263.89"
                strokeDashoffset={263.89 - (progress / 100) * 263.89}
                className="text-[#0CC8A8] transition-all duration-300"
                strokeLinecap="round"
              />
            </svg>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0CC8A8]">
                {progress}%
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5">
                {progress === 100 ? "Completed" : isRunning ? "In Progress" : "Stopped"}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 w-full md:pt-2">
          <div className="relative md:border-b-2 border-gray-200 dark:border-[#2A2A2A] pb-4 mb-4 pt-2">
            <div className="flex absolute top-9 left-0 right-0 items-center justify-between px-7">
              <div className="flex-1 h-[2px] bg-gray-200 dark:bg-[#2A2A2A]"></div>
            </div>
            <div 
              className="block absolute top-9 left-7 h-[2px] bg-[#0CC8A8] transition-all duration-500"
              style={{ 
                width: `calc((100% - 56px) * ${activeStepIndex / (steps.length - 1)})` 
              }}
            ></div>

            <div className="flex items-start justify-between overflow-x-auto pb-2 md:pb-0 pt-2">
              {steps.map((step, index) => {
                const isActive = index <= activeStepIndex;
                const isCurrentStep = index === activeStepIndex;
                
                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center gap-2 md:gap-3 z-10 min-w-[60px] md:min-w-0"
                  >
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-[#0CC8A8] text-white"
                          : "bg-gray-100 dark:bg-[#2A2A2A] text-gray-400 dark:text-gray-500"
                      } ${isCurrentStep ? "ring-4 ring-[#0CC8A8]/30" : ""}`}
                    >
                      <FontAwesomeIcon
                        icon={getStepIcon(step.icon)}
                        className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${
                          isCurrentStep ? "scale-110" : ""
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs md:text-sm whitespace-nowrap transition-colors duration-300 ${
                        isActive
                          ? "text-gray-900 dark:text-white font-medium"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 text-sm">
            <div>
              <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                Scan Type
              </div>
              <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm">
                {metadata.scanType}
              </div>
            </div>
            <div>
              <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                Targets
              </div>
              <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm break-all">
                {metadata.targets}
              </div>
            </div>
            <div>
              <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                Started At
              </div>
              <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm">
                {metadata.startedAt}
              </div>
            </div>
            <div>
              <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                Credentials
              </div>
              <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm">
                {metadata.credentials}
              </div>
            </div>
            <div>
              <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                Files
              </div>
              <div className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm">
                {metadata.files}
              </div>
            </div>
            <div>
              <div className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">
                Checklists
              </div>
              <div className="font-semibold text-[#0CC8A8] text-xs md:text-sm">
                {metadata.checklists}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
export { ProgressTracker };
