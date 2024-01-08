import cn from "@/utils/UtilsKit";
import { cva } from "class-variance-authority";

const DEFAULT_BUTTON_STYLES =
  "h-fit inline-flex items-center rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2  cursor-pointer px-4 py-3 text-base font-semibold";

const PRIMARY_BUTTON_STYLES =
  "bg-blue-600 text-gray-50 hover:bg-blue-700 active:bg-blue-400 focus:bg-blue-400 focus:ring-blue-400";
const SECONDARY_BUTTON_STYLES =
  "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 hover:border-blue-700 active:bg-blue-50 active:border-blue-700 focus:bg-blue-50 focus:border-blue-700 active:text-blue-600 focus:text-blue-600 focus:ring-blue-700";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
  variants: {
    variant: {
      primary: PRIMARY_BUTTON_STYLES,
      secondary: SECONDARY_BUTTON_STYLES,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function Button({
  children,
  variant,
  size,
  className,
  type,
  ...props
}) {
  const BUTTON_STYLES = cn(BUTTON_VARIANTS({ variant }), className);

  return (
    <button className={BUTTON_STYLES} type={type} {...props}>
      {children}
    </button>
  );
}
