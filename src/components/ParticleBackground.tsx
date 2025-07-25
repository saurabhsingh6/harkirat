import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetX?: number;
  targetY?: number;
  active?: boolean;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mousePosRef = useRef<{x: number; y: number} | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          active: false
        });
      }
      
      particlesRef.current = particles;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = null;
    };

    const animate = () => {
      if (!ctx) return;
      
      // Clear with a slight fade effect for trails
      ctx.fillStyle = isDarkMode ? 'rgba(10, 10, 20, 0.2)' : 'rgba(240, 240, 250, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const mousePos = mousePosRef.current;
      
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Mouse interaction
        if (mousePos) {
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = 0.1 * (1 - distance / 100);
            particle.vx += Math.cos(angle) * force;
            particle.vy += Math.sin(angle) * force;
            
            // Limit speed
            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            const maxSpeed = 2;
            if (speed > maxSpeed) {
              particle.vx = (particle.vx / speed) * maxSpeed;
              particle.vy = (particle.vy / speed) * maxSpeed;
            }
            
            particle.active = true;
          } else {
            particle.active = false;
          }
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.active ? particle.size * 1.5 : particle.size, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode 
          ? `rgba(255, 255, 255, ${particle.active ? particle.opacity * 1.5 : particle.opacity})`
          : `rgba(0, 0, 0, ${particle.active ? particle.opacity * 1.5 : particle.opacity})`;
        ctx.fill();
      });
      
      // Connect nearby particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 0.1 * (1 - distance / 100);
            ctx.strokeStyle = isDarkMode 
              ? `rgba(255, 255, 255, ${opacity})`
              : `rgba(0, 0, 0, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    createParticles();
    
    // Add event listeners
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{
        opacity: isDarkMode ? 0.8 : 0.4,
        transition: 'opacity 0.5s ease-in-out'
      }}
    />
  );
};

export default ParticleBackground;