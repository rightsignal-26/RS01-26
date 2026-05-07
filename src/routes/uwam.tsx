import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Eyebrow, SectionLabel, Card } from "@/components/Eyebrow";

export const Route = createFileRoute("/uwam")({
  head: () => ({
    meta: [
      { title: "Uwam — Africa's AI Grant Intelligence Agent" },
      { name: "description", content: "Profiling, real-time grant discovery, fit scoring, drafting and auto-apply across foundations, multilaterals and CSR." },
    ],
  }),
  component: Uwam,
});

const grants = [
  { funder: "Gates Foundation", region: "Sub-Saharan Africa", sector: "Health", title: "Maternal Health Innovation Fund", amount: "$250,000", deadline: "Jun 14, 2026", fit: 86, label: "Highly Eligible" },
  { funder: "Mastercard Foundation", region: "Pan-African", sector: "Education", title: "Young Africa Works — Skilling", amount: "$1.2M", deadline: "May 30, 2026", fit: 76, label: "Good Fit" },
  { funder: "Wellcome Trust", region: "Africa", sector: "Health", title: "Public Health Research Fellowship", amount: "$320,000", deadline: "Aug 02, 2026", fit: 75, label: "Good Fit" },
  { funder: "GCF (Green Climate Fund)", region: "West Africa", sector: "Climate", title: "Climate Adaptation Readiness", amount: "$3.0M", deadline: "Aug 18, 2026", fit: 72, label: "Good Fit" },
  { funder: "Google.org", region: "Africa", sector: "Tech & Innovation", title: "AI for Social Good — Africa Cohort", amount: "$500,000", deadline: "Jul 02, 2026", fit: 71, label: "Good Fit" },
  { funder: "UN Women", region: "Africa", sector: "Gender", title: "Women in Leadership Grant", amount: "$120,000", deadline: "Jul 22, 2026", fit: 66, label: "Moderate Fit" },
  { funder: "Ford Foundation", region: "Pan-African", sector: "Tech & Innovation", title: "Civic Tech for Equity", amount: "$220,000", deadline: "Jul 14, 2026", fit: 57, label: "Moderate Fit" },
  { funder: "AfDB", region: "Africa", sector: "Agriculture", title: "Agripreneur Accelerator", amount: "$180,000", deadline: "Jun 28, 2026", fit: 37, label: "Not Recommended" },
];

const orgTypes = ["NGO", "Startup", "Youth Org", "University", "Government"];
const sectors = ["Health", "Climate", "Education", "Tech & Innovation", "Agriculture", "Gender"];
const regions = ["Nigeria", "Ghana", "Kenya", "Senegal", "Rwanda", "South Africa", "Côte d'Ivoire", "Tanzania"];
const skills = ["Profiling", "Discovery", "Grant-Fit Scoring", "Proposal Drafting", "Auto-Apply", "MEL Analytics"];

const capabilities = [
  ["Smart Profiling", "Builds a Grant DNA profile from org type, sector, geography, capacity and compliance readiness."],
  ["Real-Time Discovery", "Continuously scans foundations, multilaterals, CSR and government windows."],
  ["Grant-Fit Scoring", "Ranks every opportunity on a 0–100 fit score across eligibility, sector and capacity."],
  ["Proposal Drafting", "Generates concept notes, full proposals, budgets, logframes and Theory of Change."],
  ["Auto-Apply", "With user permission, submits applications, uploads docs and tracks deadlines."],
  ["MEL Analytics", "Learns from outcomes to lift success rates over time, application after application."],
];

const audiences = [
  ["NGOs", "Maternal-health NGO auto-applies for Gates, Wellcome, UN Women."],
  ["Startups", "Climate-tech startup matched to GCF, Google.org, IFC innovation funds."],
  ["Youth Orgs", "Lagos collective onboarded to Mastercard Young Africa Works."],
  ["Governments", "Local councils discover smart-city and adaptation windows."],
  ["Universities", "Research labs find fellowships and innovation grants in days."],
];

const tiers = [
  { name: "Starter", price: "$49", credits: "500 credits" },
  { name: "Growth", price: "$199", credits: "2,500 credits" },
  { name: "Enterprise", price: "$999", credits: "15,000 credits" },
];

const phases = [
  { n: "01", title: "MVP", items: ["Profiling", "Grant search", "Recommendations", "Proposal drafting"] },
  { n: "02", title: "Automation", items: ["Auto-apply", "Multi-grant tracking", "Pipeline dashboard"] },
  { n: "03", title: "Intelligence", items: ["MEL analytics", "Predictive success modelling", "Grant intelligence engine"] },
];

function Uwam() {
  const [orgType, setOrgType] = useState("NGO");
  const [sector, setSector] = useState("Health");
  const [region, setRegion] = useState("Nigeria");
  const [need, setNeed] = useState(250);
  const [cap, setCap] = useState(70);

  const filtered = useMemo(() => {
    return [...grants].sort((a,b)=> {
      const aMatch = (a.sector === sector ? 10 : 0) + a.fit;
      const bMatch = (b.sector === sector ? 10 : 0) + b.fit;
      return bMatch - aMatch;
    });
  }, [sector]);

  return (
    <div>
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <Eyebrow>Agent · Live Inside Impact OS</Eyebrow>
        <h1 className="mt-6 text-5xl md:text-6xl font-display max-w-4xl leading-[1.05]">
          Uwam — the <span className="italic gradient-gold-text">AI grant intelligence agent</span> for Africa.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-3xl text-lg leading-relaxed">
          Uwam is the autonomous agent layer of the AMC Impact OS. It profiles your organization, discovers grants in real time across foundations, multilaterals and CSR programs, scores Grant-Fit, drafts proposals and — with permission — applies and tracks responses on your behalf.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map(s => (
            <span key={s} className="text-xs px-3 py-1 rounded-full border border-gold/40 text-gold bg-gold/5">{s}</span>
          ))}
        </div>

        <Card className="mt-12 p-8">
          <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Joint Initiative</div>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-medium">NovaBridge Systems LLC</div>
              <div className="text-xs text-muted-foreground">Creator · AI infrastructure · 35%</div>
            </div>
            <div>
              <div className="font-medium">RS#01@26 Company Ltd</div>
              <div className="text-xs text-muted-foreground">Co-founder · Africa expansion · 25%</div>
            </div>
            <div>
              <div className="font-medium">Helios Treasury Partners</div>
              <div className="text-xs text-muted-foreground">Onboarding · Adoption · 30% (+10% Affiliate)</div>
            </div>
          </div>
        </Card>

        <section className="mt-16">
          <SectionLabel>Live Agent Console</SectionLabel>
          <h2 className="text-4xl font-display">Profile your org. Watch Uwam work.</h2>
          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            <Card className="lg:col-span-1 space-y-6">
              <Picker label="Organization type" options={orgTypes} value={orgType} onChange={setOrgType} />
              <Picker label="Sector focus" options={sectors} value={sector} onChange={setSector} />
              <Picker label="Region" options={regions} value={region} onChange={setRegion} />
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Funding need</div>
                <div className="mt-2 font-display text-2xl text-gold">${need}k</div>
                <input type="range" min={50} max={3000} step={50} value={need} onChange={e=>setNeed(parseInt(e.target.value))} className="w-full mt-2 accent-[var(--gold)]" />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Org capacity</div>
                <div className="mt-2 font-display text-2xl text-gold">{cap}%</div>
                <input type="range" min={10} max={100} value={cap} onChange={e=>setCap(parseInt(e.target.value))} className="w-full mt-2 accent-[var(--gold)]" />
              </div>
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-4">
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Grant DNA Profile</div>
                <div className="mt-2 text-sm">{orgType} · {sector} · {region} · ${need}k target · capacity {cap}%</div>
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" /> Uwam Agent · indexing Grant DNA…
              </div>
            </Card>

            <Card className="lg:col-span-2">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Real-time grant discovery</div>
                  <div className="mt-1 text-sm">Ranked by Uwam Grant-Fit score</div>
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />Live feed
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map(g => (
                  <div key={g.title} className="rounded-lg border border-border/60 p-4 hover:border-gold/50 transition flex flex-wrap gap-4 items-center">
                    <div className="flex-1 min-w-[260px]">
                      <div className="text-xs text-muted-foreground">{g.funder} · {g.region} · {g.sector}</div>
                      <div className="mt-1 font-medium">{g.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{g.amount} · Deadline {g.deadline}</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-display text-2xl ${g.fit>=70?"text-gold":g.fit>=50?"text-blue-300":"text-muted-foreground"}`}>{g.fit}%</div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{g.label}</div>
                    </div>
                    <button className="rounded-md bg-gold text-primary-foreground px-4 py-2 text-xs font-medium">Draft</button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Agent Capabilities</SectionLabel>
          <h2 className="text-4xl font-display">Six autonomous skills, one continuous loop.</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map(([t,d]) => (
              <Card key={t} className="p-6">
                <div className="text-lg">{t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{d}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Built for Five Audiences</SectionLabel>
          <h2 className="text-4xl font-display">Who Uwam serves across the ecosystem.</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {audiences.map(([t,d]) => (
              <Card key={t}><div className="text-gold text-sm tracking-[0.2em] uppercase">{t}</div><div className="mt-3 text-sm text-muted-foreground">{d}</div></Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Business Model</SectionLabel>
          <h2 className="text-4xl font-display">Credit-based access.</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">Organizations purchase Uwam Credits to unlock discovery, scoring, drafting, auto-apply and analytics.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {tiers.map(t => (
              <Card key={t.name} className="p-8 text-center">
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{t.name}</div>
                <div className="mt-4 font-display text-5xl text-gold">{t.price}</div>
                <div className="mt-2 text-sm text-muted-foreground">{t.credits}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>3-Year Impact Forecast</SectionLabel>
          <h2 className="text-4xl font-display">Where Uwam takes Africa.</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-5">
            {[["10,000","Organizations onboarded"],["50,000","Grant applications generated"],["$100M+","Funding unlocked"],["6,000","Year-2 active users target"]].map(([v,l]) => (
              <Card key={l} className="text-center"><div className="font-display text-4xl text-gold">{v}</div><div className="mt-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">{l}</div></Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Roll-out</SectionLabel>
          <h2 className="text-4xl font-display">Three phases. One agent. Continuously smarter.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {phases.map(p => (
              <Card key={p.n} className="p-8">
                <div className="font-display text-3xl text-gold/70">{p.n}</div>
                <div className="mt-3 text-2xl">{p.title}</div>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {p.items.map(i => <li key={i} className="flex gap-2"><span className="text-gold">→</span>{i}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24 text-center">
          <SectionLabel>Vision</SectionLabel>
          <h3 className="text-3xl md:text-5xl font-display max-w-4xl mx-auto">
            Africa's leading <span className="italic gradient-gold-text">AI Grant Intelligence Platform</span> — unlocking billions in funding.
          </h3>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Picker({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string)=>void }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map(o => (
          <button key={o} onClick={()=>onChange(o)}
            className={`text-xs px-3 py-1.5 rounded-full border transition ${
              value===o ? "border-gold bg-gold text-primary-foreground" : "border-border/60 hover:border-gold/50"
            }`}>{o}</button>
        ))}
      </div>
    </div>
  );
}


