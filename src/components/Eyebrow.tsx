export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-[11px] tracking-[0.25em] uppercase text-gold">
      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">{children}</div>
  );
}

export function Stat({ value, label, hint }: { value: string; label: string; hint?: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-gold">{value}</div>
      <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mt-1">{label}</div>
      {hint && <div className="text-xs text-muted-foreground/70 mt-1">{hint}</div>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-border/60 bg-card/60 backdrop-blur p-6 ${className}`}>
      {children}
    </div>
  );
}
