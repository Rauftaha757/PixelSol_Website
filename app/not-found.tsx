import Link from "next/link";

/**
 * 404 — the "dead link" page, in the Studio Dossier system.
 * Server component; matches the bone canvas, Fraunces headline, hairlines,
 * vermilion accent and bespoke mark used across the site.
 */
export default function NotFound() {
  return (
    <section className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-6 pb-16 pt-32 md:px-12 md:pt-40">
      {/* top metadata strip */}
      <div className="flex items-center justify-between border-b border-rule pb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-60">
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-vermilion" />
          Error 404
        </span>
        <span className="hidden sm:inline">This page doesn't exist</span>
        <span>Build / Fix / Rescue</span>
      </div>

      {/* main */}
      <div className="grid flex-1 grid-cols-1 items-center gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
            § — Not found
          </span>
          <h1 className="mt-4 font-display text-[clamp(3rem,10vw,8rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
            This page
            <br />
            <span className="italic font-light">drifted off</span>.
          </h1>
          <p className="mt-8 max-w-[44ch] text-base leading-relaxed text-ink-60 md:text-lg">
            The link you followed leads nowhere — a half-finished route, a
            stale bookmark, or something we moved. Nothing is broken; it's
            just not here. Let's get you back to the work.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row md:items-center">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-3 rounded-sharp bg-vermilion px-7 py-4 text-sm font-medium tracking-wide text-bone transition-colors duration-300 hover:bg-vermilion-dim"
            >
              Back to the dossier
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 8h8M8 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sharp border border-rule-strong px-7 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
            >
              Report a broken link
            </Link>
          </div>
        </div>

        {/* faceted mark (echoes the 3D object's reduced-motion fallback) */}
        <div className="grid place-items-center md:col-span-4" aria-hidden>
          <svg viewBox="0 0 200 200" className="h-56 w-56 text-vermilion md:h-72 md:w-72">
            <polygon
              points="100,15 170,55 170,145 100,185 30,145 30,55"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <polygon
              points="100,15 100,185 30,55 170,145"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <polygon
              points="100,15 30,145 170,145"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <circle cx="100" cy="100" r="14" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* footer line */}
      <div className="border-t border-rule pt-6">
        <p className="font-display text-base italic text-ink-60">
          Even the best code has bugs. We're here to fix them.
        </p>
      </div>
    </section>
  );
}
