import ServiceCard from './ServiceCard';
import {
  Lightbulb,
  Code2,
  Share2,
  IdCard,
  ShieldCheck,
  Gem,
} from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center">Servizi</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ServiceCard
          icon={<Lightbulb />}
          title="Consultazione & Implementazione"
          description="Analisi e implementazione della tua istanza Salesforce."
          hoverGradient={true}
        />
        <ServiceCard
          icon={<Code2 />}
          title="Sviluppo Salesforce"
          description="Sviluppo, testing e delivery del tuo progetto Salesforce."
            hoverGradient={true}
        />
        <ServiceCard
          icon={<Share2 />}
          title="Integrazione Salesforce"
          description="Collegamento con sistemi esterni tramite API sicure."
            hoverGradient={true}
        />
        <ServiceCard
          icon={<IdCard />}
          title="Amministrazione Salesforce"
          description="Gestione e configurazione utenti, permessi e sicurezza."
          hoverGradient={true}
        />
        <ServiceCard
          icon={<ShieldCheck />}
          title="Manutenzione & Supporto"
          description="Supporto tecnico per garantire efficienza continua."
          hoverGradient={true}
        />
        <ServiceCard
          icon={<Gem />}
          title="Formazione Salesforce"
          description="Formazione per utenti e amministratori interni."
          hoverGradient={true}
        />
      </div>
    </section>
  );
}