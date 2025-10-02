import { formatCurrency } from '../../../shared/utils';

interface TransactionItemProps {
  name: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
}

export function TransactionItem({ name, date, amount, type }: TransactionItemProps) {
  const formattedAmount = formatCurrency(Math.abs(amount));

  return (
    <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="font-medium text-gray-900">{name}</span>
        <span className="text-sm text-gray-600">{date}</span>
      </div>
      <span
        className={`text-lg font-semibold ${
          type === 'income' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {type === 'income' ? '+' : '-'}
        {formattedAmount}
      </span>
    </div>
  );
}
