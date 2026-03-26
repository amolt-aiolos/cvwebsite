"use client";

import { Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "For small teams exploring AI-powered polling.",
    features: [
      "50 poll simulations/month",
      "Basic demographic segments",
      "Standard insight reports",
      "Email support",
      "CSV data exports",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$799",
    period: "/month",
    description: "For teams that need deep, ongoing intelligence.",
    features: [
      "Unlimited poll simulations",
      "Advanced demographic modeling",
      "AI narrative insights",
      "Trend tracking & alerts",
      "API access",
      "Priority support",
      "Custom segments",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need maximum power and customization.",
    features: [
      "Everything in Professional",
      "Custom AI models",
      "White-label reports",
      "Dedicated account manager",
      "SLA guarantee",
      "SSO & advanced security",
      "Custom integrations",
      "On-premise deployment",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="Plans for Every Organization"
        description="Start with a free trial. Scale as your intelligence needs grow."
      />

      <section className="py-24">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl border p-8 ${
                    plan.popular
                      ? "border-primary bg-white shadow-xl shadow-primary/10"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-semibold text-text-dark">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-text-dark">{plan.price}</span>
                    <span className="text-text-dark-secondary">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-text-dark-secondary">{plan.description}</p>

                  <div className="mt-6">
                    <Button
                      variant={plan.popular ? "primary" : "ghost"}
                      className={`w-full ${
                        !plan.popular
                          ? "border border-gray-200 text-text-dark hover:border-primary hover:text-primary"
                          : ""
                      }`}
                      href="/contact"
                    >
                      {plan.cta}
                    </Button>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span className="text-text-dark-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
