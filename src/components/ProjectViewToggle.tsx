import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type ViewMode = 'full' | 'quick';

const VIEW_PARAM = 'view';

/**
 * ProjectViewToggle — two-option segmented control for "Full case" vs "Quick read".
 * Syncs selected state with the `?view=` URL query parameter so the choice
 * survives a page refresh. Quick Read content is not implemented yet; a small
 * non-blocking notice communicates this without hiding existing content.
 */
export function ProjectViewToggle() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialise from URL on mount; default to 'full'
  const paramValue = searchParams.get(VIEW_PARAM);
  const [view, setView] = useState<ViewMode>(
    paramValue === 'quick' ? 'quick' : 'full',
  );

  // Keep URL in sync when state changes
  useEffect(() => {
    const current = searchParams.get(VIEW_PARAM);
    if (view === 'full' && current !== null) {
      // Remove param entirely when on default
      const next = new URLSearchParams(searchParams);
      next.delete(VIEW_PARAM);
      setSearchParams(next, { replace: true });
    } else if (view === 'quick' && current !== 'quick') {
      const next = new URLSearchParams(searchParams);
      next.set(VIEW_PARAM, 'quick');
      setSearchParams(next, { replace: true });
    }
  }, [view, searchParams, setSearchParams]);

  function handleSelect(mode: ViewMode) {
    setView(mode);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        role="group"
        aria-label="Project view"
        className="flex rounded-lg border border-neutral-200 p-0.5"
      >
        <ToggleButton
          label="Full case"
          active={view === 'full'}
          onClick={() => handleSelect('full')}
        />
        <ToggleButton
          label="Quick read"
          active={view === 'quick'}
          onClick={() => handleSelect('quick')}
        />
      </div>

      {view === 'quick' && (
        <p className="text-xs text-neutral-400" role="status" aria-live="polite">
          Quick read coming after the full case is complete.
        </p>
      )}
    </div>
  );
}

interface ToggleButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function ToggleButton({ label, active, onClick }: ToggleButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={[
        'min-h-[44px] min-w-[44px] rounded-md px-4 py-1.5 text-sm font-medium transition-colors',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]',
        active
          ? 'bg-[#111] text-white'
          : 'bg-transparent text-neutral-500 hover:text-[#111]',
      ].join(' ')}
    >
      {label}
    </button>
  );
}
