'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();


  const handleNavigation = (id: string) => {
 
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
        <Image
          src="/Andrea_Cannata_Logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => handleNavigation('hero')}
        />

        <div className="sm:flex space-x-6">
         
          <button onClick={() => handleNavigation('projects')} className="font-semibold hover:underline">Services</button>
          <button onClick={() => handleNavigation('contact')} className="font-semibold hover:underline">Contact Me</button>
        </div>

     
      </div>

 
    </nav>
  );
}
