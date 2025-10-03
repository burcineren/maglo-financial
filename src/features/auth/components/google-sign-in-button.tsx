import type { ButtonHTMLAttributes } from 'react';

interface GoogleSignInButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  isLoading?: boolean;
}

export function GoogleSignInButton({ 
  onClick, 
  isLoading = false, 
  className = '', 
  disabled = false,
  children = 'Sign up with google',
  ...props 
}: GoogleSignInButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`
        w-full px-6 py-3
        bg-white border border-gray-300
        text-gray-700 font-medium text-base
        rounded-lg
        transition-all duration-200
        flex items-center justify-center gap-3
        hover:bg-gray-50 hover:border-gray-400
        hover:shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M19.8055 10.2292C19.8055 9.55056 19.7501 8.86667 19.6306 8.19861H10.2V12.0486H15.6014C15.3773 13.2911 14.6571 14.3898 13.6025 15.0875V17.5861H16.825C18.7173 15.8444 19.8055 13.2722 19.8055 10.2292Z"
          fill="#4285F4"
        />
        <path
          d="M10.2 20C12.9 20 15.1714 19.1042 16.8286 17.5861L13.6061 15.0875C12.7061 15.6972 11.5502 16.0431 10.2036 16.0431C7.59429 16.0431 5.38286 14.2833 4.58643 11.9097H1.26429V14.4819C2.96143 17.8583 6.41929 20 10.2 20Z"
          fill="#34A853"
        />
        <path
          d="M4.58286 11.9097C4.16571 10.6672 4.16571 9.33611 4.58286 8.09361V5.52139H1.26429C-0.154286 8.33889 -0.154286 11.6639 1.26429 14.4814L4.58286 11.9097Z"
          fill="#FBBC04"
        />
        <path
          d="M10.2 3.95694C11.6257 3.93472 13.0043 4.47222 14.0407 5.45833L16.8929 2.60611C15.0786 0.904167 12.6771 -0.0291667 10.2 0.000277778C6.41929 0.000277778 2.96143 2.14194 1.26429 5.52139L4.58286 8.09361C5.37571 5.71667 7.59071 3.95694 10.2 3.95694Z"
          fill="#EA4335"
        />
      </svg>
      {isLoading ? 'Signing in...' : children}
    </button>
  );
}
