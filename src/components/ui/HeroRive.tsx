"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useCallback } from "react";

export default function HeroRive() {
  const { rive, RiveComponent } = useRive({
    src: "/animations/hero-radar.riv",
    autoplay: true,
    artboard: undefined,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  // Make the artboard background transparent once Rive loads
  const canvasRef = useCallback(
    (canvas: HTMLCanvasElement | null) => {
      if (canvas) {
        // The Rive canvas needs to composite transparently
        canvas.style.background = "transparent";
      }
    },
    []
  );

  return (
    <div className="relative aspect-square w-full max-w-[600px]">
      {/* Glow backdrop behind the Rive animation */}
      <div className="absolute inset-0 rounded-full bg-primary/5 blur-[80px]" />
      <div className="absolute inset-[10%] rounded-full bg-accent/8 blur-[60px]" />

      {/* Rive canvas — mix-blend-mode to remove dark artboard bg */}
      <div className="relative h-full w-full [&_canvas]:!bg-transparent" style={{ mixBlendMode: "lighten" }}>
        <RiveComponent />
      </div>
    </div>
  );
}
