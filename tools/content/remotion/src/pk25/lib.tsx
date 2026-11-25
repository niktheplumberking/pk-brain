// Shared parts for the 25 Nov edit test (Audit 1, Contrarian 2). Brand: charcoal + hot pink, Urbanist.
// Style source: rules/content-ops/style.md (03 INSPIRATION house style + the 17 effects).
import React from "react";
import "@fontsource/urbanist/600.css";
import "@fontsource/urbanist/800.css";
import "@fontsource/urbanist/900.css";
import { AbsoluteFill, Easing, interpolate, random, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const PINK = "#FF3D8B";
export const CHARCOAL = "#141414";
export const FONT = "Urbanist, sans-serif";

export const useT = () => useCurrentFrame() / useVideoConfig().fps;
export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
export const ease = Easing.bezier(0.22, 1, 0.36, 1);

/** 0..1 in, hold, 1..0 out over [a, b] (seconds), with `inS`/`outS` ramp lengths. */
export const life = (t: number, a: number, b: number, inS = 0.25, outS = 0.2) =>
  Math.min(interpolate(t, [a, a + inS], [0, 1], { ...clamp, easing: ease }), interpolate(t, [b - outS, b], [1, 0], { ...clamp, easing: ease }));

export const popS = (t: number, a: number, fps = 30, damping = 12) =>
  t < a ? 0 : spring({ frame: Math.round((t - a) * fps), fps, config: { damping, stiffness: 200 } });

// ---------- Captions: 1-3 words, one keyword big + pink (house style rule 2) ----------
export type Chunk = { a: number; b: number; w?: string; k?: string; after?: string };
// w = small words before the keyword, k = keyword (big), after = small words after
export const Captions: React.FC<{ chunks: Chunk[]; y: number; outline?: string; hide?: [number, number][]; key2?: string }> = ({ chunks, y, outline = CHARCOAL, hide = [], key2 = "white" }) => {
  const t = useT();
  if (hide.some(([a, b]) => t >= a && t < b)) return null;
  const c = chunks.find((x) => t >= x.a && t < x.b);
  if (!c) return null;
  const s = popS(t, c.a, 30, 14);
  const stroke = { WebkitTextStroke: `2px ${outline}`, paintOrder: "stroke fill" as const, textShadow: `0 4px 18px rgba(0,0,0,.45)` };
  return (
    <div style={{ position: "absolute", top: y, left: 120, right: 120, textAlign: "center", fontFamily: FONT, lineHeight: 1.0,
      transform: `translateY(-50%) scale(${0.85 + 0.15 * s})`, opacity: Math.min(1, s * 1.5) }}>
      {c.w ? <div style={{ fontWeight: 800, fontSize: 54, color: "white", ...stroke, letterSpacing: 0.5 }}>{c.w}</div> : null}
      {c.k ? <div style={{ fontWeight: 900, fontSize: 104, color: key2, ...stroke, WebkitTextStroke: `3px ${outline}`, textShadow: `0 6px 0 ${outline}, 0 10px 28px rgba(0,0,0,.5)`, textTransform: "uppercase", letterSpacing: -1 }}>{c.k}</div> : null}
      {c.after ? <div style={{ fontWeight: 800, fontSize: 54, color: "white", ...stroke }}>{c.after}</div> : null}
    </div>
  );
};

// ---------- Doodle boil: wiggly hand-drawn ellipse that draws on, then "boils" (effect 14) ----------
export const DoodleCircle: React.FC<{ cx: number; cy: number; rx: number; ry: number; a: number; b: number; color?: string; arrow?: boolean }> = ({ cx, cy, rx, ry, a, b, color = PINK, arrow }) => {
  const t = useT();
  const f = useCurrentFrame();
  if (t < a || t > b) return null;
  const draw = interpolate(t, [a, a + 0.45], [0, 1], { ...clamp, easing: ease });
  const op = interpolate(t, [b - 0.2, b], [1, 0], clamp);
  const seed = Math.floor(f / 3); // boil: new wobble every 3 frames
  const pts: string[] = [];
  const N = 40;
  for (let i = 0; i <= N * 1.12; i++) {
    const th = (i / N) * Math.PI * 2 - 0.6;
    const j = 1 + (random(`d${seed}-${i % N}`) - 0.5) * 0.06;
    pts.push(`${(cx + Math.cos(th) * rx * j).toFixed(1)},${(cy + Math.sin(th) * ry * j).toFixed(1)}`);
  }
  const len = 2 * Math.PI * Math.max(rx, ry) * 1.2;
  return (
    <svg style={{ position: "absolute", inset: 0, opacity: op }} width={1080} height={1920}>
      <polyline points={pts.join(" ")} fill="none" stroke={color} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={len} strokeDashoffset={len * (1 - draw)} style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,.4))" }} />
      {arrow && draw > 0.9 ? (
        <path d={`M ${cx + rx + 120} ${cy - ry - 90} Q ${cx + rx + 40} ${cy - ry - 60} ${cx + rx * 0.75} ${cy - ry * 0.75} M ${cx + rx * 0.75 + 34} ${cy - ry * 0.75 - 6} L ${cx + rx * 0.75} ${cy - ry * 0.75} L ${cx + rx * 0.75 + 8} ${cy - ry * 0.75 - 34}`}
          fill="none" stroke={color} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
      ) : null}
    </svg>
  );
};

// ---------- Big text behind the person (couch wall / cover story / glass type) ----------
export const BehindText: React.FC<{ text: string; a: number; b: number; y: number; size: number; color?: string; glass?: boolean; serif?: boolean; sub?: string }> = ({ text, a, b, y, size, color = "white", glass, serif, sub }) => {
  const t = useT();
  if (t < a - 0.05 || t > b) return null;
  const s = popS(t, a, 30, 15);
  const op = life(t, a, b, 0.15, 0.25);
  const zoom = interpolate(t, [a, b], [1.0, 1.06], clamp);
  const style: React.CSSProperties = glass
    ? { color: "rgba(255,255,255,.22)", WebkitTextStroke: "3px rgba(255,255,255,.85)", textShadow: "0 0 40px rgba(255,255,255,.35), 0 10px 50px rgba(0,0,0,.25)", backdropFilter: "blur(4px)" }
    : { color, textShadow: "0 12px 60px rgba(0,0,0,.35)" };
  return (
    <div style={{ position: "absolute", top: y, left: -200, right: -200, textAlign: "center", opacity: op,
      transform: `translateY(-50%) scale(${(0.7 + 0.3 * s) * zoom})` }}>
      {sub ? <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: size * 0.2, color: "white", letterSpacing: 8, marginBottom: -size * 0.06, textShadow: "0 4px 20px rgba(0,0,0,.4)" }}>{sub}</div> : null}
      <div style={{ fontFamily: serif ? "Georgia, 'Times New Roman', serif" : FONT, fontStyle: serif ? "italic" : "normal", fontWeight: 900, fontSize: size, lineHeight: 0.9, letterSpacing: serif ? -4 : -6, ...style }}>{text}</div>
    </div>
  );
};

// ---------- Small rounded chip that pops in (counters, labels) ----------
export const Chip: React.FC<{ a: number; b: number; x?: number; y: number; children: React.ReactNode; bg?: string; fg?: string; size?: number }> = ({ a, b, x, y, children, bg = "white", fg = CHARCOAL, size = 46 }) => {
  const t = useT();
  if (t < a || t > b) return null;
  const s = popS(t, a, 30, 11);
  const op = interpolate(t, [b - 0.2, b], [1, 0], clamp);
  return (
    <div style={{ position: "absolute", top: y, left: x === undefined ? 0 : x, right: x === undefined ? 0 : undefined, display: "flex", justifyContent: "center", opacity: op }}>
      <div style={{ transform: `scale(${s})`, background: bg, color: fg, fontFamily: FONT, fontWeight: 900, fontSize: size, padding: "14px 30px", borderRadius: 999,
        boxShadow: "0 14px 40px rgba(0,0,0,.35)", display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap" }}>{children}</div>
    </div>
  );
};

export const Stars: React.FC<{ n?: number; size?: number; color?: string; fill?: number }> = ({ n = 5, size = 40, color = "#FFC93C", fill = 5 }) => (
  <span style={{ display: "inline-flex", gap: size * 0.1 }}>
    {Array.from({ length: n }).map((_, i) => {
      const p = Math.max(0, Math.min(1, fill - i));
      return (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24">
          <defs><linearGradient id={`g${i}-${p}`}><stop offset={`${p * 100}%`} stopColor={color} /><stop offset={`${p * 100}%`} stopColor="rgba(255,255,255,.25)" /></linearGradient></defs>
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6z" fill={`url(#g${i}-${p})`} />
        </svg>
      );
    })}
  </span>
);

/** Light grade by TONE (pka-video-edit step 9). */
export const grade = (tone: "serious" | "dramatic") =>
  tone === "dramatic" ? "contrast(1.12) saturate(1.06) brightness(0.98)" : "contrast(1.05) saturate(1.02)";

export const Vignette: React.FC<{ strength?: number }> = ({ strength = 0.45 }) => (
  <AbsoluteFill style={{ background: `radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 55%, rgba(0,0,0,${strength}) 100%)`, pointerEvents: "none" }} />
);

/** White flash on a cut (one frame-ish). */
export const Flash: React.FC<{ at: number[] }> = ({ at }) => {
  const t = useT();
  const v = Math.max(0, ...at.map((a) => interpolate(t, [a - 0.02, a, a + 0.12], [0, 0.55, 0], clamp)));
  return v > 0 ? <AbsoluteFill style={{ background: "white", opacity: v }} /> : null;
};
