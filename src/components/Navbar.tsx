import { Bell, ChevronDown, LayoutGrid, MoonStar, Search, Sun } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const initial = user?.name?.[0]?.toUpperCase() ?? "U";

  return (
    <header className="h-20 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 flex items-center">
     <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
      <div className="flex-1 flex items-center gap-3">
        <div className="relative">
          <input
            className="
              w-96
              bg-white dark:bg-slate-800
              rounded-full border border-slate-200 dark:border-slate-700
              pl-4 pr-10 py-2.5
              text-sm text-slate-700 dark:text-slate-100
              placeholder:text-slate-400 dark:placeholder:text-slate-500
              shadow-sm outline-none
            "
            placeholder="Search"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-sm">
            <Search size={16} />
          </span>
        </div>

      <button className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 shadow-sm">
        Search
      </button>
    </div>


        <div className="flex items-center gap-4">
          {user && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-100 shadow-sm">
              <span className="font-medium">{user.role.replace("_", " ")}</span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500">
                <ChevronDown />
              </span>
            </div>
          )}         

          <button
            type="button"
            onClick={toggleTheme}
            className="h-9 w-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm text-sm"
            title="Toggle theme"
          >
            {theme === "light" ?     <MoonStar />
 :     <Sun />
}
          </button>
           <button
            type="button"
            className="h-9 w-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm text-lg"
          >
                <LayoutGrid />

          </button>

          <button
            type="button"
            className="h-9 w-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm text-lg"
          >
               <Bell />
          </button>   

          {user && (
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-100 flex items-center justify-center text-sm font-semibold overflow-hidden">
                {initial}
              </div>
              <button
                onClick={logout}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
