export const TopSalesProductCard: React.FC<any> = ({
  rows,
  className = "",
}) => {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 h-full flex flex-col ${className}`}
    >
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Top Sales Product
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Manage your payments.
        </p>
      </div>

      {/* Wrapper card */}
      <div className="mt-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex-1 flex flex-col min-h-0">
        
        {/* Table header row */}
        <div className="grid grid-cols-[minmax(0,1fr)_90px] bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <div className="px-4 py-3">Product</div>
          <div className="px-4 py-3 text-right">Amount</div>
        </div>

        {/* Scroll rows */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
          <ul className="divide-y divide-slate-200 dark:divide-slate-700">
            {rows.map((row: any) => (
              <li
                key={row.id}
                className="grid grid-cols-[minmax(0,1fr)_90px] bg-white dark:bg-slate-900"
              >
                <div className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={row.image}
                    alt="product"
                    className="w-10 h-10 rounded-lg object-cover bg-slate-100 dark:bg-slate-700 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate">
                      {row.email}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {row.date}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-3 text-right font-semibold text-xs text-slate-900 dark:text-white">
                  ${row.amount}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer buttons */}
        <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 flex justify-end gap-3">
          <button className="px-5 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-emerald-600 text-emerald-700 dark:text-emerald-400 text-xs">
            Previous
          </button>
          <button className="px-5 py-1.5 rounded-md bg-emerald-600 text-white text-xs hover:bg-emerald-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
