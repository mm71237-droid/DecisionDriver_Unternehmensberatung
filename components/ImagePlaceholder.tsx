import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, Upload, X } from 'lucide-react';

interface ImagePlaceholderProps {
  id: string; // Unique ID for localStorage persistence
  label?: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
  containerClassName?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  id, 
  label = "Foto hochladen", 
  className = "",
  aspectRatio = "video",
  containerClassName = ""
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const storageKey = `decision_driver_img_${id}`;

  useEffect(() => {
    // Load from local storage on mount
    const saved = localStorage.getItem(storageKey);
    if (saved) setImage(saved);
  }, [id, storageKey]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImage(result);
        try {
          localStorage.setItem(storageKey, result);
        } catch (err) {
          console.error("Image too large for local storage", err);
          alert("Das Bild ist zu groß für den lokalen Speicher. Es wird nur temporär angezeigt.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setImage(null);
    localStorage.removeItem(storageKey);
  };

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
    auto: ''
  };

  return (
    <div 
      className={`relative overflow-hidden group rounded-2xl bg-white/5 border-2 border-dashed border-white/10 transition-all duration-300 ${aspectClasses[aspectRatio as keyof typeof aspectClasses] || ''} ${containerClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <label className={`block w-full h-full cursor-pointer relative z-10 ${className}`}>
        {image ? (
          <>
            <img src={image} alt="Uploaded content" className="w-full h-full object-cover animate-fade-in" />
            <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
              <Camera className="text-white mb-2" size={32} />
              <span className="text-white font-bold text-sm uppercase tracking-widest">Bild ändern</span>
            </div>
            {isHovering && (
              <button 
                onClick={handleRemove}
                className="absolute top-4 right-4 p-2 bg-red-500/80 hover:bg-red-500 text-white rounded-full transition-colors z-20"
                title="Bild entfernen"
              >
                <X size={16} />
              </button>
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 hover:text-primary transition-colors hover:bg-white/5">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform duration-300">
               <ImageIcon size={32} />
            </div>
            <span className="font-medium text-sm uppercase tracking-wide mb-1">{label}</span>
            <span className="text-xs opacity-60">Klicken zum Hochladen</span>
          </div>
        )}
        <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
      </label>
      
      {/* Decorative corner accents if empty */}
      {!image && (
        <>
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 rounded-tl-lg m-2 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 rounded-tr-lg m-2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 rounded-bl-lg m-2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 rounded-br-lg m-2 pointer-events-none"></div>
        </>
      )}
    </div>
  );
};