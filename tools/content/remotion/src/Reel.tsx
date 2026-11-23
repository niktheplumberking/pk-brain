import React from "react";
import "@fontsource/urbanist/900.css";
import "@fontsource/urbanist/700.css";
import { CheckList } from "./remocn/check-list";
import { AbsoluteFill, OffthreadVideo, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring, Sequence } from "remotion";

export type Word = { w: string; s: number; e: number };
export type Card = { text: string; from: number; to: number };
export type List = { items: string[]; from: number; to: number };
export type ReelProps = { video: string; seconds: number; hook: string; words: Word[]; cards: Card[]; lists?: List[] };
export const reelSchemaDefaults: ReelProps = { video: "test.mp4", seconds: 5, hook: "", words: [], cards: [], lists: [] };

const PINK = "#FF3D8B"; // brand Hot Pink (agency-brand memory); only WHITE text on pink
const CHARCOAL = "#141414";
const FONT = "Urbanist, sans-serif"; // brand title font, loaded locally (fontsource, OFL)

// Hook text burned in from frame 1 (pka-video-edit rule).
const Hook: React.FC<{ text: string }> = ({ text }) => (
  <div style={{ position: "absolute", top: 220, left: 60, right: 60, textAlign: "center", fontFamily: FONT, fontWeight: 900,
    fontSize: 78, lineHeight: 1.1, color: "white", textShadow: "0 6px 24px rgba(0,0,0,.7)" }}>
    <span style={{ background: CHARCOAL, padding: "8px 18px", borderRadius: 14, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>{text}</span>
  </div>
);

// Word-by-word captions: 3-word chunks, current word in pink.
const Captions: React.FC<{ words: Word[] }> = ({ words }) => {
  const t = useCurrentFrame() / useVideoConfig().fps;
  const i = words.findIndex((w) => t >= w.s && t < w.e + 0.15);
  if (i < 0) return null;
  const start = i - (i % 3);
  const chunk = words.slice(start, start + 3);
  return (
    <div style={{ position: "absolute", bottom: 520, width: "100%", textAlign: "center", fontFamily: FONT, fontWeight: 900,
      fontSize: 84, color: "white", WebkitTextStroke: "3px black", textShadow: "0 6px 18px rgba(0,0,0,.8)" }}>
      {chunk.map((w, k) => (
        <span key={k} style={{ color: start + k === i ? PINK : "white", marginRight: 22 }}>{w.w.toUpperCase()}</span>
      ))}
    </div>
  );
};

// A pop-in card (number, claim) that springs in and fades out.
const PopCard: React.FC<{ text: string; frames: number }> = ({ text, frames }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 12 } });
  const out = interpolate(f, [frames - 6, frames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{ transform: `scale(${s})`, opacity: out, background: PINK, color: "white", fontFamily: FONT, fontWeight: 900,
        fontSize: 120, padding: "30px 60px", borderRadius: 32, boxShadow: "0 20px 60px rgba(0,0,0,.5)" }}>{text}</div>
    </AbsoluteFill>
  );
};

export const Reel: React.FC<ReelProps> = ({ video, hook, words, cards, lists = [] }) => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ background: "black" }}>
      <OffthreadVideo src={staticFile(video)} />
      {hook ? <Hook text={hook} /> : null}
      <Captions words={words} />
      {cards.map((c, k) => (
        <Sequence key={k} from={Math.round(c.from * fps)} durationInFrames={Math.round((c.to - c.from) * fps)}>
          <PopCard text={c.text} frames={Math.round((c.to - c.from) * fps)} />
        </Sequence>
      ))}
      {lists.map((l, k) => (
        <Sequence key={`l${k}`} from={Math.round(l.from * fps)} durationInFrames={Math.round((l.to - l.from) * fps)}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
            <div style={{ background: "white", borderRadius: 36, padding: "48px 56px", boxShadow: "0 20px 60px rgba(0,0,0,.5)" }}>
              <CheckList items={l.items} width={760} fontSize={64} color={CHARCOAL} boxColor={CHARCOAL} tickColor={PINK} />
            </div>
          </AbsoluteFill>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
