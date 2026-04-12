import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PageHeading } from "@/components/elements/page-heading";

export function CheckoutScreen() {
  return (
    <div>
      <PageHeading
        title="会計"
        description="ご注文内容をご確認のうえ、お支払い手続きへお進みください（デモ画面のため決済は行われません）。"
      />
      <Card className="shadow-sm">
        <CardContent className="space-y-4 pt-6">
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">小計</dt>
              <dd className="tabular-nums text-foreground">¥8,650</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">送料</dt>
              <dd className="tabular-nums text-foreground">¥550</dd>
            </div>
          </dl>
          <Separator />
          <div className="flex justify-between text-base font-semibold">
            <span className="text-foreground">合計</span>
            <span className="tabular-nums text-primary">¥9,200</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 border-t pt-6 sm:flex-row">
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="/home">商品一覧に戻る</Link>
          </Button>
          <Button type="button" className="w-full flex-1 sm:flex-initial" disabled>
            お支払いへ（準備中）
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
