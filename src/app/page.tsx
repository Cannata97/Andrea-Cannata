'use client';
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Projects from '@/app/components/Projects'
import Footer from '@/app/components/Footer';

import { useEffect } from 'react';

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
        <section id="contact"><Footer /></section>
        
    </>
  );
}
