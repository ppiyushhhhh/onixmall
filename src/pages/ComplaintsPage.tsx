import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { malls } from '@/data/malls';
import { toast } from 'sonner';

const categories = ['Cleanliness', 'Safety', 'Staff Behavior', 'Facilities', 'Parking', 'Noise', 'Other'];

const ComplaintsPage = () => {
  const [form, setForm] = useState({ name: '', email: '', mall: '', category: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Complaint submitted successfully! Your reference ID: #ONX-' + Math.random().toString(36).substr(2, 6).toUpperCase());
    setForm({ name: '', email: '', mall: '', category: '', description: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl text-foreground mb-3">Submit a <span className="text-gradient-gold">Complaint</span></h1>
          <p className="text-muted-foreground">We value your feedback. Submit your concern and we'll address it promptly.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="bg-card rounded-lg border border-border p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <input type="email" placeholder="Email Address" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <select required value={form.mall} onChange={e => setForm(f => ({ ...f, mall: e.target.value }))}
                className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">Select Mall</option>
                {malls.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
              </select>
              <select required value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">Complaint Category</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <textarea placeholder="Describe your complaint in detail..." required rows={5} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              <button type="submit" className="w-full bg-gradient-gold text-primary-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity shadow-gold flex items-center justify-center gap-2">
                <AlertTriangle size={16} /> Submit Complaint
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplaintsPage;
