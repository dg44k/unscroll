import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckSquare, 
  Hourglass, 
  BookOpen, 
  Sparkles, 
  Activity, 
  Award,
  Wrench,
  CheckCircle2 
} from 'lucide-react';
import { PerspectiveCard } from '../components/PerspectiveCard';
import { AnimatedSection } from '../components/AnimatedSection';

export const LifeToolsWidget: React.FC = () => {
  const tools = [
    {
      title: 'Расписание дел',
      desc: 'Задачи на сегодня и завтра с четкими приоритетами: «Горит!», «Важно», «Можно потом».',
      icon: CheckSquare,
      bg: 'bg-[#00FF66]',
      glow: 'rgba(0, 255, 102, 0.4)'
    },
    {
      title: 'Капсула фокуса',
      desc: 'Сессии на 15–90 минут. Питомец садится рядом учиться, фоном звучат дождь или Lo-Fi beats.',
      icon: Hourglass,
      bg: 'bg-[#FFE600]',
      glow: 'rgba(255, 230, 0, 0.4)'
    },
    {
      title: 'Слово дня',
      desc: 'Новое слово на выбранном языке каждое утро: карточка, транскрипция, пример и озвучка.',
      icon: Sparkles,
      bg: 'bg-[#00F0FF]',
      glow: 'rgba(0, 240, 255, 0.4)'
    },
    {
      title: 'Дневники с ИИ',
      desc: 'Благодарность за день и рефлексия. ИИ анализирует записи и выдает 5 ключевых мыслей в воскресенье.',
      icon: BookOpen,
      bg: 'bg-[#FF007A]',
      glow: 'rgba(255, 0, 122, 0.4)'
    },
    {
      title: 'Трекер привычек',
      desc: 'Напоминания выпить воды, сделать зарядку, лечь спать вовремя и выйти на свежий воздух.',
      icon: Activity,
      bg: 'bg-[#FF8A00]',
      glow: 'rgba(255, 138, 0, 0.4)'
    },
    {
      title: 'Статистика и бейджи',
      desc: 'Календарь месяца, сэкономленные часы («это целых 4 книги!») и коллекция ачивок.',
      icon: Award,
      bg: 'bg-[#A855F7]',
      glow: 'rgba(168, 85, 247, 0.4)'
    }
  ];

  return (
    <AnimatedSection id="tools" className="py-20 sm:py-28 bg-gradient-to-b from-[#F4F9FF] via-[#FFFDF5] to-[#F4F9FF] relative overflow-hidden border-y-[3px] border-[#0c0d1c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E0FCFF] text-[#007F99] border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-xs font-black uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Инструменты продуктивности</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c0d1c] tracking-tight mb-4">
            Всё для фокуса, привычек и осознанного дня
          </h2>
          <p className="text-base sm:text-lg text-[#0c0d1c]/80 font-semibold">
            Полный набор инструментов для замены бессмысленного скроллинга на реальные результаты.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tools.map((item, idx) => {
            const Icon = item.icon;
            return (
              <PerspectiveCard
                key={idx}
                depth={16}
                glowColor={item.glow}
                className="p-5 sm:p-8 bg-white border-3 sm:border-4 border-[#0c0d1c] flex flex-col justify-between min-w-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl ${item.bg} border-[2.5px] border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] flex items-center justify-center text-[#0c0d1c]`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black text-[#0c0d1c]/50 uppercase tracking-widest">
                      Модуль 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-black text-[#0c0d1c] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0c0d1c]/80 font-bold leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-[#0c0d1c]/10 flex items-center gap-2 text-xs font-black text-[#0c0d1c]">
                  <CheckCircle2 className="w-4 h-4 text-[#009E38]" />
                  <span>Встроено в базовый MVP</span>
                </div>
              </PerspectiveCard>
            );
          })}
        </div>

      </div>
    </AnimatedSection>
  );
};
