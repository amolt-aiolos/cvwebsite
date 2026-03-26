export const siteConfig = {
  name: "CrowdVox",
  tagline: "AI-Powered Polling & Insight Platform",
  description:
    "Understand public opinion instantly through AI-driven polling simulations and narrative insights.",
  url: "https://crowdvox.ai",
  logo: "https://crowdvox.ai/images/logo.svg",
};

export const navLinks = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Insight Engine", href: "/platform/insight-engine", description: "AI-generated narrative insights from polling data" },
      { label: "Poll Simulation", href: "/platform/poll-simulation", description: "Instant AI-driven polling simulations" },
      { label: "AI Analysis", href: "/platform/ai-analysis", description: "Deep analytical intelligence on any topic" },
      { label: "Data Intelligence", href: "/platform/data-intelligence", description: "Structured data for strategic decisions" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Political Campaigns", href: "/solutions/political-campaigns", description: "Win with real-time opinion intelligence" },
      { label: "Marketing & Brand Research", href: "/solutions/marketing-research", description: "Understand your audience deeply" },
      { label: "Higher Education", href: "/solutions/higher-education", description: "Research-grade polling for academia" },
      { label: "Public Policy & Advocacy", href: "/solutions/public-policy", description: "Evidence-based policy insights" },
    ],
  },
  { label: "Methodology", href: "/methodology" },
  { label: "Gen Z Intelligence", href: "/gen-z" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  platform: [
    { label: "Insight Engine", href: "/platform/insight-engine" },
    { label: "Poll Simulation", href: "/platform/poll-simulation" },
    { label: "AI Analysis", href: "/platform/ai-analysis" },
    { label: "Data Intelligence", href: "/platform/data-intelligence" },
  ],
  solutions: [
    { label: "Political Campaigns", href: "/solutions/political-campaigns" },
    { label: "Marketing Research", href: "/solutions/marketing-research" },
    { label: "Higher Education", href: "/solutions/higher-education" },
    { label: "Public Policy", href: "/solutions/public-policy" },
  ],
  resources: [
    { label: "Insights Hub", href: "/insights" },
    { label: "Methodology", href: "/methodology" },
    { label: "Gen Z Intelligence", href: "/gen-z" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
};

export const stats = [
  { value: 500, suffix: "+", label: "Organizations" },
  { value: 10, suffix: "M+", label: "Insights Generated" },
  { value: 98, suffix: "%", label: "Accuracy Rate" },
  { value: 50, suffix: "+", label: "Research Partners" },
];
