import React, { ButtonHTMLAttributes } from 'react';
import '../../styles.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  children,
  disabled,
  className = '',
  ...rest
}) => {
  // Base styles
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'auto-font-medium',
    'auto-rounded-md',
    'transition-colors',
    'duration-200',
    fullWidth ? 'w-full' : '',
    disabled || isLoading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
  ];

  // Variant-specific styles
  const variantClasses = {
    primary: [
      'auto-explorer-bg-grayDark',
      'auto-text-inverse',
      'hover:auto-explorer-bg-grayDarker',
      'active:auto-explorer-bg-grayDarker'
    ],
    secondary: [
      'auto-explorer-bg-grayLight',
      'auto-text-gray-800',
      'hover:auto-explorer-bg-grayLight',
      'active:auto-explorer-bg-grayLight'
    ],
    tertiary: [
      'bg-transparent',
      'auto-text-primary',
      'hover:auto-explorer-bg-grayLight',
      'active:auto-explorer-bg-grayLight'
    ],
    danger: [
      'auto-bg-error',
      'auto-text-inverse',
      'hover:auto-button-danger',
      'active:auto-button-dangerHover'
    ]
  };

  // Size-specific styles
  const sizeClasses = {
    small: [
      'auto-px-2',
      'auto-py-1',
      'auto-text-sm'
    ],
    medium: [
      'auto-px-3',
      'auto-py-2',
      'auto-text-base'
    ],
    large: [
      'auto-px-4',
      'auto-py-3',
      'auto-text-lg'
    ]
  };

  const buttonClasses = [
    ...baseClasses,
    ...variantClasses[variant],
    ...sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <>
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : children}
    </button>
  );
};

export default Button; 