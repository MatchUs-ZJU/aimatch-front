import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const variants = {
    primary: 'btn-primary text-white',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
    outline: 'border-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600',
    white: 'bg-white text-primary-600 hover:shadow-xl hover:scale-105',
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        'rounded-full font-semibold transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
