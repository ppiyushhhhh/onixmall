import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/onix-logo.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Malls', path: '/malls' },
  { label: 'Events', path: '/events' },
  { label: 'Leasing', path: '/leasing' },
  { label: 'Careers', path: '/careers' },
  { label: 'Reports', path: '/annual-reports' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Onix Mall India" className="h-10 md:h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-foreground/80'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/admin" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Admin
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-2 ${location.pathname === link.path ? 'text-primary' : 'text-foreground/80'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/admin" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md text-center">
                Admin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
