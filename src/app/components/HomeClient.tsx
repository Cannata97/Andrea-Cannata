'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Projects';
import Footer from './Footer';

export default function HomeClient() {
  const [role, setRole] = useState<'developer' | 'salesforce'>('developer');

  return (
    <>
      <Navbar role={role} setRole={setRole} />
      <section id="hero">
        <Hero role={role} setRole={setRole} />
      </section>
      <section id="services">
        <Services role={role} />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
