import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";

type MiniEarningBarCardProps = {
  title?: string;
  total: string;
  trendLabel?: string;
  trendValue?: string;
  data: { label: string; value: number }[];
};

export const MiniEarningBarCard: React.FC<MiniEarningBarCardProps> = ({
  title = "Total Earning",
  total,
  trendLabel = "trend title",
  trendValue = "70.5%",
  data,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col">
      
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          {total}
        </p>
        <div className="mt-1 flex items-center gap-2 text-xs">
          <span className="text-slate-500">{trendLabel}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            {trendValue}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <YAxis hide domain={[0, "dataMax"]} />
            <XAxis dataKey="label" hide />

            <Tooltip
              cursor={{ fill: "rgba(148,163,184,0.08)" }}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 12,
              }}
              formatter={(v) => [`$${v}`, "Earning"]}
            />

            <Bar
              dataKey="value"
              fill="#22C55E"
              radius={[6, 6, 0, 0]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
