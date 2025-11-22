type SubscriptionsPerformersCardProps = {
  value: string;
  subtitle?: string;
  data: { label: string; value: number }[];
  className?: string;
};

export const SubscriptionsPerformersCard: React.FC<
  SubscriptionsPerformersCardProps
> = ({ value, subtitle = "Follower This Years", data, className }) => {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 p-6 flex flex-col ${className}`}
    >
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Subscriptions Performers
        </h2>
        <p className="mt-1 text-sm text-slate-400">{subtitle}</p>

        
      </div>

      <div className="mt-4 flex-1 flex flex-col justify-end gap-6">
        {/* Graph */}
        <div className="mt-4 flex items-end gap-2">
          <span className="ml-10 text-5xl font-bold text-slate-900 dark:text-white">
            {value}
          </span>
          <span className="text-2xl font-semibold text-slate-900">▲</span>
        </div>
        <div className="rounded-3xl bg-orange-50 px-4 pt-4 pb-3">
          <div className="h-24 flex items-end justify-between gap-2">
            {data.map((d, i) => (
              <div
                key={i}
                className="w-5 rounded-t-xl bg-orange-400"
                style={{ height: `${d.value}%` }}
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="w-full rounded-full bg-emerald-500 text-white text-sm font-medium py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};
