import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  life: number;
  opacity: number;
  size: number;
}

export const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add new particle
      if (particlesRef.current.length < 20) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          life: 1,
          opacity: 1,
          size: Math.random() * 3 + 2
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Create explosion effect
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const velocity = Math.random() * 50 + 20;
        particlesRef.current.push({
          x: e.clientX + Math.cos(angle) * velocity,
          y: e.clientY + Math.sin(angle) * velocity,
          life: 1,
          opacity: 1,
          size: Math.random() * 5 + 3
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life -= 0.02;
        particle.opacity = particle.life;
        
        if (particle.life <= 0) return false;

        // Draw star particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = '#33d1ff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#33d1ff';
        
        // Draw star shape
        const x = particle.x;
        const y = particle.y;
        const size = particle.size;
        
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
          const x1 = x + Math.cos(angle) * size;
          const y1 = y + Math.sin(angle) * size;
          const x2 = x + Math.cos(angle + Math.PI / 5) * size * 0.5;
          const y2 = y + Math.sin(angle + Math.PI / 5) * size * 0.5;
          
          if (i === 0) {
            ctx.moveTo(x1, y1);
          } else {
            ctx.lineTo(x1, y1);
          }
          ctx.lineTo(x2, y2);
        }
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
        
        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};