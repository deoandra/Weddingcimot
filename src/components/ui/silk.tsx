import React, { useRef, useEffect } from "react";

interface SilkProps {
  color?: string;
  className?: string;
}

export const Silk: React.FC<SilkProps> = ({
  color = "#d4af37",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let time = 0;
    
    // Wave parameters
    const lines = 15;
    const amplitude = 30; // height of wave
    const frequency = 0.002; // width of wave
    const speed = 0.005; // speed of animation

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 212, g: 175, b: 55 }; // Default gold
    };

    const rgb = hexToRgb(color);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Gentle floating animation
      time += speed;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        // Varying opacity for depth
        const alpha = 0.03 + (i / lines) * 0.05;
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
        ctx.lineWidth = 1;

        // Draw flowing lines
        for (let x = 0; x <= width; x += 10) {
          // Complex wave formula for "silk" look
          const y = height / 2 
            + Math.sin(x * frequency + time + i * 0.2) * amplitude * Math.sin(time * 0.5) 
            + Math.cos(x * frequency * 0.5 + time * 0.8) * amplitude * 0.5
            + (i - lines / 2) * 20; // Spread lines vertically

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none -z-10 ${className}`}
    />
  );
};
