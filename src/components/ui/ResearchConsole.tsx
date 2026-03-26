"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, TrendingUp, BarChart3, MessageSquare, Quote } from "lucide-react";

const queries = [
  "What do voters aged 25-40 think about climate policy in swing states?",
  "How are Gen Z consumers feeling about AI in their daily lives?",
  "What narratives are forming around healthcare costs this week?",
];

const insights = [
  {
    stats: [
      { icon: "chart", label: "67% support carbon tax incentives" },
      { icon: "trend", label: "+12% shift in support since Q3 2025" },
      { icon: "quote", label: "Key narrative: Economic framing resonates 3x more than environmental" },
    ],
  },
  {
    stats: [
      { icon: "chart", label: "58% cautiously optimistic about AI" },
      { icon: "trend", label: "Privacy now #1 concern, up from #3" },
      { icon: "quote", label: 'Emerging narrative: "Helpful but needs rules"' },
    ],
  },
  {
    stats: [
      { icon: "chart", label: '71% say costs are "out of control"' },
      { icon: "trend", label: "Medical debt stories up 40% in conversations" },
      { icon: "quote", label: "Key emotion: Frustration shifting to anger in 35-54 demo" },
    ],
  },
];

export default function ResearchConsole() {
  const [typedText, setTypedText] = useState("");
  const [queryIndex, setQueryIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const query = queries[queryIndex];
    if (isTyping && typedText.length < query.length) {
      const timeout = setTimeout(() => {
        setTypedText(query.slice(0, typedText.length + 1));
      }, 35 + Math.random() * 25);
      return () => clearTimeout(timeout);
    } else if (isTyping && typedText.length === query.length) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setShowResult(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [typedText, isTyping, queryIndex]);

  useEffect(() => {
    if (showResult) {
      const timeout = setTimeout(() => {
        setShowResult(false);
        setTypedText("");
        setIsTyping(true);
        setQueryIndex((i) => (i + 1) % queries.length);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showResult]);

  const insight = insights[queryIndex];
  const iconMap: Record<string, React.ReactNode> = {
    chart: <BarChart3 className="h-3.5 w-3.5 text-primary" />,
    trend: <TrendingUp className="h-3.5 w-3.5 text-success" />,
    quote: <Quote className="h-3.5 w-3.5 text-data-blue" />,
  };

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-bg-dark-surface shadow-2xl shadow-primary/5">
      {/* Console header */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/60" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <span className="h-3 w-3 rounded-full bg-green-500/60" />
        </div>
        <span className="ml-2 font-mono text-xs font-medium text-text-light-secondary">
          Ask ABC &mdash; Research Console
        </span>
        <Sparkles className="ml-auto h-3.5 w-3.5 text-primary" />
      </div>

      {/* Input area */}
      <div className="border-b border-white/5 px-4 py-4">
        <div className="flex items-start gap-3">
          <Search className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
          <span className="text-sm leading-relaxed text-text-light">
            {typedText}
            {isTyping && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-0.5 inline-block h-4 w-0.5 bg-primary"
              />
            )}
          </span>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {showResult && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-3 p-4">
              {insight.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                  className="flex items-start gap-2.5"
                >
                  <div className="mt-0.5 shrink-0">{iconMap[stat.icon]}</div>
                  <p className="text-xs leading-relaxed text-text-light-secondary">
                    {stat.label}
                  </p>
                </motion.div>
              ))}

              {/* Confidence bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-2 flex items-center gap-3 border-t border-white/5 pt-3"
              >
                <div className="flex-1">
                  <div className="mb-1 flex justify-between text-[10px]">
                    <span className="text-text-light-secondary">Confidence</span>
                    <span className="font-semibold text-success">High</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-success"
                    />
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-text-light-secondary">
                  <MessageSquare className="h-3 w-3" />
                  n=2,400
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
