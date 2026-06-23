import type { ReactNode } from 'react';
import { Container } from './Layout';

interface AppShellProps {
  children: ReactNode;
}

/**
 * AppShell wraps every page with the global header and a centered container.
 * Max content width: 1120px. Side padding scales from 16px (mobile) to 48px (desktop).
 */
export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <header className="border-b border-neutral-200 py-4">
        <Container>
          <span className="inline-block rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium tracking-wide text-neutral-500">
            Hardik Monga
          </span>
        </Container>
      </header>

      <main id="main-content">
        {children}
      </main>
    </div>
  );
}
