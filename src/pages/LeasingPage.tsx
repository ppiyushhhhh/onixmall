import { useState } from 'react';
import { motion } from 'framer-motion';
import { malls } from '@/data/malls';
import { toast } from 'sonner';

const LeasingPage = () => {
  const [form, setForm] = useState({ brand: '', contact: '', email: '', phone: '', mall: '', spaceType: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Leasing inquiry submitted! Our team will contact you within 48 hours.');
    setForm({ brand: '', contact: '', email: '', phone: '', mall: '', spaceType: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl text-foreground mb-3">Leasing <span className="text-gradient-gold">Inquiry</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Partner with India's premier mall chain. Secure premium retail space across our 20 locations.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="bg-card rounded-lg border border-border p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Brand Name" required value={form.brand} onChange={e => setForm(f => ({ ...f, brand: e.target.value }))}
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
              <select required value={form.spaceType} onChange={e => setForm(f => ({ ...f, spaceType: e.target.value }))}
                className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">Space Type</option>
                <option value="retail">Retail Store</option>
                <option value="kiosk">Kiosk</option>
                <option value="food">Food & Beverage</option>
                <option value="entertainment">Entertainment</option>
                <option value="office">Office Space</option>
              </select>
              <textarea placeholder="Additional details about your requirements..." rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              <button type="submit" className="w-full bg-gradient-gold text-primary-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity shadow-gold">
                Submit Inquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeasingPage;
