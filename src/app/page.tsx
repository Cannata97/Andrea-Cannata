'use client';
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Projects from '@/app/components/Projects'
import Contact from '@/app/components/Contact'

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Navbar />
    
        <section id="hero"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
    </>
  );
}
