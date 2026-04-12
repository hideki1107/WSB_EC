import Link from "next/link";

const nav = [
  { href: "/home", label: "商品一覧" },
  { href: "/checkout", label: "会計" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/home"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          WSB Store
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/admin"
            className="ml-1 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-800 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-100"
          >
            管理
          </Link>
        </nav>
      </div>
    </header>
  );
}
