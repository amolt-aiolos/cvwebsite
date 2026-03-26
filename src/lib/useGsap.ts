"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function useGsapStagger(
  containerSelector: string,
  childSelector: string,
  options?: {
    y?: number;
    x?: number;
    scale?: number;
    duration?: number;
    stagger?: number;
    start?: string;
  }
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.querySelectorAll(childSelector);
    if (!children.length) return;

    const {
      y = 60,
      x = 0,
      scale = 1,
      duration = 0.8,
      stagger = 0.15,
      start = "top 85%",
    } = options || {};

    gsap.set(children, { opacity: 0, y, x, scale });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: "play none none none",
      },
    });

    tl.to(children, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      stagger,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === ref.current) t.kill();
      });
    };
  }, [childSelector, options]);

  return ref;
}

export function useGsapFadeIn(options?: {
  y?: number;
  duration?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const { y = 40, duration = 0.8, start = "top 85%" } = options || {};

    gsap.set(ref.current, { opacity: 0, y });

    const tween = gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
    };
  }, [options]);

  return ref;
}

export function useGsapScale(options?: {
  from?: number;
  duration?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const { from = 0.85, duration = 1, start = "top 85%" } = options || {};

    gsap.set(ref.current, { opacity: 0, scale: from });

    const tween = gsap.to(ref.current, {
      opacity: 1,
      scale: 1,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
    };
  }, [options]);

  return ref;
}

export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const tween = gsap.to(ref.current, {
      y: () => speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [speed]);

  return ref;
}
