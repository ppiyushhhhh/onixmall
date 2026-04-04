import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { src: string; label: string }[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, initialIndex, onClose }: LightboxProps) => {
  const [current, setCurrent] = useState(initialIndex);

  const goPrev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const goNext = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card border border-border text-foreground hover:bg-muted transition-colors"
        >
          <X size={20} />
        </button>

        <button
          onClick={e => { e.stopPropagation(); goPrev(); }}
          className="absolute left-2 md:left-6 z-10 p-2 rounded-full bg-card border border-border text-foreground hover:bg-muted transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={e => { e.stopPropagation(); goNext(); }}
          className="absolute right-2 md:right-6 z-10 p-2 rounded-full bg-card border border-border text-foreground hover:bg-muted transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        <div className="max-w-5xl w-full mx-4 flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <motion.img
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            src={images[current].src}
            alt={images[current].label}
            className="max-h-[75vh] w-auto rounded-lg object-contain"
          />
          <div className="mt-4 text-center">
            <p className="text-foreground font-display text-lg">{images[current].label}</p>
            <p className="text-muted-foreground text-sm mt-1">{current + 1} / {images.length}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
