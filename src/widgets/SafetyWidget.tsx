import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Heart, Lock, Shield } from 'lucide-react';
import { PerspectiveCard } from '../components/PerspectiveCard';
import { AnimatedSection } from '../components/AnimatedSection';

export const SafetyWidget: React.FC = () => {
  const cards = [
    {
      title: 'Без стыда за срыв',
      desc: 'Близкие и друзья видят лишь карточку «Нужна поддержка», а не подробности экранного времени. Никакого позора.',
      icon: Heart,
      bg: 'bg-[#FF007A]',
      color: '#FFFFFF',
      glow: 'rgba(255, 0, 122, 0.4)'
    },
    {
      title: 'Приватность личных данных',
      desc: 'Семейная группа видит только то, что подросток сам добавил. Дневники и переписки не сливаются родителям.',
      icon: Lock,
      bg: 'bg-[#00F0FF]',
      color: '#0C0D1C',
      glow: 'rgba(0, 240, 255, 0.4)'
    },
    {
      title: 'Безопасность подростков',
      desc: 'Для пользователей младше 16 лет предусмотрено родительское согласие. Встроены проверенные психологические сценарии и контакты доверия.',
      icon: ShieldCheck,
      bg: 'bg-[#18F870]',
      color: '#0C0D1C',
      glow: 'rgba(24, 248, 112, 0.4)'
    }
  ];

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFE6F2] text-[#C9005E] border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-xs font-black uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ценности и безопасность</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c0d1c] tracking-tight mb-4">
            Безопасная цифровая среда без токсичной ленты
          </h2>
          <p className="text-base sm:text-lg text-[#0c0d1c]/80 font-semibold">
            Unscroll сохраняет общение и самовыражение, одновременно помогая подросткам развивать более осознанные привычки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <PerspectiveCard
                key={idx}
                depth={16}
                glowColor={card.glow}
                className="p-5 sm:p-8 bg-[#F8FBFF] border-3 sm:border-4 border-[#0c0d1c] flex flex-col justify-between min-w-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-2xl ${card.bg} border-[2.5px] border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] flex items-center justify-center`}
                      style={{ color: card.color }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black text-[#0c0d1c]/50 uppercase tracking-widest">
                      Принцип 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-black text-[#0c0d1c] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0c0d1c]/80 font-bold leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-[#0c0d1c]/10 flex items-center gap-2 text-xs font-black text-[#0c0d1c]">
                  <CheckCircle2 className="w-4 h-4 text-[#009E38]" />
                  <span>Стандарт безопасности</span>
                </div>
              </PerspectiveCard>
            );
          })}
        </div>

      </div>
    </AnimatedSection>
  );
};
