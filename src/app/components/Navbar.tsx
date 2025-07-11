'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

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
        <span className="font-bold text-xl">Andrea Cannata</span>
        <div className="space-x-6">
          <button onClick={() => handleNavigation('hero')} className="hover:underline">Home</button>
          <button onClick={() => handleNavigation('projects')} className="hover:underline">Progetti</button>
          <button onClick={() => handleNavigation('contact')} className="hover:underline">Contatti</button>
          <Link href="/contact" className="hover:underline">Pagina Contatti</Link>
        </div>
      </div>
    </nav>
  );
}
