import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  gradient?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  gradient = false,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'py-20',
        gradient && 'bg-gradient-to-b from-white via-primary-50/30 to-white',
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
