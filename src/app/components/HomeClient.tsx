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
      <section id="hero"><Hero /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Footer /></section>
    </>
  );
}
