import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Star, Building2, Car, Calendar, Search, ChevronRight, Users, Layers, ArrowLeft } from 'lucide-react';
import { malls, generateStoresForMall, storeCategories, events } from '@/data/malls';
import { mallHeroImages } from '@/components/MallHeroImages';

const MallDetail = () => {
  const { id } = useParams<{ id: string }>();
  const mall = malls.find(m => m.id === id);
  const [storeSearch, setStoreSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [activeTab, setActiveTab] = useState<'overview' | 'stores' | 'events'>('overview');

  const stores = useMemo(() => mall ? generateStoresForMall(mall.id, Math.min(mall.storeCount, 80)) : [], [mall]);

  if (!mall) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground mb-2">Mall Not Found</h1>
          <Link to="/malls" className="text-primary">← Back to Malls</Link>
        </div>
      </div>
    );
  }

  const filteredStores = stores.filter(s => {
    const matchName = s.name.toLowerCase().includes(storeSearch.toLowerCase());
    const matchCat = categoryFilter === 'All' || s.category === categoryFilter;
    return matchName && matchCat;
  });

  const mallEvents = events.filter(e => e.mallId === mall.id);

  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'stores', label: `Stores (${stores.length})` },
    { key: 'events', label: `Events (${mallEvents.length})` },
  ] as const;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-64 md:h-80 bg-secondary overflow-hidden">
        {mallHeroImages[mall.id] && (
          <img src={mallHeroImages[mall.id]} alt={mall.name} className="absolute inset-0 w-full h-full object-cover" width={1920} height={768} />
        )}
        <div className="absolute inset-0 bg-gradient-gold opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-6 left-0 right-0">
          <div className="container mx-auto px-4">
            <Link to="/malls" className="text-primary text-sm flex items-center gap-1 mb-3 hover:text-gold-light">
              <ArrowLeft size={14} /> All Malls
            </Link>
            <h1 className="font-display text-3xl md:text-5xl text-foreground">{mall.name}</h1>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin size={14} className="text-primary" /> {mall.city}, {mall.state}</span>
              <span className="flex items-center gap-1"><Star size={14} className="text-primary fill-primary" /> {mall.rating}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {mall.operatingHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-10">
        <div className="container mx-auto px-4 flex gap-6">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.key ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h2 className="font-display text-2xl text-foreground mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">{mall.description}</p>
                <p className="text-sm italic text-primary/70 mt-3">"{mall.tagline}"</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-5 space-y-4">
                <h3 className="font-display text-lg text-foreground">Quick Info</h3>
                {[
                  { icon: Layers, label: 'Total Area', value: mall.totalArea },
                  { icon: Building2, label: 'Stores', value: `${mall.storeCount}` },
                  { icon: Layers, label: 'Floors', value: `${mall.floors}` },
                  { icon: Car, label: 'Parking', value: `${mall.parkingCapacity} spots` },
                  { icon: Calendar, label: 'Since', value: `${mall.openingYear}` },
                  { icon: Users, label: 'Monthly Footfall', value: mall.monthlyFootfall },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <item.icon size={16} className="text-primary shrink-0" />
                    <span className="text-muted-foreground">{item.label}:</span>
                    <span className="text-foreground font-medium ml-auto">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-4">Facilities</h2>
              <div className="flex flex-wrap gap-2">
                {mall.facilities.map(f => (
                  <span key={f} className="bg-card border border-border rounded-full px-4 py-1.5 text-sm text-muted-foreground">{f}</span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-display text-2xl text-foreground mb-4">Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={16} className="text-primary" /> {mall.contactPhone}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} className="text-primary" /> {mall.contactEmail}
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin size={16} className="text-primary mt-0.5" /> {mall.address}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'stores' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search stores..."
                  value={storeSearch}
                  onChange={e => setStoreSearch(e.target.value)}
                  className="w-full bg-card border border-border rounded-md pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <select
                value={categoryFilter}
                onChange={e => setCategoryFilter(e.target.value)}
                className="bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="All">All Categories</option>
                {storeCategories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-3 text-xs font-medium text-muted-foreground border-b border-border bg-muted/30">
                <div className="col-span-4">Store</div>
                <div className="col-span-3">Category</div>
                <div className="col-span-2">Floor</div>
                <div className="col-span-3">Shop No.</div>
              </div>
              <div className="max-h-[500px] overflow-y-auto">
                {filteredStores.map(store => (
                  <div key={store.id} className="grid grid-cols-12 gap-4 p-3 text-sm border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <div className="col-span-4 text-foreground font-medium">{store.name}</div>
                    <div className="col-span-3 text-muted-foreground">{store.category}</div>
                    <div className="col-span-2 text-muted-foreground">Floor {store.floor}</div>
                    <div className="col-span-3 text-muted-foreground">{store.shopNumber}</div>
                  </div>
                ))}
              </div>
            </div>
            {filteredStores.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No stores match your search.</p>
            )}
          </motion.div>
        )}

        {activeTab === 'events' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {mallEvents.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No events scheduled for this mall.</p>
            )}
            {mallEvents.map(event => (
              <div key={event.id} className="bg-card rounded-lg border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${event.status === 'upcoming' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                    {event.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{event.category}</span>
                </div>
                <h3 className="font-display text-lg text-foreground">{event.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                <p className="text-xs text-muted-foreground mt-2">{new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · {event.time}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MallDetail;
