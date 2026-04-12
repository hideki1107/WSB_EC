import Link from "next/link";
import { PageHeading } from "../components/PageHeading";

const rows = [
  { id: "SKU-001", name: "オーガニックコットンTシャツ", status: "公開中" },
  { id: "SKU-002", name: "ステンレスボトル 500ml", status: "下書き" },
  { id: "SKU-003", name: "ハンドロースト珈琲豆", status: "公開中" },
];

export default function AdminProductsPage() {
  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageHeading
          title="登録商品一覧"
          description="公開状態の確認や、編集・登録は各ページから行えます。"
        />
        <Link
          href="/admin/register"
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
        >
          新規商品を登録
        </Link>
      </div>
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-3 sm:px-5">SKU</th>
              <th className="px-4 py-3 sm:px-5">商品名</th>
              <th className="hidden px-4 py-3 sm:table-cell sm:px-5">状態</th>
              <th className="px-4 py-3 text-right sm:px-5">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/50">
                <td className="px-4 py-3 font-mono text-xs text-zinc-500 sm:px-5">
                  {row.id}
                </td>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-50 sm:px-5">
                  {row.name}
                </td>
                <td className="hidden px-4 py-3 sm:table-cell sm:px-5">
                  <span
                    className={
                      row.status === "公開中"
                        ? "rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                        : "rounded-full bg-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    }
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right sm:px-5">
                  <Link
                    href="/admin/edit"
                    className="text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-400"
                  >
                    編集
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
