
import React from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Zap, Target, TrendingUp, ArrowRight, ShieldCheck, Activity, BrainCircuit, MapPin, Users } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const performanceData = [
  { step: 'Start', traditional: 15, decisionDriver: 15 },
  { step: 'Sprint 1', traditional: 25, decisionDriver: 45 },
  { step: 'Sprint 2', traditional: 35, decisionDriver: 90 },
  { step: 'Sprint 3', traditional: 45, decisionDriver: 180 },
  { step: 'Sprint 4', traditional: 55, decisionDriver: 310 },
  { step: 'Sprint 5', traditional: 65, decisionDriver: 480 },
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
             {/* Dark overlay for readability - stronger on left where text is */}
             <div className="absolute inset-0 bg-main/60"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-main via-main/95 to-main/70"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-main/90 via-transparent to-main"></div>
        </div>

        {/* Abstract Blobs */}
        <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-20"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              NEXT GEN CONSULTING
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400">Präzision für</span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-cyan">Ihre Strategie.</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
              Wir transformieren Unsicherheit in algorithmische Klarheit. DecisionDriver liefert datenbasierte Handlungspläne für C-Level-Entscheidungen – schneller, präziser, profitabler.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => onNavigate(Page.Contact)}>
                Strategie besprechen
              </Button>
              <Button size="lg" variant="secondary" onClick={() => onNavigate(Page.Services)}>
                Leistungen
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <BrainCircuit size={18} className="text-accent" />
                <span>AI-Driven Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity size={18} className="text-cyan" />
                <span>Live Simulation</span>
              </div>
            </div>
          </div>

          {/* Visual Content - New Area Chart Visualization */}
          <div className="relative hidden lg:block perspective-1000">
             <div className="relative z-10 glass-card rounded-3xl p-8 border border-white/10 shadow-[0_0_60px_-15px_rgba(6,182,212,0.15)] animate-fade-in transform transition-transform hover:scale-[1.01] duration-500">
                {/* Header of dashboard */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-white font-bold text-lg">Efficiency Matrix</h3>
                    <p className="text-xs text-slate-400 font-mono mt-1 tracking-wider">PROJECTED OUTCOME VELOCITY</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/5 border border-cyan/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Live Model</span>
                  </div>
                </div>
                
                {/* Chart Content */}
                <div className="h-64 w-full mb-6 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient id="colorDriver" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorTrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" opacity={0.5} />
                      <XAxis dataKey="step" hide />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                        itemStyle={{ fontSize: '12px' }}
                        labelStyle={{ display: 'none' }}
                        cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="traditional" 
                        stroke="#64748b" 
                        strokeDasharray="4 4" 
                        fill="url(#colorTrad)" 
                        strokeWidth={2}
                        name="Traditional"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="decisionDriver" 
                        stroke="#06b6d4" 
                        strokeWidth={3} 
                        fill="url(#colorDriver)"
                        name="DecisionDriver"
                        activeDot={{ r: 6, strokeWidth: 0, fill: '#fff' }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>

                  {/* Floating badge over chart */}
                  <div className="absolute top-[20%] right-[5%] bg-white/5 backdrop-blur-md border border-white/10 pl-3 pr-5 py-2 rounded-lg shadow-xl flex items-center gap-3 animate-blob animation-delay-4000">
                     <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                       <TrendingUp size={16} />
                     </div>
                     <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">Efficiency</div>
                        <div className="text-lg font-bold text-white">+480%</div>
                     </div>
                  </div>
                </div>

                {/* Footer metrics */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
                       <Zap size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Time to Value</div>
                      <div className="text-base font-bold text-white group-hover:text-accent transition-colors">4x Faster</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-10 h-10 bg-cyan/10 rounded-xl flex items-center justify-center border border-cyan/20 group-hover:bg-cyan/20 transition-colors">
                       <ShieldCheck size={20} className="text-cyan" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Risk Reduction</div>
                      <div className="text-base font-bold text-white group-hover:text-cyan transition-colors">Maximized</div>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Decorative Elements behind card */}
             <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-radial from-cyan-500/20 to-transparent blur-[60px] rounded-full pointer-events-none"></div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/30 rounded-full blur-[40px] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Elevator Pitch */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-500">
            Der unfaire Vorteil im Boardroom
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
            „Wir liefern datenbasierte Entscheidungsmodelle in Wochen statt Monaten. Schnellere Time-to-Market, geringeres Risiko bei Multi-Millionen-Investitionen, messbarer Impact.“
          </p>
        </div>
      </section>

      {/* USPs Grid - Bento Grid Style */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              { icon: <Zap size={32} />, title: "Speed", desc: "Entscheidungszeit um bis zu 40% reduziert.", color: "text-yellow-400", border: "hover:border-yellow-400/50" },
              { icon: <Target size={32} />, title: "Precision", desc: "Evidenzbasierte Datenmodelle statt Bauchgefühl.", color: "text-cyan", border: "hover:border-cyan/50" },
              { icon: <TrendingUp size={32} />, title: "Results", desc: "Honorarstruktur basierend auf Performance.", color: "text-green-400", border: "hover:border-green-400/50" },
              { icon: <ShieldCheck size={32} />, title: "C-Level", desc: "Klarheit auf Augenhöhe für Stakeholder.", color: "text-accent", border: "hover:border-accent/50" }
            ].map((item, i) => (
              <div key={i} className={`glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 group border border-white/5 ${item.border}`}>
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${item.color} shadow-lg shadow-black/20 group-hover:bg-white/10 transition-colors`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Stats / CTA Interlude */}
      <section className="py-24 relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Messbare Überlegenheit</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Vergleich der Projektdauer und Risikofaktoren zwischen traditioneller Unternehmensberatung und dem DecisionDriver-Ansatz.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                <div>
                  <h4 className="text-white font-semibold">60% Schneller</h4>
                  <p className="text-sm text-slate-400">Zum Execution-Plan durch agile Sprints</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">2</div>
                <div>
                  <h4 className="text-white font-semibold">Risikominimierung</h4>
                  <p className="text-sm text-slate-400">Durch Monte-Carlo Simulationen</p>
                </div>
              </div>
            </div>
            <Button variant="outline" onClick={() => onNavigate(Page.BestPractices)}>
              Zu den Best Practices <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl rounded-full"></div>
             
             {/* New Dashboard Visualization */}
             <div className="glass-card p-6 sm:p-8 rounded-3xl relative border border-white/10 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <span className="font-bold text-white tracking-widest text-sm uppercase">Impact Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                     <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                     <div className="w-8 h-2 rounded-full bg-primary"></div>
                  </div>
                </div>

                {/* Top Metrics Row */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden group hover:bg-white/10 transition-colors">
                      <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                         <TrendingUp className="w-12 h-12 text-green-400" />
                      </div>
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Total Value Created</div>
                      <div className="text-3xl font-bold text-white">€142M+</div>
                      <div className="text-green-400 text-xs mt-2 flex items-center gap-1">
                         <ArrowRight size={12} className="-rotate-45" /> +12% this quarter
                      </div>
                   </div>
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden group hover:bg-white/10 transition-colors">
                      <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                         <Zap className="w-12 h-12 text-yellow-400" />
                      </div>
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Avg. ROI Factor</div>
                      <div className="text-3xl font-bold text-white">8.4x</div>
                      <div className="text-slate-500 text-xs mt-2">
                         per consulting unit
                      </div>
                   </div>
                </div>

                {/* Main Visualization */}
                <div className="bg-black/40 rounded-2xl p-5 border border-white/5 relative h-48">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-xs font-bold text-slate-300 uppercase">Efficiency Gain Trajectory</span>
                       <span className="text-[10px] bg-primary/20 text-primary px-2 py-1 rounded">REAL-TIME</span>
                    </div>
                    <ResponsiveContainer width="100%" height="80%">
                      <AreaChart data={[
                         { name: 'Jan', val: 30 },
                         { name: 'Feb', val: 45 },
                         { name: 'Mar', val: 55 },
                         { name: 'Apr', val: 80 },
                         { name: 'May', val: 110 },
                         { name: 'Jun', val: 150 },
                      ]}>
                        <defs>
                          <linearGradient id="colorDash" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.5}/>
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                        <Tooltip contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px'}} itemStyle={{color: '#fff'}} labelStyle={{display:'none'}} cursor={{stroke: 'rgba(255,255,255,0.1)'}} />
                        <Area type="monotone" dataKey="val" stroke="#3B82F6" strokeWidth={3} fill="url(#colorDash)" activeDot={{r: 4, fill: 'white'}} />
                      </AreaChart>
                    </ResponsiveContainer>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10 grid lg:grid-cols-2">
            
            {/* Replaced static div with ImagePlaceholder for "Hub" */}
            <div className="relative min-h-[300px] lg:h-full bg-black/40 p-4 flex flex-col justify-end">
               <ImagePlaceholder 
                 id="home-headquarters-img" 
                 label="Foto vom Strategic Hub" 
                 containerClassName="h-full w-full absolute inset-0 !rounded-none !border-0"
                 aspectRatio="auto"
                 initialImage="https://github.com/mm71237-droid/DecisionDriver_Unternehmensberatung/blob/main/Gemini_Generated_Image_cfl16bcfl16bcfl1.png?raw=true"
               />
               {/* Overlay Content */}
               <div className="absolute bottom-6 left-6 pointer-events-none z-20">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-medium text-white mb-2 shadow-lg">
                   <MapPin size={12} className="text-primary" /> Salzburg, Österreich
                 </div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-main/90 via-transparent to-transparent pointer-events-none z-10"></div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center bg-black/20">
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Hub Salzburg</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Unser Center of Excellence im Herzen Europas. Hier verbinden wir akademische Forschung mit praktischer Strategieberatung. Die Architektur unseres Handelns spiegelt sich in unserem Standort wider: Modern, transparent und auf Weitblick ausgerichtet.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                     <BrainCircuit size={22} />
                   </div>
                   <div>
                     <div className="text-white font-bold text-sm mb-0.5">Data Lab & Research</div>
                     <div className="text-xs text-slate-500">In-House Analytics Team</div>
                   </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                   <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                     <Users size={22} />
                   </div>
                   <div>
                     <div className="text-white font-bold text-sm mb-0.5">Executive Briefing Center</div>
                     <div className="text-xs text-slate-500">Workshops & Strategy Days</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large CTA Section */}
      <section className="py-32 relative z-10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-3xl mx-auto px-6 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Keine langen PowerPoints, sondern Ergebnisse. Starten Sie jetzt Ihre Transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" onClick={() => onNavigate(Page.Contact)}>
              C-Level-Strategie anfragen
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate(Page.Services)}>
              Mehr erfahren
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
