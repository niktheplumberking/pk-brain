import React from "react";
import { AbsoluteFill, OffthreadVideo, Sequence, staticFile, useVideoConfig } from "remotion";
import { PhoneMockup } from "./effects/PhoneMockup";
import { ListHighlight } from "./effects/ListHighlight";
import { HeadlineWall } from "./effects/HeadlineWall";
import { ChartGrow } from "./effects/ChartGrow";
import { PullBack, ZoomThrough } from "./effects/Camera";
import { CheckList } from "./remocn/check-list";

// Test reel for task C7: each effect 3 s on Nick's test clip. Text here is test copy, not a real claim.
const Clip: React.FC<{ from?: number }> = ({ from = 0 }) => <OffthreadVideo src={staticFile("test.mp4")} startFrom={from * 30} muted />;

export const EffectsDemo: React.FC = () => {
  const { fps } = useVideoConfig();
  const S = (i: number) => i * 3 * fps;
  const L = 3 * fps;
  return (
    <AbsoluteFill style={{ background: "black" }}>
      <Sequence from={S(0)} durationInFrames={L}><Clip /><PhoneMockup src="test.mp4" /></Sequence>
      <Sequence from={S(1)} durationInFrames={L}><Clip from={3} />
        <ListHighlight title="9 things that lose you calls" items={["No tap to call", "Two phone numbers", "Stock photos", "No reviews on top", "Slow on phones", "No service areas"]} at={[0, 0.5, 1, 1.5, 2, 2.5]} />
      </Sequence>
      <Sequence from={S(2)} durationInFrames={L}><HeadlineWall lines={["\"Called 3 plumbers, nobody answered\"", "\"Their site wouldn't load\"", "\"Went with the first one on Google\"", "TEST COPY"]} /></Sequence>
      <Sequence from={S(3)} durationInFrames={L}><ChartGrow title="Calls a month (test numbers)" bars={[{ label: "Before", value: 12 }, { label: "Month 1", value: 19 }, { label: "Month 3", value: 34 }]} /></Sequence>
      <Sequence from={S(4)} durationInFrames={L}><ZoomThrough mode="out" length={3}><Clip from={6} /></ZoomThrough></Sequence>
      <Sequence from={S(5)} durationInFrames={L}><ZoomThrough mode="in" length={3}><PullBack fx={0.5} fy={0.3}><Clip from={12} /></PullBack></ZoomThrough></Sequence>
      <Sequence from={S(6)} durationInFrames={L}><Clip from={18} />
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ background: "white", borderRadius: 36, padding: "40px 50px" }}><CheckList items={["Tap to call", "One number", "Real photos"]} width={700} fontSize={60} tickColor="#FF3D8B" /></div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
