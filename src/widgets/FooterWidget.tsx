import React from "react";
import logo from "@/src/assets/logo.jpeg";

export const FooterWidget: React.FC = () => {
  return (
    <footer className="bg-white border-t-4 border-[#0c0d1c] py-14 sm:py-16 text-[#0c0d1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b-2 border-[#0c0d1c]/10">
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center">
                <img src={logo} alt="Логотип" />
              </div>
              <span className="font-heading text-2xl font-black text-[#0c0d1c] tracking-tight">
                Unscroll
              </span>
            </div>

            <p className="text-sm font-semibold text-[#0c0d1c]/80 max-w-sm mb-6 leading-relaxed">
              Тамагочи, с которым хочется меньше залипать в бесконечных лентах.
              Геймификация осознанности и поддержка вместо запретов.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5FFE9] border-2 border-[#0c0d1c] shadow-[0_2px_0_0_#0c0d1c] text-xs font-black text-[#008A2E]">
              <span className="w-2 h-2 rounded-full bg-[#18f870] animate-ping" />
              <span>Unscroll 2026</span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading text-xs font-black uppercase tracking-wider text-[#0c0d1c] mb-4">
                Навигация
              </h4>
              <ul className="space-y-2.5 text-xs font-bold text-[#0c0d1c]/80">
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#FF007A] transition-colors"
                  >
                    О продукте
                  </a>
                </li>
                <li>
                  <a
                    href="#problem"
                    className="hover:text-[#FF007A] transition-colors"
                  >
                    Проблема
                  </a>
                </li>
                <li>
                  <a
                    href="#solution"
                    className="hover:text-[#FF007A] transition-colors"
                  >
                    Решение
                  </a>
                </li>
                <li>
                  <a
                    href="#architecture"
                    className="hover:text-[#FF007A] transition-colors"
                  >
                    Архитектура
                  </a>
                </li>
                <li>
                  <a
                    href="#tools"
                    className="hover:text-[#FF007A] transition-colors"
                  >
                    Инструменты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xs font-black uppercase tracking-wider text-[#0c0d1c] mb-4">
                Стартап
              </h4>
              <ul className="space-y-2.5 text-xs font-bold text-[#0c0d1c]/80">
                <li>
                  <a
                    href="#roadmap"
                    className="hover:text-[#FF007A] transition-colors"
                  >
                    Развитие
                  </a>
                </li>
                <li>
                  <a
                    href="#pilot"
                    className="hover:text-[#FF007A] transition-colors"
                  >
                    Пилот & Инвестиции
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#FF007A] transition-colors"
                  >
                    Заявка на пилот
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#0c0d1c]/60 text-center sm:text-left">
          <p>© 2026 Unscroll Inc. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
