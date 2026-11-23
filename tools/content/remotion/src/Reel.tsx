import React from "react";
import "@fontsource/urbanist/900.css";
import "@fontsource/urbanist/700.css";
import { CheckList } from "./remocn/check-list";
import { ListHighlight } from "./effects/ListHighlight";
import { AbsoluteFill, Audio, OffthreadVideo, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring, Sequence } from "remotion";

export type Word = { w: string; s: number; e: number };
export type Card = { text: string; from: number; to: number; color?: "pink" | "charcoal" | "white"; y?: number; size?: number };
export type List = { items: string[]; from: number; to: number };
export type LitList = { title: string; items: string[]; at: number[]; from: number; to: number; top?: number };
export type Search = { text: string; from: number; to: number; y?: number };
// Punch-in = an instant cut to a tighter frame of the FACE camera (allowed, clash 7). Not an animated zoom.
export type Punch = { from: number; to: number; scale?: number; fx?: number; fy?: number };
export type Sfx = { src: string; at: number; volume?: number };
export type CaptionStyle = { centerY?: number; outline?: string; highlight?: string | null; size?: number };
export type ReelProps = {
  video: string; seconds: number; hook: string; hookSeconds?: number; words: Word[]; cards: Card[]; lists?: List[];
  litLists?: LitList[]; searches?: Search[]; punches?: Punch[]; sfx?: Sfx[]; captions?: CaptionStyle;
};
export const reelSchemaDefaults: ReelProps = { video: "test.mp4", seconds: 5, hook: "", words: [], cards: [], lists: [] };

const PINK = "#FF3D8B"; // brand Hot Pink (agency-brand memory); only WHITE text on pink
const CHARCOAL = "#141414";
const FONT = "Urbanist, sans-serif"; // brand title font, loaded locally (fontsource, OFL)

// Hook text burned in from frame 1 (pka-video-edit rule). Shown for hookSeconds (0 = whole reel).
const Hook: React.FC<{ text: string }> = ({ text }) => (
  <div style={{ position: "absolute", top: 120, left: 60, right: 60, textAlign: "center", fontFamily: FONT, fontWeight: 900,
    fontSize: 78, lineHeight: 1.15, color: "white" }}>
    <span style={{ background: CHARCOAL, padding: "8px 18px", borderRadius: 14, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>{text}</span>
  </div>
);

// Captions (pka-video-edit placement rules): plain Urbanist, no box, 2 px outline, centred at ~66% of the height.
// Outline is charcoal on bright/pink backgrounds (never black on pink). highlight=null -> current word grows instead of recolouring.
const Captions: React.FC<{ words: Word[]; style?: CaptionStyle }> = ({ words, style = {} }) => {
  const t = useCurrentFrame() / useVideoConfig().fps;
  const { centerY = 1267, outline = CHARCOAL, highlight = PINK, size = 74 } = style; // 800 px wide band: clear of IG's right-side buttons (x >= 950)
  const i = words.findIndex((w) => t >= w.s && t < w.e + 0.15);
  if (i < 0) return null;
  const start = i - (i % 3);
  const chunk = words.slice(start, start + 3);
  return (
    <div style={{ position: "absolute", top: centerY - size * 0.6, left: 140, right: 140, textAlign: "center", lineHeight: 1.1, fontFamily: FONT, fontWeight: 900,
      fontSize: size, color: "white", WebkitTextStroke: `2px ${outline}`, paintOrder: "stroke fill",
      textShadow: `0 0 2px ${outline}, 0 4px 14px rgba(0,0,0,.55)` }}>
      {chunk.map((w, k) => {
        const on = start + k === i;
        return (
          <span key={k} style={{ display: "inline-block", margin: "0 16px", color: on && highlight ? highlight : "white",
            transform: on && !highlight ? "scale(1.1)" : "none", transformOrigin: "center bottom" }}>{w.w.toUpperCase()}</span>
        );
      })}
    </div>
  );
};

// A pop-in card (number, claim) that springs in and fades out.
const PopCard: React.FC<Omit<Card, "from" | "to"> & { frames: number }> = ({ text, frames, color = "pink", y, size = 110 }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 14, stiffness: 220 } });
  const out = interpolate(f, [frames - 5, frames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const bg = color === "pink" ? PINK : color === "white" ? "white" : CHARCOAL;
  const fg = color === "white" ? CHARCOAL : "white";
  const box = (
    <div style={{ transform: `scale(${s})`, opacity: out, background: bg, color: fg, fontFamily: FONT, fontWeight: 900, textAlign: "center",
      fontSize: size, lineHeight: 1.05, whiteSpace: "pre-line", padding: "26px 52px", borderRadius: 32, boxShadow: "0 20px 60px rgba(0,0,0,.5)", maxWidth: 940 }}>{text}</div>
  );
  if (y === undefined) return <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>{box}</AbsoluteFill>;
  return <div style={{ position: "absolute", top: y, width: "100%", display: "flex", justifyContent: "center" }}>{box}</div>;
};

// Generic search bar (no search-engine branding): white pill, magnifier, text typed letter by letter with a cursor.
const SearchBar: React.FC<{ text: string; frames: number; y: number }> = ({ text, frames, y }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 14 } });
  const typeEnd = Math.max(6, frames - 12);
  const n = Math.round(interpolate(f, [4, typeEnd], [0, text.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const out = interpolate(f, [frames - 5, frames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cursor = Math.floor(f / 8) % 2 === 0;
  return (
    <div style={{ position: "absolute", top: y, width: "100%", display: "flex", justifyContent: "center", opacity: out }}>
      <div style={{ transform: `translateY(${(1 - s) * 60}px) scale(${0.9 + 0.1 * s})`, width: 900, height: 120, borderRadius: 60,
        background: "white", display: "flex", alignItems: "center", padding: "0 44px", boxShadow: "0 18px 50px rgba(0,0,0,.55)",
        fontFamily: FONT, fontWeight: 700, fontSize: 52, color: CHARCOAL }}>
        <svg width="50" height="50" viewBox="0 0 24 24" style={{ marginRight: 26, flexShrink: 0 }}>
          <circle cx="10" cy="10" r="6.5" fill="none" stroke="#777" strokeWidth="2.6" />
          <line x1="15" y1="15" x2="21" y2="21" stroke="#777" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
        <span>{text.slice(0, n)}</span>
        <span style={{ width: 4, height: 60, background: cursor ? CHARCOAL : "transparent", marginLeft: 4 }} />
      </div>
    </div>
  );
};

const sec = (s: number, fps: number) => Math.round(s * fps);

export const Reel: React.FC<ReelProps> = ({ video, hook, hookSeconds = 0, words, cards, lists = [], litLists = [], searches = [], punches = [], sfx = [], captions }) => {
  const { fps } = useVideoConfig();
  const t = useCurrentFrame() / fps;
  const p = punches.find((x) => t >= x.from && t < x.to);
  const scale = p ? p.scale ?? 1.18 : 1;
  const origin = p ? `${(p.fx ?? 0.5) * 100}% ${(p.fy ?? 0.4) * 100}%` : "50% 50%";
  const hookOn = hook && (hookSeconds <= 0 || t < hookSeconds);
  return (
    <AbsoluteFill style={{ background: "black" }}>
      <AbsoluteFill style={{ transform: `scale(${scale})`, transformOrigin: origin }}>
        <OffthreadVideo src={staticFile(video)} />
      </AbsoluteFill>
      {hookOn ? <Hook text={hook} /> : null}
      <Captions words={words} style={captions} />
      {cards.map((c, k) => (
        <Sequence key={k} from={sec(c.from, fps)} durationInFrames={sec(c.to - c.from, fps)}>
          <PopCard text={c.text} color={c.color} y={c.y} size={c.size} frames={sec(c.to - c.from, fps)} />
        </Sequence>
      ))}
      {searches.map((x, k) => (
        <Sequence key={`s${k}`} from={sec(x.from, fps)} durationInFrames={sec(x.to - x.from, fps)}>
          <SearchBar text={x.text} y={x.y ?? 300} frames={sec(x.to - x.from, fps)} />
        </Sequence>
      ))}
      {litLists.map((l, k) => (
        <Sequence key={`ll${k}`} from={sec(l.from, fps)} durationInFrames={sec(l.to - l.from, fps)}>
          <ListHighlight title={l.title} items={l.items} at={l.at.map((a) => a - l.from)} top={l.top} />
        </Sequence>
      ))}
      {lists.map((l, k) => (
        <Sequence key={`l${k}`} from={sec(l.from, fps)} durationInFrames={sec(l.to - l.from, fps)}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
            <div style={{ background: "white", borderRadius: 36, padding: "48px 56px", boxShadow: "0 20px 60px rgba(0,0,0,.5)" }}>
              <CheckList items={l.items} width={760} fontSize={64} color={CHARCOAL} boxColor={CHARCOAL} tickColor={PINK} />
            </div>
          </AbsoluteFill>
        </Sequence>
      ))}
      {sfx.map((x, k) => (
        <Sequence key={`a${k}`} from={sec(x.at, fps)}>
          <Audio src={staticFile(x.src)} volume={x.volume ?? 0.5} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
