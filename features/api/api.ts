import { AboutUsSchema } from "../aboutUs/schema";
import { Product } from "../types/FlashSaleType";

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
