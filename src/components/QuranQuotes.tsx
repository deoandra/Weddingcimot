import { ScrollReveal } from "./ui/scroll-reveal";

export const QuranQuotes = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal className="max-w-3xl mx-auto text-center relative">
          {/* Decorative Borders - Top/Bottom */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-yellow-600/30" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-yellow-600/30" />

          <div className="py-12 px-6">
            <h3 className="font-serif text-2xl md:text-3xl text-yellow-100/90 mb-8 leading-relaxed font-light italic">
              "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought."
            </h3>
            
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-yellow-700/30" />
              <p className="text-yellow-600 uppercase tracking-[0.25em] text-xs font-semibold">
                Surah Ar-Rum 30:21
              </p>
              <span className="h-px w-8 bg-yellow-700/30" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
