import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteHeader } from "@/components/layouts/site-header";

type PublicLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function PublicLayout(props: PublicLayoutProps) {
  const { children } = props;

  return (
    <div className="flex min-h-full flex-1 flex-col bg-muted/30">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">{children}</main>
      <SiteFooter />
    </div>
  );
}
