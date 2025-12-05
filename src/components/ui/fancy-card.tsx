import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "./utils";
import { Button } from "./button";

interface FancyCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  children?: ReactNode;
}

export function FancyCard({
  title,
  subtitle,
  description,
  imageUrl,
  actionLabel,
  onAction,
  className,
  children,
}: FancyCardProps) {
  const reduceMotion = useReducedMotion();
  const timing = reduceMotion
    ? { duration: 0.2 }
    : { type: "spring", damping: 26, stiffness: 230 };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: reduceMotion ? 1 : 0.98,
      y: reduceMotion ? 0 : 12,
    },
    show: { opacity: 1, scale: 1, y: 0 },
    exit: {
      opacity: 0,
      scale: reduceMotion ? 1 : 0.98,
      y: reduceMotion ? 0 : -12,
    },
    hover: reduceMotion ? {} : { y: -1, scale: 1.01 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 6 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? {}
        : { staggerChildren: 0.035, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 6 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      whileHover="hover"
      transition={timing}
      role="dialog"
      aria-labelledby="fancycard-title"
      className={cn(
        "group relative w-[min(92vw,720px)] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-[0_10px_20px_rgba(0,0,0,0.35)]",
        "focus-within:ring-2 focus-within:ring-yellow-600/40",
        className
      )}
    >
      {imageUrl && (
        <motion.img
          src={imageUrl}
          alt=""
          initial={{ scale: reduceMotion ? 1 : 1.02, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          whileHover={reduceMotion ? {} : { scale: 1.04 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.8, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_30%,rgba(234,179,8,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <motion.div
        className="relative z-10 p-8 text-center"
        variants={contentVariants}
        initial="hidden"
        animate="show"
        transition={timing}
      >
        <motion.div
          variants={itemVariants}
          className="text-yellow-600 text-[10px] uppercase tracking-[0.3em] font-bold mb-3"
        >
          Invitation
        </motion.div>
        <motion.h3
          id="fancycard-title"
          variants={itemVariants}
          className="font-serif text-3xl md:text-4xl text-yellow-100 mb-2"
        >
          {title}
        </motion.h3>
        {subtitle && (
          <motion.div
            variants={itemVariants}
            className="text-yellow-500/80 mb-1 font-serif"
          >
            {subtitle}
          </motion.div>
        )}
        {description && (
          <motion.p
            variants={itemVariants}
            className="text-neutral-400 mb-6 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children}
        {actionLabel && (
          <motion.div variants={itemVariants}>
            <Button
              onClick={onAction}
              className="mt-4 px-6 py-3 border border-yellow-700/50 text-yellow-500 text-[10px] uppercase tracking-[0.2em] hover:bg-yellow-700/10 focus-visible:ring-yellow-600/40 transition-transform duration-200 will-change-transform active:scale-[0.98]"
              variant="outline"
            >
              {actionLabel}
            </Button>
          </motion.div>
        )}
      </motion.div>
      <div className="absolute inset-0 pointer-events-none transition-all duration-200 group-hover:rounded-2xl">
        <div className="absolute inset-0 ring-1 ring-yellow-900/20" />
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-yellow-600/40" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-yellow-600/40" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-yellow-600/40" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-yellow-600/40" />
      </div>
    </motion.div>
  );
}
