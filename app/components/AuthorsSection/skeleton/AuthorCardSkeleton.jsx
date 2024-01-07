import { CakeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function AuthorCardSkeleton() {
  return (
    <div className="py-0 md:py-6 lg:py-24 space-y-4 md:space-y-12">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-950">
        TOP
        <span className="text-xl md:text-3xl lg:text-4xl ml-4 text-blue-700">
          AUTHORS
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
        {[...Array(6).keys()].map((index) => (
          <div key={index + 1} className="w-full rounded-lg bg-white shadow-md">
            <Image
              src="/assets/img-placeholder.jpg"
              alt="author-img-skeleton"
              width={2160}
              height={1080}
              priority
              className="w-full rounded-t-lg object-cover aspect-auto"
            />

            <div className="p-4 space-y-1 divide-y divide-gray-200">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="bg-gray-200 w-1/3 h-3 rounded-full" />
                  <div className="bg-gray-200 w-1/3 h-3 rounded-full" />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <CakeIcon className="w-6 h-6 text-gray-400 rounded-md" />
                  <div className="bg-gray-200 w-1/3 h-3 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
