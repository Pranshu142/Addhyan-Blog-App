import React from "react";
import { User, LogIn, Flame } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-gray-100 backdrop-blur-md">
      <div className="container mx-auto px-2 flex h-16 items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Flame
            className="text-primary fill-orange-200 stroke-1 stroke-red-500"
            size={28}
          />
          <h1 className="text-xl font-bold">Addhyan</h1>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {!isAuthenticated ? (
            <div className="flex gap-2 items-center">
              <button
                onClick={() => {
                  login();
                  navigate("/feed");
                }}
                className="gap-4 text-sm flex border-1 px-4 py-2 bg-black text-white rounded-2xl"
              >
                Login
                <LogIn size={16} />
              </button>
              <button
                onClick={() => {
                  login();
                  navigate("/feed");
                }}
                className="gap-4 text-sm flex border-1 px-4 py-2 bg-black text-white rounded-2xl"
              >
                Signup
                <User size={16} />
              </button>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <button
                onClick={() => navigate("/feed")}
                className="text-sm text-gray-800 font-medium"
              >
                Feed
              </button>
              <button
                onClick={logout}
                className="gap-2 text-sm flex border-1 px-4 py-2 bg-gray-900 text-white rounded-2xl"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
