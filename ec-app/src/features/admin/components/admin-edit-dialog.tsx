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
import { cn } from "@/lib/utils";

const fieldLabel = "text-sm font-medium leading-none text-foreground";

const selectClass = cn(
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow]",
  "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
);

export function AdminEditDialog() {
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
          <DialogTitle>商品編集</DialogTitle>
          <DialogDescription>
            選択した商品の情報を更新します。保存処理は今後 API と接続します。
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="min-h-0 flex-1">
          <div className="space-y-5 px-6 py-4">
            <div className="space-y-2">
              <label htmlFor="edit-name" className={fieldLabel}>
                商品名
              </label>
              <Input
                id="edit-name"
                name="name"
                type="text"
                defaultValue="オーガニックコットンTシャツ"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="edit-price" className={fieldLabel}>
                  価格（税込）
                </label>
                <Input
                  id="edit-price"
                  name="price"
                  type="text"
                  defaultValue="4800"
                  className="tabular-nums"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="edit-status" className={fieldLabel}>
                  公開状態
                </label>
                <select id="edit-status" name="status" defaultValue="published" className={selectClass}>
                  <option value="published">公開中</option>
                  <option value="draft">下書き</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-description" className={fieldLabel}>
                説明文
              </label>
              <Textarea
                id="edit-description"
                name="description"
                rows={4}
                defaultValue="肌触りの良いオーガニックコットンを使用した定番Tシャツです。"
              />
            </div>
          </div>
        </ScrollArea>
        <DialogFooter className="shrink-0 border-t bg-muted/40 px-6 py-4">
          <Button type="button" variant="outline" onClick={closeToList}>
            一覧に戻る
          </Button>
          <Button type="button">変更を保存（デモ）</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
