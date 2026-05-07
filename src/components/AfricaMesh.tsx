// Stylised Africa with glowing impact nodes
const nodes = [
  { x: 240, y: 120, r: 6 }, { x: 350, y: 90, r: 5 }, { x: 410, y: 150, r: 7 },
  { x: 300, y: 200, r: 8 }, { x: 360, y: 220, r: 6 }, { x: 420, y: 240, r: 5 },
  { x: 280, y: 280, r: 6 }, { x: 380, y: 300, r: 7 }, { x: 440, y: 320, r: 5 },
  { x: 320, y: 360, r: 6 }, { x: 400, y: 400, r: 8 }, { x: 350, y: 460, r: 6 },
  { x: 380, y: 520, r: 5 }, { x: 410, y: 580, r: 6 },
];

export function AfricaMesh() {
  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto rounded-2xl border border-border/60 bg-card/40 backdrop-blur overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      <svg viewBox="0 0 600 700" className="w-full h-full relative">
        <defs>
          <radialGradient id="node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.92 0.14 85)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.82 0.14 85)" stopOpacity="0" />
          </radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" /></filter>
        </defs>
        {/* Africa silhouette (stylised) */}
        <path
          d="M260 80 Q350 60 430 110 Q480 160 470 230 Q500 280 470 340 Q490 400 440 460 Q420 540 380 600 Q340 640 320 600 Q280 540 290 470 Q250 410 260 340 Q220 280 240 220 Q220 150 260 80 Z"
          fill="oklch(0.22 0.02 260 / 0.5)"
          stroke="oklch(0.82 0.14 85 / 0.25)"
          strokeWidth="1"
        />
        {/* edges */}
        {nodes.map((a, i) =>
          nodes.slice(i + 1, i + 4).map((b, j) => (
            <line
              key={`${i}-${j}`}
              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke="oklch(0.82 0.14 85 / 0.25)"
              strokeWidth="0.6"
            />
          ))
        )}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r * 2.5} fill="url(#node)" filter="url(#glow)" />
            <circle cx={n.x} cy={n.y} r={n.r} fill="oklch(0.92 0.14 85)">
              <animate attributeName="opacity" values="0.6;1;0.6" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        Live Impact Mesh · 14 Countries
      </div>
    </div>
  );
}
