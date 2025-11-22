import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../api/mockApi";
import type { Product } from "../data/mockProducts";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type ViewPoint = {
  label: string;
  current: number;
  previous: number;
};

const totalViewsData: ViewPoint[] = [
  { label: "Nov 20th", current: 80, previous: 60 },
  { label: "Nov 23rd", current: 95, previous: 70 },
  { label: "Nov 26th", current: 90, previous: 68 },
  { label: "Nov 29th", current: 105, previous: 75 },
  { label: "Dec 2nd", current: 110, previous: 82 },
  { label: "Dec 5th", current: 120, previous: 90 },
  { label: "Dec 8th", current: 135, previous: 100 },
];

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleDelete = async (id: string) => {
    const ok = window.confirm("Are you sure you want to delete this product?");
    if (!ok) return;

    try {
      setDeletingId(id);
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
          Product
        </h1>

        <Link
          to="/products/new"
          className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-700"
        >
          + Add New Product
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2.6fr)_minmax(320px,1fr)] gap-6 items-start">
        <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
            <div className="flex gap-6 text-sm font-medium">
              <button className="pb-1 border-b-2 border-slate-900 dark:border-white text-slate-900 dark:text-white">
                Published
              </button>
              <button className="pb-1 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                Draft
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <button className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-slate-600 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">
                Filter ▾
              </button>
              <button className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-slate-600 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">
                Download ▾
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-500 dark:text-slate-300">
                  <th className="px-6 py-3 w-10">
                    <input type="checkbox" className="h-4 w-4 rounded" />
                  </th>
                  <th className="px-2 py-3 text-left">Product Name</th>
                  <th className="px-2 py-3 text-right">Views ↑</th>
                  <th className="px-2 py-3 text-right">Pricing ↑</th>
                  <th className="px-2 py-3 text-right">Revenue ↑</th>
                  <th className="px-4 py-3 text-right">Manage ↑</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p) => (
                  <tr
                    key={p.id}
                    className="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50/80 dark:hover:bg-slate-800"
                  >
                    <td className="px-6 py-3">
                      <input type="checkbox" className="h-4 w-4 rounded" />
                    </td>

                    <td className="px-2 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.thumbnailImage}
                          alt={p.name}
                          className="h-10 w-10 rounded-md border border-slate-200 dark:border-slate-700 object-cover bg-slate-100 dark:bg-slate-700"
                        />
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                            {p.name || "Product Name Place Here"}
                          </p>
                          <p className="text-xs text-slate-400 dark:text-slate-400">
                            {p.brand || "Category"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 py-3 text-right text-slate-700 dark:text-slate-200">
                      14,000
                    </td>
                    <td className="px-2 py-3 text-right text-slate-700 dark:text-slate-200">
                      ${p.price.toFixed(3)}
                    </td>
                    <td className="px-2 py-3 text-right text-slate-700 dark:text-slate-200">
                      $164,000
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/products/${p.id}/edit`}
                          className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1 text-xs text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(p.id)}
                          disabled={deletingId === p.id}
                          className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1 text-xs text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-60"
                        >
                          {deletingId === p.id ? "Deleting…" : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {products.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-10 text-center text-slate-400 dark:text-slate-500 text-sm"
                    >
                      No products yet. Click “+ Add New Product” to create one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Total Views
          </h2>
          <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            +112,893
          </p>
          <div className="mt-1 flex items-center gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              trend title
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              70.5%
            </span>
          </div>

          <div className="mt-6 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={totalViewsData}
                margin={{ top: 10, right: 8, left: 0, bottom: 0 }}
              >
                <YAxis hide domain={[0, "dataMax"]} />
                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                  tickLine={false}
                  axisLine={{ stroke: "#e5e7eb" }}
                />
                <Tooltip
                  cursor={{ stroke: "#e5e7eb" }}
                  contentStyle={{
                    borderRadius: 8,
                    border: "1px solid #e5e7eb",
                    fontSize: 12,
                  }}
                  formatter={(v: any) => [`${v}`, "Views"]}
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  stroke="#9CA3AF"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="#F97316"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
  );
};
