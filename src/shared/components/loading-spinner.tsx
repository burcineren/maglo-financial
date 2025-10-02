interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export function LoadingSpinner({ size = 'md', color = 'white' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-5 h-5 border-3',
    lg: 'w-8 h-8 border-4',
  };

  const colorClasses = color === 'white' 
    ? 'border-white/30 border-t-white'
    : 'border-gray-300 border-t-gray-900';

  return (
    <div 
      className={`${sizeClasses[size]} ${colorClasses} rounded-full animate-spin`}
      role="status"
      aria-label="Loading"
    />
  );
}
