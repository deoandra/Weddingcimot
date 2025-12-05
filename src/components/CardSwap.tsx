import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "./ui/utils";

interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  onCardClick?: (idx: number) => void;
  className?: string;
  children: React.ReactNode;
}

export const CardSwap = ({
  width = 500,
  height = 320,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  skewAmount = 6,
  easing = "elastic",
  onCardClick,
  className,
  children,
}: CardSwapProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const childrenArray = Array.isArray(children) ? (children as React.ReactNode[]) : [children];

  useEffect(() => {
    const start = () => {
      stop();
      timerRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % childrenArray.length);
      }, delay);
    };
    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    if (pauseOnHover && wrapperRef.current) {
      const el = wrapperRef.current;
      const enter = () => stop();
      const leave = () => start();
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      start();
      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
        stop();
      };
    }
    start();
    return () => stop();
  }, [delay, pauseOnHover, childrenArray.length]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]")).reverse();
    const ease = easing === "elastic" ? "elastic.out(1, 0.7)" : "linear";
    cards.forEach((c, i) => {
      const x = i * cardDistance;
      const y = i * verticalDistance;
      gsap.to(c, { x, y, skewY: skewAmount, ease, duration: 0.6 });
    });
  }, [index, cardDistance, verticalDistance, skewAmount, easing]);

  return (
    <div ref={wrapperRef} className={cn("relative select-none", className)} style={{ width, height }}>
      <div className="absolute inset-0">
        {childrenArray.map((child, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              data-card
              className={cn(
                "absolute left-0 top-0 w-full h-full border border-neutral-800 bg-neutral-950",
                active ? "z-30" : "z-20"
              )}
              onClick={() => onCardClick && onCardClick(i)}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSwap;

