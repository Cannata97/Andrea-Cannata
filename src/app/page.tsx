import HomeClient from '@/app/components/HomeClient';

export const metadata = {
  title: 'Andrea Cannata | Salesforce & SaaS Developer',
  description: 'I develop solutions on Salesforce, Oracle CPQ and custom SaaS web applications.',
  keywords: ['Andrea Cannata', 'Salesforce Developer', 'Oracle CPQ', 'SaaS', 'CRM', 'Web Development', 'Freelance'],
  verification: {
    google: '-yT1PDpZ3Q3vh656BxXLO1M-2BlkQt1KU-y5eDzRqU0',
  }
};

export default function Home() {
  return <HomeClient />;
}
