"use client";

import { useCartContext } from "@/features/context/CartContext";
import { useFavourite } from "@/features/context/FavouriteContext";
import { Product } from "@/features/types/FlashSaleType";
import { useQuery } from "@tanstack/react-query";

const page = () => {
  const { item } = useCartContext();

  const { data: items = [] } = useQuery<Product[]>({
    queryKey: ["items", item],
    queryFn: async () => {
      const result = await Promise.all(
        item.map(async (id) => {
          const res = await fetch(
            `https://692c7e12c829d464006fb926.mockapi.io/unilab/${id}`
          );
          if (!res.ok) throw new Error("failed to fetch");
          return res.json();
        })
      );
      return result;
    },
    enabled: item.length > 0,
  });

  return (
    <div>
      {items.length === 0 ? (
        <h1>You have no items in your Cart yet</h1>
      ) : (
        <div>
          {items.map((fav: Product) => (
            <p key={fav.id}>{fav.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
