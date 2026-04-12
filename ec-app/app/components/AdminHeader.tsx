import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const adminNav = [
  { href: "/admin", label: "登録商品一覧" },
  { href: "/admin/register", label: "商品登録" },
  { href: "/admin/edit", label: "商品編集" },
] as const;

export function AdminHeader() {
  return (
    <header className="border-b bg-card text-card-foreground shadow-sm">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="font-normal">
            Admin
          </Badge>
          <Button variant="link" className="h-auto px-0 text-base font-semibold" asChild>
            <Link href="/admin">商品管理</Link>
          </Button>
        </div>
        <nav className="flex flex-wrap items-center gap-1">
          {adminNav.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto text-muted-foreground sm:ml-2"
            asChild
          >
            <Link href="/home">ストアへ</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
