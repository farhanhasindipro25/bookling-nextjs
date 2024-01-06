"use client";
import getBooksList from "@/app/services/getBooksList";
import { useQuery } from "@tanstack/react-query";

export default function BooksListView() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/books"],
    queryFn: () => getBooksList(),
  });
  console.log(data);
  return <div clas>{data?.map((book) => "jkl")}</div>;
}
