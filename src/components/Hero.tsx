import { motion } from "motion/react";
import { ShinyText } from "./ui/shiny-text";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      {/* Background Image with refined gradient */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1763391275169-d686f6d46f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcG9ydHJhaXQlMjBhcnRpc3RpY3xlbnwxfHx8fDE3NjQ5MTgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Couple"
          className="w-full h-full object-cover object-center grayscale-[50%] sepia-[20%]"
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-yellow-500/50" />
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] font-medium text-yellow-500/80">
            The Wedding Of
          </p>
          <div className="h-px w-12 bg-yellow-500/50" />
        </motion.div>

        <div className="mb-10">
           <ShinyText 
             text="Dhuha & Nisa" 
             className="font-[cursive] text-6xl md:text-8xl lg:text-[9rem] font-medium tracking-tight justify-center leading-[1.1]"
             speed={4}
           />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-lg font-light text-neutral-300 tracking-widest uppercase text-sm"
        >
          <span>December 19, 2025</span>
          <span className="hidden md:block w-1.5 h-1.5 bg-yellow-600 rounded-full rotate-45" />
          <span>Sidikalang, North Sumatera</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-yellow-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};
