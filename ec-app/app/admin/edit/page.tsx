import { AdminEditDialog } from "../edit-dialog";

export default function AdminEditPage() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-2 text-center">
      <p className="text-sm text-muted-foreground">一覧へはダイアログを閉じると戻ります。</p>
      <AdminEditDialog />
    </div>
  );
}
