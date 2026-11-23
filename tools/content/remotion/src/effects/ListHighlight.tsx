import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { PINK, FONT } from "./theme";

/** Numbered list on screen the whole time; the current item lights up (tenfoldmarc "checklist" list). `at` = seconds each
 *  item becomes current. Items before the current one stay white, later ones dim. */
export const ListHighlight: React.FC<{ title: string; items: string[]; at: number[]; top?: number }> = ({ title, items, at, top = 160 }) => {
  const t = useCurrentFrame() / useVideoConfig().fps;
  let cur = -1;
  at.forEach((s, i) => { if (t >= s) cur = i; });
  return (
    <div style={{ position: "absolute", top, left: 60, right: 60, fontFamily: FONT }}>
      <div style={{ color: "white", fontWeight: 900, fontSize: 66, textAlign: "center", textShadow: "0 4px 18px rgba(0,0,0,.8)", marginBottom: 18 }}>{title}</div>
      <div style={{ display: "inline-block", background: "rgba(20,20,20,.72)", borderRadius: 24, padding: "18px 28px" }}>
        {items.map((it, i) => {
          const on = i === cur;
          const pop = on ? interpolate(t - at[i], [0, 0.15], [1.12, 1], { extrapolateRight: "clamp" }) : 1;
          return (
            <div key={i} style={{ fontSize: 54, fontWeight: on ? 900 : 700, lineHeight: 1.35, transform: `scale(${pop})`, transformOrigin: "left center",
              color: on ? PINK : i < cur ? "white" : "rgba(255,255,255,.45)" }}>
              {String(i + 1).padStart(2, "0")}  {it}
            </div>
          );
        })}
      </div>
    </div>
  );
};
