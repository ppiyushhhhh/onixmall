import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Gift, ShoppingBag, TrendingUp, Star, Sparkles, UserPlus, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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

const shopActions = [
  { label: 'Coffee ☕', points: 50, spend: 350 },
  { label: 'Fashion 👗', points: 200, spend: 3500 },
  { label: 'Electronics 📱', points: 500, spend: 12000 },
  { label: 'Dining 🍽️', points: 120, spend: 1800 },
];

const getTierIndex = (points: number) => {
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (points >= tiers[i].min) return i;
  }
  return 0;
};

const formatSpend = (n: number) =>
  '₹' + n.toLocaleString('en-IN');

const LoyaltyWidget = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [points, setPoints] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [visits, setVisits] = useState(0);
  const [earnAnim, setEarnAnim] = useState<{ id: number; pts: number } | null>(null);
  const [redeeming, setRedeeming] = useState<number | null>(null);

  const tierIndex = getTierIndex(points);
  const tier = tiers[tierIndex];
  const nextTier = tiers[tierIndex + 1];
  const progress = nextTier
    ? ((points - tier.min) / (nextTier.min - tier.min)) * 100
    : 100;

  const handleSignUp = () => {
    setSignedUp(true);
    setPoints(500);
    setVisits(1);
    toast.success('Welcome to Onix Rewards! 🎉', { description: 'You earned 500 bonus points for signing up.' });
  };

  const handleShop = useCallback((action: typeof shopActions[0]) => {
    const prevTier = getTierIndex(points);
    const newPoints = points + action.points;
    const newTier = getTierIndex(newPoints);

    setPoints(newPoints);
    setTotalSpent(s => s + action.spend);
    setVisits(v => v + 1);
    setEarnAnim({ id: Date.now(), pts: action.points });
    setTimeout(() => setEarnAnim(null), 1200);

    if (newTier > prevTier) {
      toast.success(`🏆 Tier Upgrade: ${tiers[newTier].name}!`, {
        description: `You've reached ${tiers[newTier].name} status with ${newPoints.toLocaleString()} points!`,
      });
    } else {
      toast(`+${action.points} points earned!`, { description: `Spent ${formatSpend(action.spend)} on ${action.label}` });
    }
  }, [points]);

  const handleRedeem = (reward: typeof rewards[0], i: number) => {
    if (reward.points === 0) {
      toast('🎉 This weekend bonus is automatic!');
      return;
    }
    if (points < reward.points) {
      toast.error('Not enough points', { description: `You need ${reward.points - points} more points.` });
      return;
    }
    setRedeeming(i);
    setTimeout(() => {
      setPoints(p => p - reward.points);
      setRedeeming(null);
      toast.success(`🎁 Redeemed: ${reward.label}`, { description: `${reward.points} points deducted.` });
    }, 600);
  };

  // Not signed up state
  if (!signedUp) {
    return (
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center bg-card border border-border rounded-xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-yellow-500 to-amber-600 opacity-10 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary to-primary/50 opacity-10 rounded-tr-full" />
          <Sparkles className="mx-auto mb-4 text-primary" size={36} />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            Join Onix <span className="text-gradient-gold">Rewards</span>
          </h2>
          <p className="text-muted-foreground mb-2">
            Earn points every time you shop, dine, or visit any Onix Mall across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4 my-6 text-sm text-muted-foreground">
            <span className="bg-secondary/50 rounded-full px-3 py-1">🎁 500 Bonus Points</span>
            <span className="bg-secondary/50 rounded-full px-3 py-1">🎬 Free Movie Tickets</span>
            <span className="bg-secondary/50 rounded-full px-3 py-1">👑 Exclusive Tier Perks</span>
          </div>
          <Button onClick={handleSignUp} size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold gap-2">
            <UserPlus size={18} /> Sign Up & Get 500 Points Free
          </Button>
        </motion.div>
      </section>
    );
  }

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

          {/* Points earn animation */}
          <AnimatePresence>
            {earnAnim && (
              <motion.div
                key={earnAnim.id}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -40 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-4 right-6 text-primary font-bold text-lg pointer-events-none"
              >
                +{earnAnim.pts} ✨
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-3 mb-4">
            <motion.div
              key={tierIndex}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className={`w-10 h-10 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center`}
            >
              <tier.icon size={18} className="text-white" />
            </motion.div>
            <div>
              <p className="text-xs text-muted-foreground">Current Tier</p>
              <p className="font-display text-lg text-foreground">{tier.name} Member</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center bg-secondary/50 rounded-lg p-3">
              <motion.p key={points} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="text-2xl font-display text-gradient-gold font-bold">
                {points.toLocaleString()}
              </motion.p>
              <p className="text-xs text-muted-foreground">Points</p>
            </div>
            <div className="text-center bg-secondary/50 rounded-lg p-3">
              <p className="text-2xl font-display text-foreground font-bold">{visits}</p>
              <p className="text-xs text-muted-foreground">Visits</p>
            </div>
            <div className="text-center bg-secondary/50 rounded-lg p-3">
              <p className="text-xl md:text-2xl font-display text-foreground font-bold">{formatSpend(totalSpent)}</p>
              <p className="text-xs text-muted-foreground">Total Spent</p>
            </div>
          </div>

          {nextTier && (
            <div className="mb-6">
              <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                <span>{tier.name}</span>
                <span>{nextTier.name} — {(nextTier.min - points).toLocaleString()} pts away</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {/* Shop Now Actions */}
          <div>
            <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1"><Zap size={12} className="text-primary" /> Simulate a purchase:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {shopActions.map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  size="sm"
                  onClick={() => handleShop(action)}
                  className="text-xs hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  {action.label}
                  <span className="ml-1 text-primary">+{action.points}</span>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="font-display text-lg text-foreground mb-4">Redeem Rewards</h3>
          <div className="space-y-4">
            {rewards.map((r, i) => (
              <button
                key={i}
                onClick={() => handleRedeem(r, i)}
                disabled={redeeming === i}
                className="flex items-center gap-3 group w-full text-left hover:bg-secondary/30 rounded-lg p-2 -m-2 transition-colors disabled:opacity-50"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <r.icon size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{r.label}</p>
                  <p className="text-xs text-muted-foreground">{r.desc}</p>
                </div>
                {r.points > 0 ? (
                  <span className={`text-xs font-medium shrink-0 ${points >= r.points ? 'text-primary' : 'text-muted-foreground'}`}>
                    {r.points} pts
                  </span>
                ) : (
                  <span className="text-xs text-green-500 font-medium shrink-0">Free</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoyaltyWidget;
