import { useEffect, useState } from "react";
import { getProducts } from "../api/mockApi";

import { KpiCard } from "../components/dashboard/KpiCard";
import { BarChartCard } from "../components/dashboard/BarChartCard";
import { LineChartCard } from "../components/dashboard/LineChartCard";
import { RecentSalesList } from "../components/dashboard/RecentStockList";
import { PaymentHistoryTable } from "../components/dashboard/PaymentHistoryTable";
import { earningOverviewData, lineChartData, miniEarningData, overviewData, paymentHistory, recentSales, subscriptionsData, subscriptionsPerformerData, topSalesRows, weeklyEarningData, type Product } from "../data/mockProducts";
import { EarningLineChartCard } from "../components/dashboard/EarningLineChartCard";
import { MiniEarningBarCard } from "../components/dashboard/MiniEarningBarCard";
import { WeeklyEarningBarCard } from "../components/dashboard/WeeklyEarningBarCard";
import { SubscriptionsLineCard } from "../components/dashboard/SubscriptionsLineCard";
import { SubscriptionsPerformersCard } from "../components/dashboard/SubscriptionsPerformerCard";
import { TopSalesProductCard } from "../components/dashboard/TopProductsTable";
import { Link } from "react-router-dom";

export const DashboardPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-500">
        Loading dashboard...
      </div>
    );
  }

  const totalProducts = products.length;
  const totalStock = products.reduce((s, p) => s + p.stock, 0);
  const lowStock = products.filter((p) => p.stock < 50).length;
  const categoriesCount = new Set(products.map((p) => p.category)).size;

  return (
    <div className="space-y-10">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        </div>
    
        <Link to="/products/new">
          <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700">
            + Add New Product
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KpiCard title="Total Earning" value={totalProducts} />
        <KpiCard title="Views" value={totalStock} />
        <KpiCard title="Total Sales" value={lowStock} />
        <KpiCard title="Subscriptions" value={categoriesCount} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BarChartCard
            title="Overview"
            data={overviewData}
            dataKey="value"
          />
        </div>

        <RecentSalesList sales={recentSales} />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EarningLineChartCard
            title="Total Earning"
            total="$ 112,893.00"
            trendLabel="trend title"
            trendValue="70.5%"
            data={earningOverviewData}
          />
        </div>

        <MiniEarningBarCard
          total="$ 112,893.00"
          trendLabel="trend title"
          trendValue="70.5%"
          data={miniEarningData}
        />
      </div>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WeeklyEarningBarCard
            total="$ 112,893.00"
            trendLabel="trend title"
            trendValue="70.5%"
            rangeLabel="This Week"
            data={weeklyEarningData}
          />
        </div>
        <SubscriptionsLineCard
          total="+112,893"
          trendLabel="trend title"
          trendValue="70.5%"
          data={subscriptionsData}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <LineChartCard
            title="Total Earning"
            total="+112,893"
            trendLabel="trend title"
            trendValue="70.5%"
            data={lineChartData}
          />
          <LineChartCard
            title="Total Sales"
            total="+112,893"
            trendLabel="trend title"
            trendValue="70.5%"
            data={lineChartData}
          />
          <LineChartCard
            title="Total Views"
            total="+112,893"
            trendLabel="trend title"
            trendValue="70.5%"
            data={lineChartData}
          />
      </div>
     

      <section className="mt-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 auto-rows-[460px]">
          <SubscriptionsPerformersCard
          className="h-full"
          value="+500"
          data={subscriptionsPerformerData}
          />
          <TopSalesProductCard rows={topSalesRows} />
          <PaymentHistoryTable
          className="h-full"
          payments={paymentHistory}
          />
        </div>
        </section>
    </div>
  );
};
