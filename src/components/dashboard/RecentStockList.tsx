type RecentSale = {
  id: number;
  name: string;
  email: string;
  amount: number;
  status: string;
};

export const RecentSalesList = ({ sales }: { sales: RecentSale[] }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
    {/* Header */}
    <h2 className="text-sm font-semibold mb-1 text-slate-900 dark:text-white">
      Recent Sales
    </h2>
    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
      You made 350 sales this month
    </p>

    {/* List */}
    <ul className="space-y-3">
      {sales.map((s) => (
        <li
          key={s.id}
          className="flex items-center justify-between text-sm"
        >
          <div>
            <p className="font-medium text-xs text-slate-900 dark:text-white">
              {s.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {s.email}
            </p>
          </div>

          <p className="font-semibold text-xs text-slate-900 dark:text-slate-200">
            +${s.amount}.00
          </p>
        </li>
      ))}
    </ul>
  </div>
);
