export type AdminProductRow = {
  id: string;
  name: string;
  status: "公開中" | "下書き";
};

export const adminProductRows: AdminProductRow[] = [
  { id: "SKU-001", name: "オーガニックコットンTシャツ", status: "公開中" },
  { id: "SKU-002", name: "ステンレスボトル 500ml", status: "下書き" },
  { id: "SKU-003", name: "ハンドロースト珈琲豆", status: "公開中" },
];
