import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, icon, className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100',
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="text-sm text-primary-700 font-medium">{children}</span>
    </div>
  );
};

export default Badge;
