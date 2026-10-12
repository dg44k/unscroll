import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  CheckCircle2, 
  Shield, 
  Flame, 
  Compass, 
  ChevronLeft, 
  ChevronRight,
  Smile
} from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export const ArchitectureWidget: React.FC = () => {
  const [[currentSlide, direction], setSlide] = useState([0, 0]);

  const pillars = [
    {
      id: 'tamagotchi',
      titleRu: 'Цифровой напарник & Рост',
      badgeRu: 'Эмоциональное ядро',
      stepNum: '01',
      icon: Smile,
      color: '#FF007A',
      secondaryColor: '#FFE600',
      descriptionRu: 'Тамагочи питается не временем в телефоне, а вашей реальной дисциплиной. 4 стадии роста, уникальные архетипы и кастомизация комнаты.',
      highlightsRu: [
        'Эмоциональная связь: питомец грустит в ленте и радуется реальным делам',
        'Уникальные архетипы животных (от лисёнка до панды)',
        '4 характера озвучки: от дерзкого «Бро» до наставника «Джарвис»',
        'Персональная комната и визуальные награды за дисциплину'
      ],
      metrics: [
        { labelRu: 'Архетипов', val: '8+' },
        { labelRu: 'Эволюция', val: '4 стадии' },
        { labelRu: 'Характеры', val: '4 типа' }
      ]
    },
    {
      id: 'interceptor',
      titleRu: 'Локальный перехватчик ленты',
      badgeRu: 'Защита без облака',
      stepNum: '02',
      icon: Shield,
      color: '#18F870',
      secondaryColor: '#00F0FF',
      descriptionRu: 'Работает локально на устройстве без отправки личных данных на сервер. Ловит открытие Reels, TikTok и Shorts, мягко предлагая полезные сценарии.',
      highlightsRu: [
        '100% локальная обработка: нулевая утечка приватных данных',
        'Мгновенный триггер при входе в алгоритмическую ленту',
        'Сценарий «Пауза»: Ты устал или есть энергия на дела?',
        'Штрафы отсутствуют: фокус на бережном переключении внимания'
      ],
      metrics: [
        { labelRu: 'Приватность', val: '100% On-Device' },
        { labelRu: 'Задержка', val: '< 50 мс' },
        { labelRu: 'Платформы', val: 'Android / Web' }
      ]
    },
    {
      id: 'habits',
      titleRu: 'Геймифицированные петли привычек',
      badgeRu: 'Позитивное подкрепление',
      stepNum: '03',
      icon: Flame,
      color: '#FFF017',
      secondaryColor: '#FF5500',
      descriptionRu: 'Монетизируются только реальные полезные дела: чтение книг, спорт, выполнение уроков, фокус-сессии и прогулки на свежем воздухе.',
      highlightsRu: [
        'Монеты начисляются исключительно за реальные офлайн-действия',
        'Капсулы фокуса (15–90 минут) с Lo-Fi музыкой и белым шумом',
        'Слово дня, трекер воды и утренней зарядки',
        'Дневник благодарности с еженедельной рефлексией'
      ],
      metrics: [
        { labelRu: 'Инструментов', val: '6 в 1' },
        { labelRu: 'Фокус-сессии', val: '15-90 мин' },
        { labelRu: 'Режим срыва', val: 'Без штрафа' }
      ]
    },
    {
      id: 'island',
      titleRu: 'Остров класса & Сеть друзей',
      badgeRu: 'Социальная поддержка',
      stepNum: '04',
      icon: Compass,
      color: '#00F0FF',
      secondaryColor: '#8A2BE2',
      descriptionRu: 'Подростки объединяются в группы, чтобы держать норму вместе. Общий остров процветает, когда каждый участник бережёт своё время.',
      highlightsRu: [
        'Командный прогресс: общий остров расцветает от успехов группы',
        'Сигнал помощи: друзья могут «поделиться дисциплиной» при срыве',
        'Комната совместной учебы: беззвучный фокус в компании одноклассников',
        'Безопасный родительский мост без токсичной слежки'
      ],
      metrics: [
        { labelRu: 'Формат', val: '3D Остров' },
        { labelRu: 'Группа', val: 'До 30 чел' },
        { labelRu: 'Синхронизация', val: 'В реальном времени' }
      ]
    }
  ];

  const paginate = (newDirection: number) => {
    const nextIdx = (currentSlide + newDirection + pillars.length) % pillars.length;
    setSlide([nextIdx, newDirection]);
  };

  const active = pillars[currentSlide];
  const ActiveIcon = active.icon;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <AnimatedSection id="architecture" className="py-16 sm:py-24 bg-gradient-to-b from-[#F4F9FF] via-[#FFF8FC] to-[#F4F9FF] relative overflow-hidden border-y-[3px] border-[#0c0d1c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E0FCFF] text-[#007F99] border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-xs font-black uppercase tracking-wider mb-3 sm:mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Архитектура продукта</span>
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black text-[#0c0d1c] tracking-tight mb-3 sm:mb-4 break-words">
            4 опорные системы Unscroll
          </h2>
          <p className="text-sm sm:text-lg text-[#0c0d1c]/80 font-semibold">
            Интерактивный слайдер ключевых механик продукта для жюри и инвесторов.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto w-full min-w-0">
          
          <div className="flex items-center justify-between mb-4 sm:mb-6 px-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-heading text-xl sm:text-3xl font-black text-[#0c0d1c]">
                {active.stepNum}
              </span>
              <span className="text-xs sm:text-sm font-black text-[#0c0d1c]/40 uppercase tracking-widest">
                / 0{pillars.length}
              </span>
              <span className="hidden xs:inline-block h-4 w-[2px] bg-[#0c0d1c]/20 mx-1" />
              <span className="hidden xs:inline-block text-[11px] sm:text-xs font-black uppercase text-[#FF007A]">
                {active.badgeRu}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => paginate(-1)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] flex items-center justify-center text-[#0c0d1c] active:translate-y-0.5 transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={() => paginate(1)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFE600] border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] flex items-center justify-center text-[#0c0d1c] active:translate-y-0.5 transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden w-full min-w-0">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -40 || velocity.x < -300) {
                    paginate(1);
                  } else if (swipe > 40 || velocity.x > 300) {
                    paginate(-1);
                  }
                }}
                className="w-full rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-8 lg:p-12 border-3 sm:border-4 border-[#0c0d1c] shadow-[0_8px_0_0_#0c0d1c,0_20px_40px_rgba(12,13,28,0.14)] bg-white overflow-hidden min-w-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
                  
                  <div className="lg:col-span-7 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                        <span
                          className="px-3 py-0.5 sm:py-1 rounded-full border-2 border-[#0c0d1c] shadow-[0_2px_0_0_#0c0d1c] text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0c0d1c]"
                          style={{ backgroundColor: active.color }}
                        >
                          {active.badgeRu}
                        </span>
                        <span className="text-[11px] sm:text-xs font-black text-[#0c0d1c]/40 uppercase tracking-wider">
                          Система {active.stepNum}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-3xl lg:text-4xl font-black text-[#0c0d1c] mb-3 leading-tight break-words">
                        {active.titleRu}
                      </h3>

                      <p className="text-xs sm:text-base text-[#0c0d1c]/85 font-semibold leading-relaxed mb-5 sm:mb-6">
                        {active.descriptionRu}
                      </p>

                      <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                        {active.highlightsRu.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <div className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#E5FFE9] border sm:border-2 border-[#0c0d1c] flex items-center justify-center flex-shrink-0 text-[#008A2E]">
                              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-[#0c0d1c] break-words">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-4 sm:pt-6 border-t-2 border-[#0c0d1c]/10">
                      {active.metrics.map((m, i) => (
                        <div key={i} className="bg-[#F5F9FF] p-2 sm:p-3 rounded-xl border sm:border-2 border-[#0c0d1c] min-w-0">
                          <div className="text-[9px] sm:text-[10px] font-black uppercase text-[#0c0d1c]/50 truncate">
                            {m.labelRu}
                          </div>
                          <div className="text-xs sm:text-base lg:text-lg font-heading font-black text-[#0c0d1c] truncate">
                            {m.val}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex justify-center">
                    <div 
                      className="w-full max-w-[220px] sm:max-w-[300px] aspect-square rounded-2xl sm:rounded-[2.5rem] border-3 sm:border-4 border-[#0c0d1c] shadow-[0_6px_0_0_#0c0d1c] flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden transition-colors duration-500"
                      style={{ 
                        background: `linear-gradient(135deg, ${active.color} 0%, ${active.secondaryColor} 100%)` 
                      }}
                    >
                      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl bg-white border-2 sm:border-3 border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] flex items-center justify-center mb-3 sm:mb-4">
                        <ActiveIcon className="w-10 h-10 sm:w-14 sm:h-14 text-[#0c0d1c]" />
                      </div>
                      <span className="text-sm sm:text-lg font-heading font-black text-[#0c0d1c] text-center drop-shadow-sm px-2">
                        {active.titleRu}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            {pillars.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSlide([idx, idx > currentSlide ? 1 : -1])}
                className={`h-2.5 sm:h-3 rounded-full transition-all cursor-pointer border sm:border-2 border-[#0c0d1c] ${
                  idx === currentSlide
                    ? 'w-8 sm:w-10 bg-[#FF007A] shadow-[0_2px_0_0_#0c0d1c]'
                    : 'w-2.5 sm:w-3 bg-white hover:bg-[#FFE6F2]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
