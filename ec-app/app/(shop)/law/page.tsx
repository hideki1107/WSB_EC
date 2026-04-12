import { PageHeading } from "../../components/PageHeading";

export default function LawPage() {
  return (
    <div>
      <PageHeading
        title="特定商取引法に基づく表記"
        description="法令に基づき、事業者情報および取引条件を掲示します。"
      />
      <dl className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 text-sm dark:border-zinc-800 dark:bg-zinc-900 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            販売事業者
          </dt>
          <dd className="mt-1 font-medium text-zinc-900 dark:text-zinc-50">
            WSB Store（デモ表記）
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            運営責任者
          </dt>
          <dd className="mt-1 text-zinc-800 dark:text-zinc-200">（準備中）</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            所在地
          </dt>
          <dd className="mt-1 text-zinc-800 dark:text-zinc-200">（準備中）</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            電話番号
          </dt>
          <dd className="mt-1 text-zinc-800 dark:text-zinc-200">（準備中）</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            メールアドレス
          </dt>
          <dd className="mt-1 text-zinc-800 dark:text-zinc-200">support@example.com</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            商品代金以外の必要料金
          </dt>
          <dd className="mt-1 text-zinc-800 dark:text-zinc-200">
            消費税、送料（地域により異なります）
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            支払方法・支払時期
          </dt>
          <dd className="mt-1 text-zinc-800 dark:text-zinc-200">
            クレジットカード等（決済完了時）
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            返品・交換
          </dt>
          <dd className="mt-1 text-zinc-800 dark:text-zinc-200">
            未開封・未使用に限り受付（詳細は別途定める）
          </dd>
        </div>
      </dl>
    </div>
  );
}
