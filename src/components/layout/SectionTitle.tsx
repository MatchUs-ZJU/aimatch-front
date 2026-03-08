import React from 'react';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  highlight,
  subtitle,
  className,
}) => {
  return (
    <div className={cn('text-center mb-16', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
