import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2, Split } from 'lucide-react';
import { PerspectiveCard } from '../components/PerspectiveCard';
import { AnimatedSection } from '../components/AnimatedSection';

export const ComparisonWidget: React.FC = () => {
  const points = [
    {
      aspect: 'Подход к ограничению',
      bad: 'Агрессивный запрет («Кирпич», вызывает злость и попытки взлома)',
      good: 'Осознанная замена («Ты устал или есть энергия?» + полезные занятия)'
    },
    {
      aspect: 'Реакция на срыв',
      bad: 'Наказание, сгорание серии, чувство стыда и вины',
      good: 'День рефлексии с ИИ-другом, сохранение серии, поддержка друзей'
    },
    {
      aspect: 'Эмоциональная связь',
      bad: 'Сухие графики минут и монотонные таймеры',
      good: 'Живой питомец-тамагочи, который растет от твоей дисциплины'
    },
    {
      aspect: 'Экономика наград',
      bad: 'Награды за «неделание» или их полное отсутствие',
      good: 'Монетки строго за реальные дела, фокус, книги и спорт'
    },
    {
      aspect: 'Социальный фактор',
      bad: 'Одинокая борьба с алгоритмами IT-гигантов',
      good: 'Общий мир, где друзья и родители держат норму вместе'
    }
  ];

  return (
    <AnimatedSection id="comparison" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFDE0] text-[#8A7500] border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-xs font-black uppercase tracking-wider mb-4">
            <Split className="w-3.5 h-3.5" />
            <span>Отличие от альтернатив</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c0d1c] tracking-tight mb-4">
            Не очередной блокировщик. Другая модель цифровых привычек.
          </h2>
          <p className="text-base sm:text-lg text-[#0c0d1c]/80 font-semibold leading-relaxed">
            Unscroll не ограничивается подсчётом минут. Он помогает заменить привычку, сохранить мотивацию и подключить к изменениям близких.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <PerspectiveCard
            depth={15}
            glowColor="rgba(255, 0, 122, 0.3)"
            className="p-4 sm:p-8 bg-[#FFF5F8] border-3 sm:border-4 border-[#0c0d1c]"
          >
            <div className="flex items-center gap-3 pb-5 border-b-2 border-[#0c0d1c]/10 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#FFE6F2] border-2 border-[#0c0d1c] flex items-center justify-center text-[#FF007A] shadow-[0_2px_0_0_#0c0d1c]">
                <XCircle className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-base sm:text-xl font-black text-[#0c0d1c] break-words">
                  Традиционные блокировщики экрана
                </h3>
                <span className="text-[11px] sm:text-xs font-black text-[#FF007A] uppercase tracking-wider">
                  Штрафы и запреты
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="mt-1 w-5 h-5 rounded-lg bg-[#FFE6F2] border border-[#0c0d1c] flex items-center justify-center flex-shrink-0 text-[#FF007A]">
                    <XCircle className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0c0d1c]/60 mb-0.5">
                      {pt.aspect}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#0c0d1c]/80 leading-relaxed break-words">
                      {pt.bad}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PerspectiveCard>

          <PerspectiveCard
            depth={20}
            glowColor="rgba(24, 248, 112, 0.45)"
            className="p-4 sm:p-8 bg-gradient-to-b from-[#EFFFF2] via-[#F6FFF8] to-white border-3 sm:border-4 border-[#0c0d1c] shadow-[0_8px_0_0_#0c0d1c] sm:shadow-[0_12px_0_0_#0c0d1c]"
          >
            <div className="flex items-center gap-3 pb-5 border-b-2 border-[#0c0d1c]/10 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#18f870] border-2 border-[#0c0d1c] flex items-center justify-center text-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-base sm:text-xl font-black text-[#0c0d1c] break-words">
                  Unscroll (Новый подход)
                </h3>
                <span className="text-[11px] sm:text-xs font-black text-[#009E38] uppercase tracking-wider">
                  Поддержка и рост
                </span>
              </div>
            </div>

            <div className="space-y-5">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-lg bg-[#18f870] border border-[#0c0d1c] flex items-center justify-center flex-shrink-0 text-[#0c0d1c]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-[#008A2E] mb-0.5">
                      {pt.aspect}
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-[#0c0d1c] leading-relaxed">
                      {pt.good}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PerspectiveCard>

        </div>

      </div>
    </AnimatedSection>
  );
};
