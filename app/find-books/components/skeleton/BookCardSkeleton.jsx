import Badge from "@/components/Badge";
import Image from "next/image";
import { CakeIcon } from "@heroicons/react/24/outline";
import SelectField from "@/components/forms/SelectField";

export default function BookCardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full">
        <div className="w-full md:w-1/3">
          <SelectField
            label="Publication Date"
            name="publication_date"
            id="publication_date"
            disabled={true}
          />
        </div>
        <div className="w-full md:w-1/3">
          <SelectField
            label="Author Gender"
            name="author_gender"
            id="author_gender"
          />
        </div>
        <div className="w-full md:w-1/3">
          <SelectField
            label="Book Category"
            name="book_category"
            id="book_category"
          />
        </div>
      </div>
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
              <div className="space-y-4">
                <div className="flex pt-2 items-center justify-start gap-2">
                  <Image
                    src="/assets/img-placeholder.jpg"
                    alt="author-skeleton"
                    width={100}
                    height={100}
                    priority
                    className="w-10 h-10 rounded-full object-cover aspect-auto object-top"
                  />
                  <div className="w-full space-y-2">
                    <div className="bg-gray-200 w-3/4 h-3 rounded-full" />
                    <div className="bg-gray-200 w-1/2 h-3 rounded-full" />
                  </div>
                </div>
                <div className="flex justify-end items-center gap-2">
                  <CakeIcon className="w-6 h-6 text-gray-300 rounded-md" />
                  <div className="bg-gray-200 w-1/2 h-3 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
