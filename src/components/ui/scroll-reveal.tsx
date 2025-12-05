import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollReveal = ({ children, className }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal-hidden transition-all duration-1000 ease-out", className)}
    >
      {children}
    </div>
  );
};
