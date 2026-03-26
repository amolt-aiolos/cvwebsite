"use client";

import { GraduationCap, BookOpen, FlaskConical, FileText, Users, Award } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/sections/CTASection";

const features = [
  { icon: <GraduationCap className="h-6 w-6" />, title: "Academic Research", description: "Publication-ready polling data with transparent methodology documentation." },
  { icon: <BookOpen className="h-6 w-6" />, title: "Student Engagement", description: "Understand student sentiment, satisfaction, and campus culture dynamics." },
  { icon: <FlaskConical className="h-6 w-6" />, title: "Research Methodology", description: "Our approach meets academic standards for research rigor and reproducibility." },
  { icon: <FileText className="h-6 w-6" />, title: "IRB-Friendly", description: "Designed with institutional review board requirements in mind." },
  { icon: <Users className="h-6 w-6" />, title: "Classroom Integration", description: "Use CrowdVox as a teaching tool for political science, sociology, and communications." },
  { icon: <Award className="h-6 w-6" />, title: "Academic Pricing", description: "Special pricing tiers for universities, research labs, and student projects." },
];

export default function HigherEducationPage() {
  return (
    <>
      <PageHero badge="Higher Education" title="Research-Grade Intelligence" description="Academic-quality polling tools that meet the rigorous standards of institutional research." cta="Academic Pricing" ctaHref="/pricing" />
      <FeatureGrid title="Education Features" features={features} />
      <CTASection />
    </>
  );
}
