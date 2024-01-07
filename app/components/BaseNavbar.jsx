import Link from "next/link";
import Image from "next/image";

export default function BaseNavbar() {
  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
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
          <Link href="/login">
            <button className="bg-white border border-blue-600 rounded-md text-sm font-semibold text-blue-600 px-4 py-3 hover:bg-blue-50">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
