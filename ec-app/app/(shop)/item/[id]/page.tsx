import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              価格（税込）
            </dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums text-emerald-700 dark:text-emerald-400">
              {product.priceLabel}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              カテゴリ
            </dt>
            <dd className="mt-1 font-medium text-zinc-900 dark:text-zinc-50">
              {product.tag}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              商品ID
            </dt>
            <dd className="mt-1 font-mono text-xs text-zinc-600 dark:text-zinc-300">
              {product.id}
            </dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-col gap-3 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:flex-row">
          <Link
            href="/home"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-300 px-4 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            一覧に戻る
          </Link>
          <Link
            href="/checkout"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
          >
            会計へ進む
          </Link>
        </div>
      </div>
    </div>
  );
}
