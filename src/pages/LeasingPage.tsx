import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Layers, IndianRupee, ArrowRight, CheckCircle } from 'lucide-react';
import { malls } from '@/data/malls';
import { availableSpaces } from '@/data/leasingInquiries';
import { toast } from 'sonner';

const benefits = [
  'Premium locations in 20 cities across India',
  'High footfall — 15 Cr+ annual visitors',
  'Dedicated mall management & marketing support',
  'Modern infrastructure with smart building systems',
  'Flexible lease terms and competitive rates',
  'Co-marketing opportunities and brand visibility',
];

const businessCategories = [
  'Fashion & Apparel', 'Electronics', 'Food & Beverage', 'Grocery & Supermarket',
  'Entertainment', 'Health & Wellness', 'Jewelry', 'Home & Living', 'Sports', 'Other',
];

const budgetRanges = [
  '₹1-3 Lakh/month', '₹3-5 Lakh/month', '₹5-8 Lakh/month', '₹8-12 Lakh/month', '₹12-20 Lakh/month', '₹20+ Lakh/month',
];

const LeasingPage = () => {
  const [form, setForm] = useState({
    brand: '', contact: '', email: '', phone: '', mall: '',
    businessCategory: '', spaceRequirement: '', budgetRange: '', message: '',
  });
  const [activeTab, setActiveTab] = useState<'info' | 'spaces' | 'inquiry'>('info');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Leasing inquiry submitted! Our team will contact you within 48 hours.');
    setForm({ brand: '', contact: '', email: '', phone: '', mall: '', businessCategory: '', spaceRequirement: '', budgetRange: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">Leasing <span className="text-gradient-gold">Opportunities</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Partner with India's premier mall chain. Secure premium retail space across our 20 locations nationwide.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { key: 'info' as const, label: 'Why Lease With Us' },
            { key: 'spaces' as const, label: 'Available Spaces' },
            { key: 'inquiry' as const, label: 'Submit Inquiry' },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${activeTab === tab.key ? 'bg-gradient-gold text-primary-foreground shadow-gold' : 'bg-card border border-border text-muted-foreground hover:text-foreground'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Info Tab */}
        {activeTab === 'info' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="bg-card rounded-lg border border-border p-8">
              <h2 className="font-display text-2xl text-foreground mb-6">Why Choose <span className="text-gradient-gold">Onix Mall India?</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card rounded-lg border border-border p-5 text-center">
                <div className="text-3xl font-display text-primary mb-1">20</div>
                <div className="text-sm text-muted-foreground">Mall Locations</div>
              </div>
              <div className="bg-card rounded-lg border border-border p-5 text-center">
                <div className="text-3xl font-display text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Avg Occupancy</div>
              </div>
              <div className="bg-card rounded-lg border border-border p-5 text-center">
                <div className="text-3xl font-display text-primary mb-1">4000+</div>
                <div className="text-sm text-muted-foreground">Brand Partners</div>
              </div>
            </div>

            <div className="text-center">
              <button onClick={() => setActiveTab('inquiry')} className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 shadow-gold">
                Start Leasing Inquiry <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Available Spaces Tab */}
        {activeTab === 'spaces' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableSpaces.filter(s => s.available).map(space => (
                <div key={space.id} className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-foreground">{space.mallName}</h3>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{space.type}</span>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Layers size={14} className="text-primary" /> Floor {space.floor} · {space.area}</div>
                    <div className="flex items-center gap-2"><IndianRupee size={14} className="text-primary" /> {space.rent}</div>
                  </div>
                  <button onClick={() => { setActiveTab('inquiry'); setForm(f => ({ ...f, mall: space.mallId })); }}
                    className="mt-3 text-sm text-primary hover:underline flex items-center gap-1">
                    Inquire about this space <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Inquiry Form Tab */}
        {activeTab === 'inquiry' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-display text-xl text-foreground mb-5">Leasing Inquiry Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Company / Brand Name" required value={form.brand} onChange={e => setForm(f => ({ ...f, brand: e.target.value }))}
                    className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input type="text" placeholder="Contact Person" required value={form.contact} onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                    className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <select required value={form.mall} onChange={e => setForm(f => ({ ...f, mall: e.target.value }))}
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">Preferred Mall Location</option>
                  {malls.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                </select>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select required value={form.businessCategory} onChange={e => setForm(f => ({ ...f, businessCategory: e.target.value }))}
                    className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">Business Category</option>
                    {businessCategories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <input type="text" placeholder="Space Requirement (e.g. 2000 sq ft)" required value={form.spaceRequirement} onChange={e => setForm(f => ({ ...f, spaceRequirement: e.target.value }))}
                    className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <select required value={form.budgetRange} onChange={e => setForm(f => ({ ...f, budgetRange: e.target.value }))}
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">Budget Range</option>
                  {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <textarea placeholder="Additional details about your business and requirements..." rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                <button type="submit" className="w-full bg-gradient-gold text-primary-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity shadow-gold">
                  Submit Leasing Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LeasingPage;
