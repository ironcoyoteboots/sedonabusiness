"use client";

import { useState } from "react";

const CLIENT_STORIES = [
  {
    companyName: "Influence Mobile",
    logo: "/images/influencemobile.jpg",
    industry: "Growth-Stage Mobile App (rewards & loyalty)",
    engagement:
      "Scaled an early engineering team and implemented delivery frameworks for rapid growth.",
    challenges:
      "Delivery chaos, unclear ownership, and missed release dates across multiple mobile apps.",
    approach:
      "Introduced structured planning cadences, delivery metrics, and tech lead mentoring to stabilize output.",
    outcomes:
      "Within 3 months, feature velocity improved 40%, and internal satisfaction scores rose significantly.",
    kpis: [
      "Velocity +40% within first quarter",
      "Reduced carryover work per sprint",
      "Clear ownership (RACI) across squads",
    ],
    tools: ["Jira", "GitHub Actions", "Datadog", "Amplitude", "Firebase"],
    quote:
      "“Align Delivery gave our team focus and rhythm again. We finally feel in control of our roadmap.”",
    tags: ["Consumer", "Mobile", "High Growth"],
  },
  {
    companyName: "Hipcricket",
    logo: "/images/hipcricket.png",
    industry: "Mobile Marketing & Messaging Platform",
    engagement: "Implemented a robust release management and QA strategy.",
    challenges:
      "Frequent production incidents and no defined testing or release processes.",
    approach:
      "Built CI/CD pipelines, automated regression testing, and trained engineers on structured rollouts.",
    outcomes:
      "Deployment failures dropped 70%, and release frequency doubled without increasing risk.",
    kpis: [
      "−70% deployment failures",
      "2× release frequency",
      "MTTR reduced via standardized rollback",
    ],
    tools: ["Jenkins", "Selenium", "PagerDuty", "Grafana"],
    tags: ["B2B", "Platform", "Quality"],
  },
  {
    companyName: "MagicFlix",
    logo: "/images/magicflix.jpg",
    industry: "Consumer Streaming / Edutainment",
    engagement:
      "Delivered an on-time MVP launch through process alignment and cross-team collaboration.",
    challenges:
      "Design, product, and engineering were working in silos with no single delivery owner.",
    approach:
      "Established RACI roles, sprint rituals, and implemented a visual delivery tracker.",
    outcomes:
      "The MVP launched on schedule and secured Series A funding within 45 days.",
    kpis: [
      "On-time MVP delivery",
      "Cross-team cycle time stabilized",
      "Stakeholder confidence regained",
    ],
    tools: ["Linear", "Figma", "Notion", "Vercel"],
    quote:
      "“Nick’s process saved our launch. We went from uncertainty to a real, confident release plan.”",
    tags: ["Consumer", "Startup", "MVP"],
  },
  {
    companyName: "Tableau",
    logo: "/images/tableau.png",
    industry: "Analytics & BI (Enterprise)",
    engagement:
      "Created async systems and communication norms for a fully remote dev org.",
    challenges:
      "Timezone friction, inconsistent handoffs, and unclear accountability.",
    approach:
      "Introduced async documentation, shared dashboards, and team lead mentoring across timezones.",
    outcomes:
      "Cycle time decreased 35%, and engagement scores reached an all-time high.",
    kpis: [
      "Cycle time −35%",
      "Handoff latency reduced",
      "Engagement scores at all-time high",
    ],
    tools: ["Confluence", "Jira", "Slack", "Tableau"],
    tags: ["Enterprise", "Distributed Teams", "Operating Model"],
  },
];

export default function ClientStoriesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-gray-600">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Client Stories
      </h1>

      <div className="space-y-4">
        {CLIENT_STORIES.map((client, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="flex items-center space-x-4">
                <img
                  src={client.logo}
                  alt={client.companyName}
                  className="h-15 w-40 object-contain"
                />
                <div>
                  <h2 className="text-xl font-semibold">
                    {client.companyName}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {client.industry}
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500">
                {openIndex === index ? "–" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="mt-4 space-y-3">
                <p>
                  <strong>Engagement:</strong> {client.engagement}
                </p>
                <p>
                  <strong>Challenges:</strong> {client.challenges}
                </p>
                <p>
                  <strong>Approach:</strong> {client.approach}
                </p>
                <p>
                  <strong>Outcomes:</strong> {client.outcomes}
                </p>

                {client.kpis && (
                  <div>
                    <strong>Key Metrics:</strong>
                    <ul className="list-disc list-inside ml-2">
                      {client.kpis.map((kpi, i) => (
                        <li key={i}>{kpi}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {client.tools && (
                  <div>
                    <strong>Tools:</strong>{" "}
                    <span>{client.tools.join(", ")}</span>
                  </div>
                )}

                {client.quote && (
                  <p className="italic border-l-4 border-gray-300 pl-4">
                    {client.quote}
                  </p>
                )}

                {client.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {client.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
