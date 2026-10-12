import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

export const HeaderWidget: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Блокировка скролла страницы при открытии мобильного меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "О продукте", href: "#about" },
    { label: "Проблема", href: "#problem" },
    { label: "Решение", href: "#solution" },
    { label: "Архитектура", href: "#architecture" },
    { label: "Инструменты", href: "#tools" },
    { label: "Развитие", href: "#roadmap" },
    { label: "Инвестиции", href: "#pilot" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_6px_25px_rgba(12,13,28,0.14)] border-b-[3px] border-[#0c0d1c]"
          : "bg-transparent py-3.5 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#FF007A] via-[#FFE600] to-[#00F0FF] border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] flex items-center justify-center transform group-hover:scale-105 group-hover:-rotate-3 transition-transform"></div>
            <span className="font-heading text-xl sm:text-2xl font-black tracking-tight text-[#0c0d1c] leading-none">
              Unscroll
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 xl:px-3 py-1 rounded-full text-xs font-black text-[#0c0d1c]/80 hover:text-[#0c0d1c] hover:bg-[#FFE6F2] hover:text-[#FF007A] transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 z-50">
            {/* Кнопка только для десктопа */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl unscroll-btn-pink text-xs sm:text-sm font-black cursor-pointer shadow-[0_4px_0_0_#0c0d1c]"
            >
              <span>Запрос на пилот</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Кнопка бургера */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-white border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-[#0c0d1c] cursor-pointer hover:bg-[#FFE6F2] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Полноэкранное мобильное меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-white z-40 px-6 pt-24 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col gap-3 max-w-lg mx-auto w-full">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-lg font-black text-[#0c0d1c] hover:bg-[#FFE6F2] hover:text-[#FF007A] border-[2px] border-transparent hover:border-[#0c0d1c] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t-2 border-[#0c0d1c]/10 max-w-lg mx-auto w-full">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl unscroll-btn-pink text-white text-center text-base font-black block shadow-[0_4px_0_0_#0c0d1c]"
              >
                Запрос на пилот
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
