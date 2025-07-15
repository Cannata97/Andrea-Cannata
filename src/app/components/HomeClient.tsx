'use client';

import { useEffect } from 'react';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import Footer from '@/app/components/Footer';

export default function HomeClient() {
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
      <section id="hero"  className="scroll-mt-18" ><Hero /></section>
      <section id="projects" className="scroll-mt-18"><Projects /></section>
      <section id="contact" className="scroll-mt-18"><Footer /></section>
    </>
  );
}
