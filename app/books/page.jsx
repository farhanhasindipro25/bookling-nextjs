"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getGlobalBooksList from "@/services/getGlobalBooksList";
import BookCardSkeleton from "../find-books/components/skeleton/BookCardSkeleton";
import BookCardError from "../find-books/components/error/BookCardError";
import FilterPanel from "../find-books/components/FilterPanel";
import BookCard from "../find-books/components/BookCard";

export default function BooksPage() {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/find-books"],
    queryFn: () => getGlobalBooksList(),
  });

  if (isLoading) {
    setTimeout(() => {
      return <BookCardSkeleton />;
    }, 5000);
  }
  if (isError) return <BookCardError />;

  return (
    <div className="space-y-6">
      <FilterPanel
        data={data}
        isFilterActive={isFilterActive}
        setIsFilterActive={setIsFilterActive}
        isLoading={isLoading}
        isError={isError}
      />
      {isFilterActive === false ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data?.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
