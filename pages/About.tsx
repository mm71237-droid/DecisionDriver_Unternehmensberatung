
import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { Zap, Target, TrendingUp, ShieldCheck, Camera, User, Upload } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string | null;
}

const initialTeam: TeamMember[] = [
  {
    id: 'max',
    name: 'Max Mustermann',
    role: 'Geschäftsführer - Unternehmensberater',
    image: 'https://github.com/mm71237-droid/DecisionDriver_Unternehmensberatung/blob/main/Max%20Mustermann.PNG?raw=true'
  },
  {
    id: 'sebastian',
    name: 'Sebastian Sample',
    role: 'Unternehmensberater',
    image: 'https://github.com/mm71237-droid/DecisionDriver_Unternehmensberatung/blob/main/Sebastian%20Sample.PNG?raw=true'
  },
  {
    id: 'marion',
    name: 'Marion Musterfrau',
    role: 'Assistant',
    image: 'https://github.com/mm71237-droid/DecisionDriver_Unternehmensberatung/blob/main/Marion%20Musterfrau.PNG?raw=true'
  },
  {
    id: 'lara',
    name: 'Lara Lerner',
    role: 'Praktikantin',
    image: 'https://github.com/mm71237-droid/DecisionDriver_Unternehmensberatung/blob/main/Lara%20Lerner.PNG?raw=true'
  }
];

const STORAGE_KEY = 'decision_driver_team_data_v5';

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  // Initialize state from localStorage if available, otherwise use initialTeam
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        return JSON.parse(savedData);
      }
    } catch (error) {
      console.error('Failed to load team data from storage:', error);
    }
    return initialTeam;
  });

  const handleImageUpload = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        
        setTeamMembers(prev => {
          const updatedTeam = prev.map(member => 
            member.id === id ? { ...member, image: result } : member
          );
          
          // Save to localStorage immediately
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTeam));
          } catch (error) {
            console.error('Failed to save image to storage (likely too large):', error);
          }
          
          return updatedTeam;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="animate-fade-in pb-24 relative overflow-hidden">
       {/* Background Ambience */}
       <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]"></div>
       </div>

      {/* Hero Banner with Image Background */}
      <div className="relative h-[60vh] min-h-[500px] flex items-end justify-center border-b border-white/5 bg-main overflow-hidden pb-16">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://github.com/mm71237-droid/DecisionDriver_Unternehmensberatung/blob/main/Teammeeting.png?raw=true" 
             alt="Team Meeting DecisionDriver" 
             className="w-full h-full object-cover"
           />
           {/* Minimal overlay to blend colors slightly without darkening */}
           <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"></div>
           
           {/* Gradient mainly at the bottom to merge with content */}
           <div className="absolute inset-0 bg-gradient-to-t from-main via-main/20 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Über uns</h1>
          
          {/* Box wrapper for perfect readability */}
          <div className="max-w-3xl mx-auto inline-block bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
            <p className="text-xl text-white font-medium drop-shadow-md">
              DecisionDriver ist Ihr strategischer Partner auf C-Level-Ebene.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-16 relative z-10">
        <div className="prose prose-lg prose-invert mx-auto text-center md:text-left mb-16">
          <p className="text-2xl font-light text-white leading-relaxed mb-8 border-l-4 border-primary pl-6">
            „Unsere Berater sind souveräne Navigatoren und präzise Analytiker. Wir kombinieren tiefes Datenverständnis mit Pragmatismus im Boardroom.“
          </p>
          <p className="text-slate-400 mb-6">
            In einer Welt, die von Volatilität geprägt ist, reichen Bauchgefühl und Erfahrungswerte allein nicht mehr aus. Wir haben DecisionDriver gegründet, um die Lücke zwischen massiven Datenmengen und exekutiver Entscheidungskraft zu schließen.
          </p>
          <p className="text-slate-400">
            Unser Ziel ist klar: schnelle, fundierte Entscheidungen, messbare Ergebnisse und First-Mover-Vorteile für Ihr Unternehmen. Wir arbeiten nicht für die Schublade, sondern für den P&L-Effekt.
          </p>
        </div>

        {/* USP Reminder Mini Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="glass-card text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
             <Zap className="mx-auto text-yellow-400 mb-4" size={24} />
             <div className="font-bold text-white">Speed</div>
          </div>
          <div className="glass-card text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
             <Target className="mx-auto text-cyan mb-4" size={24} />
             <div className="font-bold text-white">Precision</div>
          </div>
          <div className="glass-card text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
             <TrendingUp className="mx-auto text-green-400 mb-4" size={24} />
             <div className="font-bold text-white">Results</div>
          </div>
          <div className="glass-card text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
             <ShieldCheck className="mx-auto text-accent mb-4" size={24} />
             <div className="font-bold text-white">C-Level</div>
          </div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <section className="relative z-10 mb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-primary mb-4 tracking-wider uppercase">
                Excellence
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Das Team</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">
               Erfahrene Experten für Ihre strategischen Herausforderungen.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="glass-card p-6 rounded-3xl text-center group border border-white/5 hover:border-primary/30 transition-all duration-300">
                {/* Photo Upload Area */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <label 
                    htmlFor={`upload-${member.id}`} 
                    className="block w-full h-full rounded-2xl overflow-hidden cursor-pointer relative bg-white/5 border-2 border-white/10 group-hover:border-primary/50 transition-colors shadow-inner"
                  >
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600 bg-black/20">
                        <User size={40} />
                      </div>
                    )}
                    
                    {/* Overlay for upload indication */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
                       <Camera size={20} className="text-white mb-1" />
                       <span className="text-[10px] uppercase font-bold text-white tracking-widest">Upload</span>
                    </div>
                  </label>
                  <input 
                    type="file" 
                    id={`upload-${member.id}`} 
                    accept="image/*" 
                    className="hidden" 
                    onChange={(e) => handleImageUpload(member.id, e)}
                  />
                  {/* Plus badge if no image */}
                  {!member.image && (
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-xl rotate-3 flex items-center justify-center text-white border-4 border-surface shadow-lg pointer-events-none group-hover:scale-110 transition-transform">
                      <Upload size={14} />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                <p className="text-sm text-primary font-medium uppercase tracking-wide opacity-80">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-r from-surface to-black border border-white/10 p-12 text-center rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Lernen Sie uns kennen</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
               Überzeugen Sie sich in einem persönlichen Gespräch von unserer Expertise.
            </p>
            <Button variant="primary" onClick={() => onNavigate(Page.Contact)}>
              Jetzt Beratung anfragen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
