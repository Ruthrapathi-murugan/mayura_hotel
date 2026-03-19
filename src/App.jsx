import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import WhatsAppButton from './components/WhatsAppButton';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onBookNow={openBooking} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onBookNow={openBooking} />} />
            <Route path="/rooms" element={<Rooms onBookNow={openBooking} />} />
          </Routes>
        </main>
        <Footer onBookNow={openBooking} />
        
        {/* Floating Features */}
        <WhatsAppButton />
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </Router>
  );
}

export default App;
