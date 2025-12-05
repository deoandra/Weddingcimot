import { motion } from "motion/react";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  description: React.ReactNode;
  align?: "left" | "right";
}

export const ProfileCard = ({
  name,
  role,
  image,
  description,
  align = "left",
}: ProfileCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${
        align === "right"
          ? "md:items-end md:text-right"
          : "md:items-start md:text-left"
      } items-center text-center gap-6 group`}
    >
      <div className="relative w-72 h-96 overflow-hidden rounded-sm border border-yellow-900/30">
        <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        {/* Frame corners */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-yellow-600/50 z-20" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-yellow-600/50 z-20" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-yellow-600/50 z-20" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-yellow-600/50 z-20" />
      </div>

      <div className="space-y-3 max-w-sm">
        <div className="flex flex-col gap-1">
          <span className="text-yellow-600 text-[10px] uppercase tracking-[0.3em] font-bold">
            {role}
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-yellow-100">
            {name}
          </h3>
        </div>

        <div
          className={`w-12 h-px bg-yellow-800/50 ${
            align === "right" ? "md:ml-auto" : "md:mr-auto"
          } mx-auto`}
        />

        <div className="text-neutral-400 font-light text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
