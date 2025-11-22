import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type SubscriptionsPoint = {
  label: string;
  value: number;
};

type SubscriptionsLineCardProps = {
  title?: string;
  total: string;
  trendLabel?: string;
  trendValue?: string;
  data: SubscriptionsPoint[];
};

export const SubscriptionsLineCard: React.FC<SubscriptionsLineCardProps> = ({
  title = "Subscriptions",
  total,
  trendLabel = "trend title",
  trendValue = "70.5%",
  data,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 p-6">
      {/* Header */}
      <div>
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
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

      <div className="mt-6 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 10, left: 0, bottom: 10 }}
          >
            <XAxis dataKey="label" hide />
            <YAxis hide domain={[0, "dataMax"]} />

            <Tooltip
              cursor={{ stroke: "rgba(156,163,175,0.4)", strokeWidth: 1 }}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 12,
              }}
              formatter={(v: any) => [v, "Subscriptions"]}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#F59E0B"
              strokeWidth={3}
              dot={{
                r: 4,
                stroke: "#1F2933",
                strokeWidth: 1.5,
                fill: "#F59E0B",
              }}
              activeDot={{
                r: 5,
                stroke: "#1F2933",
                strokeWidth: 1.5,
                fill: "#FBBF24",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
