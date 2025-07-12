'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // icone

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id: string) => {
    setMenuOpen(false); // chiude il menu dopo il click
    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full fixed top-0 bg-white shadow z-50 text-black">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl">Andrea Cannata</span>

        {/* Desktop menu */}
        <div className="hidden sm:flex space-x-6">
          <button onClick={() => handleNavigation('hero')} className="hover:underline">About me</button>
          <button onClick={() => handleNavigation('projects')} className="hover:underline">Services</button>
          <button onClick={() => handleNavigation('contact')} className="hover:underline">Contact Me</button>
        </div>

        {/* Mobile menu button */}
       <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
          <div className="sm:hidden bg-white border-t shadow-inner px-4 py-2 space-y-2">
          <button onClick={() => handleNavigation('hero')} className="block w-full text-left hover:underline">About me</button>
          <button onClick={() => handleNavigation('projects')} className="block w-full text-left hover:underline">Services</button>
          <button onClick={() => handleNavigation('contact')} className="block w-full text-left hover:underline">Contact Me</button>
        </div>
      )}
    </nav>
  );
}
