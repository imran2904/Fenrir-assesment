import React, { useState } from "react";
import SideBar from "../SideBar";
import NavHeader from "./NavHeader";

const BaseLayout = ({ children, theme, toggleTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
      <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavHeader 
          theme={theme} 
          toggleTheme={toggleTheme}
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        <main className="flex-1 p-4 lg:p-6 bg-[#F5F5F5] dark:bg-[#0F0F0F] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default BaseLayout;