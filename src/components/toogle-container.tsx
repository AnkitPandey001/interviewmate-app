import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
  } from "@/components/ui/sheet";
  
  import { useAuth } from "@clerk/clerk-react";
  import { Menu } from "lucide-react";
  import { NavigationRoutes } from "./navigation-routes";
  import { NavLink } from "react-router-dom";
  import { cn } from "@/lib/utils";
  
  export const ToggleContainer = () => {
    const { userId } = useAuth();
  
    return (
      <Sheet>
        <SheetTrigger className="block md:hidden p-2 text-neutral-700 hover:text-black transition cursor-pointer">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
  
        <SheetContent className="p-6 bg-white shadow-md">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-xl font-bold text-neutral-900">
              AI Voice Interview Assistant
            </SheetTitle>
            <SheetDescription className="text-sm text-neutral-500">
              Practice real-time interviews with AI voice feedback and personalized guidance.
            </SheetDescription>
          </SheetHeader>
  
          <nav className="flex flex-col gap-4">
            <NavigationRoutes isMobile />
  
            {userId && (
              <NavLink
                to="/generate"
                className={({ isActive }) =>
                  cn(
                    "text-base px-3 py-2 rounded-md cursor-pointer transition-colors duration-200",
                    isActive
                      ? "bg-neutral-100 text-neutral-900 font-semibold"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    );
  };
  