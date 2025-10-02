import { formatCurrency } from "../../../shared/utils";
import type { ReactNode } from "react";

interface BalanceCard {
  id: string;
  label: string;
  amount: number;
  icon: string | ReactNode;
  variant?: "primary" | "secondary";
  currency?: string;
}

interface BalanceCardsProps {
  cards: BalanceCard[];
}

export function BalanceCards({ cards }: BalanceCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`
            p-6 rounded-2xl transition-all duration-300 hover:scale-105
            ${
              card.variant === "primary"
                ? "bg-gray-900 text-white"
                : "bg-white border border-gray-200"
            }
          `}
          style={{
            animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`
              w-10 h-10 rounded-lg flex items-center justify-center text-xl
              ${card.variant === "primary" ? "bg-[#c4d82e]" : "bg-gray-100"}
            `}
            >
              {card.icon}
            </div>
          </div>
          <p
            className={`text-sm mb-2 ${
              card.variant === "primary" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {card.label}
          </p>
          <p className="text-3xl font-bold">{formatCurrency(card.amount)}</p>
        </div>
      ))}
    </div>
  );
}
