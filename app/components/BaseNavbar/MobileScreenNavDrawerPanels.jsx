import Button from "@/components/forms/Button";
import cn from "@/utils/UtilsKit";
import { HomeIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileNavOptions = [
  { icon: HomeIcon, name: "Home", href: "/" },
  { icon: BookOpenIcon, name: "Find Books", href: "/find-books" },
];

const DEFAULT_STYLES =
  "flex w-full items-center gap-2 rounded-md py-2 px-4 cursor-pointer";
const DEFAULT_NAV_BACKGROUND_STYLES = "hover:bg-blue-50";
const ACTIVE_NAV_BACKGROUND_STYLES = "bg-blue-100";
const DEFAULT_NAV_TEXT_STYLES = "text-gray-500 font-normal";
const ACTIVE_NAV_TEXT_STYLES = "text-blue-600 font-semibold";
const DEFAULT_NAV_ICON_STYLES = "text-gray-500 font-normal";
const ACTIVE_NAV_ICON_STYLES = "text-blue-600 font-medium";

export default function MobileScreenNavDrawerPanel({ me, setOpen }) {
  const pathname = usePathname();
  const isActiveRoute = (currentNav) => currentNav === pathname;

  return (
    <nav className="space-y-4 divide-y divide-gray-300">
      <div className="space-y-4">
        {mobileNavOptions?.map((option, index) => (
          <Link
            href={option.href}
            key={index + 1}
            onClick={() => setOpen(false)}
            className={cn(
              isActiveRoute(option.href)
                ? ACTIVE_NAV_BACKGROUND_STYLES
                : DEFAULT_NAV_BACKGROUND_STYLES,
              DEFAULT_STYLES
            )}
          >
            <option.icon
              className={cn(
                isActiveRoute(option.href)
                  ? ACTIVE_NAV_ICON_STYLES
                  : DEFAULT_NAV_ICON_STYLES,
                "w-5 h-5"
              )}
            />
            <h2
              className={cn(
                isActiveRoute(option.href)
                  ? ACTIVE_NAV_TEXT_STYLES
                  : DEFAULT_NAV_TEXT_STYLES,
                "text-sm"
              )}
            >
              {option.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="flex justify-end pt-4">
        <Link href="/login" onClick={() => setOpen(false)}>
          <Button variant="secondary">LOGIN</Button>
        </Link>
      </div>
    </nav>
  );
}
