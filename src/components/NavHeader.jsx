import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faChevronRight, faBars } from "@fortawesome/free-solid-svg-icons";

const NavHeader = ({ theme, toggleTheme, onMenuClick }) => {
  const router = useRouter();

  const generateBreadcrumbs = () => {
    const pathSegments = router.pathname.split("/").filter(Boolean);
    
    const breadcrumbs = [
      { label: "Home", icon: faHouse, path: "/" }
    ];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      const label = segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      breadcrumbs.push({
        label,
        path: currentPath,
        isLast: index === pathSegments.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <header className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
      <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 dark:text-gray-400 hover:text-[#0CC8A8] transition-colors flex-shrink-0"
        >
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm overflow-x-auto scrollbar-hide">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              {index > 0 && (
                <FontAwesomeIcon 
                  icon={faChevronRight} 
                  className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-gray-400 dark:text-gray-500 flex-shrink-0" 
                />
              )}
              {index === 0 ? (
                <button
                  onClick={() => router.push(crumb.path)}
                  className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-[#0CC8A8] transition-colors flex-shrink-0"
                >
                  <FontAwesomeIcon icon={crumb.icon} className="w-3 h-3" />
                </button>
              ) : (
                <button
                  onClick={() => !crumb.isLast && router.push(crumb.path)}
                  className={`transition-colors whitespace-nowrap ${
                    crumb.isLast
                      ? "text-[#0CC8A8] font-medium cursor-default"
                      : "text-gray-500 dark:text-gray-400 hover:text-[#0CC8A8]"
                  }`}
                >
                  {crumb.label}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
        <div className="flex items-center gap-2 lg:gap-3">
          <span className="hidden sm:inline text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300">
            {theme === "dark" ? "Dark" : "Light"}
          </span>
          
          <button
            onClick={toggleTheme}
            className="relative w-12 h-6 sm:w-14 sm:h-7 lg:w-16 lg:h-8 rounded-full transition-colors duration-300 focus:outline-none border-[2px] border-green-600"
            style={{
              backgroundColor: theme === "dark" ? "#1e3a8a" : "#60a5fa",
            }}
            aria-label="Toggle theme"
          >
            <div
              className={`absolute left-1 top-0.5 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-yellow-400 flex items-center justify-center transition-all duration-300 ${
                theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            >
            </div>

            <div
              className={`absolute right-1 top-0.5 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
                theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              
            </div>

            <div
              className={`absolute top-0.5 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-white shadow-md transition-all duration-300 ${
                theme === "dark" ? "translate-x-5 sm:translate-x-7 lg:translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
