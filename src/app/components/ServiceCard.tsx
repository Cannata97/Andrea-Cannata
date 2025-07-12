import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  hoverGradient?: boolean;
};

export default function ServiceCard({ icon, title, description, hoverGradient = false }: Props) {
  return (
    <div
      className={`rounded-xl p-6 flex flex-col justify-between min-h-[250px] shadow-lg transition-transform duration-300 hover:scale-[1.01]
        bg-white text-gray-900 
        ${hoverGradient ? 'hover:bg-gradient-to-br hover:from-blue-900 hover:via-gray-900 hover:to-gray-500 hover:text-white' : 'hover:bg-gray-200'}
      `}
    >
      <div className="space-y-4">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">
          {description} <br />
        
        </p>
      </div>
      <div className="mt-4">
  
      </div>
    </div>
  );
}
