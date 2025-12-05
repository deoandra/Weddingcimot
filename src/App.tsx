import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Couple } from "./components/Couple";
import { QuranQuotes } from "./components/QuranQuotes";
import { Story } from "./components/Story";
import { Gallery } from "./components/Gallery";
import { Events } from "./components/Events";
import { Rsvp } from "./components/Rsvp";
import { Gift } from "./components/Gift";
import { Wishes } from "./components/Wishes";
import { Footer } from "./components/Footer";
import { Countdown } from "./components/Countdown";
import { Silk } from "./components/ui/silk";
import { Toaster } from "sonner@2.0.3";

function App() {
  const weddingDate = new Date("2025-12-19T10:00:00");

  return (
    <div className="min-h-screen font-sans text-neutral-200 relative selection:bg-yellow-500 selection:text-black overflow-x-hidden bg-neutral-950">
      {/* Silk Background */}
      <Silk color="#d4af37" className="opacity-20" />
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none -z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <Navbar />
      <Hero />
      
      <div className="py-24 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="w-px h-16 bg-gradient-to-b from-transparent to-yellow-500/50 mb-6"></span>
            <p className="uppercase tracking-[0.4em] text-yellow-500/60 mb-8 text-xs font-semibold">Counting Down</p>
            <Countdown targetDate={weddingDate} />
            <span className="w-px h-16 bg-gradient-to-t from-transparent to-yellow-500/50 mt-6"></span>
          </div>
        </div>
      </div>

      <QuranQuotes />
      <Couple />
      <Story />
      <Gallery />
      <Events />
      <Gift />
      <Wishes />
      <Rsvp />
      <Footer />
      <Toaster 
        position="bottom-center" 
        toastOptions={{
          style: {
            background: '#0a0a0a',
            color: '#e5e5e5',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            fontFamily: 'serif'
          }
        }}
      />
    </div>
  );
}

export default App;
