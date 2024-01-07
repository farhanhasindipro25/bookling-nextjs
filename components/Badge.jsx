import cn from "@/utils/UtilsKit";
import { cva } from "class-variance-authority";

const DEFAULT_BADGE_STYLES =
  "h-fit inline-flex items-center font-semibold shadow-sm rounded-full px-3 py-1 text-xs w-fit";
const NON_FICTION_BADGE_STYLES = "bg-gray-200 text-neutral-600";
const ROMANCE_BADGE_STYLES = "bg-pink-200 text-pink-700";
const SCIENCE_FICTION_BADGE_STYLES = "bg-sky-200 text-sky-700";
const FICTION_BADGE_STYLES = "bg-orange-100 text-gray-700";
const BUSINESS_BADGE_STYLES = "bg-green-200 text-green-700";
const THRILLER_BADGE_STYLES = "bg-amber-200 text-amber-700";
const SKELETON_BADGE_STYLES = "bg-gray-300 w-16 h-4";
const ADVENTURE_BADGE_STYLES = "bg-indigo-200 text-indigo-700";
const PHILOSOPHY_BADGE_STYLES = "bg-blue-200 text-blue-700";
const FANTASY_BADGE_STYLES = "bg-cyan-200 text-cyan-700";
const MYSTERY_BADGE_STYLES = "bg-cyan-200 text-cyan-700";
const MUSIC_BADGE_STYLES = "bg-emerald-200 text-emerald-700";
const NATURE_BADGE_STYLES = "bg-emerald-200 text-emerald-700";
const ART_BADGE_STYLES = "bg-red-200 text-red-700";
const INSPIRATIONAL_BADGE_STYLES = "bg-violet-200 text-violet-700";
const HISTORY_BADGE_STYLES = "bg-amber-200 text-amber-700";

const BADGE_VARIANTS = cva(DEFAULT_BADGE_STYLES, {
  variants: {
    variant: {
      "Non-Fiction": NON_FICTION_BADGE_STYLES,
      Romance: ROMANCE_BADGE_STYLES,
      Business: BUSINESS_BADGE_STYLES,
      Fiction: FICTION_BADGE_STYLES,
      "Science Fiction": SCIENCE_FICTION_BADGE_STYLES,
      Thriller: THRILLER_BADGE_STYLES,
      Skeleton: SKELETON_BADGE_STYLES,
      Adventure: ADVENTURE_BADGE_STYLES,
      Philosophy: PHILOSOPHY_BADGE_STYLES,
      Fantasy: FANTASY_BADGE_STYLES,
      Mystery: MYSTERY_BADGE_STYLES,
      Music: MUSIC_BADGE_STYLES,
      Art: ART_BADGE_STYLES,
      Nature: NATURE_BADGE_STYLES,
      Inspirational: INSPIRATIONAL_BADGE_STYLES,
      History: HISTORY_BADGE_STYLES,
    },
  },
  defaultVariants: {
    variant: "Non-Fiction",
  },
});

export default function Badge({ children, className, variant, ...props }) {
  const BADGE_STYLES = cn(BADGE_VARIANTS({ variant }), className);

  return (
    <span className={BADGE_STYLES} {...props}>
      {children}
    </span>
  );
}
