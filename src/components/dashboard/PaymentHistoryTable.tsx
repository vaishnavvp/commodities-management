type PaymentRow = {
  id: number;
  email: string;
  amount: number;
  status: "Success" | "Failed";
};

type PaymentHistoryTableProps = {
  payments: PaymentRow[];
  className?: string;
};

export const PaymentHistoryTable: React.FC<PaymentHistoryTableProps> = ({
  payments,
  className = "",
}) => {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 ${className}`}
    >
      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Payment History
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Manage your payments.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden flex flex-col">
        
        <div className="max-h-72 flex-1 overflow-y-auto overflow-x-hidden">
          <table className="w-full table-fixed text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-left text-slate-600 dark:text-slate-300 font-semibold w-[70%]">
                  Email
                </th>
                <th className="px-4 py-3 text-right text-slate-600 dark:text-slate-300 font-semibold w-[30%]">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {payments.map((p) => (
                <tr
                  key={p.id}
                  className="border-t border-slate-200 dark:border-slate-700"
                >
                  <td className="px-4 py-3 text-slate-800 dark:text-slate-200 truncate">
                    {p.email}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-slate-900 dark:text-white">
                    ${p.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Buttons */}
        <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 flex justify-end gap-3">
          <button className="px-6 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-emerald-600 text-emerald-700 dark:text-emerald-400 text-xs">
            Previous
          </button>
          <button className="px-6 py-1.5 rounded-md bg-emerald-600 text-white text-xs hover:bg-emerald-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
