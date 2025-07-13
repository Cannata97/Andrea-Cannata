import ServiceCard from './ServiceCard';
import {
  Lightbulb,
  Code2,
  Cloud,
  ReceiptText,
  PanelsTopLeft,
  Workflow,
} from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center">What can i do for you</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ServiceCard
          icon={<Lightbulb />}
          title="Salesforce Consulting"
          description="Strategic consulting for companies looking to implement or optimize Salesforce. Business process analysis, requirements gathering, initial configuration, and support for migration from legacy systems.."
          hoverGradient={true}
        />
        <ServiceCard
          icon={<Cloud />}
          title="Salesforce Development"
          description="I develop custom solutions with Apex, Lightning Web Components, and advanced automation. I manage the entire development cycle: from prototype to production release."
            hoverGradient={true}
        />
        <ServiceCard
          icon={<Code2 />}
          title="SaaS Product Development"
          description="Complete development of SaaS (Software as a Service) web applications, from analysis to production deployment. I handle architectural design, front-end and back-end development, authentication, external service integration, databases, and deployment on modern platforms like Vercel or AWS."
            hoverGradient={true}
        />
        <ServiceCard
          icon={<ReceiptText />}
          title="Oracle CPQ Development & Consulting"
          description="Technical consulting and development on Oracle CPQ: configuration of pricing rules, custom interfaces, integration with CRM/ERP and optimization of sales processes."
          hoverGradient={true}
        />
        <ServiceCard
          icon={<PanelsTopLeft />}
          title="Website Development"
          description="Creation of modern, responsive websites optimized for performance and SEO. Ideal for businesses, professional portfolios, landing pages, or customized digital showcases."
          hoverGradient={true}
        />
        <ServiceCard
          icon={<Workflow />}
          title="Automation & Workflow Engineering"
          description="Configure advanced automations, approval workflows, and digital processes on platforms like Salesforce, Oracle CPQ, or custom web applications. Optimize manual processes to reduce time and operational risks."
          hoverGradient={true}
        />
      </div>
    </section>
  );
}