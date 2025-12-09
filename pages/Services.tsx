
import React from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Microscope, Activity, BarChart3, Users, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in pb-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="py-20 relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Unsere Leistungen</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Unsere Beratungsleistungen beschleunigen Ihre Entscheidungen, minimieren Risiken und liefern messbare Ergebnisse in komplexen Umfeldern.
          </p>
        </div>
      </div>
      
      {/* Visual Break / Placeholder for Action Shot */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-8 relative z-10">
        <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
           <ImagePlaceholder 
              id="services-workshop-action"
              label="Foto: Workshop / Strategie-Session"
              aspectRatio="wide"
              containerClassName="w-full h-full !rounded-none !border-0"
              initialImage="https://github.com/mm71237-droid/DecisionDriver_Unternehmensberatung/blob/main/Teammeeting_Casual.png?raw=true"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10"></div>
           <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">In Action</span>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {[
          {
            icon: <Microscope className="text-primary w-8 h-8" />,
            title: "Strategie-Analyse & Speed",
            text: "Wir zerlegen Ihre Herausforderung in Wochen, nicht Monaten. Durch agile Analyseprozesse identifizieren wir Bottlenecks sofort.",
            points: ["Schnelle Marktanalyse", "Wettbewerbs-Screening", "Bottleneck-Identifikation"],
            gradient: "from-blue-500/20 to-transparent"
          },
          {
            icon: <Activity className="text-accent w-8 h-8" />,
            title: "Datenbasierte Modelle",
            text: "Schluss mit Bauchgefühl. Wir entwickeln stochastische Modelle und Szenario-Simulationen, um Investitionsrisiken mathematisch zu minimieren.",
            points: ["Monte-Carlo-Simulationen", "Sensitivitätsanalysen", "Predictive Analytics"],
            gradient: "from-violet-500/20 to-transparent"
          },
          {
            icon: <BarChart3 className="text-cyan w-8 h-8" />,
            title: "Impact & ROI",
            text: "Strategie muss sich rechnen. Wir definieren KPIs vor Projektstart und tracken den Erfolg bis in die GuV.",
            points: ["GuV-Wirksamkeitsprüfung", "Marktanteils-Tracking", "Performance Dashboard"],
            gradient: "from-cyan-500/20 to-transparent"
          },
          {
            icon: <Users className="text-pink-500 w-8 h-8" />,
            title: "C-Level Sparring",
            text: "Beratung auf Augenhöhe. Wir entwirren komplexe politische Gemengelagen im Vorstand und Aufsichtsrat.",
            points: ["Stakeholder Management", "Executive Coaching", "Alignment Workshops"],
            gradient: "from-pink-500/20 to-transparent"
          }
        ].map((service, idx) => (
          <div key={idx} className="glass-card p-10 rounded-3xl group hover:border-white/20 transition-all relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 h-20">
                {service.text}
              </p>
              <ul className="space-y-3 mb-8">
                {service.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                Mehr erfahren <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 text-center relative z-10">
        <Button size="lg" onClick={() => onNavigate(Page.Contact)} variant="glow" className="mx-auto">
          Jetzt Leistungspaket anfragen
        </Button>
      </div>
    </div>
  );
};
