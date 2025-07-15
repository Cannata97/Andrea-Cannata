'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

type Props = {
  role: 'developer' | 'salesforce';
  setRole: (role: 'developer' | 'salesforce') => void;
};

export default function Navbar({ role, setRole }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = -60;
        const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="w-full fixed top-0 bg-white shadow z-50 text-black">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Image
          src="/Andrea_Cannata_Logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => handleNavigation('hero')}
        />

        <div className="flex items-center space-x-6">
          <button onClick={() => handleNavigation('services')} className="font-semibold hover:underline">Services</button>
          <button onClick={() => handleNavigation('contact')} className="font-semibold hover:underline">Contact Me</button>

               <div className="absolute top-20 right-4 flex bg-gray-800 border border-gray-600 rounded-full p-1 shadow-md z-10">
    <button
      onClick={() => setRole('developer')}
      className={`px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-medium
        ${role === 'developer' ? 'bg-white text-black shadow' : 'text-gray-300 hover:text-white'}`}
    >
      Developer
    </button>
    <button
      onClick={() => setRole('salesforce')}
      className={`px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-medium
        ${role === 'salesforce' ? 'bg-white text-black shadow' : 'text-gray-300 hover:text-white'}`}
    >
      Salesforce
    </button>
  </div>
        </div>
      </div>
    </nav>
  );
}
