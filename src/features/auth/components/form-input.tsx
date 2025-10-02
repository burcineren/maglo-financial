import { type InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  name: string;
}

export function FormInput({ label, error, name, className = '', ...props }: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={`
          px-4 py-3 
          border rounded-lg 
          text-base 
          bg-white text-gray-900 
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-500/20
          ${error ? 'border-red-500' : 'border-gray-300 focus:border-primary-500'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-500 animate-fade-in">
          {error}
        </span>
      )}
    </div>
  );
}
