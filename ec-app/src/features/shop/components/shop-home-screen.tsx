import Link from "next/link";

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
import { PageHeading } from "@/components/elements/page-heading";
import { products } from "@/features/shop/api/products";

export function ShopHomeScreen() {
  return (
    <div>
      <PageHeading
        title="商品一覧"
        description="厳選した商品を、シンプルな会計フローでお届けします。気になる商品をタップして詳細をご覧ください。"
      />
      <div className="mb-6 flex flex-wrap gap-3">
        <Button variant="outline" size="lg" asChild>
          <Link href="/checkout">会計へ進む</Link>
        </Button>
      </div>
      <Card className="overflow-hidden py-0 shadow-sm">
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="pl-6">商品</TableHead>
                <TableHead className="hidden sm:table-cell">カテゴリ</TableHead>
                <TableHead className="text-right">価格</TableHead>
                <TableHead className="w-24 pr-6 text-right text-muted-foreground">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((item) => (
                <TableRow key={item.id} className="group">
                  <TableCell className="pl-6 font-medium">
                    <Link
                      href={`/item/${item.id}`}
                      className="text-foreground underline-offset-4 hover:underline"
                    >
                      {item.name}
                    </Link>
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground sm:table-cell">
                    {item.tag}
                  </TableCell>
                  <TableCell className="text-right font-semibold tabular-nums text-primary">
                    {item.priceLabel}
                  </TableCell>
                  <TableCell className="pr-6 text-right">
                    <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
                      <Link href={`/item/${item.id}`}>詳細</Link>
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
