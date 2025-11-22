import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

type LineChartPoint = {
  name: string;
  current: number;
  previous: number;
};

type LineChartCardProps = {
  title: string;
  total: string;
  trendLabel?: string;
  trendValue?: string;
  data: LineChartPoint[];
};

export const LineChartCard: React.FC<LineChartCardProps> = ({
  title,
  total,
  trendLabel = "trend title",
  trendValue = "70.5%",
  data,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
      {/* Header */}
      <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      <p className="text-3xl font-bold mt-1 text-slate-900 dark:text-slate-100">
        {total}
      </p>

      <div className="flex items-center gap-2 text-xs mt-1">
        <span className="text-slate-500 dark:text-slate-400">
          {trendLabel}
        </span>
        <span className="bg-green-100 dark:bg-emerald-900/50 text-green-700 dark:text-emerald-300 rounded-full px-2 py-0.5 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-emerald-300" />
          {trendValue}
        </span>
      </div>

      {/* Chart */}
      <div className="mt-6 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 40, right: 10, left: -50, bottom: 0 }}
          >
            {/* Baseline */}
            <ReferenceLine y={0} stroke="#9CA3AF" strokeWidth={1} />

            <YAxis
              ticks={[0]}
              domain={[0, "dataMax"]}
              tick={{
                fontSize: 12,
                fill: "#9CA3AF", // works for both themes
                dx: -10,
              }}
              axisLine={false}
              tickLine={false}
            />

            <XAxis
              dataKey="name"
              tickFormatter={(value, index) =>
                index === 0 ? value : ""
              }
              tick={{
                fontSize: 12,
                fill: "#9CA3AF",
                dx: -10,
              }}
              axisLine={{ stroke: "#9CA3AF", strokeWidth: 1.2 }}
              tickLine={false}
            />

            <Tooltip
              cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 12,
                backgroundColor: "#0f172a",
                color: "#f9fafb",
              }}
            />

            <Line
              type="monotone"
              dataKey="previous"
              stroke="#9CA3AF"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="current"
              stroke="#10B981"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
