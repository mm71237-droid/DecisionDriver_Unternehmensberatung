
import React, { useState, useRef } from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Mic2, Users, Lightbulb, Calendar, ArrowRight, Play, MapPin, X, FileText, Download } from 'lucide-react';

interface KeyNoteSpeakerProps {
  onNavigate: (page: Page) => void;
}

export const KeyNoteSpeaker: React.FC<KeyNoteSpeakerProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showExpose, setShowExpose] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const topics = [
    {
        icon: <Lightbulb size={28} />,
        title: "AI Leadership",
        headline: "\"Mensch vs. Maschine: Wer entscheidet morgen?\"",
        desc: "Wie Führungskräfte im Zeitalter künstlicher Intelligenz entscheiden müssen. Menschliche Intuition trifft auf algorithmische Härte.",
        color: "text-amber-500",
        bg: "bg-amber-50",
        tour2026: [
            { event: "World Economic Forum", loc: "Davos" },
            { event: "OMR Festival", loc: "Hamburg" },
            { event: "Web Summit", loc: "Lissabon" }
        ]
    },
    {
        icon: <Users size={28} />,
        title: "High Performance Culture",
        headline: "\"Die Psychologie des Gewinnens.\"",
        desc: "Was wir von Elite-Sportteams für das Boardroom lernen können. Wie man eine Kultur schafft, die Druck in Energie verwandelt.",
        color: "text-primary",
        bg: "bg-blue-50",
        tour2026: [
            { event: "HR Summit", loc: "Wien" },
            { event: "Zukunft Personal", loc: "Köln" },
            { event: "Nordic Business Forum", loc: "Helsinki" }
        ]
    },
    {
        icon: <Mic2 size={28} />,
        title: "Decision Dynamics",
        headline: "\"Speed Kills Competition.\"",
        desc: "Die Anatomie schwerer Entscheidungen. Wie man Paralyse vermeidet und Geschwindigkeit als ultimativen Wettbewerbsvorteil nutzt.",
        color: "text-indigo-500",
        bg: "bg-indigo-50",
        tour2026: [
            { event: "Digital X", loc: "Köln" },
            { event: "Bits & Pretzels", loc: "München" },
            { event: "London Tech Week", loc: "London" }
        ]
    }
  ];

  // URL to the raw PDF for embedding/downloading
  const pdfUrl = "https://github.com/mm71237-droid/DecisionDriver/raw/main/Expose.pdf";
  // Viewer URL (using Google Docs viewer to embed generic PDFs reliably in iframes)
  const viewerUrl = `https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`;

  return (
    <div className="animate-fade-in pb-24 relative overflow-hidden bg-main">
        
        {/* EXPOSE MODAL POPUP */}
        {showExpose && (
            <div 
                className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-fade-in"
                onClick={() => setShowExpose(false)}
            >
                <div 
                    className="bg-white w-full max-w-6xl h-[90vh] rounded-3xl relative flex flex-col shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-white z-10 shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="bg-red-50 p-3 rounded-xl text-red-600">
                                <FileText size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl">Speaker Exposé 2026</h3>
                                <p className="text-sm text-slate-500">Max Mustermann & Team</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <a 
                                href={pdfUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-medium transition-colors shadow-lg shadow-blue-900/20"
                            >
                                <Download size={18} /> Download PDF
                            </a>
                            <button 
                                onClick={() => setShowExpose(false)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                            >
                                <X size={28} />
                            </button>
                        </div>
                    </div>

                    {/* Content Area - Spacious & Focused */}
                    <div className="flex-grow bg-slate-50 p-4 md:p-8 overflow-hidden relative">
                         {/* Card container for the slides/PDF */}
                        <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative">
                            <iframe 
                                src={viewerUrl} 
                                className="w-full h-full border-0" 
                                title="Expose Slides"
                            />
                        </div>
                    </div>
                    
                    {/* Mobile Download Footer */}
                    <div className="md:hidden p-4 border-t border-slate-100 bg-white shrink-0">
                         <a 
                            href={pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex justify-center items-center gap-2 w-full px-4 py-3 bg-primary text-white hover:bg-sky-700 rounded-xl text-sm font-bold transition-colors shadow-lg"
                        >
                            <Download size={18} /> Exposé Herunterladen
                        </a>
                    </div>
                </div>
            </div>
        )}

        {/* Background effects */}
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[120px]"></div>
        </div>

        {/* Hero Section - Increased top padding for header clearance */}
        <section className="relative pt-32 md:pt-40 pb-32">
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
                
                {/* Video Section */}
                <div className="relative flex justify-center lg:justify-end">
                     <div className="w-full max-w-[500px] aspect-video rounded-3xl overflow-hidden border border-white shadow-2xl shadow-blue-900/10 relative group bg-black transform rotate-2 hover:rotate-0 transition-transform duration-500">
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
                                 <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                                     <Play className="text-white fill-white ml-1.5" size={32} />
                                 </div>

                                 {/* Info Overlay (Hidden when playing) */}
                                 <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 pointer-events-none">
                                     <div className="flex items-center gap-2 mb-1">
                                         <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                         <span className="text-[10px] font-bold tracking-widest uppercase">Next Event</span>
                                     </div>
                                     <div className="font-bold text-sm">Digital Future Summit</div>
                                     <div className="text-slate-200 text-xs">München, Deutschland</div>
                                 </div>
                             </div>
                         )}
                         
                         {!isPlaying && <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]"></div>}
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
                    {topics.map((topic, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl group hover:shadow-xl hover:shadow-blue-900/5 transition-all border border-slate-100 flex flex-col h-full">
                            <div className={`w-14 h-14 rounded-2xl ${topic.bg} ${topic.color} flex items-center justify-center mb-6`}>
                                {topic.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.title}</h3>
                            <div className="text-sm font-serif italic text-slate-500 mb-4">{topic.headline}</div>
                            
                            <p className="text-slate-900 leading-relaxed mb-8 flex-grow">
                                {topic.desc}
                            </p>

                            {/* 2026 Tour Dates */}
                            <div className="mb-8 pt-6 border-t border-slate-100">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                                    <Calendar size={12} />
                                    <span>On Tour 2026</span>
                                </div>
                                <ul className="space-y-3">
                                    {topic.tour2026.map((date, i) => (
                                        <li key={i} className="flex justify-between items-center text-sm">
                                            <span className="font-medium text-slate-800">{date.event}</span>
                                            <span className="text-slate-400 flex items-center gap-1 text-xs">
                                                <MapPin size={10} /> {date.loc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button 
                                onClick={() => setShowExpose(true)}
                                className="flex items-center text-sm font-medium text-slate-900 group-hover:text-primary transition-colors cursor-pointer w-fit mt-auto"
                            >
                                Exposé anfordern <ArrowRight size={16} className="ml-2" />
                            </button>
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
