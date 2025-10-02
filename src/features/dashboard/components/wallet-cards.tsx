interface WalletCard {
  id: string;
  bankName: string;
  cardNumber: string;
  expiryDate: string;
  cardType: "visa" | "mastercard";
  variant: "dark" | "gradient";
}

interface WalletCardsProps {
  wallets: WalletCard[];
}

export function WalletCards({ wallets }: WalletCardsProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Wallet</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="4" r="1.5" />
            <circle cx="10" cy="10" r="1.5" />
            <circle cx="10" cy="16" r="1.5" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {wallets.map((wallet, index) => (
          <div
            key={wallet.id}
            className={`
              relative p-5 rounded-xl overflow-hidden
              transition-all duration-300 hover:scale-105 cursor-pointer
              ${
                wallet.variant === "dark"
                  ? "bg-gray-900 text-white"
                  : "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
              }
            `}
            style={{
              animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Contactless Icon */}
            <div className="absolute top-4 right-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.5"
              >
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M17 6.47a12.78 12.78 0 0 1 0 11.06" />
                <path d="M7 6.47a12.78 12.78 0 0 0 0 11.06" />
              </svg>
            </div>

            {/* Chip */}
            <div className="w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md mb-6 opacity-80" />

            {/* Card Number */}
            <p className="text-xl font-mono tracking-wider mb-4">
              {wallet.cardNumber}
            </p>

            {/* Bank Name & Card Type */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">{wallet.bankName}</p>
                <p className="text-xs opacity-70">{wallet.expiryDate}</p>
              </div>
              <div className="text-2xl font-bold uppercase">
                {wallet.cardType}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
