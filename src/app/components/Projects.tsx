'use client';

import ServiceCard from './ServiceCard';
import {
  Lightbulb,
  Code2,
  Cloud,
  ReceiptText,
  PanelsTopLeft,
  Workflow,
} from 'lucide-react';

type Props = {
  role: 'developer' | 'salesforce';
};

export default function Projects({ role }: Props) {
  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center">What can I do for you</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {role === 'salesforce' ? (
          <>
            <ServiceCard
              icon={<Lightbulb />}
              title="Salesforce Consulting"
              description="Strategic consulting for companies implementing or optimizing Salesforce. Includes business process analysis, requirements gathering, initial configuration, and legacy system migration."
              hoverGradient
            />
            <ServiceCard
              icon={<Cloud />}
              title="Salesforce Development"
              description="Custom solutions with Apex, Lightning Web Components, Flows, and automation. I handle the entire dev lifecycle from prototype to deployment."
              hoverGradient
            />

               <ServiceCard
              icon={<Cloud />}
              title="Oracle CPQ Development & Consulting"
              description="Specialized CPQ services: rule configuration, integrations, quote workflows, and custom UI on Oracle CPQ Cloud. I optimize CPQ processes for efficiency and accuracy."
              hoverGradient
            />
          </>
        ) : (
          <>
            <ServiceCard
              icon={<Code2 />}
              title="SaaS Product Development"
              description="End-to-end SaaS web app development, including architecture, APIs, UI, auth, and deployment. Modern stack on Vercel, AWS or similar."
              hoverGradient
            />
            <ServiceCard
              icon={<PanelsTopLeft />}
              title="Website Development"
              description="Design and development of fast, responsive websites optimized for SEO. Ideal for portfolios, startups, and SMEs."
              hoverGradient
            />
            <ServiceCard
              icon={<Workflow />}
              title="Automation & Workflow Engineering"
              description="Build and optimize automations across platforms (Salesforce, CPQ, custom apps). Reduce manual tasks and increase process efficiency."
              hoverGradient
            />
          </>
        )}
      </div>
    </section>
  );
}
