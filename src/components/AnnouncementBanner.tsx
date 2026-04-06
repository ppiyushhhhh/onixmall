import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Megaphone, AlertTriangle, PartyPopper, Clock } from 'lucide-react';

interface Announcement {
  id: number;
  text: string;
  type: 'info' | 'alert' | 'promo' | 'event';
  mall?: string;
}

const announcements: Announcement[] = [
  { id: 1, text: '🎉 Flat 50% off at Zara, H&M & more — Onix Mall Mumbai!', type: 'promo', mall: 'Mumbai' },
  { id: 2, text: '⚡ Flash Sale starts in 2 hours at Onix Mall Delhi — Don\'t miss out!', type: 'alert', mall: 'Delhi' },
  { id: 3, text: '🎭 Live Music Festival this weekend at Onix Mall Bengaluru', type: 'event', mall: 'Bengaluru' },
  { id: 4, text: '🅿️ Parking Zone B at Onix Mall Pune is now full — use Zone C', type: 'info', mall: 'Pune' },
  { id: 5, text: '🛍️ New store opening: Apple Premium Reseller at Onix Mall Hyderabad', type: 'promo', mall: 'Hyderabad' },
  { id: 6, text: '⚠️ Scheduled maintenance: East wing escalators at Onix Mall Chennai (2–4 PM)', type: 'alert', mall: 'Chennai' },
  { id: 7, text: '🎊 Win ₹1 Lakh shopping vouchers — Spend ₹5000 at any Onix Mall today!', type: 'promo' },
  { id: 8, text: '🍔 Food Court Happy Hour: Buy 1 Get 1 Free at Onix Mall Kolkata (4–6 PM)', type: 'event', mall: 'Kolkata' },
  { id: 9, text: '🚗 Free valet parking this Sunday at all Onix Malls!', type: 'info' },
  { id: 10, text: '✨ Grand Diwali Sale — Up to 70% off across 20 Onix Malls nationwide', type: 'promo' },
];

const typeConfig = {
  info: { icon: Clock, bg: 'bg-primary/10', border: 'border-primary/20', text: 'text-primary' },
  alert: { icon: AlertTriangle, bg: 'bg-destructive/10', border: 'border-destructive/20', text: 'text-destructive' },
  promo: { icon: PartyPopper, bg: 'bg-accent', border: 'border-primary/20', text: 'text-primary' },
  event: { icon: Megaphone, bg: 'bg-secondary', border: 'border-border', text: 'text-foreground' },
};

const AnnouncementBanner = () => {
  const [current, setCurrent] = useState<Announcement>(announcements[0]);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  const simulateUpdate = useCallback(() => {
    const next = announcements[Math.floor(Math.random() * announcements.length)];
    setCurrent(next);
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const interval = setInterval(simulateUpdate, 6000);
    return () => clearInterval(interval);
  }, [dismissed, simulateUpdate]);

  if (dismissed) return null;

  const config = typeConfig[current.type];
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className={`${config.bg} border-b ${config.border} overflow-hidden`}
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <Icon size={14} className={`${config.text} shrink-0`} />
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-foreground truncate"
                >
                  {current.text}
                </motion.p>
              </AnimatePresence>
            </div>
            <button
              onClick={() => { setVisible(false); setDismissed(true); }}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
