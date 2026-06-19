interface MetadataFields {
  readTime: string;
  category: string;
  tools: string;
  projectType: string;
  role: string;
  scope: string;
}

interface ProjectMetadataProps {
  metadata: MetadataFields;
}

interface FieldProps {
  label: string;
  value: string;
  wide?: boolean;
}

function MetaField({ label, value, wide = false }: FieldProps) {
  return (
    <div className={wide ? 'sm:col-span-2' : ''}>
      <dt className="text-xs font-medium uppercase tracking-wider text-neutral-400">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-[#111]">{value}</dd>
    </div>
  );
}

/**
 * ProjectMetadata renders project details in a responsive definition list grid.
 * Two columns on mobile where space allows; wider fields span 2 cols on sm+.
 * Role and Scope are wider fields to accommodate longer text.
 */
export function ProjectMetadata({ metadata }: ProjectMetadataProps) {
  return (
    <section aria-label="Project metadata" className="border-t border-neutral-200 pt-6">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
        <MetaField label="Read time" value={metadata.readTime} />
        <MetaField label="Project type" value={metadata.projectType} />
        <MetaField label="Tools" value={metadata.tools} />
        <MetaField label="Category" value={metadata.category} />
        <MetaField label="Role" value={metadata.role} wide />
        <MetaField label="Scope" value={metadata.scope} wide />
      </dl>
    </section>
  );
}
