import type { Metadata } from "next";

import { ShopHomeScreen } from "@/features/shop/components/shop-home-screen";

export const metadata: Metadata = {
  title: "商品一覧",
};

export default function HomePage() {
  return <ShopHomeScreen />;
}
