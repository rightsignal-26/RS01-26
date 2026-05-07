import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Eyebrow, Card } from "@/components/Eyebrow";
import { Mail, Phone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/invest")({
  head: () => ({
    meta: [
      { title: "The Ask — RS#01@26 Seed Round" },
      { name: "description", content: "Strategic seed round to scale Impact-IaaS across 14+ markets." },
    ],
  }),
  component: Invest,
});

function Invest() {
  return (
    <div>
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        <Eyebrow>The Ask</Eyebrow>
        <h1 className="mt-6 text-5xl md:text-6xl font-display leading-[1.05]">
          Build the operating system <span className="italic gradient-gold-text">Africa's impact economy</span> deserves.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-3xl text-lg leading-relaxed">
          We are raising a strategic seed round to scale Impact-IaaS across 14+ markets, expand the multilingual AI Call Center, and deepen the XP Economy. Capital is matched 1:1 with grant co-funding from institutional partners.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          <Card><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Round</div><div className="mt-3 font-display text-3xl text-gold">Seed</div><div className="mt-2 text-xs text-muted-foreground">Equity + token warrant</div></Card>
          <Card><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Target</div><div className="mt-3 font-display text-3xl text-gold">$3.5M</div><div className="mt-2 text-xs text-muted-foreground">$1.5M committed</div></Card>
          <Card><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Use of funds</div><div className="mt-3 font-display text-3xl text-gold">60 / 25 / 15</div><div className="mt-2 text-xs text-muted-foreground">Engineering · GTM · Compliance</div></Card>
        </div>

        
      </main>
      <SiteFooter />
    </div>
  );
}

