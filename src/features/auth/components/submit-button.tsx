import { type ButtonHTMLAttributes } from 'react';
import { LoadingSpinner } from '../../../shared/components/loading-spinner';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

export function SubmitButton({ 
  isLoading = false, 
  children, 
  className = '',
  disabled,
  ...props 
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || isLoading}
      className={`
        w-full px-6 py-3.5 
        bg-[#c4d82e] hover:bg-[#b5c829]
        text-gray-900 
        font-semibold text-base
        rounded-lg 
        transition-all duration-200
        flex items-center justify-center
        disabled:opacity-60 disabled:cursor-not-allowed
        hover:shadow-lg hover:-translate-y-0.5
        active:translate-y-0
        ${className}
      `}
      {...props}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
}
