"use client";

import { FileText, BarChart3, BookOpen, Newspaper } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

const categories = [
  { label: "All", active: true },
  { label: "Reports", active: false },
  { label: "Case Studies", active: false },
  { label: "Poll Analysis", active: false },
  { label: "Articles", active: false },
];

const articles = [
  {
    category: "Report",
    icon: FileText,
    title: "The State of AI-Powered Polling: 2026 Outlook",
    excerpt: "How AI simulation is transforming the polling industry and what it means for decision makers.",
    date: "Mar 2026",
  },
  {
    category: "Case Study",
    icon: BarChart3,
    title: "How a Senate Campaign Used AI Polling to Win",
    excerpt: "A deep dive into how real-time AI polling insights shaped a winning campaign strategy.",
    date: "Feb 2026",
  },
  {
    category: "Poll Analysis",
    icon: BookOpen,
    title: "Gen Z Attitudes Toward Climate Policy",
    excerpt: "Our latest poll simulation reveals nuanced generational views on climate regulation.",
    date: "Feb 2026",
  },
  {
    category: "Article",
    icon: Newspaper,
    title: "Why Traditional Polling Is Broken (And How to Fix It)",
    excerpt: "The methodological challenges facing traditional polling and the AI-powered alternative.",
    date: "Jan 2026",
  },
  {
    category: "Report",
    icon: FileText,
    title: "Consumer Sentiment in the Age of AI",
    excerpt: "How public opinion about artificial intelligence is shaping brand strategies and policy debates.",
    date: "Jan 2026",
  },
  {
    category: "Case Study",
    icon: BarChart3,
    title: "University Research Lab Validates AI Polling Accuracy",
    excerpt: "An independent academic study comparing CrowdVox simulations with traditional survey results.",
    date: "Dec 2025",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        badge="Insights Hub"
        title="Research & Analysis"
        description="Reports, case studies, and analysis from our team of researchers, data scientists, and political analysts."
      />

      <section className="py-24">
        <Container>
          {/* Category filter */}
          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  cat.active
                    ? "bg-primary text-white"
                    : "bg-bg-light text-text-dark-secondary hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg cursor-pointer">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {article.category}
                    </span>
                    <span className="text-xs text-text-dark-secondary">{article.date}</span>
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-text-dark group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-text-dark-secondary">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-medium text-primary">
                    Read more &rarr;
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
