import { getDateInDMYFormat } from "@/app/utils/UtilsKit";
import Badge from "@/components/providers/Badge";
import Image from "next/image";
export default function BestSellerBookCard({ book }) {
  return (
    <div className="w-full rounded-lg bg-white border border-gray-300 shadow-md relative">
      <Image
        src={book.bookImg || "/assets/img-placeholder.jpg"}
        alt={book.bookName}
        width={2160}
        height={1080}
        priority
        className="w-full rounded-t-lg object-cover aspect-auto"
      />
      <div className="absolute top-4 left-4">
        <Badge variant={book.bookCategory}>{book.bookCategory}</Badge>
      </div>
      <div className="p-4 space-y-1 divide-y divide-gray-200">
        <div>
          <h2 className="text-blue-950 font-semibold text-base">
            {book.bookName}
          </h2>
          <p className="text-gray-500 font-medium text-sm">
            {getDateInDMYFormat(book.publicationDate)}
          </p>
        </div>
        <div className="flex pt-2 items-center justify-start gap-2">
          <Image
            src={book.authorAvatar || "/assets/img-placeholder.jpg"}
            alt={book.bookName}
            width={100}
            height={100}
            priority
            className="w-8 h-8 rounded-full object-cover aspect-auto object-top"
          />
          <h2 className="font-medium text-blue-950 text-sm">
            {book.authorName}
          </h2>
        </div>
      </div>
    </div>
  );
}
