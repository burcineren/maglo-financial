import { useState, useEffect, useCallback } from "react";
import { Sidebar } from "../components/sidebar";
import { DashboardHeader } from "../components/dashboard-header";
import { BalanceCards } from "../components/balance-cards";
import {
  Wallet,
  CreditCard,
  PiggyBank,
  Smartphone,
  Film,
  Palette,
} from "lucide-react";
import {
  WorkingCapitalChart,
  type TimeRange,
} from "../components/working-capital-chart";
import { RecentTransactions } from "../components/recent-transactions";
import { ScheduledTransfers } from "../components/scheduled-transfers";
import { WalletCards } from "../components/wallet-cards";

interface DashboardProps {
  onSignOut: () => void;
}

export function Dashboard({ onSignOut }: DashboardProps) {
  const [mounted, setMounted] = useState(false);
  const [timeRange, setTimeRange] = useState<TimeRange>("7d");

  useEffect(() => {
    setMounted(true);
  }, []);

  const getBalanceCards = useCallback(() => {
    const baseCards = [
      {
        id: "total-balance",
        label: "Total balance",
        amount: 7520.65,
        icon: <Wallet className="w-5 h-5 text-blue-500" />,
        variant: "primary" as const,
        currency: "USD",
      },
      {
        id: "total-spending",
        label: "Total spending",
        amount: 1250.8,
        icon: <CreditCard className="w-5 h-5 text-pink-500" />,
        currency: "USD",
      },
      {
        id: "total-saved",
        label: "Total saved",
        amount: 2250.75,
        icon: <PiggyBank className="w-5 h-5 text-emerald-500" />,
        currency: "USD",
      },
    ];

    // Update values based on time range
    if (timeRange === "7d") {
      baseCards[0].amount = 5240.21;
      baseCards[1].amount = 750.35;
      baseCards[2].amount = 1250.5;
    } else if (timeRange === "30d") {
      baseCards[0].amount = 6520.45;
      baseCards[1].amount = 2250.4;
      baseCards[2].amount = 1950.75;
    } else if (timeRange === "90d") {
      // Keep the higher values for 90 days
      baseCards[0].amount = 7520.65;
      baseCards[1].amount = 3750.25;
      baseCards[2].amount = 2250.75;
    }

    return baseCards;
  }, [timeRange]);
  // Generate date labels
  const getDateRange = (days: number) => {
    const result = [];
    const today = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      result.push(date);
    }

    return result;
  };

  // Generate random data within a range
  const generateRandomData = (count: number, min: number, max: number) => {
    return Array.from(
      { length: count },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  };

  // Get balance cards based on time range
  const balanceCards = getBalanceCards();

  // Chart data based on selected time range
  const getChartData = useCallback(() => {
    let days: number;
    let dateFormat: Intl.DateTimeFormatOptions;
    let incomeRange: [number, number];
    let expenseRange: [number, number];
    let groupBy: "day" | "week" = "day";

    switch (timeRange) {
      case "7d":
        days = 7;
        dateFormat = { month: "short", day: "numeric" };
        incomeRange = [3000, 10000];
        expenseRange = [2500, 9000];
        break;
      case "30d":
        days = 30;
        dateFormat = { month: "short", day: "numeric" };
        incomeRange = [2500, 12000];
        expenseRange = [2000, 10000];
        break;
      case "90d":
        days = 12; // Group by weeks for 90 days (12 weeks)
        dateFormat = { month: "short", day: "numeric" };
        incomeRange = [2000, 15000];
        expenseRange = [1800, 13000];
        groupBy = "week";
        break;
      default:
        days = 7;
        dateFormat = { month: "short", day: "numeric" };
        incomeRange = [3000, 10000];
        expenseRange = [2500, 9000];
    }

    const dateRange = getDateRange(days);
    const incomes = generateRandomData(days, ...incomeRange);
    const expenses = generateRandomData(days, ...expenseRange);

    return dateRange.map((date, index) => {
      const dateStr =
        groupBy === "week"
          ? `Week ${index + 1}`
          : date.toLocaleDateString("en-US", dateFormat);

      return {
        date: dateStr,
        income: incomes[index],
        expenses: expenses[index],
        fullDate: date.toISOString().split("T")[0],
      };
    });
  }, [timeRange]);

  const chartData = getChartData();

  // Recent transactions
  const transactions = [
    {
      id: "1",
      name: "Iphone 13 Pro MAX",
      company: "Apple Inc.",
      type: "Mobile",
      amount: 420.84,
      date: "2022-04-14",
      icon: <Smartphone className="w-5 h-5" />,
      iconBg: "#e3f2fd",
    },
    {
      id: "2",
      name: "Netflix Subscription",
      company: "Netflix",
      type: "Entertainment",
      amount: 100.0,
      date: "2022-04-05",
      icon: <Film className="w-5 h-5" />,
      iconBg: "#fce4ec",
    },
    {
      id: "3",
      name: "Figma Subscription",
      company: "Figma Inc.",
      type: "Software",
      amount: 244.2,
      date: "2022-04-02",
      icon: <Palette className="w-5 h-5" />,
      iconBg: "#f3e5f5",
    },
  ];

  // Wallet cards
  const wallets = [
    {
      id: "1",
      bankName: "Maglo. | Universal Bank",
      cardNumber: "5495 7381 3759 2321",
      expiryDate: "09/25",
      cardType: "visa" as const,
      variant: "dark" as const,
    },
    {
      id: "2",
      bankName: "Maglo. | Commercial Bank",
      cardNumber: "8595254B****",
      expiryDate: "09/25",
      cardType: "visa" as const,
      variant: "gradient" as const,
    },
  ];

  // Scheduled transfers
  const transfers = [
    {
      id: "1",
      name: "John Doe",
      date: "Today, 10:00 AM",
      amount: 250,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    },
    {
      id: "2",
      name: "Netflix",
      date: "Tomorrow, 12:00 PM",
      amount: 15.99,
      avatar:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop&crop=entropy",
    },
    {
      id: "3",
      name: "Spotify",
      date: "Oct 10, 9:30 AM",
      amount: 9.99,
      avatar:
        "https://images.unsplash.com/photo-1611162616622-8c2c0d9d58d6?w=200&h=200&fit=crop&crop=entropy",
    },
    {
      id: "4",
      name: "Dr Jubed Ahmed",
      date: "April 16, 2022 at 11:00",
      amount: 435.0,
      avatar:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop&crop=entropy",
    },
    {
      id: "5",
      name: "AR Jakir Alp",
      date: "April 14, 2022 at 11:00",
      amount: 228.0,
      avatar: "AJ",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar - Hidden on mobile, shown on medium screens and up */}
      <div className="hidden md:block">
        <Sidebar onSignOut={onSignOut} />
      </div>

      {/* Mobile Header - Only shown on small screens */}
      <div className="md:hidden">
        <DashboardHeader />
      </div>

      {/* Mobile Sidebar Toggle - Only shown on small screens */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button 
          className="w-14 h-14 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg"
          onClick={() => {/* Add your mobile menu toggle logic here */}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Desktop Header - Hidden on mobile */}
        <div className="hidden md:block">
          <DashboardHeader />
        </div>

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-[1400px] mx-auto w-full">
            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Left Column - Chart & Transactions */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                {/* Balance Cards */}
                <div className={`transition-all duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
                  <BalanceCards cards={balanceCards} />
                </div>

                {/* Chart */}
                <div className={`transition-all duration-500 delay-100 ${mounted ? "opacity-100" : "opacity-0"}`}>
                  <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-200">
                    <WorkingCapitalChart
                      data={chartData}
                      timeRange={timeRange}
                      onTimeRangeChange={setTimeRange}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className={`transition-all duration-500 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`}>
                  <RecentTransactions transactions={transactions} />
                </div>
              </div>

              {/* Right Column - Wallet & Transfers */}
              <div className="space-y-4 md:space-y-6">
                {/* Wallet Cards */}
                <div className={`transition-all duration-500 delay-150 ${mounted ? "opacity-100" : "opacity-0"}`}>
                  <WalletCards wallets={wallets} />
                </div>

                {/* Scheduled Transfers */}
                <div className={`transition-all duration-500 delay-250 ${mounted ? "opacity-100" : "opacity-0"}`}>
                  <ScheduledTransfers transfers={transfers} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
