import React, { useRef, useEffect } from 'react';

export const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = 0;
    let mouseY = 0;
    let animationId: number;

    const waves = [
      { amplitude: 50, frequency: 0.02, speed: 0.01, offset: 0, y: canvas.height * 0.3 },
      { amplitude: 30, frequency: 0.03, speed: 0.015, offset: Math.PI / 2, y: canvas.height * 0.5 },
      { amplitude: 40, frequency: 0.025, speed: 0.012, offset: Math.PI, y: canvas.height * 0.7 },
    ];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(51, 209, 255, ${0.3 - index * 0.1})`;
        ctx.lineWidth = 2;
        
        const mouseInfluence = Math.max(0, 1 - Math.abs(mouseY - wave.y) / 200);
        const currentAmplitude = wave.amplitude * (1 + mouseInfluence * 0.5);
        
        for (let x = 0; x < canvas.width; x++) {
          const distanceFromMouse = Math.abs(x - mouseX);
          const mouseEffect = Math.max(0, 1 - distanceFromMouse / 300);
          const ripple = Math.sin(distanceFromMouse * 0.02 + Date.now() * 0.01) * mouseEffect * 20;
          
          const y = wave.y + 
            Math.sin(x * wave.frequency + Date.now() * wave.speed + wave.offset) * currentAmplitude +
            ripple;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
};