'use client';

import Image from 'next/image';



type Props = {
  role: 'developer' | 'salesforce';
  setRole: (role:  'salesforce' | 'developer' ) => void;
};

export default function Hero({ role }: Props) {


  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gray-900 py-34 px-6 text-center text-white">

 

      {/* Contenuto centrale */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Andrea Cannata —{' '}
          {role === 'developer' ? 'Full-stack Developer' : 'Salesforce Developer'}
        </h1>

        <p className="text-lg text-gray-100 leading-relaxed">
          {role === 'developer' ? (
        <>
          I&#39;m a <strong className="font-semibold">full-stack developer</strong> specializing in 
          building <strong className="font-semibold">SaaS platforms</strong> from the ground up. 
          I develop performant frontends using <strong className="font-semibold">React</strong> and{" "}
          <strong className="font-semibold">Next.js</strong>, and implement robust backends with{" "}
          <strong className="font-semibold">Node.js</strong> or <strong className="font-semibold">Spring Boot</strong>. 
          I design <strong className="font-semibold">scalable architectures</strong>, integrate{" "}
          <strong className="font-semibold">third-party APIs</strong>, and deploy{" "}
          <strong className="font-semibold">modern cloud solutions</strong> using{" "}
          <strong className="font-semibold">Supabase</strong> and <strong className="font-semibold">Vercel</strong>. 
          Whether you&#39;re launching a new product or scaling an existing one, I deliver{" "}
          <strong className="font-semibold">reliable</strong> and{" "}
          <strong className="font-semibold">maintainable solutions</strong> tailored to your business.
        </>

          ) : (
          <>
            I&#39;m a <strong className="font-semibold">Salesforce consultant & developer</strong> with hands-on experience in{" "}
            <strong className="font-semibold">CPQ</strong>, <strong className="font-semibold">Flows</strong>,{" "}
            <strong className="font-semibold">Apex</strong>, and{" "}
            <strong className="font-semibold">Lightning Web Components (LWC)</strong>. I design and implement{" "}
            <strong className="font-semibold">scalable CRM solutions</strong> tailored to business needs, 
            optimizing <strong className="font-semibold">sales processes</strong> and automating{" "}
            <strong className="font-semibold">complex workflows</strong> for{" "}
            <strong className="font-semibold">enterprise clients</strong>. Whether it&#39;s customizing the Salesforce platform 
            or integrating external systems, I deliver <strong className="font-semibold">robust</strong> and{" "}
            <strong className="font-semibold">efficient solutions</strong> that drive productivity.
          </>

          )}
        </p>

        <button
          onClick={handleScroll}
          className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white rounded-lg border border-cyan-500 bg-transparent hover:bg-white hover:text-gray-900 transition-colors duration-300"
        >
          Contact Me
        </button>

        <div className="mt-10">
  <h2 className="text-2xl font-semibold mb-8">
    {role === 'salesforce' ? 'Certification' : 'Frameworks & Tools'}
  </h2>
  <div className="flex justify-center gap-4 flex-wrap">
    {role === 'salesforce' ? (
      <>
        <Image src="/Admin.png" alt="Salesforce Certified Administrator" width={150} height={150} className="drop-shadow-md w-24 sm:w-32 md:w-36" />
        <Image src="/Developer.png" alt="Salesforce Certified Developer" width={150} height={150} className="drop-shadow-md w-24 sm:w-32 md:w-36" />
        <Image src="/AppBuilder.png" alt="Salesforce Certified Architect" width={150} height={150} className="drop-shadow-md w-24 sm:w-32 md:w-36" />
        <Image src="/OmniConsulting.png" alt="Salesforce Certified Consultant" width={150} height={150} className="drop-shadow-md w-24 sm:w-32 md:w-36" />
        <Image src="/OmniDeveloper.png" alt="Salesforce Certified Marketing Specialist" width={150} height={150} className="drop-shadow-md w-24 sm:w-32 md:w-36" />
      </>
    ) : (
    <div className="flex justify-center gap-8 flex-wrap items-center">
  {[
    { src: '/nextjs.svg', alt: 'Next.js', name: 'Next.js' },
    { src: '/react.svg', alt: 'React', name: 'React' },
    { src: '/node.svg', alt: 'Node', name: 'Node.js' },
    { src: '/spring.svg', alt: 'Spring Boot', name: 'Spring Boot' },
    { src: '/supabase.svg', alt: 'Supabase', name: 'Supabase' },
    { src: '/vercel.svg', alt: 'Vercel', name: 'Vercel' },
  ].map(({ src, alt, name }) => (
    <div key={name} className="flex flex-col items-center w-24 sm:w-28 text-white font-semibold">
      <Image src={src} alt={alt} width={80} height={80} className="invert drop-shadow-md mb-2" />
      <p className="text-sm text-center">{name}</p>
    </div>
  ))}
</div>
    )}
  </div>
</div>
      </div>
    </section>
  );
}
