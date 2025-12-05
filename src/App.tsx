import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
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
import Silk from "./components/Silk";
import { Button } from "./components/ui/button";
import { FancyCard } from "./components/ui/fancy-card";
import { Toaster } from "./components/ui/sonner";
// Using a custom invitation card (no external component)

function App() {
  const weddingDate = new Date("2025-12-19T10:00:00");
  const [opened, setOpened] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const reduceMotion = useReducedMotion();
  const invitee = useMemo(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to");
      if (!to) return "Guest";
      return decodeURIComponent(to).trim() || "Guest";
    } catch {
      return "Guest";
    }
  }, []);

  return (
    <div className="min-h-screen font-sans text-neutral-200 relative selection:bg-yellow-500 selection:text-black overflow-x-hidden bg-neutral-950">
      <Toaster richColors position="top-right" />
      <Silk
        className="fixed inset-0 -z-10"
        color="#7B7481"
        speed={5}
        scale={1}
        noiseIntensity={1.5}
      />
      {/* Texture Overlay */}

      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0.15 : 0.4,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-neutral-950/70 backdrop-blur-sm"
          >
            <FancyCard
              title={`Dear ${invitee},`}
              description="You are invited to the wedding of Dhuha & Nisa"
              imageUrl="https://images.unsplash.com/photo-1763391275169-d686f6d46f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              actionLabel="Open Invitation"
              onAction={() => {
                setOpened(true);
                setPlayAudio(true);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: reduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={
            reduceMotion
              ? { duration: 0.2 }
              : { type: "spring", damping: 30, stiffness: 220 }
          }
        >
          <Hero />
        </motion.div>
      )}

      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? { duration: 0.2 }
              : { type: "spring", damping: 30, stiffness: 220, delay: 0.06 }
          }
          className="py-24 relative z-10"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex flex-col items-center">
              <span className="w-px h-16 bg-gradient-to-b from-transparent to-yellow-500/50 mb-6"></span>
              <p className="uppercase tracking-[0.4em] text-yellow-500/60 mb-8 text-xs font-semibold">
                Counting Down
              </p>
              <Countdown targetDate={weddingDate} />
              <span className="w-px h-16 bg-gradient-to-t from-transparent to-yellow-500/50 mt-6"></span>
            </div>
          </div>
        </motion.div>
      )}

      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            reduceMotion
              ? { duration: 0.2 }
              : { type: "spring", damping: 28, stiffness: 220, delay: 0.12 }
          }
        >
          <QuranQuotes />
          <Couple />
          <Story />
          <Gallery />
          <Events />
          <Gift />
          <Wishes />
          <Rsvp />
          <Footer />
        </motion.div>
      )}
      {playAudio && (
        <iframe
          title="A Thousand Years Piano"
          src="https://www.youtube.com/embed/iZpZDivj6SU?autoplay=1&mute=0&loop=1&playlist=iZpZDivj6SU"
          allow="autoplay"
          style={{ width: 0, height: 0, border: 0 }}
        />
      )}
    </div>
  );
}

export default App;
