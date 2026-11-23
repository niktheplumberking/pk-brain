import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

/** Pull-back reveal: starts zoomed on a detail (focus x/y in 0..1) and pulls back to the full frame. */
export const PullBack: React.FC<{ children: React.ReactNode; from?: number; seconds?: number; fx?: number; fy?: number }> = ({
  children, from = 3, seconds = 1.2, fx = 0.5, fy = 0.4,
}) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const k = interpolate(f, [0, seconds * fps], [from, 1], { extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  return <AbsoluteFill style={{ transform: `scale(${k})`, transformOrigin: `${fx * 100}% ${fy * 100}%` }}>{children}</AbsoluteFill>;
};

/** Zoom-through cut: clip A rushes in (scale up + blur) over `seconds`, clip B lands from a zoomed-in blur.
 *  Wrap A as `out` and B as `in`, each in its own Sequence that meet at the cut; `length` = that Sequence's seconds. */
export const ZoomThrough: React.FC<{ children: React.ReactNode; mode: "out" | "in"; length: number; seconds?: number }> = ({ children, mode, length, seconds = 0.35 }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const durationInFrames = Math.round(length * fps); // the Sequence length in seconds (not the whole composition)
  const n = Math.round(seconds * fps);
  const p = mode === "out"
    ? interpolate(f, [durationInFrames - n, durationInFrames], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    : interpolate(f, [0, n], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const scale = 1 + p * 2.5;
  return <AbsoluteFill style={{ transform: `scale(${scale})`, filter: `blur(${p * 18}px)` }}>{children}</AbsoluteFill>;
};
