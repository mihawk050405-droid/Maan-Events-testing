import type { ReactNode } from "react";

/**
 * Hand-drawn line set for the "Our Infra" disciplines.
 *
 * One grid for all thirteen: every drawing sits on the same baseline
 * (y=55) within the same 8–56 band, so the column reads as one
 * technical sheet rather than thirteen unrelated marks. Two inks only
 * — bone draws the structure, gold draws the finishing layer (the
 * valance, the skin, the linen, the placed piece).
 */

const GOLD = "var(--color-gold-soft)";

type Art = { structure: ReactNode; accent: ReactNode };

const ART: Record<string, Art> = {
  "facades-and-stalls": {
    structure: (
      <>
        <path d="M12 40H52" />
        <path d="M12 40V55" />
        <path d="M52 40V55" />
        <path d="M12 47.5H52" />
        <path d="M16.5 40V28" />
        <path d="M47.5 40V28" />
        <path d="M10 28L15.5 20H48.5L54 28" />
      </>
    ),
    accent: (
      <path d="M10 28a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0" />
    ),
  },

  barricading: {
    structure: (
      <>
        <path d="M8 20H56" />
        <path d="M8 44H56" />
        <path d="M8 20V44" />
        <path d="M56 20V44" />
        <path d="M14 20V44" />
        <path d="M20 20V44" />
        <path d="M44 20V44" />
        <path d="M50 20V44" />
        <path d="M12 44V55" />
        <path d="M52 44V55" />
      </>
    ),
    accent: <path d="M24 20H40V44H24Z" />,
  },

  "megastructures-and-superstructures": {
    structure: (
      <>
        <path d="M8 20H56" />
        <path d="M8 28H56" />
        <path d="M8 28L14 20L20 28L26 20L32 28L38 20L44 28L50 20L56 28" />
        <path d="M11 28V55" />
        <path d="M15 28V55" />
        <path d="M11 35H15" />
        <path d="M11 42H15" />
        <path d="M11 49H15" />
        <path d="M49 28V55" />
        <path d="M53 28V55" />
        <path d="M49 35H53" />
        <path d="M49 42H53" />
        <path d="M49 49H53" />
      </>
    ),
    accent: (
      <>
        <path d="M8 12H56" />
        <path d="M8 9V15" />
        <path d="M56 9V15" />
      </>
    ),
  },

  "pagodas-and-cottages": {
    structure: (
      <>
        <path d="M14 42V55" />
        <path d="M50 42V55" />
        <path d="M10 42H54" />
        <path d="M10 42Q30 30 32 18" />
        <path d="M54 42Q34 30 32 18" />
        <path d="M32 18V14.6" />
      </>
    ),
    accent: (
      <>
        <path d="M10 42a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0a2.75 2.75 0 005.5 0" />
        <path d="M32 9.4L34.6 12L32 14.6L29.4 12Z" />
      </>
    ),
  },

  "transparent-hangars": {
    structure: (
      <>
        <path d="M8 55V30L32 16L56 30V55" />
        <path d="M8 30H56" />
        <path d="M20 30V55" />
        <path d="M32 30V55" />
        <path d="M44 30V55" />
        <path d="M8 42.5H56" />
        <path d="M32 16V30" />
      </>
    ),
    accent: (
      <>
        <path d="M22 41.5L30.5 33" />
        <path d="M25.5 41.5L30.5 36.5" />
      </>
    ),
  },

  "event-decoration": {
    structure: (
      <>
        <path d="M8 15H56" />
        <circle cx="7" cy="15" r="1.8" />
        <circle cx="57" cy="15" r="1.8" />
        <path d="M13 15C10.5 29 15.5 41 13 55" />
        <path d="M51 15C53.5 29 48.5 41 51 55" />
        <path d="M13 15Q32 33 51 15" />
        <path d="M13 15Q32 26 51 15" />
      </>
    ),
    accent: (
      <>
        <circle cx="32" cy="26.5" r="2.4" />
        <path d="M35.6 26.5H38.4" />
        <path d="M33.8 29.6L35.2 32" />
        <path d="M30.2 29.6L28.8 32" />
        <path d="M28.4 26.5H25.6" />
        <path d="M30.2 23.4L28.8 21" />
        <path d="M33.8 23.4L35.2 21" />
      </>
    ),
  },

  "venue-construction": {
    structure: (
      <>
        <path d="M10 55V48H54V55" />
        <path d="M22 48V55" />
        <path d="M32 48V55" />
        <path d="M42 48V55" />
        <path d="M27 48V24" />
        <path d="M37 48V24" />
        <path d="M27 42H37" />
        <path d="M27 36H37" />
        <path d="M27 30H37" />
        <path d="M27 48L37 42" />
        <path d="M27 42L37 36" />
        <path d="M27 36L37 30" />
        <path d="M27 30L37 24" />
        <path d="M46 12V30" />
      </>
    ),
    accent: <path d="M40 30H52V34H40Z" />,
  },

  "staging-and-platforming": {
    structure: (
      <>
        <path d="M5 55V50H10V45H15V40" />
        <path d="M54 40V55" />
        <path d="M15 48H54" />
        <path d="M21 40V30H34V40" />
        <path d="M34 30V22H47V30" />
      </>
    ),
    accent: <path d="M15 40H54" />,
  },

  "german-hangars": {
    structure: (
      <>
        <path d="M5 55V32L32 22L59 32V55" />
        <path d="M5 32H59" />
        <path d="M9 32L32 23.5" />
        <path d="M55 32L32 23.5" />
        <path d="M17 55V27.6" />
        <path d="M47 55V27.6" />
      </>
    ),
    accent: <path d="M26.5 24L28.5 18.5H35.5L37.5 24" />,
  },

  "trussing-and-draping": {
    structure: (
      <>
        <path d="M6 14H58" />
        <path d="M6 22H58" />
        <path d="M6 22L12.5 14L19 22L25.5 14L32 22L38.5 14L45 22L51.5 14L58 22" />
        <path d="M10 22V55" />
        <path d="M54 22V55" />
      </>
    ),
    accent: (
      <>
        <path d="M17 22C15 33 19 44 17 55" />
        <path d="M25 22C23 33 27 44 25 55" />
        <path d="M32 22C30 33 34 44 32 55" />
        <path d="M39 22C37 33 41 44 39 55" />
        <path d="M47 22C45 33 49 44 47 55" />
      </>
    ),
  },

  "air-conditioning": {
    structure: (
      <>
        <path d="M8 22H31V48H8Z" />
        <path d="M12 48V55" />
        <path d="M27 48V55" />
        <path d="M12 28H27" />
        <path d="M12 34H27" />
        <path d="M12 40H27" />
        <path d="M31 28H50" />
        <path d="M31 38H50" />
        <path d="M50 28V38" />
        <path d="M37 28V38" />
        <path d="M43.5 28V38" />
      </>
    ),
    accent: (
      <>
        <path d="M51.5 28.5c2.5-2.5 5 2.5 7.5 0" />
        <path d="M51.5 33c2.5-2.5 5 2.5 7.5 0" />
        <path d="M51.5 37.5c2.5-2.5 5 2.5 7.5 0" />
      </>
    ),
  },

  furniture: {
    structure: (
      <>
        <path d="M20 32H44" />
        <path d="M20 32V52" />
        <path d="M44 32V52" />
        <path d="M9 26V55" />
        <path d="M9 26H15V38" />
        <path d="M9 38H18" />
        <path d="M18 38V55" />
        <path d="M55 26V55" />
        <path d="M55 26H49V38" />
        <path d="M55 38H46" />
        <path d="M46 38V55" />
      </>
    ),
    accent: (
      <>
        <path d="M20 52q6 3 12 0q6 3 12 0" />
        <path d="M32 32V28.5" />
        <circle cx="32" cy="26.6" r="1.6" />
        <circle cx="29.4" cy="28.4" r="1.3" />
        <circle cx="34.6" cy="28.4" r="1.3" />
      </>
    ),
  },

  "weather-sheds": {
    structure: (
      <>
        <path d="M6 25L56 33" />
        <path d="M12 26V55" />
        <path d="M32 29.2V55" />
        <path d="M52 32.4V55" />
        <path d="M22 23.6V27.6" />
        <path d="M42 26.8V30.8" />
      </>
    ),
    accent: (
      <>
        <path d="M6 21L56 29" />
        <path d="M6 21V25" />
        <path d="M56 29V33" />
      </>
    ),
  },
};

export function InfraIcon({ slug }: { slug: string }) {
  const art = ART[slug];
  if (!art) return null;

  return (
    <div className="relative aspect-square w-full max-w-[220px] shrink-0 mx-auto sm:mx-0">
      <div className="absolute inset-0 border border-line-dark bg-deep-raised/25" />

      {/* Registration ticks — the corner marks of a drawing plate. */}
      <span className="absolute -left-px -top-px h-3.5 w-3.5 border-l border-t border-gold/60" />
      <span className="absolute -right-px -top-px h-3.5 w-3.5 border-r border-t border-gold/60" />
      <span className="absolute -bottom-px -left-px h-3.5 w-3.5 border-b border-l border-gold/60" />
      <span className="absolute -bottom-px -right-px h-3.5 w-3.5 border-b border-r border-gold/60" />

      <div className="absolute inset-0 p-[15%]">
        <svg
          viewBox="0 8 64 48"
          fill="none"
          aria-hidden
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full w-full text-bone/85"
        >
          <g stroke="currentColor" strokeWidth={1.1}>
            {art.structure}
          </g>
          <g stroke={GOLD} strokeWidth={1.3}>
            {art.accent}
          </g>
          <path d="M4 55H60" stroke="currentColor" strokeWidth={1.1} opacity={0.35} />
        </svg>
      </div>
    </div>
  );
}
