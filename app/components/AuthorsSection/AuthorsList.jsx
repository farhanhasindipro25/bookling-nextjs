"use client";
import getAuthorsList from "@/services/getAuthorsList";
import AuthorCard from "./AuthorCard";
import { useQuery } from "@tanstack/react-query";
import AuthorCardSkeleton from "./skeleton/AuthorCardSkeleton";
import AuthorCardError from "./error/AuthorCardError";

export default function AuthorsList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/authors"],
    queryFn: () => getAuthorsList(),
  });

  if (isLoading) {
    setTimeout(() => {
      return <AuthorCardSkeleton />;
    }, 5000);
  }
  if (isError) return <AuthorCardError />;

  return (
    <div className="py-0 md:py-6 lg:py-24 space-y-4 md:space-y-12">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-950">
        TOP
        <span className="text-xl md:text-3xl lg:text-4xl ml-4 text-blue-700">
          AUTHORS
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
}
