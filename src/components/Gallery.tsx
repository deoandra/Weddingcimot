import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BlurText } from "./ui/blur-text";

const images = [
  "https://images.unsplash.com/photo-1763391275169-d686f6d46f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcG9ydHJhaXQlMjBhcnRpc3RpY3xlbnwxfHx8fDE3NjQ5MTgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1684244276932-6ae853774c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwaGFuZHMlMjBob2xkaW5nJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjQ5MTgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1564587081321-62723533e3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZHJlc3MlMjBkZXRhaWx8ZW58MXx8fHwxNzY0ODY0OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1610425303802-f09737e52e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjB0cmFkaXRpb25hbCUyMGJhdGFrfGVufDF8fHx8MTc2NDkxODM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <BlurText 
             text="Our Moments"
             className="justify-center font-serif text-4xl md:text-5xl text-yellow-100/90 mb-4"
           />
           <div className="h-px w-24 bg-yellow-600/30 mx-auto mt-6" />
        </div>

        <div className="max-w-6xl mx-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2}}
          >
            <Masonry gutter="1.5rem">
              {images.map((image, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="overflow-hidden rounded-sm group relative"
                >
                  <img
                    src={image}
                    alt={`Gallery ${i}`}
                    className="w-full block hover:scale-105 transition-transform duration-700 grayscale-[20%] hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-yellow-900/10 transition-colors duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};
