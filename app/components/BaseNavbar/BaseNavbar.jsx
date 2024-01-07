"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import cn from "@/utils/UtilsKit";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import RightSideDrawer from "@/components/RightSideDrawer";
import MobileScreenNavDrawerPanel from "./MobileScreenNavDrawerPanels";

const navOptions = [
  { name: "Home", href: "/" },
  { name: "Find Books", href: "/find-books" },
];

const DEFAULT_STYLES =
  "flex justify-center items-center cursor-pointer text-base truncate p-3";
const ACTIVE_TAB_STYLES =
  "font-medium text-blue-700 border-b-2 border-blue-700";
const DEFAULT_TAB_STYLES = "font-medium text-blue-950";

export default function BaseNavbar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <Link href="/" className="flex items-center gap-2 mr-4">
              <Image
                src="/assets/logo/logo.jpg"
                width={500}
                height={500}
                alt="logo"
                className="w-10 h-full"
                priority
              />
              <p className="font-semibold text-blue-950">BOOKLING</p>
            </Link>
            <div className="hidden lg:gap-4 lg:flex">
              {navOptions?.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className={cn(
                    DEFAULT_STYLES,
                    pathname === item.href
                      ? ACTIVE_TAB_STYLES
                      : DEFAULT_TAB_STYLES
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/login">
            <button className="bg-white border border-blue-600 rounded-md text-sm font-semibold text-blue-600 px-4 py-3 hover:bg-blue-50 lg:block hidden">
              LOGIN
            </button>
          </Link>
          <Bars3Icon
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="block text-gray-700 w-7 lg:hidden"
          />
          <RightSideDrawer setOpen={setIsDrawerOpen} open={isDrawerOpen}>
            <MobileScreenNavDrawerPanel setOpen={setIsDrawerOpen} />
          </RightSideDrawer>
        </div>
      </div>
    </div>
  );
}
