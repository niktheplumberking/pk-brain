import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CHARCOAL, PINK, FONT } from "./theme";

/** Bars grow from zero with their numbers counting up (tenfoldmarc "chart grow"). Real numbers only; last bar is pink. */
export const ChartGrow: React.FC<{ title: string; bars: { label: string; value: number }[]; unit?: string }> = ({ title, bars, unit = "" }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const max = Math.max(...bars.map((b) => b.value), 1);
  return (
    <AbsoluteFill style={{ background: "white", fontFamily: FONT, padding: "220px 90px 300px", flexDirection: "column" }}>
      <div style={{ fontSize: 66, fontWeight: 900, color: CHARCOAL, marginBottom: 60 }}>{title}</div>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: 40 }}>
        {bars.map((b, i) => {
          const s = spring({ frame: f - i * 6, fps, config: { damping: 16 } });
          const hot = i === bars.length - 1;
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
              <div style={{ fontSize: 54, fontWeight: 900, color: hot ? PINK : CHARCOAL }}>{Math.round(interpolate(s, [0, 1], [0, b.value]))}{unit}</div>
              <div style={{ width: "100%", height: `${(b.value / max) * 78 * s}%`, background: hot ? PINK : CHARCOAL, borderRadius: "16px 16px 0 0" }} />
              <div style={{ fontSize: 38, fontWeight: 700, color: CHARCOAL, marginTop: 16, textAlign: "center" }}>{b.label}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
