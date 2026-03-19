import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X, Hotel, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onBookNow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Facilities', path: '/#facilities' },
    { name: 'Location', path: '/#location' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <div className="fixed w-full z-50 pt-6 px-4 pointer-events-none">
      <nav
        className={`max-w-6xl mx-auto transition-all duration-500 pointer-events-auto rounded-[2rem] border overflow-hidden ${
          scrolled 
            ? 'bg-white/70 backdrop-blur-xl shadow-2xl py-2 px-6 border-white/40' 
            : 'bg-black/10 backdrop-blur-md py-4 px-8 border-white/10'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2.5 rounded-2xl transition-all duration-500 ${scrolled ? 'bg-primary text-white rotate-0' : 'bg-white/20 text-white rotate-12 group-hover:rotate-0'}`}>
              <Hotel size={26} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-serif font-bold tracking-tight leading-none ${scrolled ? 'text-secondary-dark' : 'text-white'}`}>
                MAYURA
              </span>
              <span className={`text-[9px] uppercase tracking-[0.3em] font-bold mt-1 ${scrolled ? 'text-primary' : 'text-primary-light/80'}`}>
                Residency
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const IsHash = link.path.includes('#');
              const Component = IsHash ? HashLink : Link;
              const isActive = location.pathname === (IsHash ? link.path.split('#')[0] : link.path);
              
              return (
                <Component
                  key={link.name}
                  to={link.path}
                  smooth={IsHash ? true : undefined}
                  className={`relative px-5 py-2.5 text-sm font-semibold transition-all rounded-xl ${
                    scrolled 
                      ? (isActive ? 'text-primary bg-primary/5' : 'text-secondary-dark hover:bg-gray-100') 
                      : (isActive ? 'text-white bg-white/20' : 'text-white/80 hover:text-white hover:bg-white/10')
                  }`}
                >
                  {link.name}
                </Component>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+919751110801"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                scrolled ? 'text-secondary-dark hover:bg-gray-100' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone size={18} className="text-primary" />
              <span className="text-xs font-bold tracking-wide">+91 97511 10801</span>
            </a>
            <button 
              onClick={onBookNow}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-2xl text-sm font-extrabold transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${scrolled ? 'bg-gray-100 text-secondary-dark' : 'bg-white/10 text-white'}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={26} /> : <Menu size={26} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="lg:hidden"
            >
              <div className="py-6 px-2 space-y-2 border-t border-gray-100/10">
                {navLinks.map((link) => {
                  const IsHash = link.path.includes('#');
                  const Component = IsHash ? HashLink : Link;
                  return (
                    <Component
                      key={link.name}
                      to={link.path}
                      smooth={IsHash ? true : undefined}
                      className="flex items-center px-6 py-4 text-lg font-bold text-secondary-dark hover:text-primary hover:bg-gray-50 rounded-2xl transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Component>
                  );
                })}
                <div className="pt-6 grid grid-cols-1 gap-4">
                  <a 
                    href="tel:+919751110801"
                    className="flex items-center justify-center space-x-3 bg-gray-50 p-5 rounded-2xl text-secondary-dark font-bold"
                  >
                    <Phone size={20} className="text-primary" />
                    <span>Call Now</span>
                  </a>
                  <button 
                    onClick={onBookNow}
                    className="w-full bg-primary text-white p-5 rounded-2xl font-black text-xl shadow-2xl shadow-primary/30"
                  >
                    Reserve Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
