// MAIN APP PAGE — Founder controls routing, data fetching, and layout
// Components come from submodule repos that interns maintain

// In a real setup these imports work via tsconfig paths:
//   import { PriceChart, StockTable } from "@ui";
//   import { DashboardSummary, ScreenerView, SignalsPanel } from "@features";

// For this local demo, we use relative paths to the submodules:
import PriceChart from "../submodules/ui/components/charts/PriceChart";
import StockTable from "../submodules/ui/components/tables/StockTable";
import DashboardSummary from "../submodules/features/dashboard/DashboardSummary";
import SignalsPanel from "../submodules/features/signals-panel/SignalsPanel";
import ScreenerView from "../submodules/features/screener/ScreenerView";

// SERVER-SIDE: Founder fetches data here (interns never see this)
// async function getMarketData() {
//   const supabase = createServerClient();
//   const { data } = await supabase.from("quotes_bse").select("*");
//   return data;
// }

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Tickernaut Dashboard</h1>

      {/* Feature: Dashboard Summary (from intern features repo) */}
      <DashboardSummary />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {/* UI: Price Chart (from intern UI repo) */}
          <PriceChart symbol="RELIANCE" />
          {/* UI: Stock Table (from intern UI repo) */}
          <StockTable />
        </div>
        <div>
          {/* Feature: Signals Panel (from intern features repo) */}
          <SignalsPanel symbol="RELIANCE" />
        </div>
      </div>

      {/* Feature: Screener (from intern features repo) */}
      <ScreenerView />
    </main>
  );
}
