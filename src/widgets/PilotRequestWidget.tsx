import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, CheckCircle2, Sparkles, DollarSign } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export const PilotRequestWidget: React.FC = () => {
  return (
    <AnimatedSection id="pilot" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="unscroll-card-rainbow p-5 sm:p-10 lg:p-16 bg-gradient-to-br from-white via-[#FFFDF5] to-[#FFF0F7] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#FFE600]/30 via-[#FF007A]/20 to-[#00F0FF]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#FFE6F2] text-[#C9005E] border-2 border-[#0c0d1c] text-[11px] sm:text-xs font-black uppercase tracking-wider">
                  Инвестиционный запрос
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#E5FFE9] text-[#008A2E] border-2 border-[#0c0d1c] text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Pilot · 4 месяца</span>
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black text-[#0c0d1c] tracking-tight mb-3 sm:mb-4 break-words">
                Помогите нам сделать цифровые привычки осознаннее.
              </h2>

              <p className="text-xs sm:text-lg text-[#0c0d1c]/80 font-semibold leading-relaxed mb-6 sm:mb-8">
                Unscroll — это попытка создать для подростков цифровую среду, в которой остаются общение, самовыражение и игровой интерес, но нет необходимости бесконечно листать ленту.
              </p>

              <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-[#0c0d1c]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#009E38] flex-shrink-0" />
                  <span>4 месяца пилотного тестирования в партнерских школах и лицеях</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-[#0c0d1c]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#009E38] flex-shrink-0" />
                  <span>Полнофункциональное мобильное приложение с нативным перехватом</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-[#0c0d1c]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#009E38] flex-shrink-0" />
                  <span>Участие детских психологов и проверка метрик снижения экранного времени</span>
                </div>
              </div>

              <a
                href="#contact"
                className="unscroll-btn-yellow px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-lg inline-flex items-center gap-3 cursor-pointer shadow-[0_5px_0_0_#0c0d1c]"
              >
                <span>Обсудить запуск пилота</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-5 sm:p-8 rounded-3xl border-3 sm:border-4 border-[#0c0d1c] shadow-[0_8px_0_0_#0c0d1c,0_20px_35px_rgba(255,0,122,0.18)] text-center relative overflow-hidden">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0c0d1c]/60 block mb-2">
                  Бюджет пилотной фазы
                </span>
                
                <div className="font-heading text-4xl sm:text-6xl font-black text-[#FF007A] tracking-tight mb-2 sm:mb-3">
                  $131 336
                </div>

                <p className="text-xs sm:text-sm font-bold text-[#0c0d1c]/80 leading-relaxed mb-6">
                  Запрос на пилотную фазу (4 месяца работы команды, пилотные школы, запуск бета-тестирования)
                </p>

                <div className="grid grid-cols-2 gap-3 pt-6 border-t-2 border-[#0c0d1c]/10 text-left">
                  <div className="bg-[#F8FAFF] p-3 rounded-xl border-2 border-[#0c0d1c]">
                    <div className="text-[10px] font-black uppercase text-[#0c0d1c]/50">
                      Срок пилота
                    </div>
                    <div className="text-sm font-black text-[#0c0d1c]">
                      4 месяца
                    </div>
                  </div>
                  <div className="bg-[#F8FAFF] p-3 rounded-xl border-2 border-[#0c0d1c]">
                    <div className="text-[10px] font-black uppercase text-[#0c0d1c]/50">
                      Статус кода
                    </div>
                    <div className="text-sm font-black text-[#009E38]">
                      MVP готов
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </AnimatedSection>
  );
};
