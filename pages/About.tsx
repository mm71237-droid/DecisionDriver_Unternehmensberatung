
import React from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Play } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const teamMembers = [
  {
    id: 'max',
    name: 'Max Mustermann',
    role: 'Geschäftsführer',
    subRole: 'Unternehmensberater',
    imageUrl: 'https://github.com/mm71237-droid/DecisionDriver/blob/main/Max%20Mustermann.PNG?raw=true'
  },
  {
    id: 'lara',
    name: 'Lara Lerner',
    role: 'Assistentin',
    subRole: '',
    imageUrl: 'https://github.com/mm71237-droid/DecisionDriver/blob/main/Lara%20Lerner.PNG?raw=true'
  },
  {
    id: 'sebastian',
    name: 'Sebastian Sample',
    role: 'Unternehmensberater',
    subRole: '',
    imageUrl: 'https://github.com/mm71237-droid/DecisionDriver/blob/main/Sebastian%20Sample.PNG?raw=true'
  },
  {
    id: 'marion',
    name: 'Marion Musterfrau',
    role: 'Unternehmensberaterin',
    subRole: '',
    imageUrl: 'https://github.com/mm71237-droid/DecisionDriver/blob/main/Marion%20Musterfrau.PNG?raw=true'
  }
];

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in pb-24 bg-main">
      <div className="pt-40 pb-16 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8">Das Team</h1>
          <p className="text-xl text-slate-900 max-w-2xl mx-auto font-light mb-12">
            Menschen, die Daten verstehen und Business sprechen.
          </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Individual Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-24">
          {teamMembers.map((member) => (
            <div key={member.id} className="group cursor-pointer flex flex-col items-center">
              <div className="relative w-full rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-lg shadow-blue-900/5 mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                <ImagePlaceholder 
                  id={`team-member-${member.id}`} 
                  label="Foto" 
                  aspectRatio="portrait"
                  containerClassName="!rounded-none !border-0 w-full h-full bg-white"
                  initialImage={member.imageUrl}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
                   <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                   <div className="flex flex-col gap-1">
                     <span className="text-sky-300 font-medium text-sm tracking-widest uppercase">{member.role}</span>
                     {member.subRole && (
                       <span className="text-slate-300 text-xs h-auto opacity-100 group-hover:text-white transition-all duration-300">{member.subRole}</span>
                     )}
                   </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{member.name}</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide mt-1 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Removed Full Team Photo Section */}

        {/* Culture & Careers Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Team Meeting / Culture Photo */}
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl shadow-blue-900/5 border border-slate-100">
               <ImagePlaceholder 
                  id="team-culture-meeting"
                  label="Foto: Teammeeting / Kultur"
                  aspectRatio="portrait"
                  containerClassName="!rounded-none !border-0 w-full h-full"
                  initialImage="https://github.com/mm71237-droid/DecisionDriver/blob/main/Gemini_Generated_Image_22f48i22f48i22f4.png?raw=true"
               />
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h4 className="text-xl font-bold">Kultur der Offenheit</h4>
                  <p className="text-sm opacity-90">Jede Meinung zählt. Die beste Idee gewinnt, nicht der höchste Titel.</p>
               </div>
            </div>

            <div className="bg-white rounded-[3rem] p-12 md:p-16 text-center border border-slate-100 shadow-xl shadow-blue-900/5 h-full flex flex-col justify-center">
               <h2 className="text-4xl font-bold text-slate-900 mb-6">Wir suchen Exzellenz.</h2>
               <p className="text-slate-900 mb-10 leading-relaxed text-lg">
                 Sie haben einen Hintergrund in Wirtschaftswissenschaften, Mathematik oder Rechtswissenschaften und wollen echte Probleme lösen?
               </p>
               <div className="flex justify-center">
                  <Button variant="primary" size="lg" onClick={() => onNavigate(Page.Contact)}>Karriere starten</Button>
               </div>
            </div>
        </div>

      </div>
    </div>
  );
};
