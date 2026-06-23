/**
 * ToolStrip is a restrained, visually secondary list of tools. It names what is
 * used without implying expert level in each tool.
 */
export function ToolStrip({ label, tools }: { label: string; tools: string[] }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
        {label}
      </p>
      <ul className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <li
            key={tool}
            className="rounded-md border border-neutral-200 px-2.5 py-1 text-sm text-neutral-600"
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}
