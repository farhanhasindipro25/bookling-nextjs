import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function MediumScreenHero() {
  return (
    <div className="pt-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-4">
        <div className="w-full h-full flex flex-col justify-evenly">
          <h2 className="text-2xl font-semibold text-blue-950">
            BOUNDLESS WORLDS
            <span className="text-xl ml-2 text-blue-700">
              ONE UNIFIED PLATFORM
            </span>
          </h2>
          <p className="text-blue-950 text-sm font-medium">
            From classics to contemporary tales, find your literary haven here.
            Books that resonate, stories that endure.
          </p>
          <span className="pr-6">
            <div className="flex items-center gap-2 justify-start">
              <Image
                src="/assets/gallery/jobs.jpg"
                alt="Steve-Jobs"
                width={500}
                height={500}
                loading="lazy"
                className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-blue-600 rounded-full"
              />
              <div>
                <p className="italic text-sm font-semibold text-blue-950">
                  Steve Jobs
                </p>
                <p className="text-gray-500 text-sm italic font-medium">
                  "The only way to do great work is to love what you do."
                </p>
              </div>
            </div>
          </span>
          <Image
            src="/assets/gallery/img5.jpg"
            alt="Steve-Jobs"
            width={500}
            height={500}
            loading="lazy"
            className="w-full h-28 rounded-xl object-cover object-center"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/assets/gallery/img7.jpg"
            alt="main-banner"
            height={3000}
            width={3000}
            className="object-cover object-center aspect-auto h-full rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col gap-4 h-full">
          <Image
            src="/assets/gallery/banner2.jpg"
            alt="main-banner"
            height={3000}
            width={3000}
            className="object-cover object-center aspect-auto h-9/11 rounded-xl"
          />
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-lg font-semibold text-blue-950">
                Explore Books
              </h2>
              <p className="font-medium text-gray-500">
                Find books of different authors, view details, and many more
              </p>
            </div>
            <Link
              href="/login"
              className="hover:scale-75 hover:rotate-45 ease-in-out duration-300 cursor-pointer"
            >
              <ArrowUpRightIcon className="w-16 h-16 bg-blue-700 p-4 rounded-full text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
