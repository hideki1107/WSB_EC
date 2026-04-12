import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProduct, products } from "@/features/shop/api/products";
import { ProductDetailScreen } from "@/features/shop/components/product-detail-screen";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "商品が見つかりません" };
  return { title: product.name };
}

export default async function ItemDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return <ProductDetailScreen product={product} />;
}
