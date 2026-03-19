import { Hotel, Phone, MapPin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = ({ onBookNow }) => {
  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand and About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-primary text-white">
                <Hotel size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight">MAYURA</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium -mt-1 text-primary-light">Residency Palani</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the divine serenity of Palani with a stay at Mayura Residency. Modern comfort just minutes away from the sacred Hill Temple.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-primary w-12 pb-2">Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><HashLink smooth to="/#home" className="hover:text-primary transition-colors">Home</HashLink></li>
              <li><Link to="/rooms" className="hover:text-primary transition-colors">Our Rooms</Link></li>
              <li><HashLink smooth to="/#facilities" className="hover:text-primary transition-colors">Facilities</HashLink></li>
              <li><HashLink smooth to="/#location" className="hover:text-primary transition-colors">Location</HashLink></li>
              <li><HashLink smooth to="/#contact" className="hover:text-primary transition-colors">Contact Us</HashLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-primary w-12 pb-2">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>14 a, Jawahar street, near Hill temple, Adivaram, Giri Veethi, Palani, TN 624601</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+91 097511 10801</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>info@mayuraresidency.com</span>
              </li>
            </ul>
          </div>

          {/* Booking CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-primary w-12 pb-2">Stay</h4>
            <div className="bg-gray-800 p-6 rounded-2xl space-y-4">
              <p className="text-xs text-gray-400">Planning your pilgrimage? Book your stay now for the best rates and temple views.</p>
              <button 
                onClick={onBookNow}
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Mayura Residency Palani. All rights reserved.</p>
          <p className="flex items-center">
            Created by <a href="https://www.ruthradigitalsolutions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold ml-1">Ruthra Digital Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
