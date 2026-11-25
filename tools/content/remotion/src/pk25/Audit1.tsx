// Audit 1 - Weilhammer Plumbing (edit test 25 Nov). Cut timeline 27.8 s. Layout (Nick 25 Nov): site recording full width,
// top centre; Nick centred and lowered under it. Captions below his chin (split-screen rule). Scene plan: pk25/README.md.
import React from "react";
import { AbsoluteFill, Audio, OffthreadVideo, Sequence, interpolate, staticFile } from "remotion";
import { BehindText, CHARCOAL, Captions, Chip, Chunk, DoodleCircle, FONT, Flash, PINK, Stars, Vignette, clamp, ease, grade, life, popS, useT } from "./lib";

export const A1_SECONDS = 27.8;
const PANEL_Y = 170, PANEL_H = 548; // 2160x1096 screen clip shown at 1080x548
const SPLIT_DY = 330; // camera pushed down in split layout
// Full-frame (no panel) windows: the rehook, "Easy.", and the last line's payoff.
const FULL: [number, number][] = [[13.55, 15.1], [23.2, 23.95], [25.95, 28.6]];
const isFull = (t: number) => FULL.some(([a, b]) => t >= a && t < b);
// 0 = split, 1 = full; 0.22 s slide either way
const fullness = (t: number) => Math.max(...FULL.map(([a, b]) => Math.min(interpolate(t, [a - 0.12, a + 0.1], [0, 1], { ...clamp, easing: ease }), interpolate(t, [b - 0.1, b + 0.12], [1, 0], { ...clamp, easing: ease }))));

// Screen zooms (one at a time; each fully out before the next cut). fx/fy = focus in panel fractions.
const ZOOMS = [
  { a: 0.0, b: 2.75, s: 1.85, fx: 0.3, fy: 0.5, inS: 0.01 }, // opening: the review card + glove, out before the 2.9 cut
  { a: 3.2, b: 4.55, s: 2.2, fx: 0.0, fy: 0.0 }, // "since this year": Established in 1901
  { a: 7.0, b: 8.75, s: 1.45, fx: 0.45, fy: 0.6 }, // "look what's next to it": the glove
  { a: 9.0, b: 10.55, s: 1.6, fx: 0.46, fy: 0.58 }, // glove thumbs up
  { a: 11.0, b: 13.55, s: 2.1, fx: 0.15, fy: 0.56 }, // no face on the review card
  { a: 23.95, b: 25.85, s: 2.6, fx: 0.15, fy: 0.57 }, // "if customers can't read it": the tiny review text
];
const zoomAt = (t: number) => {
  for (const z of ZOOMS) {
    if (t >= z.a && t < z.b) return { k: 1 + (z.s - 1) * life(t, z.a, z.b, z.inS ?? 0.35, 0.3), fx: z.fx, fy: z.fy };
  }
  return { k: 1, fx: 0.5, fy: 0.5 };
};

const CHUNKS: Chunk[] = [
  { a: 0.0, b: 0.84, w: "this plumbing", k: "company" },
  { a: 0.84, b: 1.96, w: "is", k: "wasting" },
  { a: 1.96, b: 2.9, w: "the", k: "reviews", after: "they have" },
  { a: 2.9, b: 3.8, w: "they've been", k: "around" },
  { a: 3.8, b: 4.55, w: "since", k: "this year" },
  { a: 4.55, b: 5.62, w: "but their", k: "reviews", after: "make the" },
  { a: 5.62, b: 6.96, w: "customer just", k: "scroll past" },
  { a: 6.96, b: 8.95, w: "and look what's", k: "next to it" },
  { a: 8.95, b: 10.6, w: "there's a glove giving it a", k: "thumbs up" },
  { a: 10.6, b: 11.82, w: "but there's not a", k: "single picture" },
  { a: 11.82, b: 13.55, w: "from the", k: "owner", after: "or his crew" },
  { a: 14.08, b: 15.15, w: "so what is the", k: "fix", after: "here?" },
  { a: 15.3, b: 16.36, w: "instead, what you", k: "should do" },
  { a: 16.36, b: 17.9, w: "is make it", k: "big & dark" },
  { a: 17.95, b: 19.36, w: "and this", k: "fake looking", after: "photo" },
  { a: 19.36, b: 20.66, w: "you have to", k: "change it" },
  { a: 20.66, b: 21.66, w: "and put", k: "somebody" },
  { a: 21.66, b: 23.2, w: "who actually comes to the", k: "job site" },
  { a: 23.3, b: 23.95, k: "easy." },
  { a: 24.0, b: 25.96, w: "if customers", k: "can't read it" },
  { a: 25.96, b: 27.8, w: "your reviews do", k: "not count", after: "at all" },
];

const Screen: React.FC = () => {
  const t = useT();
  const { k, fx, fy } = zoomAt(t);
  return (
    <div style={{ position: "absolute", inset: 0, transform: `scale(${k})`, transformOrigin: `${fx * 100}% ${fy * 100}%` }}>
      <OffthreadVideo src={staticFile("e25/a1scr.mp4")} muted style={{ width: 1080, height: PANEL_H }} />
      <DoodleCircle cx={490} cy={315} rx={120} ry={140} a={7.05} b={10.75} arrow />
    </div>
  );
};

// "Make it big and dark": the REAL review card lifted out of the site, inverted to dark, scaled up (no invented text).
const BigDarkCard: React.FC = () => {
  const t = useT();
  const a = 16.4, b = 18.2;
  if (t < a || t > b) return null;
  const s = interpolate(t, [a, a + 0.55], [0, 1], { ...clamp, easing: ease });
  const op = interpolate(t, [b - 0.25, b], [1, 0], clamp);
  // card region in panel px (from the 1080x548 panel): x 38..302, y 219..329
  const cx = 38, cy = 214, cw = 268, ch = 120;
  const K = 1 + 2.2 * s; // grows to 3.2x
  const w = cw * K, h = ch * K;
  const left = interpolate(s, [0, 1], [cx, (1080 - w) / 2]);
  const top = interpolate(s, [0, 1], [cy, (PANEL_H - h) / 2]);
  const dark = interpolate(t, [a + 0.35, a + 0.8], [0, 1], clamp);
  return (
    <div style={{ position: "absolute", left, top, width: w, height: h, overflow: "hidden", borderRadius: 18 * s, opacity: op,
      boxShadow: `0 20px 60px rgba(0,0,0,${0.6 * s})`, outline: `${4 * s}px solid ${PINK}` }}>
      <div style={{ position: "absolute", left: -cx * K, top: -cy * K, width: 1080 * K, height: PANEL_H * K,
        filter: `invert(${dark}) hue-rotate(${180 * dark}deg) contrast(${1 + 0.25 * dark}) brightness(${1 + 0.15 * dark})` }}>
        <OffthreadVideo src={staticFile("e25/a1scr.mp4")} muted style={{ width: 1080 * K, height: PANEL_H * K }} />
      </div>
    </div>
  );
};

// The glove photo gets crossed out, then a "real crew photo" slot takes its place.
const GloveSwap: React.FC = () => {
  const t = useT();
  const gx = 395, gy = 160, gw = 220, gh = 260; // glove photo area in panel px
  const xDraw = interpolate(t, [18.5, 18.9], [0, 1], { ...clamp, easing: ease });
  const swap = interpolate(t, [19.6, 20.0], [0, 1], { ...clamp, easing: ease });
  const end = interpolate(t, [23.0, 23.2], [1, 0], clamp);
  if (t < 18.4 || t > 23.2) return null;
  const L = Math.hypot(gw, gh);
  return (
    <div style={{ position: "absolute", left: gx, top: gy, width: gw, height: gh, opacity: end }}>
      <svg width={gw} height={gh} style={{ position: "absolute", inset: 0, opacity: 1 - swap }}>
        <line x1={20} y1={20} x2={gw - 20} y2={gh - 20} stroke={PINK} strokeWidth={16} strokeLinecap="round" strokeDasharray={L} strokeDashoffset={L * (1 - xDraw)} />
        <line x1={gw - 20} y1={20} x2={20} y2={gh - 20} stroke={PINK} strokeWidth={16} strokeLinecap="round" strokeDasharray={L} strokeDashoffset={L * (1 - interpolate(t, [18.75, 19.15], [0, 1], clamp))} />
      </svg>
      <div style={{ position: "absolute", inset: 0, transform: `translateX(${(1 - swap) * 360}px)`, opacity: swap, background: CHARCOAL, borderRadius: 22,
        border: `5px solid ${PINK}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18, boxShadow: "0 18px 50px rgba(0,0,0,.5)" }}>
        <svg width={96} height={96} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4.2" fill="white" /><path d="M3.5 21c.8-4.6 4.3-7 8.5-7s7.7 2.4 8.5 7z" fill="white" /><path d="M6.8 6.6c.4-3 2.6-4.8 5.2-4.8s4.8 1.8 5.2 4.8z" fill={PINK} /><rect x="5.6" y="6.2" width="12.8" height="1.4" rx=".7" fill={PINK} /></svg>
        <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: 30, color: "white", textAlign: "center", lineHeight: 1.05 }}>YOUR TECH<br /><span style={{ color: PINK }}>ON THE JOB</span></div>
      </div>
    </div>
  );
};

const Panel: React.FC = () => {
  const t = useT();
  const f = fullness(t);
  const y = PANEL_Y - f * (PANEL_H + PANEL_Y + 40);
  const intro = interpolate(t, [0, 0.25], [0.92, 1], { ...clamp, easing: ease });
  return (
    <div style={{ position: "absolute", left: 0, top: y, width: 1080, height: PANEL_H, overflow: "hidden", transform: `scale(${intro})`,
      boxShadow: "0 24px 70px rgba(0,0,0,.55)", background: "#111" }}>
      <Screen />
      <BigDarkCard />
      <GloveSwap />
    </div>
  );
};

const Camera: React.FC<{ src: string; transparent?: boolean }> = ({ src, transparent }) => {
  const t = useT();
  const f = fullness(t);
  const easyPunch = 1 + 0.18 * life(t, 23.2, 23.95, 0.08, 0.08);
  const endPush = interpolate(t, [25.95, 27.8], [1.04, 1.12], clamp);
  const k = t >= 25.9 ? endPush : easyPunch;
  return (
    <AbsoluteFill style={{ transform: `translateY(${(1 - f) * SPLIT_DY}px) scale(${k})`, transformOrigin: "50% 35%", filter: grade("serious") }}>
      <OffthreadVideo src={staticFile(src)} muted transparent={transparent} style={{ width: 1080, height: 1920 }} />
    </AbsoluteFill>
  );
};

// Above-the-head graphics (in the wall gap between the panel and his head).
const GAP_Y = 760;
const Overheads: React.FC = () => {
  const t = useT();
  const starsFill = interpolate(t, [1.1, 1.9], [5, 0], clamp);
  const years = Math.round(interpolate(t, [3.0, 4.1], [0, 125], { ...clamp, easing: ease }));
  return (
    <>
      <Chip a={0.85} b={2.85} y={GAP_Y}>
        <Stars fill={starsFill} size={50} /> <span style={{ fontSize: 40, color: t > 1.6 ? PINK : CHARCOAL }}>{t > 1.6 ? "WASTED" : "5.0"}</span>
      </Chip>
      <Chip a={2.95} b={4.6} y={GAP_Y} bg={CHARCOAL} fg="white">
        <span>SINCE 1901</span><span style={{ color: PINK }}>· {years} YEARS</span>
      </Chip>
      <Chip a={5.6} b={6.95} y={GAP_Y}>
        <span style={{ display: "inline-block", transform: `translateY(${((t * 3) % 1) * 14 - 7}px)` }}>↓</span> SCROLL… <span style={{ color: PINK }}>GONE</span>
      </Chip>
      <Chip a={10.65} b={13.6} y={GAP_Y} bg={CHARCOAL} fg="white">
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: 54, height: 54, borderRadius: 99, background: "#3a3a3a", display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <svg width={40} height={40} viewBox="0 0 24 24"><circle cx="12" cy="9" r="4" fill="#777" /><path d="M4 21c1-4.5 4.4-6.5 8-6.5s7 2 8 6.5z" fill="#777" /></svg>
            <span style={{ position: "absolute", width: 64, height: 6, background: PINK, transform: `rotate(-40deg) scaleX(${popS(t, 11.0 + i * 0.15)})`, borderRadius: 4 }} />
          </span>
        ))}
        <span>CREW PHOTOS: <span style={{ color: PINK }}>0</span></span>
      </Chip>
      <Chip a={20.75} b={23.15} y={GAP_Y}>
        <span style={{ color: "#1DB954" }}>✓</span> REAL FACE = <span style={{ color: PINK }}>TRUST</span>
      </Chip>
    </>
  );
};

const BRAND_BAR: React.FC = () => {
  const t = useT();
  const f = fullness(t);
  const s = popS(t, 0.1, 30, 16);
  return (
    <div style={{ position: "absolute", top: 92 - f * 300, left: 0, right: 0, display: "flex", justifyContent: "center", transform: `scale(${s})` }}>
      <div style={{ background: "rgba(255,255,255,.1)", border: "2px solid rgba(255,255,255,.25)", borderRadius: 999, padding: "8px 24px", fontFamily: FONT, fontWeight: 700, fontSize: 30, color: "white", display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ width: 14, height: 14, borderRadius: 99, background: PINK }} /> weilhammerplumbing.com · Indianapolis
      </div>
    </div>
  );
};

export const Audit1: React.FC = () => {
  const t = useT();
  return (
    <AbsoluteFill style={{ background: CHARCOAL }}>
      <Camera src="e25/a1cam.mp4" />
      {/* text behind Nick in the full-frame beats (matte) */}
      <BehindText text="FIX?" a={13.55} b={15.1} y={520} size={400} color={PINK} />
      <BehindText text="EASY." a={23.22} b={23.95} y={520} size={330} color={PINK} />
      <BehindText text="0" a={25.98} b={27.8} y={560} size={760} color={PINK} />
      <Chip a={26.1} b={27.8} y={180} bg="white" fg={CHARCOAL} size={44}>REVIEWS THAT COUNT: <span style={{ color: PINK }}>0</span></Chip>
      {(isFull(t)) ? <Camera src="e25/a1person.webm" transparent /> : null}
      <Vignette strength={0.35} />
      <Panel />
      <BRAND_BAR />
      <Overheads />
      <Captions chunks={CHUNKS} y={isFull(t) ? 1330 : 1470} />
      <Flash at={[13.55, 15.1, 23.2, 25.95]} />
      <Audio src={staticFile("e25/a1voice.wav")} />
      {/* Sound: max 1 per 5 s, -18 dB under the voice (~0.13 gain) */}
      <Sequence from={Math.round(0.9 * 30)}><Audio src={staticFile("e25/pop.wav")} volume={0.09} /></Sequence>
      <Sequence from={Math.round(7.0 * 30)}><Audio src={staticFile("e25/swipe.wav")} volume={0.07} /></Sequence>
      <Sequence from={Math.round(13.5 * 30)}><Audio src={staticFile("e25/whoosh.wav")} volume={0.08} /></Sequence>
      <Sequence from={Math.round(19.5 * 30)}><Audio src={staticFile("e25/swipe.wav")} volume={0.07} /></Sequence>
      <Sequence from={Math.round(25.95 * 30)}><Audio src={staticFile("e25/impact.wav")} volume={0.07} /></Sequence>
    </AbsoluteFill>
  );
};
