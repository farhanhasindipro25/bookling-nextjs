import cn from "@/app/utils/UtilsKit";
import { cva } from "class-variance-authority";

const DEFAULT_BADGE_STYLES =
  "h-fit inline-flex items-center font-semibold shadow-sm rounded-full px-3 py-1 text-xs w-fit";
const NON_FICTION_BADGE_STYLES = "bg-gray-200 text-neutral-600";
const ROMANCE_BADGE_STYLES = "bg-pink-200 text-pink-700";
const SCIENCE_FICTION_BADGE_STYLES = "bg-sky-200 text-sky-700";
const FICTION_BADGE_STYLES = "bg-orange-100 text-gray-700";
const BUSINESS_BADGE_STYLES = "bg-green-200 text-green-700";
const THRILLER_BADGE_STYLES = "bg-amber-200 text-amber-700";

const BADGE_VARIANTS = cva(DEFAULT_BADGE_STYLES, {
  variants: {
    variant: {
      "Non-Fiction": NON_FICTION_BADGE_STYLES,
      Romance: ROMANCE_BADGE_STYLES,
      Business: BUSINESS_BADGE_STYLES,
      Fiction: FICTION_BADGE_STYLES,
      "Science Fiction": SCIENCE_FICTION_BADGE_STYLES,
      Thriller: THRILLER_BADGE_STYLES,
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
