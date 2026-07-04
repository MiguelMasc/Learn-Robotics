import Link from "next/link";

const navigationItems = [
  { href: "#curriculum", label: "Curriculum" },
  { href: "#resources", label: "Resources" },
  { href: "#projects", label: "Projects" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-500 bg-amber-300/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link
          href="#top"
          className="flex w-fit items-center gap-3 text-base font-black text-zinc-950"
          aria-label="Learn Robotics home"
        >
          <span className="grid size-10 place-items-center rounded-md bg-zinc-950 text-sm font-black text-amber-300">
            LR
          </span>
          Learn Robotics
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-zinc-600">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
