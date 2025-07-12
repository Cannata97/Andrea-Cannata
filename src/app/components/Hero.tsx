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
          Andrea Cannata — Salesforce Developer & Administrator
        </h1>

        <p className="text-lg text-gray-100 leading-relaxed">
          Ho maturato diversi anni di esperienza nello sviluppo, configurazione e integrazione di soluzioni Salesforce per piccole e medie imprese. 
          Il mio approccio unisce competenze tecniche, attenzione al dettaglio e una forte comprensione dei processi aziendali. 
          Mi occupo di creare CRM funzionali, scalabili e personalizzati per ogni esigenza.
        </p>

        <button
          onClick={handleScroll}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Contattami
        </button>

        {/* CERTIFICAZIONI */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold mb-4">Certificazioni</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <Image
              src="/Admin.png"
              alt="Salesforce Certified Administrator"
              width={120}
              height={120}
              className="drop-shadow-md"
            />
            <Image
              src="/Developer.png"
              alt="Salesforce Certified Developer"
              width={120}
              height={120}
              className="drop-shadow-md"
            />
            <Image 
              src="/AppBuilder.png"
              alt="Salesforce Certified Architect"
              width={120}
              height={120}
              className="drop-shadow-md" 
            />
            <Image
              src="/OmniConsulting.png"
              alt="Salesforce Certified Consultant"
              width={120}
              height={120}
              className="drop-shadow-md"
            />
            <Image
              src="/OmniDeveloper.png"
              alt="Salesforce Certified Marketing Specialist"
              width={120}
              height={120}
              className="drop-shadow-md"
            />  
            
          </div>
        </div>
      </div>
    </section>
  );
}
