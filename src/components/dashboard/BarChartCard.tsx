import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export const BarChartCard = ({
  title,
  data,
  dataKey,
  color = "#3B82F6",
}: {
  title: string;
  data: any[];
  dataKey: string;
  color?: string;
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
        {title}
      </h2>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#EAEAEA"
              className="dark:stroke-slate-700"
            />

            {/* X Axis */}
            <XAxis
              dataKey="name"
              tick={{ fill: "#475569" }}
              tickLine={false}
              axisLine={{ stroke: "#CBD5E1" }}
              className="dark:[&_text]:fill-slate-400 dark:[&_line]:stroke-slate-700"
            />

            {/* Y Axis */}
            <YAxis
              tick={{ fill: "#475569" }}
              axisLine={false}
              tickLine={false}
              className="dark:[&_text]:fill-slate-400"
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                background: "#ffffff",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
              }}
              labelStyle={{ color: "#475569" }}
              wrapperStyle={{ outline: "none" }}
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
            />
            {/* Dark tooltip override */}
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
              contentStyle={{
                background: "#1e293b",
                borderRadius: 8,
                border: "1px solid #334155",
                color: "#f1f5f9",
              }}
              labelStyle={{ color: "#cbd5e1" }}
              wrapperStyle={{
                outline: "none",
              }}
              // className="hidden dark:block"
            />

            {/* Bar */}
            <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
