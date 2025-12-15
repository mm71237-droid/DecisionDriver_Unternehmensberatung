
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { Zap, Target, ShieldCheck, TrendingUp, Lock, BarChart3, Bot, Sparkles, X } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Chatbot } from '../components/Chatbot';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // State for Chatbot configuration
  const [chatConfig, setChatConfig] = useState({
    isOpen: false,
    title: 'DecisionDriver AI',
    initialMessage: undefined as string | undefined,
    isCeoMode: false
  });

  const openStandardChat = () => {
    setChatConfig({
      isOpen: true,
      title: 'DecisionDriver AI',
      initialMessage: undefined, // Uses default
      isCeoMode: false
    });
  };

  const openCeoChat = () => {
    setChatConfig({
      isOpen: true,
      title: 'Max Mustermann',
      initialMessage: "Hallo! Hier ist Max Mustermann. Ich kümmere mich sehr gerne persönlich um Ihr Anliegen. Damit ich Sie bestmöglich unterstützen kann, hinterlassen Sie mir bitte Ihre Kontaktdaten. Wir können gerne erste Fragen direkt hier klären, oder ich schlage Ihnen ein unverbindliches Erstgespräch vor.",
      isCeoMode: true
    });
  };

  // SVG Data URL for the repeating watermark pattern
  // Matches the Logo design exactly (including the diagonal cut mask) with low opacity
  const watermarkSvg = `
    <svg width="100" height="100" viewBox="0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="wm-mask">
          <rect width="100" height="100" fill="white" />
          <line x1="30" y1="70" x2="70" y2="30" stroke="black" stroke-width="8" stroke-linecap="square" />
        </mask>
      </defs>
      <g opacity="0.06">
         <path d="M 50 90 A 40 40 0 0 1 50 10" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none" />
         <path d="M 50 10 A 40 40 0 0 1 50 90" stroke="#0284c7" stroke-width="6" stroke-linecap="round" fill="none" />
         <path d="M 46 5 L 56 10 L 46 15 Z" fill="#0284c7" /> 
         <path d="M 54 95 L 44 90 L 54 85 Z" fill="#0284c7" />
         <text x="50" y="52" text-anchor="middle" dominant-baseline="central" fill="#0f172a" font-size="52" font-family="sans-serif" font-weight="900" mask="url(#wm-mask)">D</text>
      </g>
    </svg>
  `.trim().replace(/\n/g, '').replace(/\s+/g, ' ');

  const watermarkUrl = `data:image/svg+xml,${encodeURIComponent(watermarkSvg)}`;

  return (
    <div className="animate-fade-in overflow-hidden bg-main relative">
      
      {/* Soft Background Ambience - Light Blue */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-100/50 rounded-full blur-[150px] animate-blob"></div>
         <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-sky-100/50 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
      </div>

      {/* HERO LAYOUT */}
      <section className="relative pt-32 pb-20 flex flex-col items-center px-6 overflow-hidden">
        
        {/* LOGO WATERMARK PATTERN */}
        <div 
          className="absolute top-0 left-0 right-0 h-[65%] pointer-events-none z-0"
          style={{
            backgroundImage: `url('${watermarkUrl}')`,
            backgroundSize: '50px 50px', 
            backgroundRepeat: 'repeat',
            // Fade out smoothly before it ends
            maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)'
          }}
        ></div>

        {/* 1. Typography Centered */}
        <div className="max-w-4xl mx-auto text-center relative z-20 mb-12">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-slate-900 text-xs tracking-widest uppercase mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Strategic Intelligence
           </div>
           
           <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.1] mb-8 break-words">
             Präzision <i className="font-sans italic text-primary">trifft</i> <br/>
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Performance.</span>
           </h1>
           
           <p className="text-lg md:text-xl text-slate-900 max-w-2xl mx-auto leading-relaxed font-light">
             Wir transformieren Unsicherheit in algorithmische Klarheit. 
             Datenbasierte Handlungspläne für C-Level-Entscheidungen.
           </p>
        </div>

        {/* 2. "Booking Bar" Style CTA + Chat Button */}
        <div className="relative z-30 w-full max-w-3xl mx-auto mb-20 animate-slide-up">
           <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-2 rounded-3xl md:rounded-full flex flex-col md:flex-row gap-2 shadow-xl shadow-blue-900/5">
              <div className="flex-1 px-6 py-3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
                 <span className="text-[10px] text-primary uppercase tracking-wider font-bold">Fokus</span>
                 <span className="text-slate-900 font-medium">Strategische Analyse</span>
              </div>
              <div className="flex-1 px-6 py-3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
                 <span className="text-[10px] text-primary uppercase tracking-wider font-bold">Ziel</span>
                 <span className="text-slate-900 font-medium">Umsatzsteigerung</span>
              </div>
              <div className="p-1 flex gap-2 h-14 md:h-auto">
                 <Button className="flex-1 md:w-auto h-full !rounded-2xl md:!rounded-full !px-6 shadow-lg shadow-slate-900/20 whitespace-nowrap" onClick={() => onNavigate(Page.Contact)}>
                    Anfrage starten
                 </Button>
                 
                 {/* New Chat Button integrated in bar */}
                 <button 
                    onClick={openStandardChat}
                    className="aspect-square h-full rounded-2xl md:rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 flex items-center justify-center transition-colors relative group"
                    title="AI Assistant starten"
                 >
                    <Sparkles size={20} className="text-primary" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                 </button>
              </div>
           </div>
           
           {/* Alternative prominent text link below */}
           <div className="text-center mt-6">
              <button 
                onClick={openStandardChat}
                className="inline-flex flex-wrap justify-center items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors group px-4"
              >
                <Bot size={16} className="shrink-0" />
                <span className="text-center">Erste wirtschaftliche Frage klären? <span className="underline decoration-slate-300 group-hover:decoration-primary underline-offset-4 whitespace-nowrap">Frag unsere AI</span></span>
              </button>
           </div>
        </div>

        {/* 3. Large Company Image Container with Floating Founder Card */}
        <div className="w-full max-w-6xl mx-auto relative z-20 animate-slide-up animation-delay-500 mt-4 group">
            
            {/* The Main Building Image */}
            <div className="relative h-[300px] md:h-[500px] w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white bg-slate-100">
               <ImagePlaceholder 
                  id="company-building-hero"
                  label="Firmengebäude / Headquarter"
                  aspectRatio="auto"
                  containerClassName="!rounded-none !border-0 w-full h-full"
                  initialImage="https://github.com/mm71237-droid/DecisionDriver/blob/main/Gemini_Generated_Image_cfl16bcfl16bcfl1.png?raw=true"
                  imageClassName="object-cover object-center w-full h-full transform transition-transform duration-[2s] group-hover:scale-105"
               />
               
               {/* Image Overlay Text */}
               <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none">
                   <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold shadow-lg shrink-0">
                        <span className="text-base md:text-xl">DD</span>
                      </div>
                      <div>
                         <div className="text-white font-bold text-lg md:text-3xl mb-1">DecisionDriver Tower</div>
                         <div className="text-slate-200 text-sm md:text-lg flex items-center gap-2">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400"></span>
                            Salzburg, Österreich
                         </div>
                      </div>
                   </div>
               </div>
            </div>

            {/* CREATIVE FOUNDER OVERLAY - Floating Card with Interaction */}
            <div 
               onClick={openCeoChat}
               className="absolute -bottom-6 right-4 md:bottom-12 md:right-12 z-30 cursor-pointer w-[calc(100%-2rem)] md:w-auto max-w-none md:max-w-[340px]"
            >
               <div className="relative bg-white/90 backdrop-blur-xl p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_50px_rgba(8,112,184,0.2)] border border-white flex items-center gap-4 md:gap-5 hover:-translate-y-2 hover:bg-white hover:shadow-[0_25px_60px_rgba(8,112,184,0.3)] transition-all duration-300 group/card">
                  
                  {/* Profile Image with decorative elements */}
                  <div className="relative w-14 h-14 md:w-20 md:h-20 shrink-0">
                     <div className="absolute inset-0 bg-blue-500 rounded-[1rem] md:rounded-[1.2rem] rotate-6 opacity-20 transform transition-transform group-hover/card:rotate-12 duration-500"></div>
                     <div className="relative w-full h-full rounded-[1rem] md:rounded-[1.2rem] overflow-hidden border-2 border-white shadow-sm">
                        <img 
                           src="https://github.com/mm71237-droid/DecisionDriver/blob/main/Max%20Mustermann%2016zu9.png?raw=true" 
                           alt="Max Mustermann" 
                           className="w-full h-full object-cover object-center transform group-hover/card:scale-110 transition-transform duration-700"
                        />
                     </div>
                     {/* Status Indicator */}
                     <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                     </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                     <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-1 flex items-center gap-1 truncate">
                        Founder's Vision 
                        <Bot size={12} className="opacity-0 group-hover/card:opacity-100 transition-opacity" />
                     </p>
                     <h3 className="font-bold text-slate-900 text-sm md:text-lg leading-none mb-1.5 group-hover/card:text-primary transition-colors truncate">Max Mustermann</h3>
                     <p className="text-xs text-slate-500 italic truncate">"Strategy equals Execution."</p>
                     <div className="h-0 overflow-hidden group-hover/card:h-5 transition-all duration-300">
                        <p className="text-[10px] text-emerald-600 font-bold mt-1">Jetzt direkt kontaktieren &rarr;</p>
                     </div>
                  </div>
               </div>
            </div>

        </div>

      </section>

      {/* FEATURE CARDS - 3 Equal Boxes */}
      <section className="py-16 md:py-32 px-6 max-w-[1400px] mx-auto">
         <div className="mb-12 md:mb-16 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Werte, die zählen.</h2>
             <p className="text-slate-900 text-lg max-w-2xl mx-auto">
                Unsere Methodik basiert nicht auf Vermutungen. Wir liefern das Fundament für mutige Entscheidungen.
             </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Präzision */}
            <div className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 p-8 flex flex-col shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all hover:-translate-y-2 duration-500">
               {/* Graphic Visual */}
               <div className="w-full aspect-[4/3] bg-blue-50/50 rounded-[2rem] mb-8 relative overflow-hidden border border-blue-100 flex items-center justify-center">
                   {/* Background Grid */}
                   <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5 }}></div>
                   
                   {/* Animated Elements */}
                   <div className="relative z-10 w-32 h-32">
                      <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
                      <div className="absolute inset-4 border border-primary/40 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Target size={48} className="text-primary drop-shadow-lg" />
                      </div>
                      {/* Connecting Lines */}
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/20"></div>
                      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-primary/20"></div>
                   </div>
                   
                   {/* Data Points */}
                   <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                   <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-300"></div>
               </div>
               
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Präzision</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Wir ersetzen Bauchgefühl durch Daten. Unsere Analysen liefern eine Trefferquote, die traditionelle Methoden weit übertrifft.
                  </p>
               </div>
            </div>

            {/* Card 2: Speed */}
            <div className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 p-8 flex flex-col shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all hover:-translate-y-2 duration-500">
               {/* Graphic Visual */}
               <div className="w-full aspect-[4/3] bg-emerald-50/50 rounded-[2rem] mb-8 relative overflow-hidden border border-emerald-100 flex items-center justify-center">
                   {/* Background Lines */}
                   <div className="absolute inset-0 transform -skew-x-12 opacity-30">
                      <div className="absolute top-0 left-1/4 w-20 h-full bg-emerald-100/50"></div>
                      <div className="absolute top-0 left-2/4 w-10 h-full bg-emerald-100/30"></div>
                   </div>
                   
                   {/* Rising Graph Animation */}
                   <div className="relative z-10 flex items-end gap-3 h-32 w-48 px-4 pb-4">
                      <div className="w-1/3 bg-emerald-200 h-1/3 rounded-t-lg"></div>
                      <div className="w-1/3 bg-emerald-400 h-2/3 rounded-t-lg shadow-lg shadow-emerald-500/20"></div>
                      <div className="w-1/3 bg-emerald-600 h-full rounded-t-lg shadow-xl shadow-emerald-600/30 relative overflow-hidden">
                         <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                   </div>
                   
                   {/* Icon Overlay */}
                   <div className="absolute top-6 right-6 p-3 bg-white rounded-xl shadow-sm">
                      <Zap size={20} className="text-emerald-500" />
                   </div>
               </div>
               
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Speed</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Von der Analyse zur Exekution in Wochen statt Monaten. Wir beschleunigen Ihre Time-to-Market durch agile Sprints.
                  </p>
               </div>
            </div>

            {/* Card 3: Sicherheit */}
            <div className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 p-8 flex flex-col shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all hover:-translate-y-2 duration-500">
               {/* Graphic Visual */}
               <div className="w-full aspect-[4/3] bg-indigo-50/50 rounded-[2rem] mb-8 relative overflow-hidden border border-indigo-100 flex items-center justify-center">
                   
                   {/* Radar Effect */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 border border-indigo-100 rounded-full absolute"></div>
                      <div className="w-48 h-48 border border-indigo-200 rounded-full absolute"></div>
                      <div className="w-32 h-32 border border-indigo-300 rounded-full absolute bg-indigo-50"></div>
                   </div>

                   {/* Shield */}
                   <div className="relative z-10">
                      <ShieldCheck size={64} className="text-indigo-600 drop-shadow-xl" />
                      <div className="absolute -bottom-2 -right-2 bg-white px-2 py-0.5 rounded-full border border-indigo-100 shadow-sm flex items-center gap-1">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                         <span className="text-[10px] font-bold text-indigo-900">SAFE</span>
                      </div>
                   </div>
               </div>
               
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Sicherheit</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Risikominimierung durch szenariobasierte Simulationen. Wir testen Ihre Strategie virtuell, bevor Sie real investieren.
                  </p>
               </div>
            </div>

         </div>

         <div className="mt-16 flex justify-center">
            <Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-50 w-full md:w-auto" onClick={() => onNavigate(Page.Services)}>Alle Leistungen im Detail</Button>
         </div>
      </section>

      {/* PROCESS STEPS SECTION (Redesigned since image moved up) */}
      <section className="py-20 md:py-32 bg-white rounded-t-[3rem] md:rounded-t-[4rem] shadow-inner">
         <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-6xl font-bold text-slate-900 leading-tight mb-12 md:mb-20">
               Verlassen Sie sich nicht auf den Zufall.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
               {/* Step 1 */}
               <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-3xl bg-[rgb(15,23,42)] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-xl shadow-slate-900/20 mb-6 md:mb-8 mx-auto">1</div>
                  <h4 className="text-xl md:text-2xl text-slate-900 font-bold mb-4">Analyse</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                     Deep-Dive in Ihre Unternehmensdaten. Wir identifizieren verborgene Muster und ungenutzte Potenziale im Marktumfeld.
                  </p>
               </div>

               {/* Step 2 */}
               <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-3xl bg-[rgb(15,23,42)] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-xl shadow-slate-900/20 mb-6 md:mb-8 mx-auto">2</div>
                  <h4 className="text-xl md:text-2xl text-slate-900 font-bold mb-4">Simulation</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                     Wir testen Strategien virtuell. Unsere Modelle berechnen Wahrscheinlichkeiten, bevor Sie einen einzigen Euro investieren.
                  </p>
               </div>

               {/* Step 3 */}
               <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-3xl bg-[rgb(15,23,42)] text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-xl shadow-slate-900/20 mb-6 md:mb-8 mx-auto">3</div>
                  <h4 className="text-xl md:text-2xl text-slate-900 font-bold mb-4">Exekution</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                     Begleitung der Umsetzung. Wir definieren klare KPIs und sorgen für eine reibungslose Implementierung.
                  </p>
               </div>
            </div>

            <div className="mt-12 md:mt-20 flex justify-center">
               <Button onClick={() => {
                  // Set a hash so Services page knows to scroll
                  window.location.hash = 'process';
                  onNavigate(Page.Services);
               }} size="lg" variant="secondary" className="border-slate-300 w-full md:w-auto">
                  Unser Prozess im Detail
               </Button>
            </div>
         </div>
      </section>

      {/* Global Chatbot Instance for Home - Now Configurable */}
      <Chatbot 
        isOpen={chatConfig.isOpen} 
        onClose={() => setChatConfig(prev => ({...prev, isOpen: false}))}
        title={chatConfig.title}
        initialMessage={chatConfig.initialMessage}
        isCeoMode={chatConfig.isCeoMode}
      />
      
      {/* Floating Action Button (if chat is closed, show fab) */}
      {!chatConfig.isOpen && (
        <button
           onClick={openStandardChat}
           className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-900 hover:bg-primary text-white shadow-xl shadow-blue-900/30 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white/10 group"
           title="AI Advisor"
        >
           <Sparkles className="absolute inset-0 m-auto animate-ping opacity-20" size={32} />
           <Bot size={24} className="md:w-7 md:h-7" />
        </button>
      )}
    </div>
  );
};
