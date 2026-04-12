import { Card, CardContent } from "@/components/ui/card";
import { PageHeading } from "@/components/elements/page-heading";

export function LawScreen() {
  return (
    <div>
      <PageHeading
        title="特定商取引法に基づく表記"
        description="法令に基づき、事業者情報および取引条件を掲示します。"
      />
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <dl className="grid gap-4 text-sm sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                販売事業者
              </dt>
              <dd className="mt-1 font-medium text-foreground">WSB Store（デモ表記）</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                運営責任者
              </dt>
              <dd className="mt-1 text-foreground">（準備中）</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                所在地
              </dt>
              <dd className="mt-1 text-foreground">（準備中）</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                電話番号
              </dt>
              <dd className="mt-1 text-foreground">（準備中）</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                メールアドレス
              </dt>
              <dd className="mt-1 text-foreground">support@example.com</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                商品代金以外の必要料金
              </dt>
              <dd className="mt-1 text-foreground">消費税、送料（地域により異なります）</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                支払方法・支払時期
              </dt>
              <dd className="mt-1 text-foreground">クレジットカード等（決済完了時）</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                返品・交換
              </dt>
              <dd className="mt-1 text-foreground">未開封・未使用に限り受付（詳細は別途定める）</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}
