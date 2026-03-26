"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data points that appear on the radar
const dataPoints = [
  { id: 1, angle: 35, distance: 0.72, label: "Public Sentiment", value: "78%", color: "#FF7933" },
  { id: 2, angle: 95, distance: 0.45, label: "Policy Support", value: "64%", color: "#7B2D8E" },
  { id: 3, angle: 155, distance: 0.88, label: "Brand Trust", value: "91%", color: "#3B82F6" },
  { id: 4, angle: 210, distance: 0.35, label: "Gen Z Reach", value: "52%", color: "#14B8A6" },
  { id: 5, angle: 270, distance: 0.62, label: "Voter Intent", value: "73%", color: "#FF7933" },
  { id: 6, angle: 320, distance: 0.55, label: "Media Impact", value: "68%", color: "#22C55E" },
];

// Convert polar coords to SVG xy
function polarToCartesian(angleDeg: number, distance: number, cx: number, cy: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * distance * Math.cos(rad),
    y: cy + radius * distance * Math.sin(rad),
  };
}

export default function HeroRadar() {
  const [sweepAngle, setSweepAngle] = useState(0);
  const [visiblePoints, setVisiblePoints] = useState<Set<number>>(new Set());
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const cx = 250;
  const cy = 250;
  const maxRadius = 210;
  const rings = [0.25, 0.5, 0.75, 1.0];
  const crosshairLines = [0, 45, 90, 135];

  // Sweep animation loop
  useEffect(() => {
    const speed = 45; // degrees per second

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      setSweepAngle((prev) => {
        const next = (prev + speed * delta) % 360;

        // Reveal data points as sweep passes them
        setVisiblePoints((current) => {
          const updated = new Set(current);
          dataPoints.forEach((p) => {
            const pointAngle = p.angle % 360;
            const sweepWindow = 15;
            const diff = ((next - pointAngle + 360) % 360);
            if (diff < sweepWindow && diff >= 0) {
              updated.add(p.id);
            }
          });
          return updated;
        });

        return next;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Mouse tracking for parallax
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  // Sweep gradient end point
  const sweepEnd = polarToCartesian(sweepAngle, 1, cx, cy, maxRadius);
  const sweepTrailEnd = polarToCartesian(sweepAngle - 40, 1, cx, cy, maxRadius);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full max-w-[540px] cursor-crosshair select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredPoint(null)}
    >
      {/* Outer glow */}
      <div className="absolute inset-[-15%] rounded-full bg-primary/[0.04] blur-[80px]" />
      <div className="absolute inset-[5%] rounded-full bg-accent/[0.06] blur-[60px]" />

      {/* SVG Radar */}
      <svg
        viewBox="0 0 500 500"
        className="relative h-full w-full drop-shadow-2xl"
        style={{
          transform: `perspective(800px) rotateX(${mousePos.y * 3}deg) rotateY(${mousePos.x * -3}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <defs>
          {/* Sweep gradient */}
          <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7933" stopOpacity="0" />
            <stop offset="100%" stopColor="#FF7933" stopOpacity="0.6" />
          </linearGradient>

          {/* Sweep cone gradient */}
          <radialGradient id="sweepCone" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF7933" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#FF7933" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FF7933" stopOpacity="0" />
          </radialGradient>

          {/* Point glow */}
          <radialGradient id="pointGlow">
            <stop offset="0%" stopColor="#FF7933" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF7933" stopOpacity="0" />
          </radialGradient>

          {/* Clip to radar circle */}
          <clipPath id="radarClip">
            <circle cx={cx} cy={cy} r={maxRadius} />
          </clipPath>

          {/* Outer ring glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g clipPath="url(#radarClip)">
          {/* Concentric rings */}
          {rings.map((r, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={maxRadius * r}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth={i === rings.length - 1 ? 1.5 : 0.8}
              strokeDasharray={i < rings.length - 1 ? "2 4" : "none"}
            />
          ))}

          {/* Outer ring glow */}
          <circle
            cx={cx}
            cy={cy}
            r={maxRadius}
            fill="none"
            stroke="rgba(255,121,51,0.15)"
            strokeWidth={2}
            filter="url(#glow)"
          />

          {/* Crosshair lines */}
          {crosshairLines.map((angle, i) => {
            const end = polarToCartesian(angle, 1, cx, cy, maxRadius);
            const endOpp = polarToCartesian(angle + 180, 1, cx, cy, maxRadius);
            return (
              <line
                key={i}
                x1={end.x}
                y1={end.y}
                x2={endOpp.x}
                y2={endOpp.y}
                stroke="rgba(255,255,255,0.04)"
                strokeWidth={0.8}
              />
            );
          })}

          {/* Sweep cone (filled arc) */}
          <path
            d={`M ${cx} ${cy} L ${sweepEnd.x} ${sweepEnd.y} A ${maxRadius} ${maxRadius} 0 0 0 ${sweepTrailEnd.x} ${sweepTrailEnd.y} Z`}
            fill="url(#sweepCone)"
            style={{ transition: "none" }}
          />

          {/* Sweep line */}
          <line
            x1={cx}
            y1={cy}
            x2={sweepEnd.x}
            y2={sweepEnd.y}
            stroke="#FF7933"
            strokeWidth={2}
            strokeOpacity={0.8}
            filter="url(#glow)"
          />

          {/* Ring labels */}
          {rings.slice(0, -1).map((r, i) => (
            <text
              key={i}
              x={cx + 6}
              y={cy - maxRadius * r + 12}
              fill="rgba(255,255,255,0.2)"
              fontSize="9"
              fontFamily="monospace"
            >
              {Math.round(r * 100)}%
            </text>
          ))}

          {/* Data points */}
          {dataPoints.map((point) => {
            const pos = polarToCartesian(point.angle, point.distance, cx, cy, maxRadius);
            const isVisible = visiblePoints.has(point.id);
            const isHovered = hoveredPoint === point.id;

            return (
              <g
                key={point.id}
                onMouseEnter={() => setHoveredPoint(point.id)}
                onMouseLeave={() => setHoveredPoint(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Ping ripple */}
                {isVisible && (
                  <>
                    <circle cx={pos.x} cy={pos.y} r={isHovered ? 20 : 14} fill="none" stroke={point.color} strokeWidth={0.5} strokeOpacity={0.3}>
                      <animate attributeName="r" from={isHovered ? "8" : "5"} to={isHovered ? "28" : "20"} dur="2s" repeatCount="indefinite" />
                      <animate attributeName="stroke-opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={pos.x} cy={pos.y} r={isHovered ? 16 : 10} fill="none" stroke={point.color} strokeWidth={0.5} strokeOpacity={0.2}>
                      <animate attributeName="r" from={isHovered ? "6" : "4"} to={isHovered ? "22" : "16"} dur="2s" begin="0.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke-opacity" from="0.4" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}

                {/* Point glow */}
                {isVisible && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHovered ? 12 : 8}
                    fill={point.color}
                    fillOpacity={0.15}
                    style={{ transition: "r 0.3s ease, fill-opacity 0.3s ease" }}
                  />
                )}

                {/* Core dot */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered ? 5 : 3.5}
                  fill={isVisible ? point.color : "transparent"}
                  filter={isVisible ? "url(#glow)" : "none"}
                  style={{ transition: "all 0.3s ease" }}
                />

                {/* Connection line to center */}
                {isVisible && isHovered && (
                  <line
                    x1={cx}
                    y1={cy}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={point.color}
                    strokeWidth={0.8}
                    strokeOpacity={0.3}
                    strokeDasharray="3 3"
                  />
                )}
              </g>
            );
          })}

          {/* Center dot */}
          <circle cx={cx} cy={cy} r={3} fill="#FF7933" fillOpacity={0.9} filter="url(#glow)" />
          <circle cx={cx} cy={cy} r={8} fill="none" stroke="#FF7933" strokeWidth={1} strokeOpacity={0.3}>
            <animate attributeName="r" from="5" to="12" dur="3s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" from="0.4" to="0" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Outer decorative ticks */}
        {Array.from({ length: 72 }).map((_, i) => {
          const angle = i * 5;
          const isMajor = angle % 30 === 0;
          const inner = polarToCartesian(angle, 1, cx, cy, maxRadius + 2);
          const outer = polarToCartesian(angle, 1, cx, cy, maxRadius + (isMajor ? 10 : 5));
          return (
            <line
              key={i}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke={isMajor ? "rgba(255,121,51,0.3)" : "rgba(255,255,255,0.1)"}
              strokeWidth={isMajor ? 1.2 : 0.5}
            />
          );
        })}

        {/* Cardinal labels */}
        {[
          { angle: 0, label: "SENTIMENT" },
          { angle: 90, label: "POLICY" },
          { angle: 180, label: "BRAND" },
          { angle: 270, label: "CULTURE" },
        ].map((item, i) => {
          const pos = polarToCartesian(item.angle, 1, cx, cy, maxRadius + 24);
          return (
            <text
              key={i}
              x={pos.x}
              y={pos.y}
              fill="rgba(255,255,255,0.25)"
              fontSize="8"
              fontFamily="monospace"
              textAnchor="middle"
              dominantBaseline="central"
              letterSpacing="1.5"
            >
              {item.label}
            </text>
          );
        })}
      </svg>

      {/* Hover tooltip using Framer Motion */}
      <AnimatePresence>
        {hoveredPoint !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute left-1/2 top-4 z-20 -translate-x-1/2"
          >
            {(() => {
              const point = dataPoints.find((p) => p.id === hoveredPoint);
              if (!point) return null;
              return (
                <div className="rounded-xl border border-white/10 bg-[#141420]/90 px-4 py-3 shadow-2xl backdrop-blur-lg">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: point.color, boxShadow: `0 0 8px ${point.color}` }}
                    />
                    <span className="text-xs font-medium tracking-wide text-white/90">
                      {point.label}
                    </span>
                  </div>
                  <div className="mt-1 font-heading text-2xl font-bold" style={{ color: point.color }}>
                    {point.value}
                  </div>
                  <div className="mt-0.5 text-[10px] text-white/40">AI Confidence Score</div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scanning status text */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span className="font-mono text-[10px] tracking-widest text-white/30">
            SCANNING OPINION DATA
          </span>
        </div>
      </div>
    </div>
  );
}
