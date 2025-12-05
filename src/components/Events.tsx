import { motion } from "motion/react";
import { BlurText } from "./ui/blur-text";

export const Events = () => {
  const events = [
    {
      title: "The Ceremony",
      time: "10:00 AM",
      location: "Maria Pertolongan Orang Kristen",
      address: "Sidikalang, North Sumatera",
      image: "https://images.unsplash.com/photo-1610425303802-f09737e52e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjB0cmFkaXRpb25hbCUyMGJhdGFrfGVufDF8fHx8MTc2NDkxODM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "The Reception",
      time: "12:00 PM",
      location: "Home Sweet Home",
      address: "425 Sisingamangaraja, Sidikalang, North Sumatera",
      image: "https://images.unsplash.com/photo-1564587081321-62723533e3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZHJlc3MlMjBkZXRhaWx8ZW58MXx8fHwxNzY0ODY0OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="events" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <BlurText 
             text="Save The Date"
             className="justify-center font-serif text-4xl md:text-5xl text-yellow-100/90 mb-4"
           />
           <p className="text-neutral-500 text-sm tracking-widest uppercase mt-4">December 19, 2025</p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-neutral-800/50 max-w-6xl mx-auto border border-neutral-800/50">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-neutral-950 p-12 lg:p-16 flex flex-col items-center text-center group overflow-hidden"
            >
              {/* Background Fade Image on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img src={event.image} alt="" className="w-full h-full object-cover grayscale" />
              </div>

              <div className="relative z-10 space-y-6">
                <span className="text-yellow-600 font-mono text-sm tracking-widest">{event.time}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-yellow-100">{event.title}</h3>
                <div className="w-8 h-px bg-neutral-700 mx-auto" />
                <div className="space-y-1">
                  <p className="text-neutral-300 font-medium tracking-wide">{event.location}</p>
                  <p className="text-neutral-600 text-sm max-w-xs mx-auto">{event.address}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
