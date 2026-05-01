import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Search, Star, Building2 } from 'lucide-react';
import { malls } from '@/data/malls';
import { mallHeroImages } from '@/components/MallHeroImages';

const MallDirectory = () => {
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const states = useMemo(() => [...new Set(malls.map(m => m.state))].sort(), []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return malls.filter(m => {
      const matchesQ = !q || m.name.toLowerCase().includes(q) || m.city.toLowerCase().includes(q) || m.state.toLowerCase().includes(q);
      const matchesState = !selectedState || m.state === selectedState;
      return matchesQ && matchesState;
    });
  }, [search, selectedState]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
            Our <span className="text-gradient-gold">Malls</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore all 20 Onix Mall destinations across India — premium shopping, dining, and entertainment in every region.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by city, state, or name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <select
            value={selectedState ?? ''}
            onChange={e => setSelectedState(e.target.value || null)}
            className="bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="">All States</option>
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-muted-foreground">{filtered.length} of {malls.length} malls</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((mall, i) => (
            <motion.div
              key={mall.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 9) * 0.05 }}
            >
              <Link
                to={`/malls/${mall.id}`}
                className="block group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 hover:shadow-gold transition-all"
              >
                <div className="h-48 bg-secondary relative overflow-hidden">
                  {mallHeroImages[mall.id] ? (
                    <img
                      src={mallHeroImages[mall.id]}
                      alt={mall.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 size={48} className="text-primary/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs flex items-center gap-1">
                    <Star size={12} className="text-primary fill-primary" />
                    {mall.rating}
                  </div>
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs text-primary font-medium">
                    Est. {mall.openingYear}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                    {mall.name}
                  </h3>
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
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16 text-muted-foreground">
              <Building2 size={40} className="mx-auto mb-3 opacity-30" />
              <p>No malls match your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MallDirectory;
