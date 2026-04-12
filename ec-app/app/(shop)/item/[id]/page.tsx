import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { getProduct, products } from "../../../../lib/products";
import { PageHeading } from "../../../components/PageHeading";

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

  return (
    <div>
      <PageHeading title={product.name} description={product.description} />
      <Card className="shadow-sm">
        <CardContent className="space-y-6 pt-6">
          <dl className="grid gap-6 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                価格（税込）
              </dt>
              <dd className="mt-2 text-lg font-semibold tabular-nums text-primary">
                {product.priceLabel}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                カテゴリ
              </dt>
              <dd className="mt-2 font-medium text-foreground">{product.tag}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                商品ID
              </dt>
              <dd className="mt-2 font-mono text-xs text-muted-foreground">{product.id}</dd>
            </div>
          </dl>
        </CardContent>
        <Separator />
        <CardFooter className="flex flex-col gap-3 pt-6 sm:flex-row sm:justify-end">
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="/home">一覧に戻る</Link>
          </Button>
          <Button className="w-full sm:ml-auto sm:w-auto sm:min-w-40" asChild>
            <Link href="/checkout">会計へ進む</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
