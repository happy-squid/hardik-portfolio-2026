import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container is the wide page shell used for full-width content and media.
 * Width: 100% up to 1120px, centered. Horizontal padding scales:
 * 20px (mobile) → 32px (tablet) → 48px (desktop).
 */
export function Container({ children, className }: LayoutProps) {
  return (
    <div
      className={[
        'mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12',
        className ?? '',
      ].join(' ')}
    >
      {children}
    </div>
  );
}

/**
 * Reading constrains text-heavy content to a comfortable measure (~680px)
 * so paragraphs never stretch across the full media width.
 */
export function Reading({ children, className }: LayoutProps) {
  return (
    <div className={['max-w-[680px]', className ?? ''].join(' ')}>
      {children}
    </div>
  );
}
