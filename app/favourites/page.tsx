"use client";

import { useFavourite } from "@/features/context/FavouriteContext";
import { Product } from "@/features/types/FlashSaleType";
import { useQuery } from "@tanstack/react-query";

const page = () => {
  const { favourite } = useFavourite();

  const { data: favourites = [] } = useQuery<Product[]>({
    queryKey: ["favourites", favourite],
    queryFn: async () => {
      const result = await Promise.all(
        favourite.map(async (id) => {
          const res = await fetch(
            `https://692c7e12c829d464006fb926.mockapi.io/unilab/${id}`
          );
          if (!res.ok) throw new Error("failed to fetch");
          return res.json();
        })
      );
      return result;
    },
    enabled: favourite.length > 0,
  });

  return (
    <div>
      {favourites.length === 0 ? (
        <h1>You have no Favourites yet</h1>
      ) : (
        <div>
          {favourites.map((fav: Product) => (
            <p key={fav.id}>{fav.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
