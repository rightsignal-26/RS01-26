import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Eyebrow, Card } from "@/components/Eyebrow";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Live Demo — Six personas on the Impact OS" },
      { name: "description", content: "Walk through how the Impact OS serves sovereigns, universities, heroes, funders, beneficiaries and NGOs." },
    ],
  }),
  component: Demo,
});

const personas = [
  { id: "sovereigns", label: "Sovereigns", count: "1,240", sub: "Leaders onboarded", desc: "Kings, chiefs, elders mobilising land, labour & legitimacy.",
    steps: [
      ["Register sovereign", "Country, throne, sectors of interest, influence score."],
      ["Match opportunity", "AI surfaces aligned infrastructure & land deals."],
      ["Co-sign with funder", "Smart contract anchors legitimacy + capital."],
    ]},
  { id: "universities", label: "Universities", count: "86", sub: "Research labs", desc: "Faculties surfacing fellowships, innovation grants and student impact programs.",
    steps: [
      ["Profile lab", "Fields of research, regional focus, capacity."],
      ["Discover grants", "Wellcome, Google.org, AfDB matched by Uwam."],
      ["Submit & track", "Auto-apply with co-investigator binding."],
    ]},
  { id: "heroes", label: "Impact Heroes", count: "41,000", sub: "Field operators", desc: "Volunteers and coordinators activating beneficiaries across the mesh.",
    steps: [
      ["Activate hero", "Onboard with verified ID and skills."],
      ["Earn XP", "Every verified action mints redeemable XP."],
      ["Climb tiers", "Volunteer → Hero → Investor pathway."],
    ]},
  { id: "funders", label: "Funders", count: "$24.7M", sub: "Capital deployed", desc: "Institutional and sovereign capital with live MEL and Polygon-anchored proof.",
    steps: [
      ["Source deals", "AI-ranked by influence and ticket size."],
      ["Diligence", "Verified records, audit trail, beneficiary proof."],
      ["Deploy & monitor", "Dashboards on outcomes, not outputs."],
    ]},
  { id: "beneficiaries", label: "Beneficiaries", count: "412k", sub: "Onboarded", desc: "Reached through multilingual voice AI and on-the-ground heroes.",
    steps: [
      ["Voice onboard", "Toll-free in local language, no smartphone needed."],
      ["Receive services", "Cash, training, food parcels, healthcare."],
      ["Earn XP", "Verified outcomes mint XP redeemable in marketplace."],
    ]},
  { id: "ngos", label: "NGOs", count: "1,287", sub: "Partner orgs", desc: "From single-program shops to country-scale networks — all in one workspace.",
    steps: [
      ["Workspace", "Field reporting, MEL, finance, comms unified."],
      ["Uwam grants", "Auto-discovers and drafts proposals."],
      ["Web3 verify", "Every record anchored on Polygon."],
    ]},
];

const xpItems = [
  { t: "Food parcels", v: "from 120 XP" },
  { t: "Training credits", v: "from 300 XP" },
  { t: "Transport", v: "from 60 XP" },
  { t: "Essentials", v: "from 90 XP" },
];

function Demo() {
  const [active, setActive] = useState(0);
  const [subs, setSubs] = useState(300);
  const [arpu, setArpu] = useState(48);
  const [conv, setConv] = useState(22);
  const [take, setTake] = useState(8);
  const [yrs, setYrs] = useState(5);

  const paying = subs * 1000 * (conv / 100);
  const saasY1 = (paying * arpu * 12) / 1e6;
  // simple compounding revenue projection
  const grow = (start: number, g: number) => Array.from({length:yrs}, (_,i) => start * Math.pow(1+g, i));
  const saas = grow(saasY1, 0.6);
  const grant = grow(saasY1 * (take/8) * 4, 0.7);
  const totals = saas.map((s,i)=>s+grant[i]);
  const yMax = Math.max(...totals);
  const persona = personas[active];

  return (
    <div>
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <Eyebrow>Investor Sandbox</Eyebrow>
        <h1 className="mt-6 text-5xl md:text-6xl font-display leading-[1.05]">
          One OS. <span className="italic gradient-gold-text">Six personas.</span> Live.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          Tap each persona to walk through how the Impact OS serves them — from sovereigns and universities to impact heroes and the beneficiaries on the ground. Then meet Uwam, the AI agent that turns the whole network into funded reality.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {personas.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`text-left rounded-lg border p-5 transition ${
                active===i ? "border-gold bg-gold/10" : "border-border/60 bg-card/40 hover:border-gold/50"
              }`}
            >
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{p.label}</div>
              <div className="mt-2 font-display text-2xl text-gold">{p.count}</div>
            </button>
          ))}
        </div>

        <Card className="mt-8 p-10">
          <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Persona walkthrough</div>
          <div className="mt-2 flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-display">{persona.label}</h2>
              <p className="mt-2 text-muted-foreground max-w-xl">{persona.desc}</p>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl text-gold">{persona.count}</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{persona.sub}</div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {persona.steps.map(([t,d], i) => (
              <div key={t} className="rounded-lg border border-border/60 p-5">
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Step {i+1}</div>
                <div className="mt-2 text-lg">{t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <Link to="/uwam" className="inline-flex items-center gap-2 rounded-md bg-gold text-primary-foreground px-5 py-3 text-sm font-medium shadow-[var(--shadow-gold)]">
              Continue with Uwam <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/crm" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 text-sm">
              Open Sovereign CRM
            </Link>
            <span className="text-xs text-muted-foreground">Every persona flow ends in the Uwam agent — that's where opportunity becomes funded.</span>
          </div>
        </Card>

        <section className="mt-24">
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Coming soon · XP Marketplace</div>
          <h2 className="mt-3 text-4xl font-display">Earn XP. Swap it for what matters.</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Every verified outcome — a beneficiary onboarded, a record anchored, a training delivered — mints XP. Heroes and beneficiaries can swap XP in the marketplace for food parcels, accredited training, transport credits and other essentials supplied by partner brands.
          </p>
          <div className="mt-3 text-sm text-gold">18.4M XP already in circulation</div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {xpItems.map(x => (
              <Card key={x.t}>
                <div className="text-lg">{x.t}</div>
                <div className="mt-2 text-sm text-gold">{x.v}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Financial sandbox</div>
          <h2 className="mt-3 text-4xl font-display">Pull the levers. Reshape the model.</h2>
          <Card className="mt-8 p-8 grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                ["Initial subscribers", subs, setSubs, 50, 1000, "k", 1],
                ["Blended ARPU / month", arpu, setArpu, 10, 200, "$", 1],
                ["Conversion to paying", conv, setConv, 5, 60, "%", 1],
                ["Grant take-rate (Uwam)", take, setTake, 2, 20, "%", 1],
                ["Projection horizon", yrs, setYrs, 3, 7, " yrs", 1],
              ].map(([label, val, setter, min, max, suf]: any) => (
                <div key={label}>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="text-gold font-medium">{suf==="$"?suf:""}{val}{suf!=="$"?suf:""}</span>
                  </div>
                  <input type="range" min={min} max={max} value={val}
                    onChange={(e)=>setter(parseInt(e.target.value))}
                    className="w-full mt-2 accent-[var(--gold)]" />
                </div>
              ))}
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Revenue Y{yrs}</div><div className="font-display text-2xl text-gold">${totals[yrs-1].toFixed(1)}M</div></div>
                <div><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">SaaS share</div><div className="font-display text-2xl text-gold">${saas[yrs-1].toFixed(1)}M</div></div>
                <div><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Grant share</div><div className="font-display text-2xl text-gold">${grant[yrs-1].toFixed(1)}M</div></div>
                <div><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Paying users</div><div className="font-display text-2xl text-gold">{(paying/1000).toFixed(0)}k</div></div>
              </div>
              <svg viewBox="0 0 400 180" className="w-full h-44">
                <defs>
                  <linearGradient id="rg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.82 0.14 85)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="oklch(0.82 0.14 85)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={`M0 180 ${totals.map((v,i)=>`L${(i*(400/(yrs-1))).toFixed(1)} ${(180-(v/yMax)*160).toFixed(1)}`).join(" ")} L400 180 Z`}
                  fill="url(#rg)"
                />
                <path
                  d={`M0 ${(180-(totals[0]/yMax)*160).toFixed(1)} ${totals.map((v,i)=>`L${(i*(400/(yrs-1))).toFixed(1)} ${(180-(v/yMax)*160).toFixed(1)}`).join(" ")}`}
                  fill="none" stroke="oklch(0.82 0.14 85)" strokeWidth="2"
                />
              </svg>
              <div className="mt-2 text-xs text-muted-foreground text-center">Live recompute · $M</div>
            </div>
          </Card>
        </section>

        <section className="mt-24 text-center">
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Where every flow lands</div>
          <h3 className="mt-3 text-4xl font-display">Meet Uwam — the AI grant agent.</h3>
          <Link to="/uwam" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold text-primary-foreground px-5 py-3 text-sm font-medium shadow-[var(--shadow-gold)]">
            Open the agent <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
