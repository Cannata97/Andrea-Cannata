'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
export default function Footer() {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    customService: '',
    message: '',
  });

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

 const service = selectedService === 'Other' ? formData.customService : selectedService;

const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  service_requested: service,
  message: formData.message,
};

  emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    templateParams,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  ).then(
    () => {
      alert('Email inviata con successo!');
    },
    (error) => {
      alert('Errore nell’invio della mail.');
      console.error(error);
    }
  );
};


  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      
      <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-2xl font-semibold text-center">Contact</h2>
       <div className="flex flex-col lg:flex-row lg:gap-x-12 gap-y-12 w-full">
  {/* INFO DI CONTATTO */}
  <div className="w-full lg:w-1/2 flex-shrink-0 space-y-4">
  <h3 className="text-xl font-semibold">Contact Info</h3>
    <div>
      <p className="font-semibold">Email:</p>
      <p className="text-gray-300">andreacannata97@gmail.com</p>
    </div>
    <div>
      <p className="font-semibold">Telefono:</p>
      <p className="text-gray-300">+39 345 937 7982</p>
    </div>
    <div>
      <p className="font-semibold">Località:</p>
      <p className="text-gray-300">Modica, Italia</p>
    </div>
  </div>

  {/* FORM CONTATTO */}
  <form onSubmit={handleSubmit} className="w-full lg:w-1/2 flex-shrink-0 space-y-6">
    <h3 className="text-xl font-semibold">Request a consultation</h3>
    
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-2 rounded text-white bg-gray-800"
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      required
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-2 rounded text-white bg-gray-800"
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      required
    />
    <select
      className="w-full p-2 rounded text-white bg-gray-900"
      onChange={(e) => {
        setSelectedService(e.target.value);
        setFormData({ ...formData, service: e.target.value });
      }}
      required
    >
      <option value="">Select a service</option>
      <option value="Sito Web">WebSite</option>
      <option value="CRM">CRM</option>
      <option value="Consulenza">Consultancy</option>
      <option value="Other">Other</option>
    </select>

    {selectedService === 'Other' && (
      <input
        type="text"
        placeholder="Specify the service"
        className="w-full p-2 rounded text-white bg-gray-800"
        onChange={(e) => setFormData({ ...formData, customService: e.target.value })}
        required
      />
    )}
    <textarea
      placeholder="Write your message..."
      className="w-full p-2 rounded text-white h-32 bg-gray-800"
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      required
    />

    <button
      type="submit"
      className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white rounded-lg border border-cyan-500 bg-transparent hover:bg-white hover:text-gray-900 transition-colors duration-300"
    >
      Invia
    </button>
  </form>
</div>

        {/* SOCIAL */}
        <div className="text-center border-t border-gray-700 pt-8">
  <p className="mb-10 text-xl">Follow me on</p>
  <div className="flex justify-center space-x-16">
    <a href="https://linkedin.com/in/andrea-cannata-450584219" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-blue-400">
      <Linkedin size={40} />
  
    </a>
    <a href="https://github.com/Cannata97" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-gray-400">
      <Github size={40} />
    
    </a>

    <a href="https://www.salesforce.com/trailblazer/acannata1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-gray-400">
        <Image
          src="/trailhead.png"
          alt="Trailhead Logo"
          width={70}
          height={70}
          className="transition duration-150 hover:filter hover:brightness-0 hover:invert hover:sepia hover:hue-rotate-180 hover:saturate-200"
        />
    
    </a>

    <a href="mailto:andreacannata97@gmail.com" className="flex items-center space-x-1 hover:text-red-400">
      <Mail size={40} />
      <span></span>
    </a>
  </div>

</div>
        <p className="text-center text-gray-500 mt-8">
          © {new Date().getFullYear()} Andrea Cannata. All rights reserved.
        </p>
      </div>
      <p className="text-center text-gray-500 ">Partita iva 00000000000000</p>
    </footer>
  );
}
