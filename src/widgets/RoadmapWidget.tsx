import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Rocket, MapPin, Clock } from 'lucide-react';
import { PerspectiveCard } from '../components/PerspectiveCard';
import { AnimatedSection } from '../components/AnimatedSection';

export const RoadmapWidget: React.FC = () => {
  const stage1Items = [
    'Интерактивный 3D-питомец и его остров с анимациями',
    'Стартовый квиз персонализации с 14 животными',
    'Кольцо дневной нормы и учет времени в лентах',
    'Экран перехвата ленты с выбором альтернативных занятий',
    'Капсула фокуса со звуками Lo-Fi и монетизацией дел',
    'ИИ-дневник, День рефлексии и голос питомца в 4 характерах',
    'Группы друзей, общий мир и комната совместного фокуса «Сеть»',
    'Кроссплатформенный адаптивный интерфейс на React/Vite'
  ];

  const stage2Items = [
    'Видеосвязь и live-стримы совместной учёбы в «Сети»',
    'Тематические миры сообщества (музыка, мода, эко-сад)',
    'Коллаборации с образовательными сервисами (Duolingo, Stepik)',
    'Реальная помощь животным из Красной книги и приютам за часы фокуса',
    'Родительская подписка в Google Play и App Store',
    'Партнерство со школами как здоровая альтернатива запрещенным соцсетям'
  ];

  return (
    <AnimatedSection id="roadmap" className="py-20 sm:py-28 bg-gradient-to-b from-[#F4F9FF] via-[#FFF5FA] to-[#F4F9FF] relative overflow-hidden border-y-[3px] border-[#0c0d1c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFDE0] text-[#8A7500] border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-xs font-black uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Траектория стартапа</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c0d1c] tracking-tight mb-4">
            Что уже сделано и дальнейшие горизонты
          </h2>
          <p className="text-base sm:text-lg text-[#0c0d1c]/80 font-semibold">
            Четкий план реализации от готового демо до полноценного продукта.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <PerspectiveCard
            depth={16}
            glowColor="rgba(24, 248, 112, 0.4)"
            className="p-5 sm:p-8 bg-[#F2FFF5] border-3 sm:border-4 border-[#0c0d1c] shadow-[0_8px_0_0_#0c0d1c] min-w-0"
          >
            <div className="flex items-center justify-between pb-6 border-b-2 border-[#0c0d1c]/10 mb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#18f870] border-2 border-[#0c0d1c] text-[10px] font-black uppercase text-[#0c0d1c] shadow-[0_2px_0_0_#0c0d1c]">
                  Фаза 1
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-black text-[#0c0d1c] mt-2">
                  ГОТОВО К ПОКАЗУ (Демо на 16–17 октября 2026)
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white border-[2.5px] border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] flex items-center justify-center text-[#008A2E]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-3">
              {stage1Items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-5 h-5 rounded-md bg-[#18f870] border border-[#0c0d1c] flex items-center justify-center flex-shrink-0 text-[#0c0d1c]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0c0d1c]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </PerspectiveCard>

          <PerspectiveCard
            depth={16}
            glowColor="rgba(0, 240, 255, 0.4)"
            className="p-5 sm:p-8 bg-[#EDFCFF] border-3 sm:border-4 border-[#0c0d1c] shadow-[0_8px_0_0_#0c0d1c] min-w-0"
          >
            <div className="flex items-center justify-between pb-6 border-b-2 border-[#0c0d1c]/10 mb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#00F0FF] border-2 border-[#0c0d1c] text-[10px] font-black uppercase text-[#0c0d1c] shadow-[0_2px_0_0_#0c0d1c]">
                  Фаза 2
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-black text-[#0c0d1c] mt-2">
                  В ПЛАНАХ (После защиты и получения гранта)
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white border-[2.5px] border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] flex items-center justify-center text-[#007F99]">
                <Rocket className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-3">
              {stage2Items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-5 h-5 rounded-md bg-[#00F0FF] border border-[#0c0d1c] flex items-center justify-center flex-shrink-0 text-[#0c0d1c]">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0c0d1c]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </PerspectiveCard>

        </div>

      </div>
    </AnimatedSection>
  );
};
