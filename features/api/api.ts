import { AboutUsSchema } from "../aboutUs/schema";
import { Product } from "../types/FlashSaleType";

export type ProductCard = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  title: string;
  brand: string;
  model: string;
  style: string;
  colors: string[];
  sizes: string[];
  price: string;
  oldPrice: string;
  discountPercent: string;
  rating: string;
  reviews: string;
  image: string;
  thumbnail: string;
  inStock: string;
};

export async function submitForm(data: AboutUsSchema): Promise<AboutUsSchema> {
  const res = await fetch(
    "https://692c7e12c829d464006fb926.mockapi.io/unilab",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) throw new Error("Failed to Submit");

  return res.json();
}

export async function getFlashSales(): Promise<Product[]> {
  const res = await fetch("https://692c7e12c829d464006fb926.mockapi.io/unilab");

  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export async function getFilterProducts(): Promise<ProductCard[]> {
  const res = await fetch(
    "https://692c7e12c829d464006fb926.mockapi.io/unilab?search=model"
  );
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}
