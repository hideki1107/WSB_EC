import type { Metadata } from "next";
import Link from "next/link";
import { products } from "../../../lib/products";
import { PageHeading } from "../../components/PageHeading";

export const metadata: Metadata = {
  title: "商品一覧",
};

export default function HomePage() {
  return (
    <div>
      <PageHeading
        title="商品一覧"
        description="厳選した商品を、シンプルな会計フローでお届けします。気になる商品をタップして詳細をご覧ください。"
      />
      <div className="mb-8 flex flex-wrap gap-3">
        <Link
          href="/checkout"
          className="inline-flex h-10 items-center justify-center rounded-xl border border-zinc-300 px-4 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          会計へ進む
        </Link>
      </div>
      <ul className="divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
        {products.map((item) => (
          <li key={item.id}>
            <Link
              href={`/item/${item.id}`}
              className="flex flex-col gap-2 px-5 py-4 transition hover:bg-zinc-50 sm:flex-row sm:items-center sm:justify-between dark:hover:bg-zinc-800/60"
            >
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                  {item.tag}
                </p>
              </div>
              <div className="flex items-center gap-3 sm:shrink-0">
                <p className="text-sm font-semibold tabular-nums text-emerald-700 dark:text-emerald-400">
                  {item.priceLabel}
                </p>
                <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                  詳細 →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
