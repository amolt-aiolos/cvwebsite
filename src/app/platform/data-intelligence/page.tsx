"use client";

import { Database, Download, Lock, Workflow, Table, FileJson } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/sections/CTASection";

const features = [
  { icon: <Database className="h-6 w-6" />, title: "Structured Datasets", description: "Clean, formatted data exports ready for integration into your workflows and dashboards." },
  { icon: <Download className="h-6 w-6" />, title: "Flexible Exports", description: "Export data in CSV, JSON, PDF, and custom formats for any use case." },
  { icon: <Lock className="h-6 w-6" />, title: "Enterprise Security", description: "SOC 2 compliant data handling with encryption at rest and in transit." },
  { icon: <Workflow className="h-6 w-6" />, title: "API Access", description: "Integrate CrowdVox insights directly into your applications and decision systems." },
  { icon: <Table className="h-6 w-6" />, title: "Cross-Tab Analysis", description: "Generate custom cross-tabulations across any combination of variables." },
  { icon: <FileJson className="h-6 w-6" />, title: "Custom Schemas", description: "Define custom data schemas that match your organization's reporting needs." },
];

export default function DataIntelligencePage() {
  return (
    <>
      <PageHero
        badge="Data Intelligence"
        title="Data That Drives Decisions"
        description="Get structured, actionable data that integrates seamlessly into your strategic decision-making workflows."
        cta="See Data Options"
      />
      <FeatureGrid title="Data Intelligence Features" features={features} />
      <CTASection />
    </>
  );
}
