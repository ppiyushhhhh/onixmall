import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Search, MapPin, Building2, Users, Award, Calendar, ArrowRight, Star } from 'lucide-react';
import { malls, events } from '@/data/malls';
import heroImg1 from '@/assets/hero-mall-1.jpg';
import heroImg2 from '@/assets/hero-mall-2.jpg';
import heroImg3 from '@/assets/hero-mall-3.jpg';

const heroSlides = [
  { image: heroImg1, mall: 'Onix Mall Mumbai', tagline: 'Where Mumbai Shops in Style', city: 'Mumbai' },
  { image: heroImg2, mall: 'Onix Mall Delhi', tagline: 'The Capital of Shopping', city: 'Delhi' },
  { image: heroImg3, mall: 'Onix Mall Bengaluru', tagline: 'Tech Meets Retail', city: 'Bengaluru' },
];

const stats = [
  { icon: Building2, value: '20', label: 'Premium Malls' },
  { icon: MapPin, value: '20', label: 'Cities' },
  { icon: Users, value: '15Cr+', label: 'Annual Visitors' },
  { icon: Award, value: '4000+', label: 'Brand Partners' },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(s => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredMalls = malls.slice(0, 6);
  const upcomingEvents = events.filter(e => e.status === 'upcoming').slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[85vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img src={heroSlides[currentSlide].image} alt={heroSlides[currentSlide].mall} className="w-full h-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <motion.p
              key={`city-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-3"
            >
              {heroSlides[currentSlide].city}
            </motion.p>
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-4"
            >
              {heroSlides[currentSlide].mall}
            </motion.h1>
            <motion.p
              key={`tag-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              {heroSlides[currentSlide].tagline}
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-md mx-auto"
            >
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search malls by city..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-card/80 backdrop-blur-sm border border-border rounded-full pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </motion.div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-primary' : 'w-4 bg-foreground/30'}`}
            />
          ))}
        </div>

        <button onClick={() => setCurrentSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/50 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => setCurrentSlide(s => (s + 1) % heroSlides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/50 transition-colors">
          <ChevronRight size={20} />
        </button>
      </section>

      {/* Stats */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-2 text-primary" size={28} />
                <div className="text-3xl md:text-4xl font-display text-gradient-gold font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Redefining <span className="text-gradient-gold">Retail Experiences</span> Across India
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Since 2017, Onix Mall India has been at the forefront of India's retail revolution. With 20 premium malls across major cities, we bring together the finest international and domestic brands, world-class entertainment, and exceptional dining — all under one roof. Our commitment to excellence has made us the preferred destination for over 15 crore visitors annually.
          </p>
          <Link to="/portfolio" className="inline-flex items-center gap-2 mt-6 text-primary hover:text-gold-light transition-colors font-medium">
            Explore Our Story <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Malls */}
      <section className="bg-card/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl text-foreground">Featured <span className="text-gradient-gold">Malls</span></h2>
            <Link to="/malls" className="text-primary text-sm flex items-center gap-1 hover:text-gold-light transition-colors">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMalls.map((mall, i) => (
              <motion.div
                key={mall.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/malls/${mall.id}`} className="block group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-gold">
                  <div className="h-48 bg-secondary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-gold opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 size={48} className="text-primary/40" />
                    </div>
                    <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs flex items-center gap-1">
                      <Star size={12} className="text-primary fill-primary" />
                      {mall.rating}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">{mall.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin size={13} /> {mall.city}, {mall.state}
                    </p>
                    <p className="text-xs text-muted-foreground mt-3 line-clamp-2">{mall.description}</p>
                    <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                      <span>{mall.storeCount} Stores</span>
                      <span>{mall.floors} Floors</span>
                      <span>{mall.totalArea}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-3xl text-foreground">Upcoming <span className="text-gradient-gold">Events</span></h2>
          <Link to="/events" className="text-primary text-sm flex items-center gap-1 hover:text-gold-light transition-colors">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg border border-border p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 text-center shrink-0">
                  <Calendar size={20} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">{event.category}</span>
                  <h3 className="font-display text-lg text-foreground mt-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{event.mallName}</p>
                  <p className="text-xs text-muted-foreground mt-1">{new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · {event.time}</p>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold opacity-10" />
        <div className="container mx-auto px-4 py-16 relative text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Looking for Premium <span className="text-gradient-gold">Retail Space</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Partner with India's leading mall chain. Explore leasing opportunities across our 20 premium locations.
          </p>
          <Link to="/leasing" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity shadow-gold">
            Enquire Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
