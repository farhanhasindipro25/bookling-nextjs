"use client";
import getBooksList from "@/services/getBooksList";
import { useQuery } from "@tanstack/react-query";
import BestSellerBookCard from "./BestSellerBookCard";
import BestSellerCardSkeleton from "./skeleton/BestSellerCardSkeleton";
import BestSellerBookError from "./error/BestSellerBookError";

export default function BestSellerBooksListView() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/books"],
    queryFn: () => getBooksList(),
  });

  if (isLoading) {
    setTimeout(() => {
      return <BestSellerCardSkeleton />;
    }, 5000);
  }
  if (isError) return <BestSellerBookError />;

  return (
    <div className="py-20 lg:py-24 space-y-4 md:space-y-12">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-950">
        BEST SELLERS
        <span className="text-xl md:text-3xl lg:text-4xl ml-4 text-blue-700">
          (RECENT ADDITIONS)
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data?.map((book) => (
          <BestSellerBookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
