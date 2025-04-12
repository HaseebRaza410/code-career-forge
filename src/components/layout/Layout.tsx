
import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
