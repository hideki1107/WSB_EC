import Link from "next/link";
import { PageHeading } from "../../components/PageHeading";

export default function CheckoutPage() {
  return (
    <div>
      <PageHeading
        title="会計"
        description="ご注文内容をご確認のうえ、お支払い手続きへお進みください（デモ画面のため決済は行われません）。"
      />
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-zinc-500 dark:text-zinc-400">小計</dt>
            <dd className="tabular-nums text-zinc-900 dark:text-zinc-100">
              ¥8,650
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-zinc-500 dark:text-zinc-400">送料</dt>
            <dd className="tabular-nums text-zinc-900 dark:text-zinc-100">¥550</dd>
          </div>
          <div className="border-t border-dashed border-zinc-200 pt-3 dark:border-zinc-700" />
          <div className="flex justify-between text-base font-semibold">
            <dt className="text-zinc-900 dark:text-zinc-50">合計</dt>
            <dd className="tabular-nums text-emerald-700 dark:text-emerald-400">
              ¥9,200
            </dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/home"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-300 px-4 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            商品一覧に戻る
          </Link>
          <button
            type="button"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
          >
            お支払いへ（準備中）
          </button>
        </div>
      </div>
    </div>
  );
}
