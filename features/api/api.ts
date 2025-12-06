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

type FilterParams = {
  brand?: string;
  model?: string | null;
  style?: string[];
  color?: string[];
  size?: string[];
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

export async function getFilterProducts(
  filters: FilterParams
): Promise<ProductCard[]> {
  const { brand, model, style, color, size } = filters;
  const noFilters =
    !brand &&
    (!model || model === "") &&
    (!style || style.length === 0) &&
    (!color || color.length === 0) &&
    (!size || size.length === 0);

  const params = new URLSearchParams();
  if (filters.brand) params.append("brand", filters.brand);
  if (filters.model) params.append("model", filters.model || "");

  if (filters.style && filters.style.length > 0) {
    params.append("search", filters.style.join(","));
  }

  if (filters.color && filters.color.length > 0) {
    params.append("search", filters.color.join(","));
  }

  if (filters.size && filters.size.length > 0) {
    params.append("search", filters.size.join(","));
  }
  const url = !noFilters
    ? `https://692c7e12c829d464006fb926.mockapi.io/unilab?${params.toString()}`
    : "https://692c7e12c829d464006fb926.mockapi.io/unilab?search=model";

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export async function sideBarHelperFetch(): Promise<ProductCard[]> {
  const res = await fetch(
    `https://692c7e12c829d464006fb926.mockapi.io/unilab?search=model`
  );
  if (!res.ok) throw new Error("failed to fetch");
  return res.json();
}

export async function getImageDetails(id: string): Promise<ProductCard> {
  const res = await fetch(
    `https://692c7e12c829d464006fb926.mockapi.io/unilab/${id}`
  );
  if (!res.ok) throw new Error("failed to fetch");

  return res.json();
}
