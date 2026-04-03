import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Search, Filter } from 'lucide-react';
import { events } from '@/data/malls';

const EventsPage = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [search, setSearch] = useState('');

  const filtered = events.filter(e => {
    const matchStatus = filter === 'all' || e.status === filter;
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase()) || e.mallName.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">Events & <span className="text-gradient-gold">Promotions</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Discover exciting events, festivals, and exclusive promotions across all Onix Malls.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Search events..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-md pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div className="flex gap-2">
            {(['all', 'upcoming', 'past'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm rounded-md transition-colors capitalize ${filter === f ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'}`}
              >{f}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((event, i) => (
            <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="bg-card rounded-lg border border-border p-5 hover:border-primary/30 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${event.status === 'upcoming' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  {event.status}
                </span>
                <span className="text-xs text-muted-foreground">{event.category}</span>
              </div>
              <h3 className="font-display text-lg text-foreground">{event.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                <MapPin size={13} /> {event.mallName}
              </p>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{event.description}</p>
              <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                <Calendar size={13} /> {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · {event.time}
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Calendar size={48} className="mx-auto mb-4 opacity-30" />
            <p>No events found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
