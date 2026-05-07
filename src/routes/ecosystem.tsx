import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Eyebrow, SectionLabel, Card } from "@/components/Eyebrow";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem — Auxilium Max Impact OS" },
      { name: "description", content: "Four-layer architecture, modules in production, and the beneficiary→investor pathway." },
    ],
  }),
  component: Ecosystem,
});

const layers = [
  { n: "01", title: "Application Layer", desc: "Beneficiaries, NGOs, Heroes, Institutions collaborate in a single workspace." },
  { n: "02", title: "Intelligence Layer", desc: "Multilingual voice AI + Uwam grant assistant automate the field and the funnel." },
  { n: "03", title: "Coordination Layer", desc: "Impact-IaaS unifies operations, data and reporting across agencies." },
  { n: "04", title: "Trust Layer", desc: "Polygon-anchored verifiable records eliminate ghost data and opaque flows." },
];

const modules = [
  { title: "AI Call Center", desc: "Voice-based onboarding, multilingual surveys and automated NGO field reporting — reaching beneficiaries beyond the smartphone." },
  { title: "Uwam — Grant AI", desc: "Continuously scans global funders, drafts personalized applications, aligns mission, keywords, budget and impact metrics." },
  { title: "Impact XP Economy", desc: "Verified actions earn XP redeemable in a marketplace for essentials, gadgets and education. Beneficiary → Investor pathway." },
  { title: "Web3 Verification", desc: "Cryptographic proof of every operation. Institutional confidence built on transparent, immutable records." },
];

const partners = [
  { l: "K", n: "Komaas Group", t: "Strategic capital & advisory" },
  { l: "A", n: "AWMII", t: "Africa Women Microfinance Initiative" },
  { l: "T", n: "Terrain Vierge", t: "Field deployment partner" },
  { l: "B", n: "Brandprenur", t: "Creator economy & branding" },
  { l: "G", n: "Greenbles Tech", t: "Engineering & infrastructure" },
  { l: "L", n: "LCPA", t: "Legal compliance partner" },
];

const path = [
  { n: "01", title: "Beneficiary", desc: "Receives services & XP" },
  { n: "02", title: "Volunteer", desc: "Earns XP through verified action" },
  { n: "03", title: "Impact Hero", desc: "Coordinates campaigns" },
  { n: "04", title: "Investor", desc: "Funds & governs the network" },
];

function Ecosystem() {
  return (
    <div>
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <Eyebrow>Architecture of Impact</Eyebrow>
        <h1 className="mt-6 text-5xl md:text-6xl font-display max-w-3xl leading-[1.05]">
          A four-layer operating system, <span className="italic gradient-gold-text">engineered for the continent.</span>
        </h1>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {layers.map(l => (
            <Card key={l.n} className="p-8">
              <div className="font-display text-3xl text-gold/70">{l.n}</div>
              <h3 className="mt-3 text-2xl">{l.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{l.desc}</p>
            </Card>
          ))}
        </div>

        <section className="mt-24">
          <SectionLabel>Modules in production</SectionLabel>
          <h2 className="text-4xl font-display">What runs on the OS</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {modules.map(m => (
              <Card key={m.title} className="p-8">
                <h3 className="text-2xl">{m.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{m.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Strategic Coalition</SectionLabel>
          <h2 className="text-4xl font-display">Already integrating with the network</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map(p => (
              <Card key={p.n} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-md bg-gold/15 text-gold font-display text-xl flex items-center justify-center">{p.l}</div>
                <div>
                  <div className="font-medium">{p.n}</div>
                  <div className="text-xs text-muted-foreground">{p.t}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>The Pathway</SectionLabel>
          <h2 className="text-4xl font-display">Beneficiary → Volunteer → Hero → Investor</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-5">
            {path.map(s => (
              <Card key={s.n}>
                <div className="font-display text-2xl text-gold/70">{s.n}</div>
                <div className="mt-3 text-lg">{s.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.desc}</div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
