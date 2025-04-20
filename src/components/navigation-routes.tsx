import { cn } from "@/lib/utils";
import { MainRoutes } from "@/lib/helpers";
import { NavLink } from "react-router-dom";

interface NavigationRoutesProps {
  isMobile?: boolean;
}

export const NavigationRoutes = ({
  isMobile = false,
}: NavigationRoutesProps) => {
  return (
    <ul
      className={cn(
        "flex items-center gap-6",
        isMobile && "items-start flex-col gap-4"
      )}
    >
      {MainRoutes.map((route) => (
        <NavLink
          key={route.href}
          to={route.href}
          className={({ isActive }) =>
            cn(
              "text-base px-3 py-2 rounded-md cursor-pointer transition-colors duration-200",
              isActive
                ? "text-neutral-900 font-semibold bg-neutral-100"
                : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
            )
          }
        >
          {route.lable}
        </NavLink>
      ))}
    </ul>
  );
};
