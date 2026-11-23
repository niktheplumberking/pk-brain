import React from "react";
import { AbsoluteFill, OffthreadVideo, Img, staticFile, spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { CHARCOAL } from "./theme";

/** A phone held in frame playing a clip or showing a screenshot (tenfoldmarc "phone mockup"). Springs in, slight tilt. */
export const PhoneMockup: React.FC<{ src: string; kind?: "video" | "image"; width?: number; tilt?: number; y?: number }> = ({
  src, kind = "video", width = 560, tilt = -4, y = 0,
}) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 14, mass: 0.8 } });
  const h = width * (19.5 / 9);
  const media = { width: "100%", height: "100%", objectFit: "cover" as const };
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{
        width, height: h, borderRadius: width * 0.12, background: CHARCOAL, padding: width * 0.035,
        transform: `translateY(${interpolate(s, [0, 1], [900, y])}px) rotate(${tilt * s}deg)`,
        boxShadow: "0 40px 120px rgba(0,0,0,.6)",
      }}>
        <div style={{ width: "100%", height: "100%", borderRadius: width * 0.09, overflow: "hidden", background: "black" }}>
          {kind === "video" ? <OffthreadVideo src={staticFile(src)} style={media} muted /> : <Img src={staticFile(src)} style={media} />}
        </div>
      </div>
    </AbsoluteFill>
  );
};
