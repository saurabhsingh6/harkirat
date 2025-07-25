import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.transform = 'none';
              element.style.opacity = '1';
              element.style.filter = 'blur(0px)';
            }, delay);
          }
        });
      },
      { threshold }
    );

    // Set initial state based on animation type
    const initialStyles: Record<string, string> = {
      fadeIn: 'opacity: 0',
      slideUp: 'opacity: 0; transform: translateY(50px)',
      slideLeft: 'opacity: 0; transform: translateX(-50px)',
      slideRight: 'opacity: 0; transform: translateX(50px)',
      scaleIn: 'opacity: 0; transform: scale(0.8)',
      rotateIn: 'opacity: 0; transform: rotate(-10deg) scale(0.9)'
    };

    element.style.cssText = `
      ${initialStyles[animation]};
      transition: all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1);
      filter: blur(4px);
    `;

    observer.observe(element);

    return () => observer.disconnect();
  }, [animation, delay, duration, threshold]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;