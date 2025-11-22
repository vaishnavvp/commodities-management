import { TrendingUp } from "lucide-react";

export const KpiCard = ({
  title,
  value,
  trend = "+70.5%",
}: {
  title: string;
  value: number | string;
  trend?: string;
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 relative">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white dark:bg-slate-700 hover:bg-slate-100">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-600"
          >
            <rect x="2" y="2" width="12" height="12" rx="2" />
            <path d="M2 6h12M6 2v12" />
          </svg>
        </button>
      </div>

      <p className="text-4xl font-bold mt-3 text-slate-900 dark:text-white">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-500 flex items-center gap-1">
        trend title
        <span className="text-green-600 flex items-center gap-1 font-medium">
          <TrendingUp size={14} />
          {trend}
        </span>
      </p>
    </div>
  );
};
