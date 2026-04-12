import { AdminRegisterDialog } from "@/features/admin/components/admin-register-dialog";

export default function AdminRegisterPage() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-2 text-center">
      <p className="text-sm text-muted-foreground">一覧へはダイアログを閉じると戻ります。</p>
      <AdminRegisterDialog />
    </div>
  );
}
