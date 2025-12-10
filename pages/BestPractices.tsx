
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
    <div className="animate-fade-in pb-24 relative bg-main">
       {/* Background Ambience */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-white text-xs font-mono text-primary mb-6 shadow-sm">PROVEN TRACK RECORD</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Best Practices</h1>
          <p className="text-xl text-slate-900 max-w-3xl mx-auto">
            Erfolgsgeschichten aus der Praxis: Wie DecisionDriver messbare Ergebnisse liefert und Unternehmen transformiert.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24 relative z-10">
        
        {/* Case 1 */}
        <div className="glass-card p-8 lg:p-12 rounded-3xl bg-white border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-bold tracking-wider uppercase rounded-sm">
                Logistik & Supply Chain
              </div>
              <h2 className="text-3xl font-bold text-slate-900 leading-tight">Unternehmen X: <br/>Beschleunigung von Genehmigungsprozessen</h2>
              
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 rounded-xl border-l-2 border-red-400">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Problem</h4>
                  <p className="text-slate-900">
                    Langwierige interne Abstimmungen und fehlende Datentransparenz verzögerten eine kritische Standorterweiterung um 8 Monate.
                  </p>
                </div>
                <div className="p-6 bg-blue-50/50 rounded-xl border-l-2 border-primary">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Lösung</h4>
                  <p className="text-slate-900">
                    Implementierung datengetriebener Modelle zur Echtzeit-Visualisierung der Supply-Chain-Auswirkungen.
                  </p>
                </div>
              </div>

              <div className="flex gap-12 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1 flex items-center gap-2">
                    -50%
                  </div>
                  <div className="text-xs text-slate-900 font-medium uppercase tracking-widest">Entscheidungszeit</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                    +15%
                  </div>
                  <div className="text-xs text-slate-900 font-medium uppercase tracking-widest">ROI</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent blur-3xl rounded-full"></div>
               <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white shadow-2xl shadow-blue-900/10">
                 <div className="flex justify-between items-center mb-8">
                    <span className="text-sm font-mono text-slate-900">PROJECT_TIMELINE_COMPARISON</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    </div>
                 </div>
                 
                 <div className="space-y-8">
                    <div>
                      <div className="flex justify-between text-xs text-slate-900 mb-2">
                        <span>Traditionell</span>
                        <span>32 Wochen</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-300 w-full rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-900 mb-2 font-bold">
                        <span>DecisionDriver</span>
                        <span className="text-primary">16 Wochen</span>
                      </div>
                      <div className="h-3 bg-blue-50 rounded-full overflow-hidden relative">
                         <div className="absolute top-0 left-0 h-full w-full bg-primary/10 animate-pulse"></div>
                         <div className="h-full bg-primary w-1/2 rounded-full relative z-10 shadow-lg shadow-blue-500/30"></div>
                      </div>
                    </div>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-900">
                    <span>STATUS: COMPLETED</span>
                    <span className="flex items-center gap-1 text-emerald-500"><CheckCircle size={12}/> VERIFIED</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Case 2 */}
        <div className="glass-card p-8 lg:p-12 rounded-3xl bg-white border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold tracking-wider uppercase rounded-sm">
                Automotive & Produktion
              </div>
              <h2 className="text-3xl font-bold text-slate-900 leading-tight">Unternehmen Y: <br/>Investitionssicherheit bei Innovation</h2>
              
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 rounded-xl border-l-2 border-red-400">
                   <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Problem</h4>
                   <p className="text-slate-900">
                    Unsichere Datenlage bei einer geplanten Multi-Millionen-Investition in eine neue Fertigungsstraße.
                  </p>
                </div>
                <div className="p-6 bg-blue-50/50 rounded-xl border-l-2 border-primary">
                   <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Lösung</h4>
                   <p className="text-slate-900">
                    Evidenzbasierte Szenario-Simulation (Monte Carlo) und Stresstests der Business Cases.
                  </p>
                </div>
              </div>

              <div className="flex gap-12 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1 flex items-center gap-2">
                    0
                  </div>
                  <div className="text-xs text-slate-900 font-medium uppercase tracking-widest">Blind Spots</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                    € 2M
                  </div>
                  <div className="text-xs text-slate-900 font-medium uppercase tracking-widest">Einsparung</div>
                </div>
              </div>
            </div>
            
            <div className="lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-100 to-transparent blur-3xl rounded-full"></div>
              <div className="relative w-full h-80 bg-white/80 backdrop-blur-sm border border-white p-6 rounded-2xl shadow-2xl shadow-blue-900/10">
                <div className="flex justify-between items-center mb-6">
                   <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Accumulated Savings</h4>
                   <ArrowUpRight className="text-primary w-4 h-4" />
                </div>
                <ResponsiveContainer width="100%" height="80%">
                  <AreaChart data={dataY}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0284c7" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#0284c7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{fontSize: 10, fill: '#0f172a'}} axisLine={false} tickLine={false} dy={10} />
                    <YAxis tick={{fontSize: 10, fill: '#0f172a'}} axisLine={false} tickLine={false} />
                    <Tooltip 
                       contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                       labelStyle={{ color: '#0f172a' }}
                       itemStyle={{ color: '#0284c7' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#0284c7" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-3xl mx-auto px-6 mt-24 text-center relative z-10">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Sie wollen ähnliche Ergebnisse?</h3>
        {/* Glow variant updated in Button.tsx to use dark blue */}
        <Button onClick={() => onNavigate(Page.Contact)} variant="glow" size="lg" className="mx-auto">
          Weitere Best Practices anfragen
        </Button>
      </div>
    </div>
  );
};
