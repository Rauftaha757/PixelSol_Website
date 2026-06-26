/**
 * Marks — bespoke SVG glyphs for the "Studio Dossier" system.
 * Hand-drawn from scratch (NO icon library — no lucide / Heroicons / etc.),
 * each tied to a section or idea. 1.5px stroke, currentColor, 24x24 viewBox.
 *
 * Usage: <Marks.Build className="h-6 w-6" />
 */
import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement> & { title?: string };

const base = (title?: string): SVGProps<SVGSVGElement> => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  role: "img",
  "aria-label": title,
});

/** Build — a node assembling into a system (the brand verb) */
export function Build(props: MarkProps) {
  const { title, ...rest } = props;
  return (
    <svg {...base(title)} {...rest}>
      <path d="M4 20V10l8-5 8 5v10" />
      <path d="M9 20v-5h6v5" />
      <circle cx="12" cy="9" r="1.2" />
    </svg>
  );
}

/** Fix — a mend stitch / suture (a broken line rejoined) */
export function Fix(props: MarkProps) {
  const { title, ...rest } = props;
  return (
    <svg {...base(title)} {...rest}>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}

/** Rescue — a lifeline pulled taut */
export function Rescue(props: MarkProps) {
  const { title, ...rest } = props;
  return (
    <svg {...base(title)} {...rest}>
      <circle cx="6" cy="18" r="2" />
      <path d="M6 16 20 4" />
      <path d="M14 4h6v6" />
    </svg>
  );
}

/** Compass — strategy / direction */
export function Compass(props: MarkProps) {
  const { title, ...rest } = props;
  return (
    <svg {...base(title)} {...rest}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15 9-2 4-4 2 2-4z" />
    </svg>
  );
}

/** Code-bracket — engineering */
export function Bracket(props: MarkProps) {
  const { title, ...rest } = props;
  return (
    <svg {...base(title)} {...rest}>
      <path d="M9 5 3 12l6 7" />
      <path d="M15 5l6 7-6 7" />
    </svg>
  );
}

/** Spark / fuse — AI */
export function Fuse(props: MarkProps) {
  const { title, ...rest } = props;
  return (
    <svg {...base(title)} {...rest}>
      <path d="M13 3 5 13h6l-1 8 8-10h-6z" />
    </svg>
  );
}

/** Layers — infrastructure / systems */
export function Layers(props: MarkProps) {
  const { title, ...rest } = props;
  return (
    <svg {...base(title)} {...rest}>
      <path d="M12 3 21 8l-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

/** Arrow-up-right — outbound / view */
export function Arrow(props: MarkProps) {
  const { title, ...rest } = props;
  return (
    <svg {...base(title)} {...rest}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

/** Asterisk — footnote / annotation */
export function Asterisk(props: MarkProps) {
  const { title, ...rest } = props;
  return (
    <svg {...base(title)} {...rest}>
      <path d="M12 4v16M5 8l14 8M19 8 5 16" />
    </svg>
  );
}

/** Wordmark glyph — a single "pixel solved" mark for the nav lockup */
export function Sigil(props: MarkProps) {
  const { title, ...rest } = props;
  return (
    <svg {...base(title)} {...rest}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 17.5h7" />
    </svg>
  );
}

const Marks = {
  Build,
  Fix,
  Rescue,
  Compass,
  Bracket,
  Fuse,
  Layers,
  Arrow,
  Asterisk,
  Sigil,
};
export default Marks;
