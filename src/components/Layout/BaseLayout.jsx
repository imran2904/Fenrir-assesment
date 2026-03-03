import React from "react";

const BaseLayout = ({ children, theme, toggleTheme }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F0F0F]">
      
      <aside className="w-64 bg-white dark:bg-[#111111] border-r border-gray-200 dark:border-gray-800 hidden md:block">
        <div className="p-6 text-xl font-semibold text-[#0CC8A8]">
          aps
        </div>

        <nav className="px-4 space-y-2">
          <div className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            Dashboard
          </div>
          <div className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            Projects
          </div>
          <div className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            Scans
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">

        <header className="flex justify-end items-center p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111]">
          
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg border 
                       bg-gray-200 dark:bg-gray-800
                       text-black dark:text-white"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

        </header>

        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>
  );
};

export default BaseLayout;