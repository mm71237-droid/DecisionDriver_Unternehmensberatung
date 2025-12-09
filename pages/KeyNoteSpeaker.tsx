
import React from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Mic2, Users, Lightbulb, Calendar, ArrowRight, Play } from 'lucide-react';

interface KeyNoteSpeakerProps {
  onNavigate: (page: Page) => void;
}

export const KeyNoteSpeaker: React.FC<KeyNoteSpeakerProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in pb-24 relative overflow-hidden">
        {/* Background effects similar to other pages */}
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold mb-6 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                        LIVE ON STAGE
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        Impulse, die <br/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Mindsets verändern.</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                        Erleben Sie unsere Experten live. Wir bringen Klarheit in komplexe Themen – von KI-Strategien bis zur Führungskultur der Zukunft. Inspirierend, provokant und immer praxisnah.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => onNavigate(Page.Contact)}>
                            Speaker anfragen
                        </Button>
                        <Button size="lg" variant="secondary" onClick={() => document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' })}>
                           Themen entdecken
                        </Button>
                    </div>
                </div>
                <div className="relative">
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                        <ImagePlaceholder
                            id="keynote-hero"
                            label="Keynote Speaker auf Bühne"
                            aspectRatio="portrait"
                            containerClassName="!rounded-none !border-0 w-full h-full"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                         <div className="absolute bottom-8 left-8 right-8 text-white p-4 glass-card rounded-xl">
                             <div className="flex items-center gap-3 mb-2">
                                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                 <span className="text-xs font-bold tracking-widest uppercase">Next Event</span>
                             </div>
                             <div className="font-bold text-lg">Digital Future Summit 2024</div>
                             <div className="text-slate-400 text-sm">München, Deutschland</div>
                         </div>
                     </div>
                </div>
            </div>
        </section>

        {/* Topics Section */}
        <section id="topics" className="py-24 relative z-10 bg-white/[0.02] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vortragsthemen</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Maßgeschneiderte Keynotes für Ihr Event. Unsere Themen treffen den Nerv der Zeit und liefern sofort anwendbare Erkenntnisse.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Lightbulb size={32} />,
                            title: "AI Leadership",
                            desc: "Wie Führungskräfte im Zeitalter künstlicher Intelligenz entscheiden müssen. Mensch vs. Algorithmus?",
                            color: "text-yellow-400",
                            bg: "bg-yellow-400/10"
                        },
                        {
                            icon: <Users size={32} />,
                            title: "High Performance Culture",
                            desc: "Was wir von Elite-Sportteams für das Boardroom lernen können. Psychologie des Gewinnens.",
                            color: "text-primary",
                            bg: "bg-primary/10"
                        },
                        {
                            icon: <Mic2 size={32} />,
                            title: "Decision Dynamics",
                            desc: "Die Anatomie schwerer Entscheidungen. Wie man Paralyse vermeidet und Geschwindigkeit aufbaut.",
                            color: "text-accent",
                            bg: "bg-accent/10"
                        }
                    ].map((topic, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-3xl group hover:bg-white/5 transition-colors border border-white/5">
                            <div className={`w-14 h-14 rounded-2xl ${topic.bg} ${topic.color} flex items-center justify-center mb-6`}>
                                {topic.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{topic.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                {topic.desc}
                            </p>
                            <div className="flex items-center text-sm font-medium text-white group-hover:text-primary transition-colors cursor-pointer">
                                Exposé anfordern <ArrowRight size={16} className="ml-2" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Speaker Gallery / Impressionen */}
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                 <div className="flex justify-between items-end mb-12">
                     <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Live Impressions</h2>
                        <p className="text-slate-400">Einblicke in vergangene Veranstaltungen.</p>
                     </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px]">
                     <div className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden border border-white/10 group">
                         <ImagePlaceholder
                             id="gallery-main"
                             label="Großes Bühnenbild"
                             aspectRatio="auto"
                             containerClassName="w-full h-full !rounded-none !border-0"
                         />
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                                 <Play size={24} fill="white" />
                             </div>
                         </div>
                     </div>
                     <div className="relative rounded-3xl overflow-hidden border border-white/10">
                          <ImagePlaceholder
                             id="gallery-side-1"
                             label="Publikum / Workshop"
                             aspectRatio="auto"
                             containerClassName="w-full h-full !rounded-none !border-0"
                         />
                     </div>
                     <div className="relative rounded-3xl overflow-hidden border border-white/10">
                          <ImagePlaceholder
                             id="gallery-side-2"
                             label="Close-up Speaker"
                             aspectRatio="auto"
                             containerClassName="w-full h-full !rounded-none !border-0"
                         />
                     </div>
                 </div>
            </div>
        </section>

        {/* Booking CTA */}
        <section className="pb-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto glass-card rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Buchen Sie Ihren Keynote Speaker</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                    Verfügbarkeit prüfen und individuelles Angebot für Ihre Konferenz, Ihr Firmenevent oder Ihr Executive Dinner erhalten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={() => onNavigate(Page.Contact)} className="group">
                        <Calendar className="mr-2 group-hover:text-white" size={20} />
                        Termin anfragen
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => window.open('https://youtube.com', '_blank')}>
                         <Play className="mr-2" size={20} />
                         Showreel ansehen
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
};
