import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CHARCOAL, PINK, FONT } from "./theme";

/** Headlines slam onto a wall one after another, slightly rotated (tenfoldmarc "headline wall"). Use real quotes only. */
export const HeadlineWall: React.FC<{ lines: string[]; every?: number }> = ({ lines, every = 0.35 }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ background: CHARCOAL, justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 34, fontFamily: FONT }}>
      {lines.map((l, i) => {
        const s = spring({ frame: f - Math.round(i * every * fps), fps, config: { damping: 11 } });
        const rot = (i % 2 ? 1 : -1) * (1.5 + (i % 3));
        const hot = i === lines.length - 1;
        return (
          <div key={i} style={{ transform: `scale(${2 - s}) rotate(${rot}deg)`, opacity: s, background: hot ? PINK : "white",
            color: hot ? "white" : CHARCOAL, fontWeight: 900, fontSize: 58, padding: "18px 34px", borderRadius: 10, maxWidth: 900,
            boxShadow: "0 18px 40px rgba(0,0,0,.45)" }}>{l}</div>
        );
      })}
    </AbsoluteFill>
  );
};
