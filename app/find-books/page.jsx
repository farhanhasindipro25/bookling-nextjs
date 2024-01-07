"use client";
import getGlobalBooksList from "@/services/getGlobalBooksList";
import { useQuery } from "@tanstack/react-query";
import BookCard from "./components/BookCard";
import BookCardSkeleton from "./components/skeleton/BookCardSkeleton";
import BookCardError from "./components/error/BookCardError";

export default function FindBooksPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/find-books"],
    queryFn: () => getGlobalBooksList(),
  });

  if (isLoading) return <BookCardSkeleton />;
  if (isError) return <BookCardError />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {data?.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
