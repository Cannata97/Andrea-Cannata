'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';
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
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold">Contattami</h2>

          <input
            type="text"
            placeholder="Il tuo nome"
            className="w-full p-2 rounded text-white"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="La tua email"
            className="w-full p-2 rounded text-white"
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
            <option value="">Seleziona un servizio</option>
            <option value="Sito Web">Sito Web</option>
            <option value="CRM">CRM</option>
            <option value="Consulenza">Consulenza</option>
            <option value="Other">Other</option>
          </select>

          {selectedService === 'Other' && (
            <input
              type="text"
              placeholder="Specifica il servizio"
              className="w-full p-2 rounded text-white"
              onChange={(e) => setFormData({ ...formData, customService: e.target.value })}
              required
            />
          )}
          <textarea
            placeholder="Scrivi il tuo messaggio..."
            className="w-full p-2 rounded text-white h-32"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold"
          >
            Invia
          </button>
        </form>

        {/* SOCIAL */}
        <div className="text-center border-t border-gray-700 pt-8">
  <p className="mb-4">Seguimi su</p>
  <div className="flex justify-center space-x-6">
    <a href="https://linkedin.com/in/tuo-profilo" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-blue-400">
      <Linkedin size={20} />
      <span>LinkedIn</span>
    </a>
    <a href="https://github.com/tuo-username" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-gray-400">
      <Github size={20} />
      <span>GitHub</span>
    </a>
    <a href="mailto:andreacannata97@gmail.com" className="flex items-center space-x-1 hover:text-red-400">
      <Mail size={20} />
      <span>Email</span>
    </a>
  </div>
</div>
        <p className="text-center text-gray-500 mt-8">
          © {new Date().getFullYear()} Andrea Cannata. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
