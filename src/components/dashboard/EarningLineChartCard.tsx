import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  title: string;
  total: string;
  trendLabel?: string;
  trendValue?: string;
  data: { name: string; current: number; previous: number }[];
};

export const EarningLineChartCard: React.FC<Props> = ({
  title,
  total,
  trendLabel = "trend title",
  trendValue = "70.5%",
  data,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            {title}
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            {total}
          </p>
          <div className="mt-1 flex items-center gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              {trendLabel}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              {trendValue}
            </span>
          </div>
        </div>

        <div>
          <select className="text-xs rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-1.5 text-slate-700 dark:text-slate-100 outline-none">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      <div className="w-full h-64 rounded-3xl bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-900 px-2 pt-2 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <YAxis
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              axisLine={false}
              tickLine={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 12,
                backgroundColor: "#ffffff",
              }}
              labelStyle={{ color: "#4b5563" }}
              formatter={(value: any) => [`$${value}`, "Earning"]}
            />

            <Line
              type="monotone"
              dataKey="previous"
              stroke="#A5F3FC"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="current"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, stroke: "#ECFDF5", fill: "#10B981" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
