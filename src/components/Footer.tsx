import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-xl text-primary mb-4">Onix Mall India</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              India's premier mall chain, redefining retail experiences across 20 cities with luxury, culture, and innovation.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'About Us', path: '/portfolio' },
                { label: 'Our Malls', path: '/malls' },
                { label: 'Events', path: '/events' },
                { label: 'Leasing', path: '/leasing' },
                { label: 'Careers', path: '/contact' },
              ].map(link => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Support</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Contact Us', path: '/contact' },
                { label: 'Complaints', path: '/complaints' },
                { label: 'FAQ', path: '/contact' },
                { label: 'Terms & Conditions', path: '/terms' },
                { label: 'Privacy Policy', path: '/terms' },
              ].map(link => (
                <Link key={link.label} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Head Office</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Tower A, Onix Business Park, BKC, Mumbai, Maharashtra 400051</span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+91 22 6789 0000</span>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={16} className="text-primary shrink-0" />
                <span>info@onixmall.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Onix Mall India. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
