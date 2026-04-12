import Link from "next/link";
import { PageHeading } from "../../components/PageHeading";

export default function AdminEditPage() {
  return (
    <div>
      <PageHeading
        title="商品編集"
        description="選択した商品の情報を更新します。保存処理は今後 API と接続します。"
      />
      <form className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
          >
            商品名
          </label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue="オーガニックコットンTシャツ"
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="price"
              className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
            >
              価格（税込）
            </label>
            <input
              id="price"
              name="price"
              type="text"
              defaultValue="4800"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm tabular-nums text-zinc-900 outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
            >
              公開状態
            </label>
            <select
              id="status"
              name="status"
              defaultValue="published"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
            >
              <option value="published">公開中</option>
              <option value="draft">下書き</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
          >
            説明文
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            defaultValue="肌触りの良いオーガニックコットンを使用した定番Tシャツです。"
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
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
            変更を保存（デモ）
          </button>
        </div>
      </form>
    </div>
  );
}
