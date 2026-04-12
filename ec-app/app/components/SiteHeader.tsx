import Link from "next/link";

import { Button } from "@/components/ui/button";

const nav = [
  { href: "/home", label: "商品一覧" },
  { href: "/checkout", label: "会計" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Button
          variant="ghost"
          className="px-2 text-base font-semibold tracking-tight"
          asChild
        >
          <Link href="/home">WSB Store</Link>
        </Button>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button variant="outline" size="sm" className="ml-1 shrink-0" asChild>
            <Link href="/admin">管理</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
