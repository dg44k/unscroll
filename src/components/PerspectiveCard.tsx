import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface PerspectiveCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  depth?: number;
  borderAccent?: string;
}

export const PerspectiveCard: React.FC<PerspectiveCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(255, 0, 122, 0.35)',
  depth = 16,
  borderAccent
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -depth * 0.35;
    const rY = ((x - centerX) / centerX) * depth * 0.35;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.3
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000
      }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`unscroll-card-casual relative overflow-hidden max-w-full min-w-0 ${className}`}
      style={{
        boxShadow: rotateX !== 0 
          ? `0 12px 0 0 #0c0d1c, 0 22px 40px -10px ${glowColor}` 
          : undefined,
        borderColor: borderAccent || '#0c0d1c'
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-200 rounded-[inherit]"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle 240px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.5), transparent 70%)`
        }}
      />
      <div className="relative z-10 w-full h-full min-w-0">
        {children}
      </div>
    </motion.div>
  );
};
