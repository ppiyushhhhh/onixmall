import { useState } from 'react';
import { Camera } from 'lucide-react';
import { getInteriorImages } from '@/components/MallInteriorImages';
import Lightbox from '@/components/Lightbox';

interface MallGalleryProps {
  mallId: string;
}

const MallGallery = ({ mallId }: MallGalleryProps) => {
  const images = getInteriorImages(mallId);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Camera size={20} className="text-primary" />
        <h2 className="font-display text-2xl text-foreground">Interior Gallery</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
          >
            <img
              src={img.src}
              alt={img.label}
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-2 left-2 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              {img.label}
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
};

export default MallGallery;
