import { Reading } from './Layout';
import type { HomeContact } from '../data/home';

/**
 * ContactSection makes the next action obvious. CTAs only render when real
 * contact details exist; otherwise a neutral fallback line is shown so the page
 * never carries dead links or fabricated contact info.
 */
export function ContactSection({
  contact,
  resumeUrl,
}: {
  contact: HomeContact;
  resumeUrl?: string;
}) {
  const hasContact = Boolean(contact.email || contact.linkedin || resumeUrl);

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-neutral-200 pt-10">
      <Reading className="space-y-4">
        <h2
          id="contact-heading"
          className="text-xl font-semibold text-[#111] sm:text-2xl"
        >
          {contact.heading}
        </h2>
        <p className="text-base leading-relaxed text-neutral-600">{contact.body}</p>

        {hasContact ? (
          <div className="flex flex-wrap gap-3 pt-1">
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-[44px] items-center rounded-full bg-[#111] px-5 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
              >
                Email me
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-full border border-neutral-300 px-5 text-sm font-medium text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
              >
                LinkedIn
              </a>
            )}
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-full border border-neutral-300 px-5 text-sm font-medium text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
              >
                Resume
              </a>
            )}
          </div>
        ) : (
          <p className="text-sm text-neutral-500">Contact details coming soon.</p>
        )}
      </Reading>
    </section>
  );
}
