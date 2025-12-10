
import React, { useState, useRef } from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Mic2, Users, Lightbulb, Calendar, ArrowRight, Play } from 'lucide-react';

interface KeyNoteSpeakerProps {
  onNavigate: (page: Page) => void;
}

export const KeyNoteSpeaker: React.FC<KeyNoteSpeakerProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="animate-fade-in pb-24 relative overflow-hidden bg-main">
        {/* Background effects */}
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[120px]"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-primary text-xs font-semibold mb-6 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        LIVE ON STAGE
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                        Impulse, die <br/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Mindsets verändern.</span>
                    </h1>
                    <p className="text-xl text-slate-900 mb-8 leading-relaxed">
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
                     {/* Video Section */}
                     <div className="aspect-video rounded-3xl overflow-hidden border border-white shadow-2xl shadow-blue-900/10 relative group bg-black">
                         <video 
                             ref={videoRef}
                             className="w-full h-full object-cover" 
                             controls={isPlaying}
                             playsInline
                             onPlay={() => setIsPlaying(true)}
                             onPause={() => setIsPlaying(false)}
                         >
                             <source src="https://raw.githubusercontent.com/mm71237-droid/DecisionDriver/main/KeyNote%20Video.mp4" type="video/mp4" />
                             Ihr Browser unterstützt dieses Video nicht.
                         </video>
                         
                         {/* Play Button Overlay (Visible when paused) */}
                         {!isPlaying && (
                             <div 
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 cursor-pointer transition-colors hover:bg-black/30"
                                onClick={handlePlayClick}
                             >
                                 <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                                     <Play className="text-white fill-white ml-2" size={40} />
                                 </div>

                                 {/* Info Overlay (Hidden when playing) */}
                                 <div className="absolute bottom-4 left-4 right-4 text-white p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 pointer-events-none">
                                     <div className="flex items-center gap-3 mb-2">
                                         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                         <span className="text-xs font-bold tracking-widest uppercase">Next Event</span>
                                     </div>
                                     <div className="font-bold text-lg">Digital Future Summit 2024</div>
                                     <div className="text-slate-200 text-sm">München, Deutschland</div>
                                 </div>
                             </div>
                         )}
                         
                         {!isPlaying && <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]"></div>}
                     </div>
                </div>
            </div>
        </section>

        {/* Topics Section */}
        <section id="topics" className="py-24 relative z-10 bg-white shadow-inner rounded-[3rem]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Vortragsthemen</h2>
                    <p className="text-slate-900 max-w-2xl mx-auto">
                        Maßgeschneiderte Keynotes für Ihr Event. Unsere Themen treffen den Nerv der Zeit und liefern sofort anwendbare Erkenntnisse.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Lightbulb size={32} />,
                            title: "AI Leadership",
                            desc: "Wie Führungskräfte im Zeitalter künstlicher Intelligenz entscheiden müssen. Mensch vs. Algorithmus?",
                            color: "text-amber-500",
                            bg: "bg-amber-50"
                        },
                        {
                            icon: <Users size={32} />,
                            title: "High Performance Culture",
                            desc: "Was wir von Elite-Sportteams für das Boardroom lernen können. Psychologie des Gewinnens.",
                            color: "text-primary",
                            bg: "bg-blue-50"
                        },
                        {
                            icon: <Mic2 size={32} />,
                            title: "Decision Dynamics",
                            desc: "Die Anatomie schwerer Entscheidungen. Wie man Paralyse vermeidet und Geschwindigkeit aufbaut.",
                            color: "text-indigo-500",
                            bg: "bg-indigo-50"
                        }
                    ].map((topic, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl group hover:shadow-xl hover:shadow-blue-900/5 transition-all border border-slate-100">
                            <div className={`w-14 h-14 rounded-2xl ${topic.bg} ${topic.color} flex items-center justify-center mb-6`}>
                                {topic.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{topic.title}</h3>
                            <p className="text-slate-900 leading-relaxed mb-6">
                                {topic.desc}
                            </p>
                            <div className="flex items-center text-sm font-medium text-slate-900 group-hover:text-primary transition-colors cursor-pointer">
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Live Impressions</h2>
                        <p className="text-slate-900">Einblicke in vergangene Veranstaltungen.</p>
                     </div>
                 </div>

                 <div className="w-full rounded-3xl overflow-hidden border border-white shadow-2xl shadow-blue-900/10">
                     <ImagePlaceholder
                        id="keynote-impressions"
                        label="Publikum Foto"
                        aspectRatio="video"
                        containerClassName="!rounded-none !border-0 w-full h-full"
                        initialImage="https://github.com/mm71237-droid/DecisionDriver/blob/main/KeyNote%20Publikum.png?raw=true"
                     />
                 </div>
            </div>
        </section>

        {/* Booking CTA */}
        <section className="pb-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-xl shadow-blue-900/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-blue-400 to-primary"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50 rounded-full blur-[80px]"></div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Buchen Sie Ihren Keynote Speaker</h2>
                <p className="text-slate-900 max-w-2xl mx-auto mb-10 text-lg">
                    Verfügbarkeit prüfen und individuelles Angebot für Ihre Konferenz, Ihr Firmenevent oder Ihr Executive Dinner erhalten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={() => onNavigate(Page.Contact)} className="group">
                        <Calendar className="mr-2 group-hover:text-white" size={20} />
                        Termin anfragen
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
};
