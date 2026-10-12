import React from 'react';

export type BadgeTone = 'pink' | 'lime' | 'yellow' | 'cyan' | 'purple' | 'slate';

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  icon?: React.ReactNode;
  className?: string;
}

const toneStyles: Record<BadgeTone, { bg: string; text: string; dot: string }> = {
  pink: {
    bg: 'bg-[#FFE6F2]',
    text: 'text-[#C9005E]',
    dot: 'bg-[#FF007A]'
  },
  lime: {
    bg: 'bg-[#E5FFE9]',
    text: 'text-[#008A2E]',
    dot: 'bg-[#00E052]'
  },
  yellow: {
    bg: 'bg-[#FFFDE0]',
    text: 'text-[#8A7500]',
    dot: 'bg-[#FFD000]'
  },
  cyan: {
    bg: 'bg-[#E0FCFF]',
    text: 'text-[#007F99]',
    dot: 'bg-[#00C8E6]'
  },
  purple: {
    bg: 'bg-[#F2E5FF]',
    text: 'text-[#5B00B3]',
    dot: 'bg-[#8A2BE2]'
  },
  slate: {
    bg: 'bg-white',
    text: 'text-[#0c0d1c]',
    dot: 'bg-[#0c0d1c]'
  }
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  tone = 'pink',
  icon,
  className = ''
}) => {
  const style = toneStyles[tone];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-xs font-black tracking-wide ${style.bg} ${style.text} ${className}`}
    >
      {icon ? (
        <span className="flex-shrink-0">{icon}</span>
      ) : (
        <span className={`w-2 h-2 rounded-full ${style.dot}`} />
      )}
      <span>{children}</span>
    </span>
  );
};
