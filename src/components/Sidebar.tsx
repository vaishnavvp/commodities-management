import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ChartLine, ChevronDown, ChevronUp, FileQuestionMark, House, LayoutDashboard, Settings, Store, User, Wallet } from "lucide-react";

const topLinkBase =
  "flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-colors";

const topLinkActive =
  "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm";
const topLinkInactive =
  "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800";

const pillActive =
  "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm";
const pillInactive =
  "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800";

export const Sidebar = () => {
  const { user } = useAuth();
  const [storeOpen, setStoreOpen] = useState(true);
  const [analyticOpen, setAnalyticOpen] = useState(true);
  const [financeOpen, setFinanceOpen] = useState(true);
  const [accountOpen, setAccountOpen] = useState(true);
  const [helpOpen, setHelpOpen] = useState(true);

  if (!user) return null;

  const homePath = user.role === "MANAGER" ? "/dashboard" : "/products";

  return (
    <aside className="w-64 bg-slate-100 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col text-slate-800 dark:text-slate-100">
      
      <div className="px-4 pt-4 pb-3 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200">
          <span className="text-lg"><User />
          </span>
        </div>
        <div>
          <div className="text-sm font-semibold">Bitstore</div>
        </div>
      </div>

      <nav className="flex-1 px-3 pb-4 overflow-y-auto space-y-4">
        <NavLink
          to={homePath}
          className={({ isActive }) =>
            `${topLinkBase} ${isActive ? topLinkActive : topLinkInactive}`
          }
        >
          <div className="h-7 w-7 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200">
            <House />
          </div>
          <span>Home</span>
          <span className="ml-auto text-xs text-slate-400 dark:text-slate-500">
            <ChevronDown />
          </span>
        </NavLink>

        {user.role === "MANAGER" && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${topLinkBase} ${isActive ? topLinkActive : topLinkInactive}`
            }
          >
            <div className="h-7 w-7 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200">
              <LayoutDashboard />
            </div>
            <span>Dashboard</span>
            <span className="ml-auto text-xs text-slate-400 dark:text-slate-500">
              <ChevronDown />
            </span>
          </NavLink>
        )}

        {/* STORE */}
        <SidebarGroup
          icon=<Store />
          label="Store"
          open={storeOpen}
          onToggle={() => setStoreOpen((v) => !v)}
        >
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `block px-3 py-1.5 rounded-xl text-sm ${
                isActive ? pillActive : pillInactive
              }`
            }
          >
            Product
          </NavLink>

          <NavLink
            to="/products/new"
            className={({ isActive }) =>
              `block px-3 py-1.5 rounded-xl text-sm ${
                isActive ? pillActive : pillInactive
              }`
            }
          >
            Add Product
          </NavLink>
        </SidebarGroup>

        {/* ANALYTIC */}
        <SidebarGroup
          icon=<ChartLine />
          label="Analytic"
          open={analyticOpen}
          onToggle={() => setAnalyticOpen((v) => !v)}
        >
          <SidebarSubButton>Traffic</SidebarSubButton>
          <SidebarSubButton>Earning</SidebarSubButton>
        </SidebarGroup>

        {/* FINANCES */}
        <SidebarGroup
          icon=<Wallet />
          label="Finances"
          open={financeOpen}
          onToggle={() => setFinanceOpen((v) => !v)}
        >
          <SidebarSubButton>Payment</SidebarSubButton>
          <SidebarSubButton>Payout</SidebarSubButton>
        </SidebarGroup>

        {/* ACCOUNT */}
        <SidebarGroup
          icon=<Settings />
          label="Account Setting"
          open={accountOpen}
          onToggle={() => setAccountOpen((v) => !v)}
        >
          <SidebarSubButton>My Profile</SidebarSubButton>
          <SidebarSubButton>Security</SidebarSubButton>
        </SidebarGroup>

        {/* HELP */}
        <SidebarGroup
          icon=<FileQuestionMark />
          label="Help And Support"
          open={helpOpen}
          onToggle={() => setHelpOpen((v) => !v)}
        >
          <SidebarSubButton>Contact Support</SidebarSubButton>
        </SidebarGroup>
      </nav>
    </aside>
  );
};

/* ========== SIDEBAR COMPONENTS ========== */

const SidebarGroup = ({
  icon,
  label,
  open,
  onToggle,
  children,
}: {
  icon: ReactNode;
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center w-9">
        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-base text-slate-700 dark:text-slate-200">
          {icon}
        </div>
        <div className="flex-1 border-l border-slate-300 dark:border-slate-600 mt-1" />
      </div>

      <div className="flex-1">
        <button
          type="button"
          onClick={onToggle}
          className="w-full flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white"
        >
          <span className="h-8 flex ml-2 items-center">{label}</span>
          <span className="ml-auto text-xs text-slate-400 dark:text-slate-500">
            {open ?<ChevronDown /> : <ChevronUp />}
          </span>
        </button>

        {open && <div className="mt-1 space-y-1 ml-1">{children}</div>}
      </div>
    </div>
  );
};

const SidebarSubButton = ({ children }: { children: React.ReactNode }) => (
  <button className="block w-full text-left px-3 py-1.5 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
    {children}
  </button>
);
