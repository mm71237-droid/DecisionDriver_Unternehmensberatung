
import React from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { TrendingUp, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface BestPracticesProps {
  onNavigate: (page: Page) => void;
}

const dataY = [
  { month: 'Start', value: 0 },
  { month: 'M1', value: 20 },
  { month: 'M2', value: 45 },
  { month: 'M3', value: 80 },
  { month: 'M4', value: 120 },
  { month: 'M5', value: 150 },
  { month: 'M6', value: 200 },
];

export const BestPractices: React.FC<BestPracticesProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in pb-24 relative">
       {/* Background Ambience */}
       <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-10"></div>
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-cyan mb-6">PROVEN TRACK RECORD</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Best Practices</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Erfolgsgeschichten aus der Praxis: Wie DecisionDriver messbare Ergebnisse liefert und Unternehmen transformiert.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24 relative z-10">
        
        {/* Case 1 */}
        <div className="glass-card p-8 lg:p-12 rounded-3xl border border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-wider uppercase rounded-sm border border-primary/20">
                Logistik & Supply Chain
              </div>
              <h2 className="text-3xl font-bold text-white leading-tight">Unternehmen X: <br/>Beschleunigung von Genehmigungsprozessen</h2>
              
              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-xl border-l-2 border-red-500/50">
                  <h4 className="font-bold text-slate-200 mb-2 text-sm uppercase tracking-wide">Problem</h4>
                  <p className="text-slate-400">
                    Langwierige interne Abstimmungen und fehlende Datentransparenz verzögerten eine kritische Standorterweiterung um 8 Monate.
                  </p>
                </div>
                <div className="p-6 bg-primary/10 rounded-xl border-l-2 border-primary">
                  <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">Lösung</h4>
                  <p className="text-slate-300">
                    Implementierung datengetriebener Modelle zur Echtzeit-Visualisierung der Supply-Chain-Auswirkungen.
                  </p>
                </div>
              </div>

              <div className="flex gap-12 pt-4 border-t border-white/5">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1 flex items-center gap-2">
                    -50%
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-widest">Entscheidungszeit</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-1 flex items-center gap-2">
                    +15%
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-widest">ROI</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full"></div>
               <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                 <div className="flex justify-between items-center mb-8">
                    <span className="text-sm font-mono text-slate-400">PROJECT_TIMELINE_COMPARISON</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    </div>
                 </div>
                 
                 <div className="space-y-8">
                    <div>
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>Traditionell</span>
                        <span>32 Wochen</span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600 w-full rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-white mb-2 font-bold">
                        <span>DecisionDriver</span>
                        <span className="text-primary">16 Wochen</span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden relative">
                         <div className="absolute top-0 left-0 h-full w-full bg-primary/20 animate-pulse"></div>
                         <div className="h-full bg-gradient-to-r from-primary to-accent w-1/2 rounded-full relative z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                      </div>
                    </div>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                    <span>STATUS: COMPLETED</span>
                    <span className="flex items-center gap-1 text-green-400"><CheckCircle size={12}/> VERIFIED</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Case 2 */}
        <div className="glass-card p-8 lg:p-12 rounded-3xl border border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold tracking-wider uppercase rounded-sm border border-green-500/20">
                Automotive & Produktion
              </div>
              <h2 className="text-3xl font-bold text-white leading-tight">Unternehmen Y: <br/>Investitionssicherheit bei Innovation</h2>
              
              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-xl border-l-2 border-red-500/50">
                   <h4 className="font-bold text-slate-200 mb-2 text-sm uppercase tracking-wide">Problem</h4>
                   <p className="text-slate-400">
                    Unsichere Datenlage bei einer geplanten Multi-Millionen-Investition in eine neue Fertigungsstraße.
                  </p>
                </div>
                <div className="p-6 bg-cyan/10 rounded-xl border-l-2 border-cyan">
                   <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">Lösung</h4>
                   <p className="text-slate-300">
                    Evidenzbasierte Szenario-Simulation (Monte Carlo) und Stresstests der Business Cases.
                  </p>
                </div>
              </div>

              <div className="flex gap-12 pt-4 border-t border-white/5">
                <div>
                  <div className="text-4xl font-bold text-cyan mb-1 flex items-center gap-2">
                    0
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-widest">Blind Spots</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1 flex items-center gap-2">
                    € 2M
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-widest">Einsparung</div>
                </div>
              </div>
            </div>
            
            <div className="lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tl from-cyan/20 to-transparent blur-3xl rounded-full"></div>
              <div className="relative w-full h-80 bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Accumulated Savings</h4>
                   <ArrowUpRight className="text-cyan w-4 h-4" />
                </div>
                <ResponsiveContainer width="100%" height="80%">
                  <AreaChart data={dataY}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                    <XAxis dataKey="month" tick={{fontSize: 10, fill: '#64748b'}} axisLine={false} tickLine={false} dy={10} />
                    <YAxis tick={{fontSize: 10, fill: '#64748b'}} axisLine={false} tickLine={false} />
                    <Tooltip 
                       contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                       labelStyle={{ color: '#94a3b8' }}
                       itemStyle={{ color: '#22d3ee' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-3xl mx-auto px-6 mt-24 text-center relative z-10">
        <h3 className="text-2xl font-bold text-white mb-8">Sie wollen ähnliche Ergebnisse?</h3>
        <Button onClick={() => onNavigate(Page.Contact)} variant="glow" size="lg" className="mx-auto">
          Weitere Best Practices anfragen
        </Button>
      </div>
    </div>
  );
};
