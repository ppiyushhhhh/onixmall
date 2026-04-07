import { motion } from 'framer-motion';
import { Building2, Palette, Camera, Sparkles } from 'lucide-react';
import { mallHeroImages } from '@/components/MallHeroImages';

const projects = [
  { title: 'Onix Mall Mumbai', city: 'mumbai', desc: 'Our flagship 8.5 lakh sq ft development in the financial capital, featuring 5 levels of premium retail and entertainment.', year: 2018, highlights: ['LEED Gold Certified', 'Smart Parking System', 'Rooftop Event Space'] },
  { title: 'Onix Mall Delhi', city: 'delhi', desc: 'A 9.2 lakh sq ft architectural marvel in Saket, integrating traditional design elements with modern retail innovation.', year: 2017, highlights: ['6-Level Design', 'Heritage-Inspired Architecture', 'Largest Food Court in NCR'] },
  { title: 'Onix Mall Bengaluru', city: 'bengaluru', desc: 'Tech-forward retail destination with smart building management and IoT-enabled visitor experiences.', year: 2019, highlights: ['IoT Integration', 'Co-working Spaces', 'EV Charging Stations'] },
  { title: 'Onix Mall Hyderabad', city: 'hyderabad', desc: 'Nawabi grandeur meets contemporary design in HITEC City, blending Hyderabadi culture with global retail standards.', year: 2019, highlights: ['Cultural Gallery', 'Indoor Water Feature', 'Biophilic Design'] },
  { title: 'Onix Mall Kolkata', city: 'kolkata', desc: 'Art-centric retail space in Salt Lake featuring rotating exhibitions and cultural programming alongside premium shopping.', year: 2019, highlights: ['Art Gallery Wing', 'Auditorium', 'Green Building Certification'] },
  { title: 'Onix Mall Ahmedabad', city: 'ahmedabad', desc: 'Gujarat\'s retail beacon on SG Highway with vibrant textile-inspired interiors.', year: 2020, highlights: ['Textile-Inspired Interiors', 'Solar Powered', 'Rainwater Harvesting'] },
  { title: 'Onix Mall Chennai', city: 'chennai', desc: 'South India\'s premier shopping destination on Anna Salai with world-class amenities.', year: 2020, highlights: ['Multiplex Cinema', 'Kids Zone', 'Green Terrace'] },
  { title: 'Onix Mall Pune', city: 'pune', desc: 'A modern retail hub on FC Road catering to Pune\'s vibrant young demographic.', year: 2020, highlights: ['Youth-Centric Design', 'Gaming Arena', 'Open-Air Plaza'] },
  { title: 'Onix Mall Jaipur', city: 'jaipur', desc: 'Rajasthani heritage blended with luxury retail on MI Road.', year: 2021, highlights: ['Heritage Facade', 'Luxury Wing', 'Craft Bazaar'] },
  { title: 'Onix Mall Kochi', city: 'kochi', desc: 'Kerala\'s waterfront-inspired retail landmark in Marine Drive.', year: 2021, highlights: ['Waterfront Views', 'Spice Market', 'Backwater Lounge'] },
  { title: 'Onix Mall Chandigarh', city: 'chandigarh', desc: 'Le Corbusier-inspired modern design in the City Beautiful.', year: 2021, highlights: ['Modernist Design', 'Rooftop Garden', 'Smart HVAC'] },
  { title: 'Onix Mall Lucknow', city: 'lucknow', desc: 'Nawabi elegance meets modern retail on Hazratganj.', year: 2022, highlights: ['Mughal-Inspired Atrium', 'Food Street', 'Cultural Hub'] },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">Our <span className="text-gradient-gold">Portfolio</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">A decade of excellence in retail infrastructure development across India, delivering world-class shopping destinations that redefine the mall experience.</p>
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-16">
          {[
            { icon: Building2, title: 'Infrastructure', desc: 'State-of-the-art construction with seismic resilience and smart building tech.' },
            { icon: Palette, title: 'Design', desc: 'Bespoke interiors inspired by local culture with global design sensibilities.' },
            { icon: Camera, title: 'Event Hosting', desc: 'Versatile event spaces hosting 200+ events annually across all locations.' },
            { icon: Sparkles, title: 'Innovation', desc: 'IoT, AI-driven analytics, and sustainable building practices.' },
          ].map((cap, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg border border-border p-5 text-center hover:border-primary/30 transition-colors">
              <cap.icon size={28} className="text-primary mx-auto mb-3" />
              <h3 className="font-display text-lg text-foreground mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <h2 className="font-display text-3xl text-foreground mb-8">Completed <span className="text-gradient-gold">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-all group">
              <div className="h-48 bg-secondary relative overflow-hidden">
                {mallHeroImages[project.city] ? (
                  <img src={mallHeroImages[project.city]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 size={40} className="text-primary/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-xs text-primary font-medium">
                  Est. {project.year}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.highlights.map(h => (
                    <span key={h} className="text-xs bg-primary/10 text-primary rounded-full px-2.5 py-0.5">{h}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
