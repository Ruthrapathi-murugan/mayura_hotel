import { X, Phone, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose }) => {
  const partners = [
    { name: 'MakeMyTrip', url: 'https://www.makemytrip.com/hotels/mayura_palani-details-palani.html', color: 'bg-[#e61a23]' },
    { name: 'Agoda', url: 'https://www.agoda.com/mayura-residency/hotel/palani-in.html', color: 'bg-[#873e8d]' },
    { name: 'Booking.com', url: 'https://www.booking.com/hotel/in/mayura-residency-palani.html', color: 'bg-[#003580]' },
    { name: 'Goibibo', url: 'https://www.goibibo.com/hotels/mayura-residency-hotel-in-palani-7740866205792945207/', color: 'bg-[#2276e3]' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-3xl font-serif font-bold mb-2">Book Your Stay</h3>
              <p className="text-white/80">Choose your preferred booking method</p>
            </div>

            <div className="p-8 space-y-6">
              {/* Direct Booking Offer */}
              <div className="bg-primary/5 border-2 border-dashed border-primary/30 rounded-2xl p-6 text-center transform hover:scale-[1.02] transition-transform">
                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  Best Value
                </span>
                <h4 className="text-xl font-bold text-secondary-dark mb-2">Direct Booking Offer</h4>
                <p className="text-secondary mb-4">Get an exclusive <span className="text-primary font-bold">10% Discount</span> on direct phone bookings!</p>
                <a 
                  href="tel:+919751110801" 
                  className="inline-flex items-center space-x-3 bg-secondary-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors"
                >
                  <Phone size={20} />
                  <span>Call +91 97511 10801</span>
                </a>
              </div>

              <div className="relative text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <span className="relative bg-white px-4 text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Or book via partners</span>
              </div>

              {/* Partner Links */}
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${partner.color} text-white p-4 rounded-2xl flex flex-col items-center justify-center space-y-2 hover:opacity-90 transition-opacity shadow-md group`}
                  >
                    <span className="font-bold text-sm tracking-tight">{partner.name}</span>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Safe & Secure Booking</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
