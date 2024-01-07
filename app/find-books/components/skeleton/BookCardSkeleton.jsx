import Badge from "@/components/Badge";
import Image from "next/image";

export default function BookCardSkeleton() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-pulse">
        {[...Array(10).keys()].map((index) => (
          <div
            key={index + 1}
            className="w-full rounded-lg bg-white shadow-md relative"
          >
            <Image
              src={"/assets/img-placeholder.jpg"}
              alt="book-skeleton"
              width={2160}
              height={1080}
              priority
              className="w-full rounded-t-lg object-cover aspect-auto"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="Skeleton" />
            </div>
            <div className="p-4 space-y-2 divide-y divide-gray-200">
              <div className="space-y-2">
                <div className="bg-gray-200 w-3/4 h-3 rounded-full" />
                <div className="bg-gray-100 w-1/2 h-3 rounded-full" />
              </div>
              <div className="flex pt-2 items-center justify-start gap-2">
                <Image
                  src="/assets/img-placeholder.jpg"
                  alt="author-skeleton"
                  width={100}
                  height={100}
                  priority
                  className="w-8 h-8 rounded-full object-cover aspect-auto object-top"
                />
                <div className="bg-gray-200 w-1/2 h-3 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
