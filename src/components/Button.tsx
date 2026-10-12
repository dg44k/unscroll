import React from 'react';

export type ButtonVariant = 'pink' | 'lime' | 'yellow' | 'cyan' | 'purple' | 'white' | 'dark';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  pink: 'unscroll-btn-pink',
  lime: 'unscroll-btn-lime',
  yellow: 'unscroll-btn-yellow',
  cyan: 'unscroll-btn-cyan',
  purple: 'unscroll-btn-purple',
  white: 'unscroll-btn-white',
  dark: 'bg-[#0c0d1c] text-white border-[3px] border-[#0c0d1c] shadow-[0_6px_0_0_#2a2c47] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_0_#2a2c47] font-black'
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs rounded-xl gap-1.5',
  md: 'px-6 py-3 text-sm rounded-2xl gap-2',
  lg: 'px-8 py-4 text-base sm:text-lg rounded-2xl gap-3'
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'pink',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center font-black cursor-pointer select-none transition-all ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
      } ${className}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </button>
  );
};
