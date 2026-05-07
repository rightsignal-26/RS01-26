import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/financials", label: "Financials" },
  { to: "/demo", label: "Live Demo" },
  { to: "/uwam", label: "Uwam Agent" },
  { to: "/crm", label: "CRM Agent" },
  { to: "/invest", label: "The Ask" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-[var(--gold)] to-[oklch(0.65_0.15_60)] flex items-center justify-center text-primary-foreground font-display text-xl font-semibold shadow-[var(--shadow-gold)]">
            A
          </div>
          <div className="leading-tight">
            <div className="font-display text-base">RS#01@26</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground">IMPACT OS</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-md text-gold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/invest"
          className="rounded-md bg-gold text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-gold)]"
        >
          Investor Access
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 py-10 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
      RS#01@26 Company Ltd · Africa's Impact Operating System
    </footer>
  );
}

