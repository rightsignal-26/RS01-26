import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Eyebrow, Card } from "@/components/Eyebrow";

export const Route = createFileRoute("/financials")({
  head: () => ({
    meta: [
      { title: "Financials — RS#01@26 Impact OS" },
      { name: "description", content: "Revenue trajectory from $1.2M to $14M by 2030 across SaaS, grant-share fees and XP marketplace." },
    ],
  }),
  component: Financials,
});

const years = ["2026", "2027", "2028", "2029", "2030"];
const saas = [0.4, 1.6, 2.8, 4.6, 7.2];
const grant = [0.6, 1.4, 2.2, 3.4, 4.8];
const xp = [0.2, 0.6, 1.0, 1.4, 2.0];

const economics = [
  ["Blended ARPU (NGO)", "$48 / mo"],
  ["CAC (NGO)", "$95"],
  ["Payback period", "2.0 months"],
  ["LTV : CAC", "11.4×"],
  ["Gross margin", "78%"],
  ["Net revenue retention", "128%"],
];

function Financials() {
  const max = Math.max(...years.map((_,i)=>saas[i]+grant[i]+xp[i]));
  return (
    <div>
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <Eyebrow>Financial Model</Eyebrow>
        <h1 className="mt-6 text-5xl md:text-6xl font-display max-w-3xl">
          From <span className="gradient-gold-text italic">₦1.2B in 2026</span> to $14M by 2030.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          Three revenue engines: SaaS subscriptions (NGOs & institutions), grant-share fees via Uwam, and XP marketplace transaction take-rate. Figures USD millions, illustrative.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <Card><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">ARR target 2027</div><div className="mt-3 font-display text-4xl text-gold">$3.6M</div><div className="mt-2 text-xs text-muted-foreground">300k subscribers · 1,287 NGOs</div></Card>
          <Card><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">ARR target 2028</div><div className="mt-3 font-display text-4xl text-gold">$6.0M</div><div className="mt-2 text-xs text-muted-foreground">Path to $14M by 2030</div></Card>
          <Card><div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Gross margin</div><div className="mt-3 font-display text-4xl text-gold">78%</div><div className="mt-2 text-xs text-muted-foreground">SaaS + automation core</div></Card>
        </div>

        <Card className="mt-8 p-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl">Revenue trajectory</h3>
            <div className="text-xs text-muted-foreground">USD millions · stacked by stream</div>
          </div>
          <div className="mt-8 flex items-end gap-6 h-72">
            {years.map((y,i) => {
              const total = saas[i]+grant[i]+xp[i];
              const h = (total/max)*100;
              return (
                <div key={y} className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs text-gold font-medium">${total.toFixed(1)}M</div>
                  <div className="w-full flex flex-col-reverse rounded-md overflow-hidden" style={{height:`${h}%`}}>
                    <div style={{flex:saas[i], background:"oklch(0.82 0.14 85)"}} />
                    <div style={{flex:grant[i], background:"oklch(0.7 0.13 70)"}} />
                    <div style={{flex:xp[i], background:"oklch(0.55 0.1 60)"}} />
                  </div>
                  <div className="text-xs text-muted-foreground">{y}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm" style={{background:"oklch(0.82 0.14 85)"}} />SaaS</span>
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm" style={{background:"oklch(0.7 0.13 70)"}} />Grant share (Uwam)</span>
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm" style={{background:"oklch(0.55 0.1 60)"}} />XP marketplace</span>
          </div>
        </Card>

        <Card className="mt-8 p-8">
          <h3 className="text-xl mb-2">Unit economics</h3>
          <div className="text-xs text-muted-foreground mb-6">Indicative blended figures</div>
          <div className="grid md:grid-cols-2 gap-x-12">
            {economics.map(([k,v]) => (
              <div key={k} className="flex justify-between border-b border-border/40 py-3">
                <span className="text-muted-foreground">{k}</span>
                <span className="text-gold font-medium">{v}</span>
              </div>
            ))}
          </div>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}

