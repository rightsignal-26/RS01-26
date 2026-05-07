import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Eyebrow, SectionLabel, Stat, Card } from "@/components/Eyebrow";
import { AfricaMesh } from "@/components/AfricaMesh";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auxilium Max — Africa's Impact Operating System" },
      { name: "description", content: "Investor briefing · Series Seed 2026. Unified infrastructure for NGOs, institutions, and impact heroes across Africa." },
    ],
  }),
  component: Index,
});

const layers = [
  { n: "01", title: "Application Layer", desc: "Beneficiaries, NGOs, heroes & institutions collaborate in one workspace." },
  { n: "02", title: "Intelligence Layer", desc: "Uwam grant agent + Sovereign CRM agent — AI across the whole network." },
  { n: "03", title: "Coordination Layer", desc: "Impact-IaaS, unified data systems and NGO tools." },
  { n: "04", title: "Trust Layer", desc: "Web3 verifiable impact records anchored on Polygon." },
];

function Index() {
  return (
    <div>
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6">
        <section className="grid lg:grid-cols-2 gap-12 items-center pt-20 pb-32">
          <div>
            <Eyebrow>Investor Briefing · Series Seed 2026</Eyebrow>
            <h1 className="mt-8 text-5xl md:text-7xl font-display leading-[1.05]">
              Africa's Impact{" "}
              <span className="italic gradient-gold-text">Operating System</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              A unified, intelligent infrastructure for NGOs, institutions, and social impact heroes — built and operated by Auxilium Max Company.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-md bg-gold text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-gold)]">
                Open the Dashboard <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/demo" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 text-sm font-medium hover:bg-card transition">
                Run the Live Demo
              </Link>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              <Stat value="412,500" label="Beneficiaries" />
              <Stat value="1,287" label="NGO Partners" />
              <Stat value="14" label="Countries" />
            </div>
          </div>
          <AfricaMesh />
        </section>

        <section className="py-24 border-t border-border/60">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>The Architecture</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-display max-w-2xl">Four layers. One operating system.</h2>
            </div>
            <Link to="/ecosystem" className="inline-flex items-center gap-2 text-gold text-sm hover:opacity-80">
              Explore ecosystem <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {layers.map((l) => (
              <Card key={l.n} className="group hover:border-gold/50 transition">
                <div className="font-display text-3xl text-gold/70">{l.n}</div>
                <h3 className="mt-4 text-xl">{l.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-border/60 text-center">
          <h3 className="text-3xl md:text-5xl font-display max-w-3xl mx-auto">
            From fragmented aid to <span className="italic gradient-gold-text">verified impact</span> at scale.
          </h3>
          <p className="mt-6 text-muted-foreground">
            ₦1.2B → ₦6.0B revenue trajectory · 100k → 500k subscribers · 14 countries by 2030.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/financials" className="inline-flex items-center gap-2 rounded-md bg-gold text-primary-foreground px-5 py-3 text-sm font-medium shadow-[var(--shadow-gold)] hover:opacity-90">
              View financials <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/invest" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 text-sm font-medium hover:bg-card">
              The Ask
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
