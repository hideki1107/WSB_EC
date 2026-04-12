export type Product = {
  id: string;
  name: string;
  priceLabel: string;
  price: number;
  tag: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "organic-cotton-tee",
    name: "オーガニックコットンTシャツ",
    priceLabel: "¥4,800",
    price: 4800,
    tag: "アパレル",
    description:
      "肌触りの良いオーガニックコットンを使用した定番Tシャツです。着丈・肩幅は標準シルエットで、デイリーユースに適した一枚です。",
  },
  {
    id: "stainless-bottle-500",
    name: "ステンレスボトル 500ml",
    priceLabel: "¥2,200",
    price: 2200,
    tag: "ライフスタイル",
    description:
      "真空二重構造で保温・保冷に優れた500mlボトルです。口径は広めで氷の投入もしやすく、通勤やアウトドアに活躍します。",
  },
  {
    id: "hand-roast-coffee",
    name: "ハンドロースト珈琲豆",
    priceLabel: "¥1,650",
    price: 1650,
    tag: "食品",
    description:
      "焙煎士が少量ロットで焙煎したシングルオリジン豆です。フルーティな酸味と甘みのバランスが特徴で、ハンドドリップ向きです。",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
