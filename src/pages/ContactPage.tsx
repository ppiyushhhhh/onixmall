import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'sonner';

const faqs = [
  { q: 'What are the operating hours for Onix Malls?', a: 'Most Onix Malls operate from 10:00 AM to 10:00 PM, seven days a week. Hours may vary by location and during festivals.' },
  { q: 'Is parking available at all malls?', a: 'Yes, all Onix Malls have multi-level parking with capacities ranging from 900 to 3000 vehicles.' },
  { q: 'How can I apply for a retail space?', a: 'Visit our Leasing page or contact our business development team at leasing@onixmall.in.' },
  { q: 'Do malls have wheelchair accessibility?', a: 'All Onix Malls are designed to be fully accessible with ramps, elevators, and wheelchair-friendly restrooms.' },
  { q: 'How can I host an event at Onix Mall?', a: 'Submit a request through our Events page or contact the mall management directly.' },
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">Get In <span className="text-gradient-gold">Touch</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Have questions? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-display text-2xl text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input type="email" placeholder="Email Address" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <input type="text" placeholder="Subject" required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <textarea placeholder="Your Message" required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                <button type="submit" className="w-full bg-gradient-gold text-primary-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity shadow-gold">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6 space-y-4">
              <h2 className="font-display text-2xl text-foreground">Contact Info</h2>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Head Office</p>
                  <p>Tower A, Onix Business Park, BKC, Mumbai, Maharashtra 400051</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p>+91 22 6789 0000</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p>info@onixmall.in</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-display text-2xl text-foreground mb-4 flex items-center gap-2">
                <HelpCircle size={22} className="text-primary" /> FAQ
              </h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-md overflow-hidden">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-3 text-sm text-left text-foreground hover:bg-muted/30 transition-colors">
                      <span>{faq.q}</span>
                      {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaq === i && (
                      <div className="px-3 pb-3 text-sm text-muted-foreground">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
