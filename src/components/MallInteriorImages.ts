import lobby1 from '@/assets/interior-lobby-1.jpg';
import lobby2 from '@/assets/interior-lobby-2.jpg';
import foodcourt1 from '@/assets/interior-foodcourt-1.jpg';
import foodcourt2 from '@/assets/interior-foodcourt-2.jpg';
import atrium1 from '@/assets/interior-atrium-1.jpg';
import atrium2 from '@/assets/interior-atrium-2.jpg';
import parking1 from '@/assets/interior-parking-1.jpg';
import entertainment1 from '@/assets/interior-entertainment-1.jpg';
import cinema1 from '@/assets/interior-cinema-1.jpg';
import escalators1 from '@/assets/interior-escalators-1.jpg';

export interface GalleryImage {
  src: string;
  label: string;
}

const allImages: GalleryImage[] = [
  { src: lobby1, label: 'Grand Lobby' },
  { src: lobby2, label: 'Premium Corridor' },
  { src: foodcourt1, label: 'Food Court' },
  { src: foodcourt2, label: 'Dining Area' },
  { src: atrium1, label: 'Central Atrium' },
  { src: atrium2, label: 'Fountain Plaza' },
  { src: parking1, label: 'Parking Facility' },
  { src: entertainment1, label: 'Entertainment Zone' },
  { src: cinema1, label: 'Cinema Multiplex' },
  { src: escalators1, label: 'Multi-Level Escalators' },
];

// Each mall gets a unique selection of 6 images based on its index
export function getInteriorImages(mallId: string): GalleryImage[] {
  const mallIds = [
    'mumbai', 'delhi', 'bengaluru', 'hyderabad', 'chennai',
    'pune', 'kolkata', 'ahmedabad', 'jaipur', 'lucknow',
    'chandigarh', 'indore', 'bhopal', 'nagpur', 'surat',
    'kochi', 'bhubaneswar', 'patna', 'coimbatore', 'visakhapatnam',
  ];
  const idx = mallIds.indexOf(mallId);
  const offset = idx >= 0 ? idx % allImages.length : 0;

  // Pick 6 images in a rotated order so each mall feels different
  const result: GalleryImage[] = [];
  for (let i = 0; i < 6; i++) {
    result.push(allImages[(offset + i) % allImages.length]);
  }
  return result;
}
