import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900 transition-colors">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 bg-slate-50 dark:bg-slate-900 transition-colors">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
