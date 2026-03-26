"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Book a Demo"
        description="See how CrowdVox can transform your decision-making with AI-powered polling intelligence."
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <ScrollReveal>
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="mb-6 font-heading text-2xl font-semibold text-text-dark">
                  Get in Touch
                </h3>
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-dark">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-gray-200 bg-bg-light px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-dark">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-gray-200 bg-bg-light px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-dark">
                      Work Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-gray-200 bg-bg-light px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-dark">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-gray-200 bg-bg-light px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-dark">
                      How can we help?
                    </label>
                    <select className="w-full rounded-xl border border-gray-200 bg-bg-light px-4 py-3 text-sm text-text-dark-secondary outline-none transition-colors focus:border-primary">
                      <option>Book a demo</option>
                      <option>Pricing inquiry</option>
                      <option>Partnership opportunity</option>
                      <option>Academic research</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-dark">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-gray-200 bg-bg-light px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 font-heading text-2xl font-semibold text-text-dark">
                    Let&apos;s Talk
                  </h3>
                  <p className="text-text-dark-secondary">
                    Whether you&apos;re a political strategist, marketing leader, or researcher,
                    we&apos;d love to show you how CrowdVox can transform your work.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "hello@crowdvox.ai" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                    { icon: MapPin, label: "Office", value: "San Francisco, CA" },
                    { icon: Clock, label: "Response Time", value: "Within 24 hours" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/5">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-dark">{item.label}</p>
                        <p className="text-sm text-text-dark-secondary">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ teaser */}
                <div className="rounded-2xl bg-bg-light p-6">
                  <h4 className="mb-3 font-heading text-lg font-semibold text-text-dark">
                    Common Questions
                  </h4>
                  <div className="space-y-3">
                    {[
                      "How accurate are AI-simulated polls?",
                      "How long does it take to get results?",
                      "Can I integrate with my existing tools?",
                    ].map((q) => (
                      <p
                        key={q}
                        className="cursor-pointer text-sm text-text-dark-secondary hover:text-primary"
                      >
                        {q} &rarr;
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
