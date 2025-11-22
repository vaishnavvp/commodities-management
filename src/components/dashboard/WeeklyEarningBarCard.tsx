import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
} from "recharts";

type WeeklyEarningPoint = {
  day: string;
  current: number;
  target: number;
};

type WeeklyEarningBarCardProps = {
  title?: string;
  total: string;
  trendLabel?: string;
  trendValue?: string;
  rangeLabel?: string;
  data: WeeklyEarningPoint[];
};

export const WeeklyEarningBarCard: React.FC<WeeklyEarningBarCardProps> = ({
  title = "Total Earning",
  total,
  trendLabel = "trend title",
  trendValue = "70.5%",
  rangeLabel = "This Week",
  data,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 p-6 h-full flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-64 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="text-3xl font-bold text-slate-900 dark:text-white">
          {total}
        </p>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500">{trendLabel}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            {trendValue}
          </span>
        </div>

        <button className="mt-2 inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white text-xs px-3 py-1.5 text-slate-700 shadow-sm">
          <span>{rangeLabel}</span>
          <span className="ml-2 text-[10px]">▼</span>
        </button>
      </div>

      <div className="flex-1 flex">
        <div className="w-full flex-1 min-h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barCategoryGap="40%"
              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#d1d5db"
                vertical={false}
              />
              <YAxis
                domain={[0, 520]}
                ticks={[100, 200, 300, 400, 500]}
                tick={{ fontSize: 11, fill: "#6b7280" }}
                axisLine={false}
                tickLine={false}
              />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 12, fill: "#111827" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: "rgba(148,163,184,0.08)" }}
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  fontSize: 12,
                }}
                formatter={(v: any) => [`$${v}`, "Earning"]}
              />

              <Bar
                dataKey="target"
                fill="#A7F3D0"
                radius={[8, 8, 0, 0]}
                barSize={26}
              />

              <Bar
                dataKey="current"
                fill="#22C55E"
                radius={[8, 8, 0, 0]}
                barSize={22}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
