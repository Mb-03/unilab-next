import { ProductCard } from "../api/api";


export function extractUniqueFilters(products: ProductCard[]) {
  const models = Array.from(new Set(products.map((p) => p.model)));
  const styles = Array.from(new Set(products.map((p) => p.style)));

  const colors = Array.from(
    new Set(
      products.flatMap((p) => p.colors) 
    )
  );

  const sizes = Array.from(
    new Set(
      products.flatMap((p) => p.sizes)
    )
  );

  return { models, styles, colors, sizes };
}
