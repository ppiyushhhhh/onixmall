import { motion } from 'framer-motion';
import { Shield, Car, AlertTriangle, Scale } from 'lucide-react';

const sections = [
  {
    icon: Shield,
    title: 'Visitor Policies',
    items: [
      'All visitors must follow mall security guidelines and cooperate with security personnel.',
      'Smoking is strictly prohibited inside mall premises except in designated zones.',
      'Pets are not allowed inside the mall except certified service animals.',
      'Mall management reserves the right to deny entry or ask visitors to leave for violation of policies.',
      'Photography and videography for commercial purposes require prior written permission.',
      'Visitors under 14 years must be accompanied by an adult at all times.',
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Security Rules',
    items: [
      'All bags and belongings are subject to security screening at entry points.',
      'Weapons, explosives, and inflammable materials are strictly prohibited.',
      'CCTV surveillance is operational 24/7 across all common areas.',
      'Any suspicious activity must be reported immediately to mall security.',
      'Emergency exits must not be blocked or used except during emergencies.',
      'Fire drills are conducted quarterly; visitors must cooperate during such events.',
    ]
  },
  {
    icon: Car,
    title: 'Parking Guidelines',
    items: [
      'Parking is available on a first-come, first-served basis.',
      'Onix Mall is not responsible for theft, damage, or loss of vehicles or belongings.',
      'Vehicles parked in no-parking zones will be towed at the owner\'s expense.',
      'Valet parking is available at select locations for a nominal fee.',
      'Overnight parking is not permitted without prior authorization.',
      'EV charging stations are available at designated spots.',
    ]
  },
  {
    icon: Scale,
    title: 'Liability Disclaimers',
    items: [
      'Onix Mall India shall not be liable for any personal injury, loss, or damage to personal property.',
      'The mall is not responsible for the quality of products or services offered by individual tenants.',
      'All promotions and offers are subject to terms set by respective brands and stores.',
      'Mall management reserves the right to modify operating hours, policies, and events without prior notice.',
      'By entering the mall premises, visitors agree to these terms and conditions.',
      'Disputes shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.',
    ]
  }
];

const TermsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl text-foreground mb-3">Terms & <span className="text-gradient-gold">Conditions</span></h1>
          <p className="text-muted-foreground">Please review our policies before visiting any Onix Mall location.</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-display text-xl text-foreground flex items-center gap-2 mb-4">
                <section.icon size={22} className="text-primary" /> {section.title}
              </h2>
              <ul className="space-y-2.5">
                {section.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 text-xs text-muted-foreground">
          Last updated: April 2026 · Onix Mall India Pvt. Ltd.
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
