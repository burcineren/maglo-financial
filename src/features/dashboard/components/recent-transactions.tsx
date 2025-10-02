import { formatCurrency, formatDate } from "../../../shared/utils";
import type { ReactNode } from 'react';

interface Transaction {
  id: string;
  name: string;
  company: string;
  type: string;
  amount: number;
  date: string;
  icon: string | ReactNode;
  iconBg: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Transaction
        </h3>
        <button className="text-sm text-primary-500 hover:text-primary-600 font-medium flex items-center gap-1">
          View All
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-1">
        <div className="grid grid-cols-4 gap-4 px-4 py-2 text-xs font-medium text-gray-500 uppercase">
          <div>Name/Business</div>
          <div>Type</div>
          <div className="text-right">Amount</div>
          <div className="text-right">Date</div>
        </div>

        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className="grid grid-cols-4 gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 border-b border-solid border-gray-200 last:border-b-0"
            style={{
              animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                style={{ backgroundColor: transaction.iconBg }}
              >
                {typeof transaction.icon === 'string' ? (
                  <span>{transaction.icon}</span>
                ) : (
                  <span className="flex items-center justify-center w-5 h-5">
                    {transaction.icon}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {transaction.name}
                </p>
                <p className="text-xs text-gray-500">{transaction.company}</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-sm text-gray-600">{transaction.type}</span>
            </div>

            <div className="flex items-center justify-end">
              <span className="text-sm font-semibold text-gray-900">
                {formatCurrency(transaction.amount)}
              </span>
            </div>

            <div className="flex items-center justify-end">
              <span className="text-sm text-gray-600">
                {formatDate(new Date(transaction.date))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
