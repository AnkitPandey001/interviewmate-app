import { Outlet } from "react-router-dom";
import { Header } from "@/components/headers";
import { Footers } from "@/components/footer";
import { AuthHandler } from "@/handler/AuthHandler";

export const PublicLayout = () => {
  return (
    <div className="w-full">
      <AuthHandler/>
      <Header />
      <Outlet />
      <Footers />
    </div>
  );
};
