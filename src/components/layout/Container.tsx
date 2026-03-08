import React from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'small' | 'large';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'default',
}) => {
  const sizes = {
    small: 'max-w-5xl',
    default: 'max-w-7xl',
    large: 'max-w-screen-2xl',
  };

  return (
    <div className={cn(sizes[size], 'mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
};

export default Container;
