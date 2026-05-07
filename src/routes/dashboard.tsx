import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Eyebrow, Card } from "@/components/Eyebrow";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Impact OS Dashboard — RS#01@26" },
      { name: "description", content: "Live operator view of beneficiaries, NGOs, grants and verified records across 14 markets." },
    ],
  }),
  component: Dashboard,
});

const kpis = [
  { label: "Beneficiaries", value: "413k", delta: "+18.4% MoM" },
  { label: "NGO partners", value: "1,287", delta: "+126 this month" },
  { label: "Countries live", value: "14", delta: "+2 in pilot" },
  { label: "Impact XP issued", value: "18.4M", delta: "+2.1M weekly" },
  { label: "Grants secured", value: "$24.7M", delta: "+$3.4M Q-on-Q" },
  { label: "Voice calls auto", value: "2.1M", delta: "92% completion" },
  { label: "Verified records", value: "9.8M", delta: "Polygon anchored" },
  { label: "Retention (90d)", value: "78%", delta: "+4 pts vs target" },
];

const modules = [
  { label: "NGO Coordination", pct: 38 },
  { label: "AI Grant Assistant", pct: 24 },
  { label: "Voice Onboarding", pct: 22 },
  { label: "Web3 Verification", pct: 16 },
];

const regions = [
  ["Nigeria", "142,000", "412", "Live"],
  ["Ghana", "64,000", "188", "Live"],
  ["Kenya", "58,000", "174", "Live"],
  ["Senegal", "41,000", "121", "Pilot"],
  ["Rwanda", "32,000", "92", "Pilot"],
  ["South Africa", "28,000", "88", "Onboarding"],
  ["Côte d'Ivoire", "22,000", "72", "Onboarding"],
  ["Tanzania", "25,500", "140", "Pilot"],
];

const growth = [12, 18, 24, 33, 42, 51, 63, 78, 92, 110, 128, 152];

function Dashboard() {
  return (
    <div>
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <Eyebrow>Operator View</Eyebrow>
        <h1 className="mt-6 text-5xl md:text-6xl font-display">Impact OS Dashboard</h1>
        <p className="mt-4 text-muted-foreground">Live snapshot · synthetic demo data · Q2 2027.</p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <Card key={k.label}>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{k.label}</div>
              <div className="mt-3 font-display text-3xl text-gold">{k.value}</div>
              <div className="mt-2 text-xs text-muted-foreground">{k.delta}</div>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-5">
          <Card className="lg:col-span-2">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Growth</div>
                <h3 className="mt-2 text-xl">Subscribers & NGO onboarding</h3>
              </div>
              <div className="text-xs text-muted-foreground">in thousands</div>
            </div>
            <svg viewBox="0 0 600 220" className="mt-6 w-full h-56">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.82 0.14 85)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="oklch(0.82 0.14 85)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0,1,2,3].map(i => <line key={i} x1="0" x2="600" y1={i*55} y2={i*55} stroke="oklch(0.28 0.02 260 / 0.5)" />)}
              <path
                d={`M0 ${220 - growth[0]*1.3} ${growth.map((v,i)=>`L${i*(600/(growth.length-1))} ${220 - v*1.3}`).join(" ")} L600 220 L0 220 Z`}
                fill="url(#g1)"
              />
              <path
                d={`M0 ${220 - growth[0]*1.3} ${growth.map((v,i)=>`L${i*(600/(growth.length-1))} ${220 - v*1.3}`).join(" ")}`}
                fill="none" stroke="oklch(0.82 0.14 85)" strokeWidth="2"
              />
            </svg>
          </Card>
          <Card>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Module engagement</div>
            <div className="mt-6 space-y-4">
              {modules.map(m => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm">
                    <span>{m.label}</span><span className="text-gold">{m.pct}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-linear-to-r from-gold to-[oklch(0.7_0.15_60)]" style={{width:`${m.pct*2.2}%`}} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Regional rollout</div>
              <h3 className="mt-2 text-xl">8 markets</h3>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                <tr className="border-b border-border/60">
                  <th className="text-left py-3">Country</th>
                  <th className="text-left">Beneficiaries</th>
                  <th className="text-left">NGOs</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {regions.map(r => (
                  <tr key={r[0]} className="border-b border-border/30">
                    <td className="py-3 font-medium">{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        r[3]==="Live" ? "bg-gold/15 text-gold" :
                        r[3]==="Pilot" ? "bg-blue-400/10 text-blue-300" :
                        "bg-muted text-muted-foreground"
                      }`}>{r[3]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}


