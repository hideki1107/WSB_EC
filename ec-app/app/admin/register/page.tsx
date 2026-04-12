import Link from "next/link";
import { PageHeading } from "../../components/PageHeading";

export default function AdminRegisterPage() {
  return (
    <div>
      <PageHeading
        title="商品登録"
        description="新しい商品をカタログに追加します。必須項目を入力してください。"
      />
      <form className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="sku"
              className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
            >
              SKU
            </label>
            <input
              id="sku"
              name="sku"
              type="text"
              placeholder="例: SKU-104"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 font-mono text-sm text-zinc-900 outline-none ring-emerald-500/40 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="new-name"
              className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
            >
              商品名
            </label>
            <input
              id="new-name"
              name="new-name"
              type="text"
              placeholder="商品の正式名称"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-emerald-500/40 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
            />
          </div>
          <div>
            <label
              htmlFor="new-price"
              className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
            >
              価格（税込）
            </label>
            <input
              id="new-price"
              name="new-price"
              type="text"
              placeholder="0"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm tabular-nums text-zinc-900 outline-none ring-emerald-500/40 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
            >
              カテゴリ
            </label>
            <input
              id="category"
              name="category"
              type="text"
              placeholder="例: アパレル"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-emerald-500/40 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="new-description"
            className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
          >
            説明文
          </label>
          <textarea
            id="new-description"
            name="new-description"
            rows={4}
            placeholder="素材、サイズ、注意事項など"
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-emerald-500/40 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
          />
        </div>
        <div className="flex flex-col-reverse gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:justify-end">
          <Link
            href="/admin"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-zinc-300 px-4 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            一覧に戻る
          </Link>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
          >
            登録する（デモ）
          </button>
        </div>
      </form>
    </div>
  );
}
