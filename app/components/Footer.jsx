import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col space-y-6 items-center justify-center p-6 bg-white">
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
      <h2 className="text-base font-medium text-blue-950">
        Made with ❤️ by{" "}
        <span className="text-blue-700 font-semibold">Farhan Hasin Dipro</span>
      </h2>
    </div>
  );
}
