import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { PageHeading } from "../components/PageHeading";

const rows = [
  { id: "SKU-001", name: "オーガニックコットンTシャツ", status: "公開中" as const },
  { id: "SKU-002", name: "ステンレスボトル 500ml", status: "下書き" as const },
  { id: "SKU-003", name: "ハンドロースト珈琲豆", status: "公開中" as const },
];

export default function AdminProductsPage() {
  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageHeading
          title="登録商品一覧"
          description="公開状態の確認や、編集・登録は各ページから行えます。"
        />
        <Button className="shrink-0" size="lg" asChild>
          <Link href="/admin/register">新規商品を登録</Link>
        </Button>
      </div>
      <Card className="overflow-hidden py-0 shadow-sm">
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="pl-6">SKU</TableHead>
                <TableHead>商品名</TableHead>
                <TableHead className="hidden sm:table-cell">状態</TableHead>
                <TableHead className="pr-6 text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="pl-6 font-mono text-xs text-muted-foreground">
                    {row.id}
                  </TableCell>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant={row.status === "公開中" ? "default" : "secondary"}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="pr-6 text-right">
                    <Button variant="link" className="h-auto px-0" asChild>
                      <Link href="/admin/edit">編集</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
