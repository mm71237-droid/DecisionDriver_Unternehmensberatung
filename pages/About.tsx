
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Play, Music, Mic2, FileAudio, ArrowRight, BookOpen, X, FileText, Download, Award, Flag, Film } from 'lucide-react';

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
  const [activeBlogPost, setActiveBlogPost] = useState<string | null>(null);
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="animate-fade-in pb-24 bg-main relative">
      
      {/* CV MODAL - Swiss International Style */}
      {showCV && (
        <div 
          className="fixed inset-0 z-[100] overflow-y-auto bg-slate-900/80 backdrop-blur-md"
          onClick={() => setShowCV(false)}
        >
           {/* Wrapper ensures proper scrolling without cutting off the top */}
           <div className="min-h-full w-full flex items-start justify-center p-4 md:p-6">
               <div 
                  className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-2xl relative flex flex-col animate-slide-up mt-12 mb-12 rounded-sm"
                  onClick={(e) => e.stopPropagation()}
               >
                  {/* Close Button - Sticky or absolute within the paper */}
                  <button 
                    onClick={() => setShowCV(false)}
                    className="absolute top-4 right-4 z-10 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2 rounded-full transition-colors print:hidden"
                  >
                    <X size={20} />
                  </button>

                  {/* CV CONTENT START */}
                  <div className="p-8 md:p-16 h-full flex flex-col text-[#2c3e50] font-sans selection:bg-[#0074D9] selection:text-white">
                     
                     {/* HEADER */}
                     <header className="border-b-4 border-[#001f3f] pb-8 mb-12">
                        <h1 className="text-5xl md:text-6xl font-black text-[#001f3f] tracking-tight mb-4 uppercase leading-none">
                          Max <br/>Mustermann
                        </h1>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                           <div>
                              <h2 className="text-xl font-bold text-[#001f3f] uppercase tracking-wider">CEO DecisionDriver Consulting</h2>
                              <p className="text-[#0074D9] font-medium mt-1">Certified Projects Director (IPMA Level A)</p>
                           </div>
                           <div className="text-sm font-medium text-slate-500 text-right space-y-1">
                              <p>📍 Salzburg, Österreich</p>
                              <p>✉️ m.mustermann@decisiondriver.com</p>
                              <p>🔗 linkedin.com/in/maxmustermann</p>
                           </div>
                        </div>
                     </header>

                     {/* EXECUTIVE SUMMARY */}
                     <section className="mb-12">
                        <div className="flex gap-4 mb-4 items-center">
                           <div className="w-8 h-1 bg-[#0074D9]"></div>
                           <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#001f3f]">Profil</h3>
                        </div>
                        <p className="text-lg md:text-xl font-light leading-relaxed text-slate-700">
                           <span className="font-bold text-[#001f3f]">„Präzision unter Druck. Strategie mit Struktur.“</span> Erfahrener Geschäftsführer (52) mit einer seltenen Doppelqualifikation. Vereint über 25 Jahre Managementerfahrung in komplexen Transformationsprojekten mit der mentalen Härte und Entscheidungskompetenz einer 20-jährigen Laufbahn als FIFA-Schiedsrichter-Assistent. Als einer von wenigen Inhabern der IPMA Level A Zertifizierung in Österreich biete ich exekutive Führungskompetenz, die methodische Exzellenz mit praktischer Krisenfestigkeit verbindet.
                        </p>
                     </section>

                     {/* MAIN GRID */}
                     <div className="grid md:grid-cols-[2fr_1fr] gap-12">
                        
                        {/* LEFT COLUMN: Career */}
                        <div className="space-y-12">
                           {/* CAREER */}
                           <section>
                              <div className="flex gap-4 mb-8 items-center">
                                 <div className="w-8 h-1 bg-[#0074D9]"></div>
                                 <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#001f3f]">Beruflicher Werdegang</h3>
                              </div>

                              <div className="space-y-10 border-l border-slate-200 pl-8 ml-2">
                                 
                                 {/* Job 1 */}
                                 <div className="relative">
                                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#001f3f] border-4 border-white"></div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                       <h4 className="text-xl font-bold text-[#001f3f]">CEO & Gründer</h4>
                                       <span className="font-mono text-sm text-[#0074D9] font-bold">01/2020 – heute</span>
                                    </div>
                                    <p className="text-slate-500 font-medium mb-4">DecisionDriver Consulting, Salzburg</p>
                                    <p className="mb-4 text-sm">Aufbau einer spezialisierten Boutique-Beratung für C-Level-Entscheidungsprozesse.</p>
                                    <ul className="space-y-2 text-sm">
                                       <li className="flex gap-2"><span className="text-[#0074D9] font-bold">›</span> <span>Entwicklung des „DecisionDriver-Frameworks“: Verkürzung von Analysezeiten in Vorständen um ca. 40%.</span></li>
                                       <li className="flex gap-2"><span className="text-[#0074D9] font-bold">›</span> <span>Mandate: Begleitung von Top-Tier Unternehmen bei M&A-Integrationen und strategischen Neuausrichtungen.</span></li>
                                       <li className="flex gap-2"><span className="text-[#0074D9] font-bold">›</span> <span>Speaker: Keynotes zu „Führung in der Druckzone“ und „High-Performance Teams“.</span></li>
                                    </ul>
                                 </div>

                                 {/* Job 2 */}
                                 <div className="relative">
                                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                       <h4 className="text-xl font-bold text-[#001f3f]">Head of Global Projects & Transformation</h4>
                                       <span className="font-mono text-sm text-slate-500">06/2012 – 12/2019</span>
                                    </div>
                                    <p className="text-slate-500 font-medium mb-4">[Großer Industriekonzern], Salzburg/International</p>
                                    <p className="mb-4 text-sm">Verantwortung für globales Projektportfolio (> 500 Mio. €).</p>
                                    <ul className="space-y-2 text-sm">
                                       <li className="flex gap-2"><span className="text-[#0074D9] font-bold">›</span> <span>Leitung des konzernweiten Digitalisierungs-Programms über 12 Ländergesellschaften.</span></li>
                                       <li className="flex gap-2"><span className="text-[#0074D9] font-bold">›</span> <span>Steigerung der Projekterfolgsquote um 25% durch IPMA-Standards.</span></li>
                                       <li className="flex gap-2"><span className="text-[#0074D9] font-bold">›</span> <span>Erfolgreicher Turnaround von zwei kritischen Großprojekten.</span></li>
                                    </ul>
                                 </div>

                                 {/* Job 3 */}
                                 <div className="relative">
                                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                       <h4 className="text-xl font-bold text-[#001f3f]">Senior Program Manager</h4>
                                       <span className="font-mono text-sm text-slate-500">03/2005 – 05/2012</span>
                                    </div>
                                    <p className="text-slate-500 font-medium mb-4">[Renommiertes Beratungsunternehmen], Wien</p>
                                    <ul className="space-y-2 text-sm">
                                       <li className="flex gap-2"><span className="text-[#0074D9] font-bold">›</span> <span>Führung von Großprojekten im Bereich Infrastruktur & Org-Entwicklung.</span></li>
                                       <li className="flex gap-2"><span className="text-[#0074D9] font-bold">›</span> <span>Stakeholder-Management auf Vorstandsebene.</span></li>
                                    </ul>
                                 </div>

                              </div>
                           </section>
                        </div>

                        {/* RIGHT COLUMN: Sidebar info */}
                        <div className="space-y-12">
                           
                           {/* DUAL CAREER */}
                           <section className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0074D9]">
                              <div className="flex items-center gap-2 mb-4">
                                 <Flag size={20} className="text-[#001f3f]" />
                                 <h3 className="text-sm font-bold uppercase tracking-wider text-[#001f3f]">Dual Career</h3>
                              </div>
                              <h4 className="font-bold text-[#001f3f] mb-1">FIFA Schiedsrichter-Assistent & Bundesliga-Referee</h4>
                              <div className="font-mono text-xs text-slate-500 mb-4">1993 – 2014 | ÖFB / FIFA / UEFA</div>
                              <p className="text-sm leading-relaxed mb-4">
                                 Über 20 Jahre Leistungssport auf Weltklasse-Niveau (Champions League, Länderspiele).
                              </p>
                              <div className="text-sm">
                                 <span className="font-bold text-[#001f3f]">Transfer-Kompetenz:</span>
                                 <p className="mt-1">Treffen von faktischen Entscheidungen in Millisekunden unter extremem medialen Druck. Absolute Neutralität und Resilienz bei Kritik.</p>
                              </div>
                           </section>

                           {/* CERTIFICATIONS */}
                           <section>
                               <div className="flex gap-3 mb-6 items-center border-b border-slate-200 pb-2">
                                 <Award size={20} className="text-[#001f3f]" />
                                 <h3 className="text-sm font-bold uppercase tracking-wider text-[#001f3f]">Zertifizierungen</h3>
                              </div>
                              <div className="space-y-6">
                                 <div>
                                    <h4 className="font-bold text-[#001f3f]">IPMA® Level A</h4>
                                    <p className="text-[#0074D9] text-sm font-bold">Certified Projects Director</p>
                                    <p className="text-xs text-slate-500 mt-1">Höchste internationale Stufe. (&lt; 1% der Projektmanager in Österreich).</p>
                                 </div>
                                 <div>
                                    <h4 className="font-bold text-[#001f3f]">Mag. rer. soc. oec.</h4>
                                    <p className="text-sm">Sozial- & Wirtschaftswissenschaften</p>
                                    <p className="text-xs text-slate-500 mt-1">Universität Salzburg / WU Wien (1998)</p>
                                 </div>
                              </div>
                           </section>

                           {/* OTHER */}
                           <section>
                               <div className="flex gap-3 mb-6 items-center border-b border-slate-200 pb-2">
                                 <BookOpen size={20} className="text-[#001f3f]" />
                                 <h3 className="text-sm font-bold uppercase tracking-wider text-[#001f3f]">Info</h3>
                              </div>
                              <div className="space-y-4 text-sm">
                                 <div>
                                    <h5 className="font-bold text-slate-900 mb-1">Sprachen</h5>
                                    <p>Deutsch (Muttersprache)</p>
                                    <p>Englisch (C2)</p>
                                    <p>Französisch (B2)</p>
                                 </div>
                                 <div>
                                    <h5 className="font-bold text-slate-900 mb-1">Interessen</h5>
                                    <p>Strategie-Schach</p>
                                    <p>Bergsteigen</p>
                                    <p>Nachwuchsförderung im Sport</p>
                                 </div>
                              </div>
                           </section>

                        </div>
                     </div>

                  </div>
                  {/* CV CONTENT END */}
               </div>
           </div>
        </div>
      )}

      {/* BLOG POST MODAL */}
      {activeBlogPost === 'strategy' && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in"
            onClick={() => setActiveBlogPost(null)}
        >
            <div 
                className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-y-auto relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <div className="sticky top-0 right-0 z-10 flex justify-end p-6 bg-gradient-to-b from-white via-white to-transparent pointer-events-none">
                     <button 
                        onClick={() => setActiveBlogPost(null)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 p-2 rounded-full transition-colors pointer-events-auto shadow-sm"
                     >
                        <X size={24} />
                     </button>
                </div>

                <div className="px-8 md:px-16 pb-16 -mt-12">
                     <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded mb-6">
                        Strategie & Leadership
                     </span>
                     <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                        Stillstand ist der Tod: 3 radikale Prinzipien, mit denen Sie Ihr Unternehmen auf Erfolgskurs steuern
                     </h2>
                     
                     <div className="prose prose-lg text-slate-600 space-y-8 leading-relaxed">
                        <p className="font-medium text-slate-900 text-xl">
                            Stecken Sie auch in komplexen Entscheidungsprozessen fest? In einer Welt, die sich immer schneller dreht, ist die Gefahr der Analyse-Paralyse größer denn je. Die Furcht, den falschen Schritt zu machen, führt oft dazu, dass man gar keinen macht – ein Zustand, der für jedes Unternehmen gefährlich ist.
                        </p>
                        <p>
                             Doch um nachhaltig erfolgreich zu sein, braucht es mehr als nur die Aufrechterhaltung des Status quo. Es erfordert einen grundlegenden Wandel in der Denkweise: weg vom passiven Verwalten, hin zum aktiven Steuern.
                        </p>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Steuern statt nur Verwalten: Der aktive Weg in die Zukunft</h3>
                            <p>
                                Der fundamentale Unterschied zwischen „Verwalten“ und „Steuern“ ist keine Frage der Semantik, sondern eine strategische Weichenstellung. Verwalten ist der Weg in die unternehmerische Bedeutungslosigkeit; ein Festhalten am Gestern, das bestenfalls den Status quo sichert. Steuern hingegen ist der einzige Weg, die Zukunft aktiv zu gestalten und den Wettbewerb hinter sich zu lassen. 
                            </p>
                            <p className="mt-4">
                                Dieser mentale Wandel ist für moderne Führungskräfte nicht nur wichtig – er ist überlebensnotwendig, um nicht nur zu reagieren, sondern den Markt zu formen und nachhaltigen Erfolg zu sichern.
                            </p>
                            <p className="mt-4 font-bold text-primary">
                                Fangen Sie an zu steuern. Werden Sie zum Decision Driver. Treffen Sie die Entscheidungen, die Ihre Zukunft sichern.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Stillstand ist der Tod: Warum Kompromisse keine Lösung sind</h3>
                            <p>
                                Die größte Bedrohung für das Wachstum eines Unternehmens ist nicht die falsche Entscheidung, sondern gar keine. Stillstand, getarnt als Kompromiss, ist der wahre Tod des Fortschritts. Warum? Weil eine Kultur des ständigen Kompromisses die Vision verwässert, die Marktpositionierung unklar macht und zu interner Reibung führt.
                            </p>
                            <p className="mt-4">
                                Sie opfert den möglichen Durchbruch für die bequeme Mitte und verliert so jeden Wettbewerbsvorteil. Im Gegensatz dazu ist eine Kultur der „klaren Kante“ ein Wachstumsmotor. Ein eindeutiger Standpunkt vereinfacht die Entscheidungsfindung radikal, zieht Talente und Kunden an, die Ihre Werte teilen, und formt eine kraftvolle, fokussierte Markenidentität. Diese Entschlossenheit ist der Treibstoff, der Sie vom Mitläufer zum Marktführer macht.
                            </p>
                            <div className="mt-6 border-l-4 border-primary pl-6 py-2 italic text-slate-800">
                                Stillstand ist der Tod ihres Unternehmens. Wir liefern den Treibstoff für echtes Wachstum. Klare Kante statt Kompromisse.
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Der Zweck als Kompass: Die Basis für schnelle und nachhaltige Ergebnisse</h3>
                            <p>
                                Um wirklich effektiv steuern zu können, benötigt jede Entscheidung eine klare Ausrichtung. Der Kernfokus liegt daher auf der Klärung von „Sinn und Zweck“. Wenn das übergeordnete Ziel klar ist, dient es als Kompass für alle strategischen Weichenstellungen.
                            </p>
                            <p className="mt-4">
                                Dieser Ansatz stellt sicher, dass Entscheidungen nicht nur schnell getroffen werden, sondern auch fest mit der langfristigen Vision des Unternehmens verankert sind. Dadurch werden nachhaltige Ergebnisse erzielt und selbst komplexe Herausforderungen lösbar.
                            </p>
                            <p className="mt-4 font-bold text-primary">
                                Komplexität wird ganz schnell klein. So muss moderne Führung sein.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Fazit: Verwalten Sie noch oder steuern Sie schon?</h3>
                            <p>
                                Der Schlüssel zu nachhaltigem Erfolg liegt in der aktiven, zweckorientierten und entschlossenen Entscheidungsfindung. Es geht darum, das Steuer selbst in die Hand zu nehmen, statt sich von den Umständen verwalten zu lassen. Nur wer bereit ist, klare Kante zu zeigen und seinen Kurs konsequent auf ein definiertes Ziel auszurichten, wird in der heutigen Geschäftswelt langfristig gewinnen.
                            </p>
                            <p className="mt-6 font-medium text-lg text-slate-900">
                                Stellen Sie sich daher eine entscheidende Frage: Welche eine Entscheidung in Ihrem Unternehmen verwalten Sie nur, anstatt sie wirklich zu steuern?
                            </p>
                        </div>
                     </div>

                     <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                        <span className="text-2xl font-bold font-serif italic text-primary">"Besser entscheiden. Nachhaltig gewinnen."</span>
                     </div>
                </div>
            </div>
        </div>
      )}

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
              <div className="text-center w-full">
                <p className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{member.name}</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide mt-1 font-medium">{member.role}</p>
                
                {/* CV BUTTON FOR MAX */}
                {member.id === 'max' && (
                  <Button
                     variant="outline"
                     size="sm"
                     className="mt-4 mx-auto border-slate-300 hover:border-primary text-slate-700 hover:text-primary hover:bg-blue-50/50"
                     onClick={(e) => {
                       e.stopPropagation();
                       setShowCV(true);
                     }}
                  >
                     <FileText size={16} className="mr-2" />
                     Lebenslauf
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* BLOG / INSIGHTS SECTION */}
        <div id="blog" className="mb-32">
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-white text-xs font-mono text-primary mb-6 shadow-sm">NEWS & INSIGHTS</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Aktuelles aus der Beratung</h2>
                <p className="text-slate-900 max-w-2xl mx-auto">
                    Deep Dives in unsere Philosophie und aktuelle Projekthighlights.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Blog Post 1: Strategy Principles */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-blue-900/5 flex flex-col h-full">
                    <div className="mb-8 rounded-3xl overflow-hidden h-64 relative">
                        <ImagePlaceholder 
                           id="blog-img-strategy" 
                           label="Blog Header Image" 
                           aspectRatio="video"
                           containerClassName="!rounded-none !border-0 w-full h-full"
                           initialImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">STRATEGIE</div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                        Stillstand ist der Tod: 3 radikale Prinzipien, mit denen Sie Ihr Unternehmen auf Erfolgskurs steuern
                    </h3>
                    
                    <div className="space-y-6 text-slate-600 leading-relaxed flex-grow">
                        <p className="line-clamp-4">
                            Stecken Sie auch in komplexen Entscheidungsprozessen fest? In einer Welt, die sich immer schneller dreht, ist die Gefahr der Analyse-Paralyse größer denn je. Die Furcht, den falschen Schritt zu machen, führt oft dazu, dass man gar keinen macht – ein Zustand, der für jedes Unternehmen gefährlich ist.
                        </p>
                        
                        {/* READ MORE BUTTON */}
                        <div className="pt-4 mt-auto">
                            <button 
                                onClick={() => setActiveBlogPost('strategy')}
                                className="group inline-flex items-center gap-2 text-primary font-bold hover:text-sky-600 transition-colors"
                            >
                                <BookOpen size={18} />
                                <span>Lesen Sie den gesamten Post</span>
                                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Blog Post 2: Sony Music Case */}
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-xl shadow-blue-900/20 text-white flex flex-col relative overflow-hidden h-full">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="mb-8 rounded-3xl overflow-hidden h-64 relative z-10 border border-white/10">
                        <ImagePlaceholder 
                           id="blog-img-sony" 
                           label="Sony Music Studio" 
                           aspectRatio="video"
                           containerClassName="!rounded-none !border-0 w-full h-full"
                           initialImage="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
                        />
                         <div className="absolute top-4 left-4 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
                            <Music size={12} />
                            CASE STUDY
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                         <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-lg">
                                <span className="text-xs font-bold tracking-wider uppercase">Sony Music Austria</span>
                            </div>
                         </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight relative z-10">
                        Strategie trifft Beat: Unsere Zusammenarbeit mit Sony Music Austria
                    </h3>
                    
                    <div className="space-y-6 text-slate-300 leading-relaxed flex-grow relative z-10">
                        <p>
                            Strategieberatung ist oft trocken – aber nicht, wenn man mit <strong>Sony Music Austria</strong> arbeitet. Wir durften das Team rund um Geschäftsführer <strong>Dietmar Lienbacher</strong> in einem intensiven Strategieprozess begleiten.
                        </p>
                        <p>
                            Ein herzliches Dankeschön an Dietmar und das gesamte Team für das Vertrauen, die Offenheit und die unglaublich gute Zusammenarbeit auf Augenhöhe. Wir haben Prozesse optimiert und Strukturen geschärft, aber der Spaß kam dabei nie zu kurz.
                        </p>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                             <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                                    <Mic2 size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Vom Boardroom ins Tonstudio</h4>
                                    <p className="text-sm text-slate-400">
                                        Als besonderes Highlight dieser Kooperation entstand die Möglichkeit, unsere eigene "DecisionDriver Anthem" aufzunehmen. Das Ergebnis ist ein echter Hit geworden!
                                    </p>
                                </div>
                             </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Listen to the Tracks</p>
                            
                            {/* Player 1 */}
                            <div className="bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-indigo-500 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <FileAudio size={16} />
                                    </div>
                                    <div className="text-sm font-medium text-white truncate">DecisionDriver Anthem</div>
                                </div>
                                <audio controls className="w-full h-8 custom-audio-player">
                                    <source src="https://github.com/mm71237-droid/DecisionDriver/raw/main/DecisionDriver.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>

                            {/* Player 2 */}
                            <div className="bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-indigo-500 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <FileAudio size={16} />
                                    </div>
                                    <div className="text-sm font-medium text-white truncate">Kein Zögern mehr</div>
                                </div>
                                <audio controls className="w-full h-8 custom-audio-player">
                                    <source src="https://github.com/mm71237-droid/DecisionDriver/raw/main/Kein%20Z%C3%B6gern%20mehr%2C%20die%20Zeit%20rennt%20weg%20Wir.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>

                             {/* Player 3 */}
                            <div className="bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-indigo-500 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                        <FileAudio size={16} />
                                    </div>
                                    <div className="text-sm font-medium text-white truncate">Datenströme Analysiert</div>
                                </div>
                                <audio controls className="w-full h-8 custom-audio-player">
                                    <source src="https://github.com/mm71237-droid/DecisionDriver/raw/main/Datenstr%C3%B6me.%20Analysiert.%20Prozesse.%20Optim%20(1).mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NEW: Blog Post 3: Brand Video (Full Width) */}
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-xl shadow-blue-900/20 text-white flex flex-col relative overflow-hidden lg:col-span-2">
                    {/* Background effects */}
                    <div className="absolute -left-20 top-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Video Container */}
                        <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 bg-black">
                             <video
                                className="w-full h-full object-cover"
                                controls
                                poster="https://github.com/mm71237-droid/DecisionDriver/blob/main/Gemini_Generated_Image_cfl16bcfl16bcfl1.png?raw=true"
                             >
                                <source src="https://github.com/mm71237-droid/DecisionDriver/raw/main/CapCutVersuch%20Werbevideo.mp4" type="video/mp4" />
                                Ihr Browser unterstützt dieses Video nicht.
                             </video>
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10">
                             <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold tracking-wider uppercase rounded-full mb-6 w-fit">
                                <Film size={12} fill="currentColor" />
                                Brand Movie
                             </div>
                             <h3 className="text-3xl font-bold text-white mb-6">
                                Vision in Motion: Der DecisionDriver Film
                             </h3>
                             <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                Ein kurzer Einblick in unsere DNA. Wie wir arbeiten, wo wir arbeiten und warum wir jeden Morgen aufstehen, um C-Level Entscheidungen besser zu machen. Keine langen Meetings, sondern Ergebnisse.
                             </p>
                             <div className="flex gap-4">
                                 <div className="pl-4 border-l-2 border-blue-500">
                                    <p className="italic text-slate-400">"Visualizing Strategy."</p>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

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
