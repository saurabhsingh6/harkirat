import React, { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({ 
  children, 
  className = '',
  intensity = 'medium'
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  const intensityClasses = {
    light: 'bg-white/5 backdrop-blur-sm border-white/10',
    medium: 'bg-white/10 backdrop-blur-md border-white/20',
    strong: 'bg-white/20 backdrop-blur-lg border-white/30'
  };

  const hoverClasses = isDarkMode 
    ? 'hover:bg-white/20 hover:text-white/80' 
    : 'hover:bg-white/30 hover:!text-black';

  return (
    <div 
      className={cn(
        'rounded-xl border shadow-2xl',
        intensityClasses[intensity],
        'transition-all duration-300',
        hoverClasses,
        'before:absolute before:inset-0 before:rounded-xl before:p-[1px]',
        'before:bg-gradient-to-r before:from-white/20 before:to-transparent',
        'before:-z-10 relative overflow-hidden',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
      <div className={cn("relative z-10 transition-colors duration-300", {
        'text-white/80': isDarkMode && !isHovered,
        'text-white': isDarkMode && isHovered,
        'text-black/80': !isDarkMode && !isHovered,
        'text-black': !isDarkMode && isHovered,
      })}>
        {children}
      </div>
    </div>
  );
};

export default GlassmorphismCard;