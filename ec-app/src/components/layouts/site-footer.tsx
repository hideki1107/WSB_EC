import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-muted/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} WSB Store
        </p>
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
          <Button variant="link" size="sm" className="h-auto px-2 text-muted-foreground" asChild>
            <Link href="/privacy">プライバシーポリシー</Link>
          </Button>
          <Button variant="link" size="sm" className="h-auto px-2 text-muted-foreground" asChild>
            <Link href="/law">特定商取引法に基づく表記</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
