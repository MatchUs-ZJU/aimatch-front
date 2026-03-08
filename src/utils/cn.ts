import { type ClassValue, clsx } from 'clsx';

// 简单的 cn 实现，不依赖 tailwind-merge
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
