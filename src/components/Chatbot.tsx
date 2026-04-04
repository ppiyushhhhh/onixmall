import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Car, HelpCircle, MapPin, Clock, Phone, ChevronRight } from 'lucide-react';
import { malls } from '@/data/malls';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  options?: QuickOption[];
}

interface QuickOption {
  label: string;
  action: string;
}

// Simulated parking data generator
function getParkingData(mallId: string) {
  const mall = malls.find(m => m.id === mallId);
  if (!mall) return null;
  const capacity = mall.parkingCapacity;
  const occupied = Math.floor(capacity * (0.4 + Math.random() * 0.5));
  const available = capacity - occupied;
  const percent = Math.round((occupied / capacity) * 100);
  return { capacity, occupied, available, percent, mallName: mall.name };
}

const FAQ_RESPONSES: Record<string, { answer: string; options?: QuickOption[] }> = {
  hours: {
    answer: "Most Onix Malls operate from **10:00 AM to 10:00 PM** daily. Some food courts and entertainment zones stay open until 11:00 PM. Individual store timings may vary.",
    options: [
      { label: '🅿️ Check parking', action: 'parking_select' },
      { label: '📍 Find a mall', action: 'find_mall' },
    ],
  },
  parking_info: {
    answer: "All Onix Malls offer multi-level parking with CCTV surveillance. Rates are typically ₹30–50 for the first 2 hours and ₹20/hour after. EV charging stations are available at select locations.",
    options: [
      { label: '🅿️ Live availability', action: 'parking_select' },
      { label: '⏰ Mall hours', action: 'hours' },
    ],
  },
  facilities: {
    answer: "Our malls feature:\n• 🎬 Multiplex cinemas\n• 🍽️ Food courts & fine dining\n• 🎮 Entertainment & gaming zones\n• 👶 Kids play areas\n• 🏧 ATMs & currency exchange\n• ♿ Wheelchair accessibility\n• 🛗 Elevators & escalators\n• 🚻 Clean restrooms on every floor\n• 📶 Free Wi-Fi",
    options: [
      { label: '📍 Find a mall', action: 'find_mall' },
      { label: '📞 Contact us', action: 'contact' },
    ],
  },
  contact: {
    answer: "📧 **Email:** info@onixmall.in\n📞 **Phone:** 1800-123-ONIX (toll free)\n🌐 **Website:** onixmall.in\n\nYou can also visit our [Contact Page](/contact) or submit a [Complaint](/complaints).",
    options: [
      { label: '🏢 Mall directory', action: 'find_mall' },
      { label: '⏰ Mall hours', action: 'hours' },
    ],
  },
  find_mall: {
    answer: `We have **${malls.length} malls** across India! Here are some popular ones:\n\n${malls.slice(0, 6).map(m => `• **${m.name}** — ${m.city}, ${m.state}`).join('\n')}\n\n…and ${malls.length - 6} more! Visit our [Mall Directory](/malls) to explore all locations.`,
    options: [
      { label: '🅿️ Check parking', action: 'parking_select' },
      { label: '🎪 Events', action: 'events' },
    ],
  },
  events: {
    answer: "We host exciting events year-round — from fashion shows and live concerts to food festivals and seasonal celebrations! Check our [Events Page](/events) for the latest schedule.\n\nWant to host your own event? Submit a [Leasing Inquiry](/leasing).",
    options: [
      { label: '📍 Find a mall', action: 'find_mall' },
      { label: '📞 Contact us', action: 'contact' },
    ],
  },
  leasing: {
    answer: "Interested in opening a store at Onix Mall? We offer flexible leasing options for retail, F&B, and kiosk spaces.\n\n👉 Submit your inquiry on our [Leasing Page](/leasing) and our team will get back within 48 hours.",
    options: [
      { label: '🏢 Mall directory', action: 'find_mall' },
      { label: '📞 Contact us', action: 'contact' },
    ],
  },
  parking_select: {
    answer: "Which mall would you like to check parking availability for? Select one:",
    options: malls.slice(0, 8).map(m => ({ label: `📍 ${m.city}`, action: `parking_${m.id}` })),
  },
};

function matchIntent(input: string): string {
  const lower = input.toLowerCase();
  if (/park(ing)?|car|vehicle|spot/i.test(lower)) {
    const mall = malls.find(m => lower.includes(m.city.toLowerCase()) || lower.includes(m.id));
    if (mall) return `parking_${mall.id}`;
    return 'parking_select';
  }
  if (/hour|time|open|close|timing/i.test(lower)) return 'hours';
  if (/facilit|ameniti|feature|wifi|atm|cinema|restroom/i.test(lower)) return 'facilities';
  if (/contact|phone|email|call|reach/i.test(lower)) return 'contact';
  if (/mall|location|city|find|where|director/i.test(lower)) return 'find_mall';
  if (/event|show|concert|festival/i.test(lower)) return 'events';
  if (/leas|rent|shop space|store space|brand|open.*(store|shop)/i.test(lower)) return 'leasing';
  if (/hi|hello|hey|good\s?(morning|evening|afternoon)/i.test(lower)) return 'greeting';
  return 'fallback';
}

function getResponse(intent: string): { content: string; options?: QuickOption[] } {
  if (intent === 'greeting') {
    return {
      content: "Hello! 👋 Welcome to **Onix Mall India**. How can I help you today?",
      options: [
        { label: '⏰ Mall hours', action: 'hours' },
        { label: '🅿️ Parking info', action: 'parking_info' },
        { label: '📍 Find a mall', action: 'find_mall' },
        { label: '🏢 Facilities', action: 'facilities' },
      ],
    };
  }

  if (intent.startsWith('parking_') && intent !== 'parking_info' && intent !== 'parking_select') {
    const mallId = intent.replace('parking_', '');
    const data = getParkingData(mallId);
    if (data) {
      const status = data.percent > 85 ? '🔴 Almost Full' : data.percent > 60 ? '🟡 Filling Up' : '🟢 Available';
      return {
        content: `### 🅿️ ${data.mallName} — Parking\n\n**Status:** ${status}\n**Available:** ${data.available} / ${data.capacity} spots\n**Occupancy:** ${data.percent}%\n\n${'█'.repeat(Math.round(data.percent / 5))}${'░'.repeat(20 - Math.round(data.percent / 5))} ${data.percent}%\n\n_Data refreshed just now. Availability changes in real-time._`,
        options: [
          { label: '🔄 Refresh', action: intent },
          { label: '🅿️ Other mall', action: 'parking_select' },
          { label: '⏰ Mall hours', action: 'hours' },
        ],
      };
    }
  }

  const faq = FAQ_RESPONSES[intent];
  if (faq) return { content: faq.answer, options: faq.options };

  return {
    content: "I'm not sure I understand. Could you try rephrasing, or pick one of the options below?",
    options: [
      { label: '⏰ Mall hours', action: 'hours' },
      { label: '🅿️ Parking', action: 'parking_select' },
      { label: '📍 Find a mall', action: 'find_mall' },
      { label: '📞 Contact us', action: 'contact' },
    ],
  };
}

let msgId = 0;
const nextId = () => `msg-${++msgId}`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const { content, options } = getResponse('greeting');
      setMessages([{ id: nextId(), role: 'bot', content, options }]);
    }
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = useCallback((text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: nextId(), role: 'user', content: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const intent = matchIntent(text);
      const { content, options } = getResponse(intent);
      setMessages(prev => [...prev, { id: nextId(), role: 'bot', content, options }]);
    }, 400 + Math.random() * 400);
  }, []);

  const handleQuickAction = useCallback((action: string) => {
    const { content, options } = getResponse(action);
    setMessages(prev => [...prev, { id: nextId(), role: 'bot', content, options }]);
  }, []);

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] flex flex-col bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm font-semibold">Onix Assistant</p>
                <p className="text-xs opacity-80">Online • FAQ & Parking</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 rounded hover:bg-primary-foreground/20 transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${msg.role === 'user' ? '' : ''}`}>
                    <div
                      className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-sm'
                          : 'bg-muted text-foreground rounded-bl-sm'
                      }`}
                    >
                      <ChatContent content={msg.content} />
                    </div>
                    {msg.options && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleQuickAction(opt.action)}
                            className="text-xs px-2.5 py-1.5 rounded-full border border-border bg-card text-foreground hover:bg-muted hover:border-primary/50 transition-colors"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="shrink-0 border-t border-border px-3 py-2">
              <form
                onSubmit={e => { e.preventDefault(); handleSend(input); }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask about parking, hours..."
                  className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/** Simple inline markdown-like renderer for bot messages */
function ChatContent({ content }: { content: string }) {
  const lines = content.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        if (line.startsWith('### ')) return <p key={i} className="font-display font-semibold text-sm">{renderInline(line.slice(4))}</p>;
        if (line.startsWith('• ') || line.startsWith('- ')) return <p key={i} className="pl-2">{renderInline(line)}</p>;
        if (line.trim() === '') return <br key={i} />;
        return <p key={i}>{renderInline(line)}</p>;
      })}
    </div>
  );
}

function renderInline(text: string) {
  // Bold **text** and links [text](url)
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return <a key={i} href={linkMatch[2]} className="underline hover:text-primary">{linkMatch[1]}</a>;
    }
    return part;
  });
}

export default Chatbot;
