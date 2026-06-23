import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" aria-label="Go to homepage">
            <img src="/logo.png" alt="Hardik Monga" className="h-5 w-auto" />
          </Link>
        </Container>
      </header>

      <main id="main-content">
        {children}
      </main>
    </div>
  );
}
