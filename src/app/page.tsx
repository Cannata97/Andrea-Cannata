import Navbar from '@/app/components/Navbar';
import HomeClient from '@/app/components/HomeClient';

export const metadata = {
  title: 'Andrea Cannata | Salesforce & SaaS Developer',
  description: 'I develop solutions on Salesforce, Oracle CPQ and custom SaaS web applications.',
  keywords: ['Salesforce Developer', 'Oracle CPQ', 'SaaS', 'CRM', 'Web Development', 'Freelance'],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeClient />
    </>
  );
}
