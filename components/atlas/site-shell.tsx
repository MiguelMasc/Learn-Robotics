import Link from "next/link";
import { ArrowUpRight, Bot } from "lucide-react";
export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="wordmark" href="/" aria-label="Learn Robotics home">
            <span className="brand-icon">
              <Bot size={24} />
            </span>
            Learn Robotics<span className="brand-dot">.</span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/#explore">Explore</Link>
            <Link href="/projects">Build guides</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link className="wordmark" href="/">
          Learn Robotics<span className="brand-dot">.</span>
        </Link>
        <p>A field to explore. A place to begin.</p>
        <Link href="/about">
          How this collection works <ArrowUpRight size={16} />
        </Link>
      </div>
    </footer>
  );
}
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
