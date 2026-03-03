import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faFolder,
  faMagnifyingGlass,
  faCalendar,
  faBell,
  faGear,
  faCircleQuestion,
  faTimes,
  faArrowRightFromBracket,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: faChartLine, path: "/dashboard" },
    { name: "Projects", icon: faFolder, path: "/projects" },
    { name: "Scans", icon: faMagnifyingGlass, path: "/scans" },
    { name: "Schedule", icon: faCalendar, path: "/schedule" },
    { name: "Notifications", icon: faBell, path: "/notifications" },
    { name: "Settings", icon: faGear, path: "/settings" },
    { name: "Support", icon: faCircleQuestion, path: "/support" }
  ];

  const handleLogout = () => {
    setShowLogoutModal(false);
    router.push("/");
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white dark:bg-[#1A1A1A] 
        border-r border-gray-200 dark:border-[#2A2A2A] 
        flex flex-col h-screen
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0CC8A8] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-[#0CC8A8]">aps</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = router.pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => onClose()}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#0CC8A8]/10 text-[#0CC8A8]"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2A2A2A]"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-200 dark:border-[#2A2A2A] flex-shrink-0">
          <button
            onClick={() => setShowLogoutModal(true)}
            className="w-full flex items-center gap-3 px-7 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-4 h-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-[#2A2A2A] flex-shrink-0">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">SL</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Security Lead</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">admin@do.com</div>
            </div>
          </div>
        </div>
      </aside>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faExclamationCircle} className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Logout?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Are you sure you want to logout?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-[#2A2A2A] rounded-xl text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition-colors"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;