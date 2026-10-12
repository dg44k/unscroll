import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingDown, RefreshCw, Award, Heart, ShieldAlert, Sparkles } from 'lucide-react';
import { PerspectiveCard } from '../components/PerspectiveCard';
import { AnimatedSection } from '../components/AnimatedSection';

export const SolutionWidget: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Постепенность без стресса',
      desc: 'Ежедневная норма снижается плавно (на 1, 10 или 30 минут) к цели, которую подросток выбирает сам.',
      icon: TrendingDown,
      color: '#00F0FF',
      accent: '#E0FCFF'
    },
    {
      num: '02',
      title: 'Осмысленные замены ленты',
      desc: 'Вместо ленты — чтение, движение, изучение слов в Duolingo, рисование и живые дела.',
      icon: RefreshCw,
      color: '#18F870',
      accent: '#E5FFE9'
    },
    {
      num: '03',
      title: 'Награда за реальные действия',
      desc: 'Монетки не выдаются за победу над лентой. Монетки зарабатываются за реальные дела, фокус и офлайн-активность.',
      icon: Award,
      color: '#FFE600',
      accent: '#FFFDE0'
    },
    {
      num: '04',
      title: 'Восстановление без стыда и вины',
      desc: 'При срыве серия не сгорает. Unscroll включает День рефлексии с ИИ-наставником и зовёт друзей на помощь.',
      icon: Heart,
      color: '#FF007A',
      accent: '#FFE6F2'
    }
  ];

  return (
    <AnimatedSection id="solution" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div id="problem" className="mb-20 sm:mb-28 pt-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFE6F2] text-[#C9005E] border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-xs font-black uppercase tracking-wider mb-4">
              Контекст и вызов рынка
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c0d1c] tracking-tight mb-4">
              Бесконечная лента забирает время. Но просто запретить её — недостаточно.
            </h2>
            <p className="text-base sm:text-lg text-[#0c0d1c]/80 font-semibold leading-relaxed">
              Когда хочется отвлечься от усталости, скуки или стресса, рука сама тянется к телефону. Обычное ограничение может остановить скроллинг, но не предлагает, чем заменить привычку и как вернуться к делам.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PerspectiveCard depth={15} glowColor="rgba(255, 0, 122, 0.35)" className="p-5 sm:p-8 bg-[#FFF2F6] border-3 sm:border-4 border-[#0c0d1c]">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFE6F2] text-[#C9005E] border-2 border-[#0c0d1c] text-[11px] font-black uppercase mb-4">
                Ловушка дофамина
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-black text-[#0c0d1c] mb-2 sm:mb-3">
                Бесконечный скроллинг
              </h3>
              <p className="text-xs sm:text-sm text-[#0c0d1c]/80 font-bold leading-relaxed">
                Короткие видео и алгоритмические ленты незаметно превращаются в 4–6 часов экранного тумана каждый день.
              </p>
            </PerspectiveCard>

            <PerspectiveCard depth={15} glowColor="rgba(255, 230, 0, 0.35)" className="p-5 sm:p-8 bg-[#FFFEEB] border-3 sm:border-4 border-[#0c0d1c]">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFFDE0] text-[#8A7500] border-2 border-[#0c0d1c] text-[11px] font-black uppercase mb-4">
                Сломанный UX блокировок
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-black text-[#0c0d1c] mb-2 sm:mb-3">
                Запрет вместо альтернативы
              </h3>
              <p className="text-xs sm:text-sm text-[#0c0d1c]/80 font-bold leading-relaxed">
                Заблокировать приложение просто, но жесткий «кирпич» вызывает раздражение и не даёт занятия, которое действительно хочется выбрать.
              </p>
            </PerspectiveCard>

            <PerspectiveCard depth={15} glowColor="rgba(0, 240, 255, 0.35)" className="p-5 sm:p-8 bg-[#EDFCFF] border-3 sm:border-4 border-[#0c0d1c]">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E0FCFF] text-[#007F99] border-2 border-[#0c0d1c] text-[11px] font-black uppercase mb-4">
                Токсичный контроль
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-black text-[#0c0d1c] mb-2 sm:mb-3">
                Давление вместо поддержки
              </h3>
              <p className="text-xs sm:text-sm text-[#0c0d1c]/80 font-bold leading-relaxed">
                Срыв превращается в стыд, штрафы и обнуление серии. Человек разочаровывается в себе и возвращается в ленту.
              </p>
            </PerspectiveCard>
          </div>
        </div>

        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E5FFE9] text-[#008A2E] border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-xs font-black uppercase tracking-wider mb-4">
              Основная парадигма Unscroll
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c0d1c] tracking-tight mb-4">
              Меньше скроллинга. Больше жизни вне экрана.
            </h2>
            <p className="text-base sm:text-lg text-[#0c0d1c]/80 font-semibold leading-relaxed">
              Unscroll помогает постепенно сокращать время в бесконечных лентах. Вместо пустого скроллинга — реальные дела, фокус, хобби и общение. А рядом растёт цифровой друг, который поддерживает, когда трудно.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => {
              const IconComp = p.icon;
              return (
                <PerspectiveCard
                  key={p.num}
                  depth={18}
                  glowColor={p.color}
                  className="p-5 sm:p-8 bg-white border-3 sm:border-4 border-[#0c0d1c] flex flex-col justify-between min-w-0"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-heading text-4xl font-black text-[#0c0d1c]/25">
                        {p.num}
                      </span>
                      <div 
                        className="w-13 h-13 rounded-2xl border-[2.5px] border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] flex items-center justify-center text-[#0c0d1c]"
                        style={{ backgroundColor: p.color }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-black text-[#0c0d1c] mb-2 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0c0d1c]/80 font-bold leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-[#0c0d1c]/10 flex items-center gap-1.5 text-xs font-black text-[#0c0d1c]">
                    <CheckCircle2 className="w-4 h-4 text-[#009E38]" />
                    <span>Проверенная механика</span>
                  </div>
                </PerspectiveCard>
              );
            })}
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
};
