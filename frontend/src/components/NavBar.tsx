import React from "react";
import { User, LogIn, Flame } from "lucide-react";
const NavBar: Reacr.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-gray-100 backdrop-blur-md ">
      <div className="container mx-auto px-2 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame
            className="text-primary fill-orange-200 stroke-1 stroke-red-500"
            size={28}
          />
          <h1 className="text-xl font-bold">Addhayn</h1>
        </div>

        <div className="flex items-center gap-3">
          {/* <button
            variant="ghost"
            size="icon"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button> */}
          <div className="flex gap-2 items-center">
            <button className="gap-4 text-sm flex  border-1 px-4 py-2 bg-black text-white rounded-2xl">
              Login
              <LogIn size={16} />
            </button>
            <button className="gap-4 text-sm flex  border-1 px-4 py-2 bg-black text-white rounded-2xl">
              Signup
              <User size={16} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
