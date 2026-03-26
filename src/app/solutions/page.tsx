import { Vote, Megaphone, GraduationCap, Scale, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata = {
  title: "Solutions",
  description: "CrowdVox solutions for political campaigns, marketing, education, and public policy.",
};

const solutions = [
  {
    icon: Vote,
    title: "Political Campaigns",
    description: "Real-time voter sentiment, message testing, issue polling, and opposition research powered by AI.",
    href: "/solutions/political-campaigns",
    features: ["Voter sentiment tracking", "Message A/B testing", "Swing voter analysis", "Issue salience mapping"],
  },
  {
    icon: Megaphone,
    title: "Marketing & Brand Research",
    description: "Deep audience understanding, brand perception analysis, and messaging optimization.",
    href: "/solutions/marketing-research",
    features: ["Brand sentiment analysis", "Audience segmentation", "Creative testing", "Competitive positioning"],
  },
  {
    icon: GraduationCap,
    title: "Higher Education",
    description: "Research-grade tools for academic studies, institutional research, and student engagement.",
    href: "/solutions/higher-education",
    features: ["Academic research polls", "Student sentiment", "Institutional surveys", "Publication-ready data"],
  },
  {
    icon: Scale,
    title: "Public Policy & Advocacy",
    description: "Evidence-based insights for policy development, advocacy campaigns, and public engagement.",
    href: "/solutions/public-policy",
    features: ["Policy impact analysis", "Stakeholder mapping", "Public support gauging", "Legislative tracking"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="Solutions"
        title="Intelligence for Every Industry"
        description="From campaign war rooms to corporate boardrooms, CrowdVox delivers the public opinion intelligence you need to make better decisions."
      />
      <section className="py-24">
        <Container>
          <div className="space-y-12">
            {solutions.map((sol, i) => (
              <ScrollReveal key={sol.title} delay={i * 0.1}>
                <a
                  href={sol.href}
                  className="group grid items-center gap-8 rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-primary/30 hover:shadow-lg sm:grid-cols-3"
                >
                  <div className="sm:col-span-2">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/5">
                        <sol.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-text-dark">
                        {sol.title}
                      </h3>
                    </div>
                    <p className="mb-4 text-text-dark-secondary">{sol.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sol.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-bg-light px-3 py-1 text-xs font-medium text-text-dark-secondary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
