"use client";

import { useDebounce } from "@/features/debounce/UseDebounce";
import { Product } from "@/features/types/FlashSaleType";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const searchValue = params.search;

  const { data: searchResults = [], isLoading } = useQuery({
    queryKey: ["search", searchValue],
    queryFn: async () => {
      if (!searchValue) return [];
      const res = await fetch(
        `https://692c7e12c829d464006fb926.mockapi.io/unilab?search=${searchValue}`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    enabled: !!searchValue,
  });

  if (isLoading) return <p>Loading ...</p>;

  if (searchResults.length === 0) notFound()

  return (
    <div>
      {searchResults.map((result: Product) => (
        <div
          key={result.id}
          className="border rounded p-4 shadow-sm max-w-[300px] mx-auto"
        >
          <h3 className="font-bold text-lg">{result.title}</h3>
          <p>{result.description}</p>
          <p>
            ${result.discountedPrice}{" "}
            <span className="line-through">${result.originalPrice}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default page;
