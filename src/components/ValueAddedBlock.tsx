interface ValueAddedBlockProps {
  label: string;
  statement: string;
}

/**
 * ValueAddedBlock is a full-width strip that communicates the project's value
 * without interaction. It sits directly beneath the hero media.
 */
export function ValueAddedBlock({ label, statement }: ValueAddedBlockProps) {
  return (
    <section
      aria-label={label}
      className="border-t border-b border-neutral-200 py-6"
    >
      <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
        {label}
      </p>
      <p className="text-base text-[#111] sm:text-lg max-w-prose">
        {statement}
      </p>
    </section>
  );
}
