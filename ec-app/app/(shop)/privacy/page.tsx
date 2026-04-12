import { PageHeading } from "../../components/PageHeading";

export default function PrivacyPage() {
  return (
    <article>
      <PageHeading
        title="プライバシーポリシー"
        description="お客様の個人情報の取り扱いについて定めます。"
      />
      <section className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
        <div>
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            1. 取得する情報
          </h2>
          <p className="mt-2">
            氏名、メールアドレス、配送先住所、決済に必要な情報（決済代行会社が収集する範囲）など、サービス提供に必要な範囲で取得します。
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            2. 利用目的
          </h2>
          <p className="mt-2">
            商品の発送、サポート対応、不正利用の防止、法令に基づく対応のために利用します。
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            3. 第三者提供
          </h2>
          <p className="mt-2">
            法令に基づく場合を除き、本人の同意なく第三者に提供しません。
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            4. お問い合わせ
          </h2>
          <p className="mt-2">
            本ポリシーに関するお問い合わせは、サイト上の窓口よりご連絡ください。
          </p>
        </div>
      </section>
    </article>
  );
}
