import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Building2, Filter } from 'lucide-react';
import { malls } from '@/data/malls';

const MallDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'stores'>('name');

  const filtered = malls
    .filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.city.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'stores') return b.storeCount - a.storeCount;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">Our <span className="text-gradient-gold">Malls</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Discover 20 premium shopping destinations across India's most vibrant cities.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by mall name or city..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border rounded-md pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as 'name' | 'rating' | 'stores')}
            className="bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="name">Sort by Name</option>
            <option value="rating">Sort by Rating</option>
            <option value="stores">Sort by Stores</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((mall, i) => (
            <motion.div
              key={mall.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/malls/${mall.id}`} className="block group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-gold h-full">
                <div className="h-40 bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-gold opacity-5 group-hover:opacity-15 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 size={40} className="text-primary/30" />
                  </div>
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs flex items-center gap-1">
                    <Star size={11} className="text-primary fill-primary" /> {mall.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base text-foreground group-hover:text-primary transition-colors">{mall.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin size={11} /> {mall.city}, {mall.state}
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span>{mall.storeCount} Stores</span>
                    <span>{mall.floors} Floors</span>
                  </div>
                  <p className="text-xs italic text-primary/70 mt-2">"{mall.tagline}"</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Building2 size={48} className="mx-auto mb-4 opacity-30" />
            <p>No malls found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MallDirectory;
