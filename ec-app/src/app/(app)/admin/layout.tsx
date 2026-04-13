import { AdminHeader } from "@/components/layouts/admin-header";

type AdminLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function AdminLayout(props: AdminLayoutProps) {
  const { children } = props;

  return (
    <div className="flex min-h-full flex-1 flex-col bg-muted/50">
      <AdminHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
