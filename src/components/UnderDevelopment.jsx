import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faClock } from "@fortawesome/free-solid-svg-icons";

const UnderDevelopment = ({ pageName = "This Page" }) => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] h-full overflow-auto">
      <div className="text-center space-y-8 max-w-lg px-4">
        <div className="relative inline-block">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[#0CC8A8]/10 dark:bg-[#0CC8A8]/20 rounded-2xl flex items-center justify-center mx-auto border-2 border-[#0CC8A8]/30">
            <FontAwesomeIcon 
              icon={faWrench} 
              className="!w-12 !h-12  text-[#0CC8A8]" 
            />
          </div>
          <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <FontAwesomeIcon 
              icon={faClock} 
              className="w-5 h-5 md:w-6 md:h-6 text-white animate-pulse" 
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Under Development
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-[#0CC8A8]">{pageName}</span> is currently being built
          </p>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-500 max-w-md mx-auto">
            Our team is working hard to bring you this feature. Check back soon!
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#0CC8A8] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#0CC8A8] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#0CC8A8] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
