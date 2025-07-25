import React, { ReactNode } from 'react';
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
  const intensityClasses = {
    light: 'bg-white/5 backdrop-blur-sm border-white/10',
    medium: 'bg-white/10 backdrop-blur-md border-white/20',
    strong: 'bg-white/20 backdrop-blur-lg border-white/30'
  };

  return (
    <div className={cn(
      'rounded-xl border shadow-2xl',
      intensityClasses[intensity],
      'hover:bg-white/20 transition-all duration-300',
      'before:absolute before:inset-0 before:rounded-xl before:p-[1px]',
      'before:bg-gradient-to-r before:from-white/20 before:to-transparent',
      'before:-z-10 relative overflow-hidden',
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassmorphismCard;