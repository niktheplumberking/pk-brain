import React from "react";
import { Composition } from "remotion";
import { Reel, reelSchemaDefaults, ReelProps } from "./Reel";
import { EffectsDemo } from "./EffectsDemo";
import { Audit1, A1_SECONDS } from "./pk25/Audit1";
import { Contra2, C2_SECONDS } from "./pk25/Contra2";

// Global constraints: 1080x1920, 30 fps. Duration comes from props (seconds).
export const Root: React.FC = () => (
  <>
  <Composition
    id="Reel"
    component={Reel}
    width={1080}
    height={1920}
    fps={30}
    durationInFrames={150}
    defaultProps={reelSchemaDefaults}
    calculateMetadata={({ props }: { props: ReelProps }) => ({ durationInFrames: Math.round(props.seconds * 30) })}
  />
  <Composition id="EffectsDemo" component={EffectsDemo} width={1080} height={1920} fps={30} durationInFrames={630} />
  <Composition id="Audit1" component={Audit1} width={1080} height={1920} fps={30} durationInFrames={Math.round(A1_SECONDS * 30)} />
  <Composition id="Contra2" component={Contra2} width={1080} height={1920} fps={30} durationInFrames={Math.round(C2_SECONDS * 30)} />
  </>
);
