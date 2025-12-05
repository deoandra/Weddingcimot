import { useEffect, useRef, useState } from "react";
import { cn } from "./ui/utils";

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number; // px spacing as items stack
  itemScale?: number; // scale increment per item
  baseScale?: number; // starting scale
  stackPosition?: string; // e.g. '20%'
}

export const ScrollStack = ({
  children,
  className = "",
  itemDistance = 30,
  itemScale = 0.03,
  baseScale = 0.85,
  stackPosition = "20%",
}: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onFrame = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = (parseFloat(stackPosition) / 100) * vh;
      const p = Math.min(Math.max((start - rect.top) / (rect.height || 1), 0), 1);
      setProgress(p);
      requestAnimationFrame(onFrame);
    };
    const id = requestAnimationFrame(onFrame);
    return () => cancelAnimationFrame(id);
  }, [stackPosition]);

  const items = Array.isArray(children) ? (children as React.ReactNode[]) : [children];

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div className="relative">
        {items.map((child, i) => {
          const translateY = progress * itemDistance * i;
          const scale = baseScale + progress * itemScale * i;
          const z = 10 + i;
          return (
            <div
              key={i}
              className="will-change-transform"
              style={{
                transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                zIndex: z,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ScrollStackItem = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("mb-8", className)}>{children}</div>;
};

