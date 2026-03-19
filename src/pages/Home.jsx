import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { MapPin, Wifi, Battery, Coffee, ShieldCheck, Clock, Phone, Mail } from 'lucide-react';
import deluxeImg from '../assets/deluxe.jpg';

import heroImg from '../assets/hero.jpg';
import standardImg from '../assets/standard.jpg';
import restaurantImg from '../assets/restaurant.jpg';

const Home = ({ onBookNow }) => {
  const highlights = [
    { icon: <MapPin className="text-primary" />, title: 'Prime Location', desc: '6 mins walk to Hill Temple steps & Winch station.' },
    { icon: <Wifi className="text-primary" />, title: 'Free Wi-Fi', desc: 'High-speed internet access in all rooms.' },
    { icon: <Battery className="text-primary" />, title: 'Power Backup', desc: '24/7 uninterrupted power for your comfort.' },
    { icon: <Coffee className="text-primary" />, title: 'Restaurant', desc: 'Delicious in-house dining with local flavors.' },
    { icon: <ShieldCheck className="text-primary" />, title: '24/7 Security', desc: 'Advanced CCTV and round-the-clock staff.' },
    { icon: <Clock className="text-primary" />, title: 'Always Ready', desc: '24-hour reception and room assistance.' },
  ];

  return (
    <div id="home" className="bg-white">
      <Hero />

      {/* Highlights Section */}
      <section id="facilities" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3"
          >
            Why Choose Mayura
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-secondary-dark"
          >
            Excellence in Hospitality
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="p-3 bg-white shadow-md rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-dark">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rooms Teaser */}
      <section id="rooms-teaser" className="py-24 bg-secondary-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Our Sanctuary</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Elegance Redefined</h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                From our Valley View Deluxe rooms to our cozy family suites, every corner of Mayura Residency is designed to be your home away from home. Cleanliness and comfort are our top priorities.
              </p>
              <ul className="space-y-4 mb-12">
                {['Premium King Size Beds', 'Valley & Temple View Windows', 'Modern Bathroom Facilities', 'Satellite LED Television'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/rooms" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105 transform">
                Explore All Rooms
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                <img src={deluxeImg} alt="Deluxe Room" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Moments at Mayura</p>
            <h2 className="text-4xl font-serif font-bold text-secondary-dark">Photo Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[heroImg, deluxeImg, standardImg, restaurantImg, heroImg, deluxeImg].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Our Location</p>
              <h2 className="text-4xl font-serif font-bold text-secondary-dark mb-6">Easy to Find, Easier to Love</h2>
              <div className="space-y-6 text-gray-500 text-lg mb-8">
                <p>Located in the heart of Adivaram, Palani, we are just a few steps away from the sacred Hill Temple steps.</p>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 italic">
                  "Only 6 minutes walking distance to the temple entrance!"
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-secondary-dark">Address</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  14 a, Jawahar street, near Hill temple,<br />
                  Adivaram, Giri Veethi, Palani,<br />
                  Tamil Nadu 624601
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.824445065723!2d77.51439217481304!3d10.44138348968775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9df9f401e7e89%3A0xf8c9f2c061800dd5!2sMAYURA%20Residency!5e1!3m2!1sen!2sin!4v1773903196867!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Reach Out to Us</h2>
              <p className="text-gray-400 text-lg mb-12">
                Have questions about your stay or need assistance with your pilgrimage planning? Our team is available 24/7 to help you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Our Address</h4>
                    <p className="text-gray-400 text-sm">14 a, Jawahar street, near Hill temple, Adivaram, Giri Veethi, Palani, TN 624601</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Reception Hours</h4>
                    <p className="text-gray-400 text-sm">24 Hours / 7 Days a week</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email Us</h4>
                    <p className="text-gray-400 text-sm">contact@mayuraresidency.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-[3.5rem] shadow-2xl"
              >
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Direct Reservations</h3>
                <p className="text-gray-400 mb-8 border-l-2 border-primary pl-4">
                  Call us directly and mention "Direct Booking" to avail our <span className="text-primary font-bold">10% special discount</span> for pilgrims.
                </p>
                <div className="space-y-6">
                  <a 
                    href="tel:+919751110801"
                    className="flex items-center justify-between p-6 bg-white rounded-3xl group hover:bg-primary transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white">
                        <Phone size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-white/70">Call Now</span>
                        <span className="text-xl font-bold text-secondary-dark group-hover:text-white">+91 97511 10801</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-white/30 group-hover:text-white">
                      <Clock size={16} />
                    </div>
                  </a>
                  
                  <button 
                    onClick={onBookNow}
                    className="w-full bg-primary hover:bg-primary-dark text-white py-6 rounded-3xl font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center space-x-3"
                  >
                    <span>Check Room Availability</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
