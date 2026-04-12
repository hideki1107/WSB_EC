import Link from "next/link";

const adminNav = [
  { href: "/admin", label: "登録商品一覧" },
  { href: "/admin/register", label: "商品登録" },
  { href: "/admin/edit", label: "商品編集" },
] as const;

export function AdminHeader() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-emerald-600/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
            Admin
          </span>
          <Link href="/admin" className="text-sm font-semibold tracking-tight">
            商品管理
          </Link>
        </div>
        <nav className="flex flex-wrap gap-1">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/home"
            className="ml-auto rounded-lg px-3 py-2 text-sm text-zinc-500 transition-colors hover:text-white sm:ml-2"
          >
            ストアへ
          </Link>
        </nav>
      </div>
    </header>
  );
}
