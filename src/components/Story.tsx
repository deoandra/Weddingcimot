import { motion } from "motion/react";
import { BlurText } from "./ui/blur-text";

export const Story = () => {
  return (
    <section id="story" className="py-24 bg-neutral-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <BlurText
              text="Our Journey"
              className="justify-center font-serif text-4xl md:text-5xl text-yellow-100/90 mb-6"
            />
            <div className="h-px w-24 bg-yellow-600/30 mx-auto" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 font-serif text-xl md:text-2xl text-neutral-400 leading-relaxed font-light"
          >
            <p>
              Our story began in 2022, with a simple swipe that felt like
              destiny.
            </p>
            <p>
              We soon realized our paths had crossed long before, in the same
              college halls.
            </p>
            <p>
              A movie date became our first chapter, and three weeks of
              heartfelt conversations became the beginning of “us.”
            </p>
            <p className="text-yellow-500/80">
              Today, every step we’ve walked leads beautifully to this moment —
              our marriage, our forever.
            </p>
          </motion.div>

          <div className="mt-16 relative h-64 md:h-96 w-full overflow-hidden grayscale-[40%]">
            <img
              src="https://images.unsplash.com/photo-1762440584088-84748a5cfd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBjb3VwbGUlMjBvdXRkb29yfGVufDF8fHx8MTc2NDkwNzIyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              className="w-full h-full object-cover object-center opacity-80"
              alt="Story Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
