import { useEffect, useRef } from 'react';

const InteractiveCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => {
      cursor.style.transform = `translate(-50%, -50%) scale(0.8)`;
      trail.style.transform = `translate(-50%, -50%) scale(1.2)`;
    };

    const handleMouseUp = () => {
      cursor.style.transform = `translate(-50%, -50%) scale(1)`;
      trail.style.transform = `translate(-50%, -50%) scale(1)`;
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        cursor.style.background = 'rgba(255, 255, 255, 0.8)';
        cursor.style.transform = `translate(-50%, -50%) scale(1.5)`;
        trail.style.transform = `translate(-50%, -50%) scale(2)`;
      }
    };

    const handleMouseLeave = () => {
      cursor.style.background = 'rgba(255, 255, 255, 0.5)';
      cursor.style.transform = `translate(-50%, -50%) scale(1)`;
      trail.style.transform = `translate(-50%, -50%) scale(1)`;
    };

    const animate = () => {
      // Smooth cursor movement
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      // Trail follows with delay
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      trail.style.left = `${trailX}px`;
      trail.style.top = `${trailY}px`;

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Hide on mobile/touch devices
  if ('ontouchstart' in window) return null;

  return (
    <>
      <div
        ref={trailRef}
        className="fixed w-8 h-8 bg-white/20 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-white/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease-out, background 0.2s ease'
        }}
      />
    </>
  );
};

export default InteractiveCursor;