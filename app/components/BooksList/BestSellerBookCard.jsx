import Image from "next/image";
export default function BestSellerBookCard({ book }) {
  return (
    <div className="w-full rounded-lg bg-white border border-gray-300 hover:border-blue-600">
      <Image
        src={book.bookImg}
        alt={book.bookName}
        width={2160}
        height={1080}
        className="w-full h-full"
      />
    </div>
  );
}
