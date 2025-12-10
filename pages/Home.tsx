
import React from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { Zap, Target, ShieldCheck, TrendingUp, Lock, BarChart3 } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in overflow-hidden bg-main">
      
      {/* Soft Background Ambience - Light Blue */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-100/50 rounded-full blur-[150px] animate-blob"></div>
         <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-sky-100/50 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
      </div>

      {/* HERO LAYOUT */}
      <section className="relative pt-32 pb-20 flex flex-col items-center px-6">
        
        {/* 1. Typography Centered */}
        <div className="max-w-4xl mx-auto text-center relative z-20 mb-12">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-slate-900 text-xs tracking-widest uppercase mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Strategic Intelligence
           </div>
           
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.1] mb-8">
             Präzision <i className="font-sans italic text-primary">trifft</i> <br/>
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Performance.</span>
           </h1>
           
           <p className="text-lg md:text-xl text-slate-900 max-w-2xl mx-auto leading-relaxed font-light">
             Wir transformieren Unsicherheit in algorithmische Klarheit. 
             Datenbasierte Handlungspläne für C-Level-Entscheidungen.
           </p>
        </div>

        {/* 2. "Booking Bar" Style CTA */}
        <div className="relative z-30 w-full max-w-3xl mx-auto mb-20 animate-slide-up">
           <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-2 rounded-full flex flex-col md:flex-row gap-2 shadow-xl shadow-blue-900/5">
              <div className="flex-1 px-6 py-3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
                 <span className="text-[10px] text-primary uppercase tracking-wider font-bold">Fokus</span>
                 <span className="text-slate-900 font-medium">Strategische Analyse</span>
              </div>
              <div className="flex-1 px-6 py-3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
                 <span className="text-[10px] text-primary uppercase tracking-wider font-bold">Ziel</span>
                 <span className="text-slate-900 font-medium">Umsatzsteigerung</span>
              </div>
              <div className="p-1">
                 <Button className="w-full h-full md:w-auto !rounded-full !px-8 shadow-lg shadow-slate-900/20" onClick={() => onNavigate(Page.Contact)}>
                    Anfrage starten
                 </Button>
              </div>
           </div>
        </div>

        {/* 3. REPLACED: Large Company Image (Moved up from bottom) */}
        <div className="w-full max-w-[1400px] mx-auto relative z-20 animate-slide-up animation-delay-500 mt-8">
            <div className="relative h-[500px] md:h-[650px] w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white group bg-slate-100">
               <ImagePlaceholder 
                  id="company-building-hero"
                  label="Firmengebäude / Headquarter"
                  aspectRatio="auto"
                  containerClassName="!rounded-none !border-0 w-full h-full"
                  initialImage="https://github.com/mm71237-droid/DecisionDriver/blob/main/Gemini_Generated_Image_cfl16bcfl16bcfl1.png?raw=true"
                  imageClassName="object-cover object-center w-full h-full transform transition-transform duration-[2s] group-hover:scale-105"
               />
               
               {/* Image Overlay */}
               <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold shadow-lg">
                        <span className="text-2xl">DD</span>
                      </div>
                      <div>
                         <div className="text-white font-bold text-2xl md:text-3xl mb-1">DecisionDriver Tower</div>
                         <div className="text-slate-200 text-lg flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            Salzburg, Österreich
                         </div>
                      </div>
                   </div>
               </div>
            </div>
        </div>

      </section>

      {/* FEATURE CARDS - 3 Equal Boxes */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
         <div className="mb-16 text-center">
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Werte, die zählen.</h2>
             <p className="text-slate-900 text-lg max-w-2xl mx-auto">
                Unsere Methodik basiert nicht auf Vermutungen. Wir liefern das Fundament für mutige Entscheidungen.
             </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Präzision */}
            <div className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all hover:-translate-y-2 duration-500">
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
            <div className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all hover:-translate-y-2 duration-500">
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
            <div className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all hover:-translate-y-2 duration-500">
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
            <Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-50" onClick={() => onNavigate(Page.Services)}>Alle Leistungen im Detail</Button>
         </div>
      </section>

      {/* PROCESS STEPS SECTION (Redesigned since image moved up) */}
      <section className="py-32 bg-white rounded-t-[4rem] shadow-inner">
         <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-20">
               Verlassen Sie sich nicht auf den Zufall.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
               {/* Step 1 */}
               <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-3xl bg-[rgb(15,23,42)] text-white flex items-center justify-center font-bold text-2xl shadow-xl shadow-slate-900/20 mb-8 mx-auto">1</div>
                  <h4 className="text-2xl text-slate-900 font-bold mb-4">Analyse</h4>
                  <p className="text-slate-600 leading-relaxed">
                     Deep-Dive in Ihre Unternehmensdaten. Wir identifizieren verborgene Muster und ungenutzte Potenziale im Marktumfeld.
                  </p>
               </div>

               {/* Step 2 */}
               <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-3xl bg-[rgb(15,23,42)] text-white flex items-center justify-center font-bold text-2xl shadow-xl shadow-slate-900/20 mb-8 mx-auto">2</div>
                  <h4 className="text-2xl text-slate-900 font-bold mb-4">Simulation</h4>
                  <p className="text-slate-600 leading-relaxed">
                     Wir testen Strategien virtuell. Unsere Modelle berechnen Wahrscheinlichkeiten, bevor Sie einen einzigen Euro investieren.
                  </p>
               </div>

               {/* Step 3 */}
               <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-3xl bg-[rgb(15,23,42)] text-white flex items-center justify-center font-bold text-2xl shadow-xl shadow-slate-900/20 mb-8 mx-auto">3</div>
                  <h4 className="text-2xl text-slate-900 font-bold mb-4">Exekution</h4>
                  <p className="text-slate-600 leading-relaxed">
                     Begleitung der Umsetzung. Wir definieren klare KPIs und sorgen für eine reibungslose Implementierung.
                  </p>
               </div>
            </div>

            <div className="mt-20 flex justify-center">
               <Button onClick={() => {
                  // Set a hash so Services page knows to scroll
                  window.location.hash = 'process';
                  onNavigate(Page.Services);
               }} size="lg" variant="secondary" className="border-slate-300">
                  Unser Prozess im Detail
               </Button>
            </div>
         </div>
      </section>
    </div>
  );
};
