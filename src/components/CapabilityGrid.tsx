import type { Capability } from '../data/home';

/**
 * CapabilityGrid presents four compact capability cards: one row of intent per
 * card, kept short so the section reads as positioning rather than a skills wall.
 */
export function CapabilityGrid({ capabilities }: { capabilities: Capability[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {capabilities.map((cap) => (
        <div
          key={cap.title}
          className="rounded-xl border border-neutral-200 p-5 space-y-2"
        >
          <h3 className="text-base font-semibold text-[#111]">{cap.title}</h3>
          <p className="text-sm leading-relaxed text-neutral-600">{cap.text}</p>
        </div>
      ))}
    </div>
  );
}
