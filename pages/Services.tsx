
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Microscope, Activity, BarChart3, Users, ArrowRight, Play, CheckCircle2, Search, Zap, Rocket } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-scroll logic if the hash is present
  useEffect(() => {
    if (window.location.hash === '#process') {
      const timer = setTimeout(() => {
        const element = document.getElementById('process');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Clear hash to prevent jump on reload, optional
          history.replaceState(null, '', ' ');
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const processSteps = [
    {
      title: "Discovery & Scoping",
      desc: "Wir definieren gemeinsam das strategische Zielbild und stecken den Rahmen des Projekts ab.",
      icon: <Search className="w-6 h-6" />,
      weeks: "Woche 1-2"
    },
    {
      title: "Data Deep Dive",
      desc: "Integration Ihrer Unternehmensdaten in unsere Analyse-Modelle. Identifikation von Mustern.",
      icon: <Activity className="w-6 h-6" />,
      weeks: "Woche 3-4"
    },
    {
      title: "Strategy Formulation",
      desc: "Entwicklung von Handlungsoptionen und Simulation der Erfolgswahrscheinlichkeiten.",
      icon: <Zap className="w-6 h-6" />,
      weeks: "Woche 5-6"
    },
    {
      title: "Implementation Roadmap",
      desc: "Überführung der Strategie in einen operativen Stufenplan mit klaren Verantwortlichkeiten.",
      icon: <Rocket className="w-6 h-6" />,
      weeks: "Woche 7-8"
    }
  ];

  return (
    <div className="animate-fade-in pb-24 bg-main">
      <div className="pt-40 pb-20 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8">Unsere Expertise</h1>
          <p className="text-xl text-slate-900 max-w-2xl mx-auto font-light">
            Wir kombinieren klassische Strategieberatung mit modernster Data Science.
          </p>
      </div>
      
      {/* Service Grid */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 gap-8 mb-24">
        {[
          {
            id: 'service-analysis',
            icon: <Microscope className="w-6 h-6" />,
            title: "Strategie-Analyse",
            desc: "Identifikation von Bottlenecks und Wachstumspotenzialen.",
            details: "Wir nutzen KI-gestützte Analysetools, um Muster in Ihren Daten zu erkennen, die dem menschlichen Auge verborgen bleiben.",
            placeholderLabel: "Foto: Analyse / Daten-Screen",
            img: "https://github.com/mm71237-droid/DecisionDriver/blob/main/Teammeeting.PNG?raw=true"
          },
          {
            id: 'service-simulation',
            icon: <Activity className="w-6 h-6" />,
            title: "Szenario Simulation",
            desc: "Stresstest für Ihre Business Cases vor der Investition.",
            details: "Mittels Monte-Carlo-Simulationen berechnen wir tausende Zukunftsszenarien, um die Wahrscheinlichkeit Ihres Erfolgs zu quantifizieren.",
            placeholderLabel: "Foto: Teammeeting / Workshop",
            img: "https://github.com/mm71237-droid/DecisionDriver/blob/main/Teammeeting_Casual.png?raw=true"
          },
          {
            id: 'service-tracking',
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Performance Tracking",
            desc: "Echtzeit-Überwachung der strategischen Exekution.",
            details: "Strategie ist nichts ohne Umsetzung. Wir implementieren Dashboards, die Ihnen jederzeit den Fortschritt der Transformation zeigen.",
            placeholderLabel: "Foto: Kundengespräch / Präsentation",
            img: "https://github.com/mm71237-droid/DecisionDriver/blob/main/Teammeeting_LeadMaxMustermann.png?raw=true"
          }
        ].map((service, i) => (
          <div key={i} className="group relative min-h-[400px] rounded-[3rem] overflow-hidden bg-white border border-slate-100 flex flex-col md:flex-row shadow-lg shadow-blue-900/5 hover:shadow-xl transition-shadow">
             {/* Image Part - Now using Placeholder for interactivity */}
             <div className={`w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-20 pointer-events-none"></div>
                
                <ImagePlaceholder 
                  id={service.id}
                  label={service.placeholderLabel}
                  aspectRatio="auto"
                  containerClassName="!rounded-none !border-0 w-full h-full"
                  initialImage={service.img}
                  imageClassName="transition-transform duration-700 group-hover:scale-105"
                />
             </div>
             
             {/* Content Part */}
             <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <h4 className="text-lg text-primary mb-6 font-medium">{service.desc}</h4>
                <p className="text-slate-900 leading-relaxed mb-8">
                  {service.details}
                </p>
                <button onClick={() => onNavigate(Page.Contact)} className="flex items-center text-slate-900 hover:text-primary transition-colors group/btn w-max font-medium">
                   <span className="mr-2">Details anfragen</span>
                   <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>
        ))}
      </div>

      {/* NEW: Process Detail Section */}
      <section id="process" className="scroll-mt-32 max-w-[1200px] mx-auto px-6 mb-32">
         <div className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 text-center mb-16">
               <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-4">Workflow</span>
               <h2 className="text-3xl md:text-5xl font-bold mb-4">Der Beratungsprozess</h2>
               <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                  Strukturiert. Transparent. Ergebnisorientiert. So führen wir Ihr Projekt zum Erfolg.
               </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {processSteps.map((step, idx) => (
                  <div key={idx} className="relative group">
                     {/* Connector Line (Desktop) */}
                     {idx < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-white/10">
                           <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 delay-100"></div>
                        </div>
                     )}
                     
                     <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-primary mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                           {step.icon}
                        </div>
                        <div className="text-xs font-mono text-primary mb-2 opacity-80">{step.weeks}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                           {step.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-16 flex justify-center relative z-10">
               <Button variant="primary" className="bg-white text-slate-900 hover:bg-slate-100" onClick={() => onNavigate(Page.Contact)}>
                  Projektanfrage starten
               </Button>
            </div>
         </div>
      </section>
      
      {/* Video Section (Moved from Home) */}
      <div className="max-w-[1200px] mx-auto px-6 mb-24">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Einblicke in unsere Arbeit</h2>
            <p className="text-slate-600 mt-2">Sehen Sie, wie wir Unternehmen bewegen.</p>
         </div>
         <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white group bg-black">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover" 
              controls={isPlaying}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://raw.githubusercontent.com/mm71237-droid/DecisionDriver/main/ohne_untertitel_erneut_generie.mp4" type="video/mp4" />
              Ihr Browser unterstützt dieses Video nicht.
            </video>

            {/* Custom Play Button Overlay */}
            {!isPlaying && (
               <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer transition-colors hover:bg-black/30"
                  onClick={handlePlayClick}
               >
                   <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                       <Play className="text-white fill-white ml-2" size={40} />
                   </div>
               </div>
            )}
         </div>
      </div>
      
      <div className="mt-20 flex justify-center">
         <Button size="lg" onClick={() => onNavigate(Page.Contact)}>Unverbindliches Erstgespräch</Button>
      </div>
    </div>
  );
};
