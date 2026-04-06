import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, IndianRupee, ChevronDown, ChevronUp, Send, Heart, Users, Zap, GraduationCap } from 'lucide-react';
import { jobs } from '@/data/careers';
import { toast } from 'sonner';

const cultureValues = [
  { icon: Heart, title: 'People First', desc: 'We invest in our team with competitive benefits, growth paths, and a supportive culture.' },
  { icon: Zap, title: 'Innovation Driven', desc: 'We embrace technology and creative thinking to redefine the shopping experience.' },
  { icon: Users, title: 'Diverse & Inclusive', desc: 'Our workforce spans 20 cities with representation across all backgrounds.' },
  { icon: GraduationCap, title: 'Continuous Learning', desc: 'Regular training, certifications, and leadership development programs.' },
];

const CareersPage = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [applyingFor, setApplyingFor] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', coverLetter: '', resume: null as File | null });
  const [filterDept, setFilterDept] = useState('All');

  const departments = ['All', ...Array.from(new Set(jobs.map(j => j.department)))];
  const filtered = filterDept === 'All' ? jobs.filter(j => j.status === 'Open') : jobs.filter(j => j.status === 'Open' && j.department === filterDept);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Application submitted for ${jobs.find(j => j.id === applyingFor)?.title}! We'll review and get back to you.`);
    setApplyingFor(null);
    setForm({ name: '', email: '', phone: '', coverLetter: '', resume: null });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">Join <span className="text-gradient-gold">Onix Mall India</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Build your career with India's fastest-growing mall chain. We're looking for passionate individuals to shape the future of retail.</p>
        </div>

        {/* Culture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {cultureValues.map((v, i) => (
            <div key={i} className="bg-card rounded-lg border border-border p-5 text-center">
              <v.icon size={28} className="text-primary mx-auto mb-3" />
              <h3 className="font-display text-foreground mb-1">{v.title}</h3>
              <p className="text-xs text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="text-sm text-muted-foreground">Filter:</span>
          {departments.map(d => (
            <button key={d} onClick={() => setFilterDept(d)}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors ${filterDept === d ? 'bg-primary/10 text-primary border border-primary/30' : 'bg-card border border-border text-muted-foreground hover:text-foreground'}`}>
              {d}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-4 mb-8">
          <h2 className="font-display text-2xl text-foreground">Open <span className="text-gradient-gold">Positions</span> ({filtered.length})</h2>
          {filtered.map(job => (
            <motion.div key={job.id} layout className="bg-card rounded-lg border border-border overflow-hidden">
              <button onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)} className="w-full text-left p-5 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg text-foreground">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.experience}</span>
                    <span className="flex items-center gap-1"><IndianRupee size={12} /> {job.salaryRange}</span>
                    <span className="flex items-center gap-1"><Briefcase size={12} /> {job.type}</span>
                  </div>
                </div>
                {expandedJob === job.id ? <ChevronUp size={18} className="text-muted-foreground shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
              </button>

              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Responsibilities</h4>
                        <ul className="space-y-1">{job.responsibilities.map((r, i) => <li key={i} className="text-sm text-muted-foreground flex gap-2"><span className="text-primary">•</span>{r}</li>)}</ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Requirements</h4>
                        <ul className="space-y-1">{job.requirements.map((r, i) => <li key={i} className="text-sm text-muted-foreground flex gap-2"><span className="text-primary">•</span>{r}</li>)}</ul>
                      </div>
                      <button onClick={() => setApplyingFor(job.id)} className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-gold">
                        <Send size={14} /> Apply Now
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Application Modal */}
        <AnimatePresence>
          {applyingFor && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
              onClick={e => { if (e.target === e.currentTarget) setApplyingFor(null); }}>
              <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-card rounded-lg border border-border p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
                <h3 className="font-display text-xl text-foreground mb-1">Apply for {jobs.find(j => j.id === applyingFor)?.title}</h3>
                <p className="text-xs text-muted-foreground mb-5">{jobs.find(j => j.id === applyingFor)?.location} · {jobs.find(j => j.id === applyingFor)?.type}</p>
                <form onSubmit={handleApply} className="space-y-4">
                  <input type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    <input type="tel" placeholder="Phone" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1">Resume (PDF)</label>
                    <input type="file" accept=".pdf" onChange={e => setForm(f => ({ ...f, resume: e.target.files?.[0] || null }))}
                      className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                  </div>
                  <textarea placeholder="Cover Letter (optional)" rows={4} value={form.coverLetter} onChange={e => setForm(f => ({ ...f, coverLetter: e.target.value }))}
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                  <div className="flex gap-3">
                    <button type="submit" className="flex-1 bg-gradient-gold text-primary-foreground py-2.5 rounded-md font-medium hover:opacity-90 transition-opacity shadow-gold">Submit Application</button>
                    <button type="button" onClick={() => setApplyingFor(null)} className="px-4 py-2.5 rounded-md border border-border text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CareersPage;
