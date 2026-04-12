"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

const fieldLabel = "text-sm font-medium leading-none text-foreground";

export function AdminRegisterDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const closeToList = useCallback(() => {
    setOpen(false);
    router.replace("/admin");
  }, [router]);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) router.replace("/admin");
      }}
    >
      <DialogContent
        showCloseButton
        className="flex max-h-[min(90dvh,44rem)] flex-col gap-0 overflow-hidden p-0 sm:max-w-xl"
      >
        <DialogHeader className="shrink-0 border-b px-6 pt-6 pb-4">
          <DialogTitle>商品登録</DialogTitle>
          <DialogDescription>
            新しい商品をカタログに追加します。必須項目を入力してください。
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="min-h-0 flex-1">
          <div className="space-y-5 px-6 py-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="reg-sku" className={fieldLabel}>
                  SKU
                </label>
                <Input id="reg-sku" name="sku" type="text" placeholder="例: SKU-104" className="font-mono" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="reg-name" className={fieldLabel}>
                  商品名
                </label>
                <Input id="reg-name" name="new-name" type="text" placeholder="商品の正式名称" />
              </div>
              <div className="space-y-2">
                <label htmlFor="reg-price" className={fieldLabel}>
                  価格（税込）
                </label>
                <Input
                  id="reg-price"
                  name="new-price"
                  type="text"
                  placeholder="0"
                  className="tabular-nums"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="reg-category" className={fieldLabel}>
                  カテゴリ
                </label>
                <Input id="reg-category" name="category" type="text" placeholder="例: アパレル" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="reg-description" className={fieldLabel}>
                説明文
              </label>
              <Textarea
                id="reg-description"
                name="new-description"
                rows={4}
                placeholder="素材、サイズ、注意事項など"
              />
            </div>
          </div>
        </ScrollArea>
        <DialogFooter className="shrink-0 border-t bg-muted/40 px-6 py-4">
          <Button type="button" variant="outline" onClick={closeToList}>
            一覧に戻る
          </Button>
          <Button type="button">登録する（デモ）</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
