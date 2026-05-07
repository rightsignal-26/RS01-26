import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Eyebrow, SectionLabel, Card } from "@/components/Eyebrow";

export const Route = createFileRoute("/crm")({
  head: () => ({
    meta: [
      { title: "Sovereign CRM — Pan-African Leadership Network" },
      { name: "description", content: "AI CRM agent for the confidential Pan-African Traditional Leadership & Investment Network across 15 countries." },
    ],
  }),
  component: CRM,
});

const sovereigns = [
  { name: "HRM Oba Adégoké", role: "King", country: "Nigeria", region: "South-West", inf: 92, tags: ["Smart City","Infrastructure","Youth"] },
  { name: "Nana Kwabena II", role: "Chief", country: "Ghana", region: "Ashanti", inf: 78, tags: ["Agriculture","Industrial"] },
  { name: "Queen Mother Asantewaa", role: "Queen", country: "Ghana", region: "Kumasi", inf: 81, tags: ["Youth","Smart City"] },
  { name: "Mwami Bujumbura", role: "Chief", country: "Rwanda", region: "Eastern", inf: 74, tags: ["Smart City","Agriculture"] },
  { name: "Sheikh El-Hadj Diop", role: "Elder", country: "Senegal", region: "Dakar", inf: 70, tags: ["Infrastructure","Land"] },
  { name: "Amani Otieno", role: "Youth Leader", country: "Kenya", region: "Nairobi", inf: 64, tags: ["Youth","Smart City"] },
  { name: "HRH Lozi Litunga", role: "King", country: "Zambia", region: "Western", inf: 88, tags: ["Land","Agriculture"] },
  { name: "Mama Rehema", role: "Queen", country: "Tanzania", region: "Coastal", inf: 76, tags: ["Industrial","Infrastructure"] },
];

const deals = [
  { sector: "Smart City", stage: "Negotiation", title: "Coastal Smart City — Lekki Annex", country: "Nigeria", role: "King", who: "HRM Oba Adégoké", ticket: "$240M", score: 92,
    investors: [["Komaas Sovereign Capital","$50M–$500M · urban, infra","83%"],["Pan-African Youth Ventures","$5M–$40M · youth, tech","81%"]] },
  { sector: "Industrial", stage: "Due Diligence", title: "Agro-Industrial Park, Mwanza", country: "Tanzania", role: "Queen", who: "Mama Rehema", ticket: "$85M", score: 89,
    investors: [["Indian Ocean Industrial Partners","$40M–$250M · industrial, trade","83%"],["Komaas Sovereign Capital","$50M–$500M · urban, infra","58%"]] },
  { sector: "Land", stage: "Matched", title: "5,000 ha Cocoa Belt Acquisition", country: "Ghana", role: "Chief", who: "Nana Kwabena II", ticket: "$38M", score: 55,
    investors: [["Sahel Agro Fund","$20M–$120M · agro, land","100%"],["Pan-African Youth Ventures","$5M–$40M · youth, tech","30%"]] },
  { sector: "Youth", stage: "Matched", title: "Youth Tech Campus, Nairobi", country: "Kenya", role: "Youth Leader", who: "Amani Otieno", ticket: "$18M", score: 49,
    investors: [["Pan-African Youth Ventures","$5M–$40M · youth, tech","100%"],["Komaas Sovereign Capital","$50M–$500M · urban, infra","25%"]] },
  { sector: "Infrastructure", stage: "Logged", title: "Kigali → Musanze Logistics Corridor", country: "Rwanda", role: "Chief", who: "Mwami Bujumbura", ticket: "$120M", score: 46,
    investors: [["Indian Ocean Industrial Partners","$40M–$250M · industrial, trade","100%"],["Komaas Sovereign Capital","$50M–$500M · urban, infra","58%"]] },
  { sector: "Land", stage: "Logged", title: "Sovereign Land Trust, Western Province", country: "Zambia", role: "King", who: "HRH Lozi Litunga", ticket: "$55M", score: 45,
    investors: [["Sahel Agro Fund","$20M–$120M · agro, land","100%"],["Komaas Sovereign Capital","$50M–$500M · urban, infra","30%"]] },
];

const countries = ["All","Nigeria","Ghana","Rwanda","Senegal","Kenya","Zambia","Tanzania"];
const types = ["All","Smart City","Land","Infrastructure","Industrial","Agriculture","Youth"];

function CRM() {
  const [country, setCountry] = useState("All");
  const [type, setType] = useState("All");

  const fDeals = deals.filter(d =>
    (country==="All" || d.country===country) &&
    (type==="All" || d.sector===type)
  );

  return (
    <div>
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <Eyebrow>Agent · Sovereign CRM</Eyebrow>
        <h1 className="mt-6 text-5xl md:text-6xl font-display max-w-4xl leading-[1.05]">
          The digital backbone of <span className="italic gradient-gold-text">Africa's sovereign network.</span>
        </h1>
        <p className="mt-6 text-muted-foreground max-w-3xl text-lg leading-relaxed">
          An AI CRM agent for the confidential Pan-African Traditional Leadership & Investment Network — Kings, Chiefs, Queens, Elders, Youth Leaders and investors across 15 countries. The agent registers sovereigns, logs opportunities, scores deals, and matches capital to projects in real time.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[["Sovereigns","8","7 nations"],["Countries","15","Pan-African coverage"],["Live deals","6","$556M pipeline"],["Avg fit score","63%","AI-ranked"]].map(([l,v,h]) => (
            <Card key={l}><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{l}</div><div className="mt-3 font-display text-3xl text-gold">{v}</div><div className="mt-1 text-xs text-muted-foreground">{h}</div></Card>
          ))}
        </div>

        <div className="mt-6 flex gap-3 text-sm">
          <button className="rounded-md bg-gold text-primary-foreground px-4 py-2 font-medium">Register sovereign</button>
          <button className="rounded-md border border-border bg-card/40 px-4 py-2">Log opportunity</button>
          <span className="text-xs text-muted-foreground self-center flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />Syncing sovereign registry across 15 countries
          </span>
        </div>

        <section className="mt-16">
          <SectionLabel>Sovereign Registry</SectionLabel>
          <h2 className="text-4xl font-display">Kings · Chiefs · Queens · Elders · Youth Leaders</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sovereigns.map(s => (
              <Card key={s.name}>
                <div className="font-medium">{s.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.role} · {s.country} · {s.region}</div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="font-display text-2xl text-gold">{s.inf}</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Influence</div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {s.tags.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">{t}</span>)}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-wrap gap-6 mb-6 items-end">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Country</div>
              <div className="flex flex-wrap gap-2">{countries.map(c => <Pill key={c} active={country===c} onClick={()=>setCountry(c)}>{c}</Pill>)}</div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Type</div>
              <div className="flex flex-wrap gap-2">{types.map(c => <Pill key={c} active={type===c} onClick={()=>setType(c)}>{c}</Pill>)}</div>
            </div>
          </div>
          <SectionLabel>Opportunity Pipeline · AI-ranked</SectionLabel>
          <h2 className="text-4xl font-display">Scored on sponsor influence, deal stage and ticket size</h2>
          <div className="mt-10 space-y-4">
            {fDeals.map(d => (
              <Card key={d.title} className="p-6">
                <div className="flex flex-wrap gap-4 items-start">
                  <div className="flex-1 min-w-[260px]">
                    <div className="text-xs text-gold tracking-[0.2em] uppercase">{d.sector} · {d.stage}</div>
                    <div className="mt-2 text-xl">{d.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{d.country} · {d.role} · {d.who} · {d.ticket} ticket</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-3xl text-gold">{d.score}</div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Deal score</div>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-border/40">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">Suggested investors</div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {d.investors.map(([n,sub,fit]) => (
                      <div key={n} className="rounded-md border border-border/40 p-3 flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium">{n}</div>
                          <div className="text-xs text-muted-foreground">{sub}</div>
                        </div>
                        <div className="text-gold font-medium">{fit}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Sample workflow</SectionLabel>
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {[["1","Sovereign joins","Registered with country, region, interests"],["2","Opportunity logged","Land, infra, industrial, smart city"],["3","AI matches capital","Investors scored on fit & ticket"],["4","Deal executed","Tracked through negotiation → close"]].map(([n,t,d]) => (
              <Card key={n}><div className="font-display text-2xl text-gold/70">{n}</div><div className="mt-3">{t}</div><div className="mt-2 text-sm text-muted-foreground">{d}</div></Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Stakeholder graph</SectionLabel>
          <h2 className="text-4xl font-display">Every actor, one schema.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[["Traditional Leaders","Kings · Chiefs · Queens · Elders"],["Executive Leadership","CEO · CMO · CIO · CTO · Country Leads"],["Strategic Partners","Investors · Governments · Corporates · Universities"]].map(([t,d]) => (
              <Card key={t} className="p-8"><div className="text-lg">{t}</div><div className="mt-2 text-sm text-muted-foreground">{d}</div></Card>
            ))}
          </div>
        </section>

        <section className="mt-24 text-center">
          <h3 className="text-3xl md:text-5xl font-display max-w-4xl mx-auto">
            From sovereign goodwill to <span className="italic gradient-gold-text">executable capital.</span>
          </h3>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            The CRM Agent operationalizes a confidential network into a Pan-African investment ecosystem — governance, deal flow, and impact in one operating system.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: ()=>void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`text-xs px-3 py-1.5 rounded-full border transition ${active?"border-gold bg-gold text-primary-foreground":"border-border/60 hover:border-gold/50"}`}>{children}</button>
  );
}
