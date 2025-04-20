import { cn } from "@/lib/utils";
import { LogoContainer } from "./logo-container";
import { useAuth } from "@clerk/clerk-react";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toogle-container";

export const Header = () => {
  const { userId } = useAuth();

  return (
    <header className="w-full border-b bg-white shadow-sm transition-all duration-150 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <LogoContainer />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 ml-6">
          <NavigationRoutes />

          {userId && (
            <NavLink
              to="/generate"
              className={({ isActive }) =>
                cn(
                  "text-base px-3 py-2 rounded-md cursor-pointer transition-all duration-200",
                  isActive
                    ? "text-neutral-900 font-semibold bg-neutral-100"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                )
              }
            >
              Take An Interview
            </NavLink>
          )}
        </nav>

        {/* Right Controls: Profile + Toggle Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          <ProfileContainer />
          <ToggleContainer />
        </div>
      </div>
    </header>
  );
};
