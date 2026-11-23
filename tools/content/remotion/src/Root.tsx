import React from "react";
import { Composition } from "remotion";
import { Reel, reelSchemaDefaults, ReelProps } from "./Reel";

// Global constraints: 1080x1920, 30 fps. Duration comes from props (seconds).
export const Root: React.FC = () => (
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
);
