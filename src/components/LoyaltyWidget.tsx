import { motion } from 'framer-motion';
import { Crown, Gift, ShoppingBag, TrendingUp, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const tiers = [
  { name: 'Silver', min: 0, max: 2500, color: 'from-gray-400 to-gray-500', icon: Star },
  { name: 'Gold', min: 2500, max: 7500, color: 'from-yellow-500 to-amber-600', icon: Crown },
  { name: 'Platinum', min: 7500, max: 15000, color: 'from-cyan-400 to-blue-500', icon: Crown },
  { name: 'Diamond', min: 15000, max: 30000, color: 'from-violet-400 to-purple-600', icon: Crown },
];

const rewards = [
  { icon: ShoppingBag, label: 'Flat 20% Off', desc: 'On partner brands', points: 500 },
  { icon: Gift, label: 'Free Movie Ticket', desc: 'At Onix Cinemas', points: 800 },
  { icon: TrendingUp, label: '2X Points Weekend', desc: 'This Saturday & Sunday', points: 0 },
];

const simulatedUser = {
  name: 'Guest Shopper',
  points: 4280,
  totalSpent: '₹1,42,500',
  visits: 37,
  tierIndex: 1,
};

const LoyaltyWidget = () => {
  const tier = tiers[simulatedUser.tierIndex];
  const nextTier = tiers[simulatedUser.tierIndex + 1];
  const progress = nextTier
    ? ((simulatedUser.points - tier.min) / (nextTier.min - tier.min)) * 100
    : 100;

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl text-foreground">
          Onix <span className="text-gradient-gold">Rewards</span>
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">Earn points every time you shop, dine, or visit</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Tier Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-card border border-border rounded-xl p-6 relative overflow-hidden"
        >
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${tier.color} opacity-10 rounded-bl-full`} />
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
              <tier.icon size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Current Tier</p>
              <p className="font-display text-lg text-foreground">{tier.name} Member</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center bg-secondary/50 rounded-lg p-3">
              <p className="text-2xl font-display text-gradient-gold font-bold">{simulatedUser.points.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Points</p>
            </div>
            <div className="text-center bg-secondary/50 rounded-lg p-3">
              <p className="text-2xl font-display text-foreground font-bold">{simulatedUser.visits}</p>
              <p className="text-xs text-muted-foreground">Visits</p>
            </div>
            <div className="text-center bg-secondary/50 rounded-lg p-3">
              <p className="text-2xl font-display text-foreground font-bold">{simulatedUser.totalSpent}</p>
              <p className="text-xs text-muted-foreground">Total Spent</p>
            </div>
          </div>

          {nextTier && (
            <div>
              <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                <span>{tier.name}</span>
                <span>{nextTier.name} — {(nextTier.min - simulatedUser.points).toLocaleString()} pts away</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </motion.div>

        {/* Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="font-display text-lg text-foreground mb-4">Available Rewards</h3>
          <div className="space-y-4">
            {rewards.map((r, i) => (
              <div key={i} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <r.icon size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{r.label}</p>
                  <p className="text-xs text-muted-foreground">{r.desc}</p>
                </div>
                {r.points > 0 && (
                  <span className="text-xs text-primary font-medium shrink-0">{r.points} pts</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoyaltyWidget;
