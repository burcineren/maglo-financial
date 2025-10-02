import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  name: string;
  options: { value: string; label: string }[];
}

export function Select({
  label,
  error,
  name,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={`
          px-4 py-3 
          border rounded-lg 
          text-base 
          bg-white text-gray-900 
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-500/20
          ${
            error
              ? "border-red-500"
              : "border-gray-300 focus:border-primary-500"
          }
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-sm text-red-500 animate-fade-in">{error}</span>
      )}
    </div>
  );
}
