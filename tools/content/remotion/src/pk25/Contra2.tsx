// Contrarian 2 - "5.0 can cost you jobs" (edit test 25 Nov). Cut timeline 34.7 s. TONE: dramatic.
// Camera is mirrored by the phone (his paper read backwards), so the whole video is flipped back.
import React from "react";
import { AbsoluteFill, Audio, OffthreadVideo, Sequence, interpolate, staticFile } from "remotion";
import { BehindText, CHARCOAL, Captions, Chip, Chunk, FONT, Flash, PINK, Stars, Vignette, clamp, ease, grade, life, popS, useT } from "./lib";

export const C2_SECONDS = 34.7;
const CHART: [number, number] = [6.2, 11.45]; // full-screen chart cutaway, face shrinks to a card

const CHUNKS: Chunk[] = [
  { a: 0.0, b: 0.6, k: "okay," },
  { a: 0.6, b: 1.1, w: "flash", k: "news" },
  { a: 1.1, b: 1.85, w: "five", k: "stars" },
  { a: 1.85, b: 3.15, w: "can cost you", k: "jobs now" },
  { a: 3.15, b: 3.96, w: "a research", k: "center" },
  { a: 3.96, b: 4.76, w: "proved that", k: "customers" },
  { a: 4.76, b: 6.18, w: "are more likely to", k: "call plumbers" },
  { a: 6.18, b: 7.3, w: "who have", k: "ratings between" },
  { a: 7.3, b: 9.5, k: "4.2 and 4.5", after: "stars" },
  { a: 9.5, b: 11.45, w: "over the ones that have", k: "five stars" },
  { a: 11.45, b: 12.42, w: "but the", k: "reason" },
  { a: 12.42, b: 13.5, w: "is very", k: "simple" },
  { a: 13.5, b: 14.4, w: "believe it", k: "or not" },
  { a: 14.4, b: 15.52, w: "a", k: "perfect score" },
  { a: 15.52, b: 17.0, w: "looks", k: "too good", after: "to be true" },
  { a: 17.0, b: 18.66, w: "so what does this", k: "actually mean" },
  { a: 18.66, b: 20.15, w: "for your", k: "Google profile?" },
  { a: 20.15, b: 20.84, w: "first", k: "of all" },
  { a: 20.84, b: 21.84, w: "do not", k: "panic" },
  { a: 21.84, b: 23.0, w: "over", k: "one bad review" },
  { a: 23.0, b: 24.14, w: "and", k: "second of all" },
  { a: 24.14, b: 25.48, k: "never ever" },
  { a: 25.48, b: 27.02, w: "buy", k: "fake reviews" },
  { a: 27.02, b: 28.65, w: "just to", k: "cover it up" },
  { a: 28.65, b: 30.14, w: "real reviews with a few", k: "honest" },
  { a: 30.14, b: 31.64, k: "bad ones", after: "make the business" },
  { a: 31.64, b: 32.68, w: "feel more", k: "natural" },
  { a: 32.68, b: 34.7, w: "and natural", k: "wins you the job" },
];

const Cam: React.FC<{ person?: boolean }> = ({ person }) => {
  const t = useT();
  const push = t >= 13.5 && t < 17.0 ? interpolate(t, [13.5, 17.0], [1.0, 1.14], clamp) : 1; // slow push on "too good to be true"
  const punch = t >= 18.66 && t < 20.15 ? 1.12 : 1; // punch-in on "Google profile"
  const endPush = t >= 28.65 ? interpolate(t, [28.65, 34.7], [1.0, 1.08], clamp) : 1;
  return (
    <AbsoluteFill style={{ transform: `scaleX(-1) scale(${push * punch * endPush})`, transformOrigin: "50% 38%", filter: grade("dramatic") }}>
      <OffthreadVideo src={staticFile(person ? "e25/c2person.webm" : "e25/c2cam.mp4")} muted transparent={person} style={{ width: 1080, height: 1920 }} />
    </AbsoluteFill>
  );
};

const NewsBar: React.FC = () => {
  const t = useT();
  if (t > 3.2) return null;
  const s = interpolate(t, [0.55, 0.85], [0, 1], { ...clamp, easing: ease });
  const out = interpolate(t, [2.95, 3.15], [1, 0], clamp);
  const blink = Math.floor(t * 3) % 2 === 0 ? 1 : 0.35;
  return (
    <div style={{ position: "absolute", top: 120, left: 0, width: 1080 * s, overflow: "hidden", opacity: out }}>
      <div style={{ width: 1080, display: "flex", height: 92, fontFamily: FONT, fontWeight: 900 }}>
        <div style={{ background: PINK, color: "white", fontSize: 44, padding: "0 30px", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 20, height: 20, borderRadius: 99, background: "white", opacity: blink }} /> FLASH NEWS
        </div>
        <div style={{ flex: 1, background: "rgba(20,20,20,.88)", color: "white", fontSize: 38, display: "flex", alignItems: "center", paddingLeft: 26, whiteSpace: "nowrap" }}>
          <span style={{ transform: `translateX(${-(t - 0.8) * 90}px)` }}>5-STAR RATINGS · FEWER CALLS · NEW RESEARCH · 5-STAR RATINGS</span>
        </div>
      </div>
    </div>
  );
};

// The "5.0" behind him gets a pink slash on "cost you jobs" (matches his paper).
const FiveBehind: React.FC = () => {
  const t = useT();
  if (t < 1.1 || t > 3.15) return null;
  const slash = interpolate(t, [1.95, 2.3], [0, 1], { ...clamp, easing: ease });
  return (
    <>
      <BehindText text="5.0" a={1.1} b={3.15} y={560} size={560} color="white" />
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0, opacity: life(t, 1.95, 3.15, 0.05, 0.25) }}>
        <line x1={150} y1={760} x2={150 + 780 * slash} y2={760 - 420 * slash} stroke={PINK} strokeWidth={46} strokeLinecap="round" />
      </svg>
    </>
  );
};

const ResearchCard: React.FC = () => {
  const t = useT();
  const a = 3.2, b = 6.25;
  if (t < a || t > b) return null;
  const s = popS(t, a, 30, 13);
  const out = interpolate(t, [b - 0.2, b], [1, 0], clamp);
  return (
    <div style={{ position: "absolute", top: 150, left: 0, right: 0, display: "flex", justifyContent: "center", opacity: out }}>
      <div style={{ transform: `scale(${s}) rotate(${-3 + 3 * s}deg)`, width: 760, background: "white", borderRadius: 28, padding: "30px 36px", boxShadow: "0 30px 80px rgba(0,0,0,.35)", fontFamily: FONT }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 70, height: 84, borderRadius: 10, background: CHARCOAL, display: "flex", alignItems: "center", justifyContent: "center", color: PINK, fontWeight: 900, fontSize: 34 }}>%</div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 40, color: CHARCOAL, lineHeight: 1.05 }}>Online reviews study</div>
            <div style={{ fontWeight: 600, fontSize: 28, color: "#666" }}>Spiegel Research Center · Northwestern Univ.</div>
          </div>
        </div>
        <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 14, fontWeight: 800, fontSize: 32, color: CHARCOAL }}>
          <span style={{ background: PINK, color: "white", borderRadius: 10, padding: "4px 14px" }}>FINDING</span>
          {t > 4.8 ? "Who gets the call?" : "Star rating vs. buying"}
        </div>
      </div>
    </div>
  );
};

// Snap1-style dark cutaway: chance of a call by star rating, peak 4.2-4.5, drop toward 5.0. Shape only (no invented numbers).
const RatingChart: React.FC = () => {
  const t = useT();
  const [a, b] = CHART;
  if (t < a - 0.05 || t > b + 0.05) return null;
  const inP = interpolate(t, [a, a + 0.3], [0, 1], { ...clamp, easing: ease });
  const outP = interpolate(t, [b - 0.25, b], [1, 0], clamp);
  const X0 = 110, X1 = 970, Y0 = 1260, H = 480; // plot box
  const xOf = (r: number) => X0 + ((r - 3.5) / 1.5) * (X1 - X0);
  const curve = (r: number) => Math.exp(-Math.pow((r - 4.35) / 0.42, 2)) * 0.92 + 0.05; // illustrative shape of the finding
  const draw = interpolate(t, [a + 0.25, a + 1.4], [0, 1], { ...clamp, easing: ease });
  const pts: string[] = [];
  for (let i = 0; i <= 60 * draw; i++) {
    const r = 3.5 + (i / 60) * 1.5;
    pts.push(`${xOf(r).toFixed(1)},${(Y0 - curve(r) * H).toFixed(1)}`);
  }
  const band = interpolate(t, [7.3, 8.4], [0, 1], { ...clamp, easing: ease }); // "4.2 and 4.5"
  const five = popS(t, 10.6, 30, 10); // "five stars"
  return (
    <AbsoluteFill style={{ opacity: inP * outP, background: "radial-gradient(ellipse at 50% 40%, #2a1420 0%, #141414 65%)" }}>
      <div style={{ position: "absolute", top: 590, left: 0, right: 0, textAlign: "center", fontFamily: FONT, fontWeight: 900, fontSize: 60, color: "white" }}>
        WHO GETS <span style={{ color: PINK }}>THE CALL?</span>
      </div>
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <rect x={xOf(4.2)} y={Y0 - H - 20} width={(xOf(4.5) - xOf(4.2)) * band} height={H + 20} fill={PINK} opacity={0.28} rx={12} />
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} stroke="rgba(255,255,255,.35)" strokeWidth={3} />
        <polyline points={pts.join(" ")} fill="none" stroke="white" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 14px rgba(255,61,139,.8))" }} />
        {[3.5, 4.0, 4.5, 5.0].map((r) => (
          <text key={r} x={xOf(r)} y={Y0 + 56} fill="rgba(255,255,255,.7)" fontFamily="Urbanist" fontWeight={800} fontSize={38} textAnchor="middle">{r.toFixed(1)}</text>
        ))}
        {five > 0 ? (
          <g transform={`translate(${xOf(5.0)} ${Y0 - curve(5.0) * H}) scale(${five})`}>
            <circle r={26} fill={PINK} />
            <text y={-46} fill="white" fontFamily="Urbanist" fontWeight={900} fontSize={44} textAnchor="end">5.0 ↓</text>
          </g>
        ) : null}
      </svg>
      {band > 0.05 ? (
        <div style={{ position: "absolute", top: Y0 - H - 110, left: xOf(4.2) - 80, width: xOf(4.5) - xOf(4.2) + 160, textAlign: "center", fontFamily: FONT, fontWeight: 900, fontSize: 50, color: "white", opacity: band }}>
          4.2 – 4.5 <div style={{ fontSize: 30, color: PINK, letterSpacing: 4 }}>SWEET SPOT</div>
        </div>
      ) : null}
      <div style={{ position: "absolute", top: Y0 + 100, left: 0, right: 0, textAlign: "center", fontFamily: FONT, fontWeight: 600, fontSize: 26, color: "rgba(255,255,255,.55)" }}>
        Source: Spiegel Research Center, Northwestern University
      </div>
    </AbsoluteFill>
  );
};

const FaceCard: React.FC = () => {
  const t = useT();
  const [a, b] = CHART;
  if (t < a || t > b) return null;
  const s = interpolate(t, [a, a + 0.3], [0, 1], { ...clamp, easing: ease });
  const out = interpolate(t, [b - 0.2, b], [1, 0], clamp);
  const W = 300, H = 400;
  return (
    <div style={{ position: "absolute", left: 720, top: 130, width: W, height: H, borderRadius: 34, overflow: "hidden", opacity: out,
      transform: `scale(${s})`, transformOrigin: "100% 0%", border: `5px solid ${PINK}`, boxShadow: "0 20px 60px rgba(0,0,0,.6)" }}>
      <div style={{ position: "absolute", left: -120, top: -170, width: 1080, height: 1920, transform: "scale(0.5) scaleX(-1)", transformOrigin: "0 0" }}>
        <OffthreadVideo src={staticFile("e25/c2cam.mp4")} muted style={{ width: 1080, height: 1920 }} />
      </div>
    </div>
  );
};

const ProfileCard: React.FC = () => {
  const t = useT();
  const a = 18.4, b = 20.15;
  if (t < a || t > b) return null;
  const s = popS(t, a, 30, 12);
  const out = interpolate(t, [b - 0.2, b], [1, 0], clamp);
  return (
    <div style={{ position: "absolute", top: 150, left: 0, right: 0, display: "flex", justifyContent: "center", opacity: out }}>
      <div style={{ transform: `scale(${s})`, width: 740, background: "white", borderRadius: 30, padding: 30, boxShadow: "0 30px 80px rgba(0,0,0,.35)", fontFamily: FONT }}>
        <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
          <div style={{ width: 96, height: 96, borderRadius: 99, background: CHARCOAL, color: PINK, fontWeight: 900, fontSize: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>P</div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 42, color: CHARCOAL }}>Your Plumbing Co.</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 34, color: CHARCOAL }}>
              <Stars size={36} fill={interpolate(t, [a + 0.2, a + 1.2], [0, 4.4], clamp)} />
            </div>
            <div style={{ fontWeight: 600, fontSize: 26, color: "#777" }}>Business profile · Plumber</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Checklist: React.FC = () => {
  const t = useT();
  const a = 20.15, b = 28.6;
  if (t < a || t > b) return null;
  const s = popS(t, a, 30, 14);
  const out = interpolate(t, [b - 0.25, b], [1, 0], clamp);
  const items = [
    { at: 20.84, done: 21.9, text: "Don't panic over 1 bad review", ok: true },
    { at: 24.14, done: 25.6, text: "Never buy fake reviews", ok: false },
  ];
  return (
    <div style={{ position: "absolute", top: 140, left: 0, right: 0, display: "flex", justifyContent: "center", opacity: out }}>
      <div style={{ transform: `scale(${s})`, width: 860, background: "rgba(20,20,20,.82)", border: "2px solid rgba(255,255,255,.18)", borderRadius: 32, padding: "26px 30px",
        boxShadow: "0 30px 80px rgba(0,0,0,.45)", fontFamily: FONT, backdropFilter: "blur(10px)" }}>
        <div style={{ fontWeight: 800, fontSize: 30, color: "rgba(255,255,255,.6)", letterSpacing: 3, marginBottom: 10 }}>YOUR GOOGLE PROFILE</div>
        {items.map((it, i) => {
          const p = popS(t, it.at, 30, 14);
          const d = popS(t, it.done, 30, 10);
          const lit = t >= it.at && (i === items.length - 1 || t < items[i + 1].at);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 20, padding: "14px 0", opacity: p, transform: `translateX(${(1 - p) * -40}px)` }}>
              <div style={{ width: 62, height: 62, borderRadius: 16, border: `4px solid ${lit ? PINK : "rgba(255,255,255,.5)"}`, display: "flex", alignItems: "center", justifyContent: "center",
                background: d > 0.5 ? (it.ok ? "#1DB954" : PINK) : "transparent", color: "white", fontWeight: 900, fontSize: 42, transform: `scale(${0.8 + 0.2 * d})` }}>
                {d > 0.5 ? (it.ok ? "✓" : "✕") : ""}
              </div>
              <div style={{ fontWeight: 900, fontSize: 46, color: "white", textDecoration: !it.ok && d > 0.5 ? "line-through" : "none", textDecorationColor: PINK, textDecorationThickness: 6 }}>{it.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Headline-wall style review cards around him: a few 5s and one honest bad one (no invented quotes, stars only).
const ReviewWall: React.FC = () => {
  const t = useT();
  const a = 28.7, b = 31.7;
  if (t < a || t > b) return null;
  const out = interpolate(t, [b - 0.25, b], [1, 0], clamp);
  const cards = [
    { x: 70, y: 190, r: -6, n: 5, at: 28.7 },
    { x: 600, y: 150, r: 5, n: 5, at: 28.95 },
    { x: 120, y: 470, r: 4, n: 4, at: 29.2 },
    { x: 590, y: 450, r: -4, n: 2, at: 30.15, honest: true },
  ];
  return (
    <>
      {cards.map((c, i) => {
        const s = popS(t, c.at, 30, 11);
        return (
          <div key={i} style={{ position: "absolute", left: c.x, top: c.y, width: 400, opacity: out, transform: `scale(${s}) rotate(${c.r}deg)`, background: "white", borderRadius: 22, padding: "18px 22px",
            boxShadow: "0 18px 50px rgba(0,0,0,.35)", border: c.honest ? `6px solid ${PINK}` : "none", fontFamily: FONT }}>
            <Stars size={44} fill={c.n} />
            <div style={{ height: 14, background: "#e7e7e7", borderRadius: 8, marginTop: 14, width: "92%" }} />
            <div style={{ height: 14, background: "#e7e7e7", borderRadius: 8, marginTop: 10, width: "70%" }} />
            {c.honest ? <div style={{ position: "absolute", top: -30, right: 16, background: PINK, color: "white", fontWeight: 900, fontSize: 30, padding: "4px 16px", borderRadius: 999 }}>HONEST</div> : null}
          </div>
        );
      })}
    </>
  );
};

export const Contra2: React.FC = () => {
  const t = useT();
  const inChart = t >= CHART[0] + 0.3 && t < CHART[1] - 0.25;
  const paperTime = t < 3.15; // he holds the paper at chest height: captions go up top
  return (
    <AbsoluteFill style={{ background: CHARCOAL }}>
      {!inChart ? <Cam /> : null}
      <FiveBehind />
      <BehindText text="5.0" a={14.4} b={15.5} y={540} size={480} glass />
      <BehindText text="too good" a={15.52} b={17.0} y={330} size={190} serif color={PINK} sub="TO BE TRUE?" />
      <BehindText text="NATURAL" a={31.64} b={33.5} y={470} size={240} color="white" />
      <BehindText text="WINS" a={33.5} b={34.7} y={560} size={420} color={PINK} />
      {!inChart && (t < 3.2 || (t >= 14.35 && t < 17.05) || t >= 31.6) ? <Cam person /> : null}
      <Vignette strength={0.4} />
      <NewsBar />
      <ResearchCard />
      <RatingChart />
      <FaceCard />
      <ProfileCard />
      <Checklist />
      <ReviewWall />
      <Chip a={33.55} b={34.7} y={1560} bg={PINK} fg="white" size={44}>REAL &gt; PERFECT</Chip>
      <Captions chunks={CHUNKS} y={paperTime ? 330 : inChart ? 1560 : 1320} key2={inChart ? PINK : "white"} />
      <Flash at={[11.45, 13.5, 17.0, 28.65]} />
      <Audio src={staticFile("e25/c2voice.wav")} />
      {/* Sound: max 1 per 5 s, -18 dB under the voice */}
      <Sequence from={Math.round(0.55 * 30)}><Audio src={staticFile("e25/chime.wav")} volume={0.1} /></Sequence>
      <Sequence from={Math.round(6.15 * 30)}><Audio src={staticFile("e25/whoosh.wav")} volume={0.13} /></Sequence>
      <Sequence from={Math.round(11.4 * 30)}><Audio src={staticFile("e25/swipe.wav")} volume={0.1} /></Sequence>
      <Sequence from={Math.round(21.9 * 30)}><Audio src={staticFile("e25/tick.wav")} volume={0.12} /></Sequence>
      <Sequence from={Math.round(28.65 * 30)}><Audio src={staticFile("e25/pop.wav")} volume={0.13} /></Sequence>
      <Sequence from={Math.round(33.7 * 30)}><Audio src={staticFile("e25/impact.wav")} volume={0.13} /></Sequence>
    </AbsoluteFill>
  );
};
