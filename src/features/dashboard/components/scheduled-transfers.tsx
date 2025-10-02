import { formatCurrency } from '../../../shared/utils';

interface Transfer {
  id: string;
  name: string;
  date: string;
  amount: number;
  avatar: string;
}

interface ScheduledTransfersProps {
  transfers: Transfer[];
}

export function ScheduledTransfers({ transfers }: ScheduledTransfersProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Scheduled Transfers</h3>
        <button className="text-sm text-primary-500 hover:text-primary-600 font-medium flex items-center gap-1">
          View All
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {transfers.map((transfer, index) => (
          <div
            key={transfer.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
            style={{
              animation: `slideUp 0.3s ease-out ${index * 0.05}s both`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                <img 
                  src={transfer.avatar} 
                  alt={transfer.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(transfer.name)}&background=random`;
                  }}
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{transfer.name}</p>
                <p className="text-xs text-gray-500">{transfer.date}</p>
              </div>
            </div>

            <span className="text-sm font-semibold text-gray-900">
              - {formatCurrency(transfer.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
