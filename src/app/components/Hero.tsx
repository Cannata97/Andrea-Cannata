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
    <section className="bg-gray-900 py-34 px-6 text-center ">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Andrea Cannata — Full-stack & Salesforce Developer
        </h1>

      <p className="text-lg text-gray-100 leading-relaxed">
  I’m a <strong className="font-semibold">full-stack developer</strong> with strong experience in building <strong className="font-semibold">SaaS applications</strong>, implementing <strong className="font-semibold">Salesforce solutions</strong>, and delivering <strong className="font-semibold">CPQ (Configure, Price, Quote)</strong> projects for enterprise-level clients. My background includes designing <strong className="font-semibold">scalable architectures</strong>, automating <strong className="font-semibold">business workflows</strong>, and integrating <strong className="font-semibold">complex systems</strong> to meet real-world needs. I’m passionate about building <strong className="font-semibold">clean, efficient, and maintainable code</strong> that drives business value.
</p>


 <button
  onClick={handleScroll}
  className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white rounded-lg border border-cyan-500 bg-transparent hover:bg-white hover:text-gray-900 transition-colors duration-300"
>
  Contact Me
</button>



        {/* CERTIFICAZIONI */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-8 ">Certification</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Image
              src="/Admin.png"
              alt="Salesforce Certified Administrator"
              width={150}
              height={150}
              className="drop-shadow-md w-24 sm:w-32 md:w-36"
            />
            <Image
              src="/Developer.png"
              alt="Salesforce Certified Developer"
              width={150}
              height={150}
              className="drop-shadow-md w-24 sm:w-32 md:w-36"
            />
            <Image 
              src="/AppBuilder.png"
              alt="Salesforce Certified Architect"
              width={150}
              height={150}
              className="drop-shadow-md w-24 sm:w-32 md:w-36" 
            />
            <Image
              src="/OmniConsulting.png"
              alt="Salesforce Certified Consultant"
              width={150}
              height={150}
              className="drop-shadow-md w-24 sm:w-32 md:w-36"
            />
            <Image
              src="/OmniDeveloper.png"
              alt="Salesforce Certified Marketing Specialist"
              width={150}
              height={150}
              className="drop-shadow-md w-24 sm:w-32 md:w-36"
            />  
            
          </div>
        </div>
      </div>
    </section>
  );
}
