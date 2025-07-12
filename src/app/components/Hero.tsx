'use client';

import Image from 'next/image';

export default function Hero() {
  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-900 py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Andrea Cannata — Full-stack & Salesforce Developer
        </h1>

        <p className="text-lg text-gray-100 leading-relaxed">
         I’m a full-stack developer with strong experience in building SaaS applications, implementing Salesforce solutions, and delivering CPQ (Configure, Price, Quote) projects for enterprise-level clients. My background includes designing scalable architectures, automating business workflows, and integrating complex systems to meet real-world needs. I’m passionate about building clean, efficient, and maintainable code that drives business value.


        </p>

        <button
          onClick={handleScroll}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Contact Me
        </button>

        {/* CERTIFICAZIONI */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-8 ">Certificazioni</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Image
              src="/Admin.png"
              alt="Salesforce Certified Administrator"
              width={150}
              height={150}
              className="drop-shadow-md"
            />
            <Image
              src="/Developer.png"
              alt="Salesforce Certified Developer"
              width={150}
              height={150}
              className="drop-shadow-md"
            />
            <Image 
              src="/AppBuilder.png"
              alt="Salesforce Certified Architect"
              width={150}
              height={150}
              className="drop-shadow-md" 
            />
            <Image
              src="/OmniConsulting.png"
              alt="Salesforce Certified Consultant"
              width={150}
              height={150}
              className="drop-shadow-md"
            />
            <Image
              src="/OmniDeveloper.png"
              alt="Salesforce Certified Marketing Specialist"
              width={150}
              height={150}
              className="drop-shadow-md"
            />  
            
          </div>
        </div>
      </div>
    </section>
  );
}
