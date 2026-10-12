import React, { useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import {
  Send,
  MessageSquare,
  User,
  Mail,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { saveLead } from "../services/leadService";
import { AnimatedSection } from "../components/AnimatedSection";

type LeadRole = "jury" | "investor" | "school" | "partner" | "user";
type LeadInterest = "other" | "investment" | "beta" | "partnership";

export const FeedbackWidget: React.FC = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState<LeadRole>("jury");
  const [interest, setInterest] = useState<LeadInterest>("other");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await saveLead({ name, contact, role, interest, message });

      setIsSuccess(true);
      setName("");
      setContact("");
      setMessage("");

      try {
        confetti({
          particleCount: 60,
          spread: 65,
          origin: { y: 0.7 },
        });
      } catch {}
    } catch (error) {
      console.error("Не удалось отправить заявку:", error);
      setErrorMessage(
        "Не удалось отправить заявку. Попробуйте ещё раз.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "block w-full min-w-0 box-border rounded-xl border-2 border-[#0c0d1c] " +
    "bg-[#F8FAFF] px-4 py-3.5 text-base font-semibold text-[#0c0d1c] " +
    "shadow-[0_3px_0_0_#0c0d1c] outline-none transition-colors " +
    "placeholder:text-[#0c0d1c]/40 focus:border-[#FF007A] focus:bg-white";

  const labelClass =
    "mb-2 block text-xs font-black uppercase tracking-wider text-[#0c0d1c]";

  return (
    <AnimatedSection
      id="contact"
      className="relative overflow-hidden border-y-[3px] border-[#0c0d1c]/10 bg-gradient-to-b from-[#F4F9FF] via-[#FFF8FC] to-[#F4F9FF] py-14 sm:py-20 lg:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <span className="mb-4 inline-flex max-w-full items-center justify-center gap-2 rounded-full border-2 border-[#0c0d1c] bg-[#FFE6F2] px-3 py-2 text-[10px] font-black uppercase tracking-wide text-[#C9005E] shadow-[0_3px_0_0_#0c0d1c] sm:px-4 sm:text-xs">
            <MessageSquare className="h-4 w-4 shrink-0" />
            <span>Обратная связь</span>
          </span>

          <h2 className="mb-4 break-words font-heading text-3xl font-black tracking-tight text-[#0c0d1c] sm:text-4xl lg:text-5xl">
            Оставить заявку на пилот или задать вопрос
          </h2>

          <p className="text-sm font-medium leading-relaxed text-[#0c0d1c]/80 sm:text-base">
            Открыты к партнерствам, пилотным проектам с лицеями и гимназиями, а
            также к диалогу с инвесторами и фондами.
          </p>
        </div>

        <div className="unscroll-card-casual relative min-w-0 border-[3px] border-[#0c0d1c] bg-white p-4 shadow-[0_6px_0_0_#0c0d1c] sm:border-4 sm:p-8 sm:shadow-[0_10px_0_0_#0c0d1c] lg:p-10">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-8 text-center sm:py-10"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#0c0d1c] bg-[#18f870] text-[#0c0d1c] shadow-[0_5px_0_0_#0c0d1c] sm:h-20 sm:w-20">
                <CheckCircle2 className="h-9 w-9 sm:h-10 sm:w-10" />
              </div>

              <h3 className="mb-3 font-heading text-2xl font-black text-[#0c0d1c] sm:text-3xl">
                Заявка успешно отправлена!
              </h3>

              <p className="mx-auto mb-7 max-w-md text-sm leading-relaxed text-[#0c0d1c]/80 sm:text-base">
                Спасибо за интерес к Unscroll. Мы получили ваше обращение.
              </p>

              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="unscroll-btn-pink w-full cursor-pointer px-5 py-3.5 text-sm font-black shadow-[0_4px_0_0_#0c0d1c] sm:w-auto sm:px-8"
              >
                Отправить ещё одну заявку
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="min-w-0">
                  <label htmlFor="lead-name" className={labelClass}>
                    Ваше имя / Компания
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0c0d1c]/40" />
                    <input
                      id="lead-name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя или компания"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <label htmlFor="lead-contact" className={labelClass}>
                    Контакт (Email или Telegram)
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0c0d1c]/40" />
                    <input
                      id="lead-contact"
                      type="text"
                      autoComplete="email"
                      required
                      maxLength={150}
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Email или @username"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <label htmlFor="lead-role" className={labelClass}>
                    Ваша роль
                  </label>
                  <select
                    id="lead-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value as LeadRole)}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="jury">Член жюри</option>
                    <option value="investor">Инвестор</option>
                    <option value="school">Школа</option>
                    <option value="partner">Потенциальный партнёр</option>
                    <option value="user">Пользователь</option>
                  </select>
                </div>

                <div className="min-w-0">
                  <label htmlFor="lead-interest" className={labelClass}>
                    Цель обращения
                  </label>
                  <select
                    id="lead-interest"
                    value={interest}
                    onChange={(e) =>
                      setInterest(e.target.value as LeadInterest)
                    }
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="investment">Обсуждение инвестиций</option>
                    <option value="beta">Доступ к ранней бете</option>
                    <option value="partnership">
                      Партнёрство и интеграция
                    </option>
                    <option value="other">Другое</option>
                  </select>
                </div>
              </div>

              <div className="min-w-0">
                <label htmlFor="lead-message" className={labelClass}>
                  Комментарий или предложение
                </label>
                <textarea
                  id="lead-message"
                  rows={4}
                  maxLength={1000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Расскажите, что вас интересует..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  className="flex min-w-0 items-start gap-2 rounded-xl border-2 border-red-700 bg-red-50 p-3 text-sm font-semibold leading-relaxed text-red-800"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="unscroll-btn-pink flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl px-4 py-4 text-center text-sm font-black shadow-[0_5px_0_0_#0c0d1c] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
              >
                <Send className="h-4 w-4 shrink-0" />
                <span className="break-words">
                  {isSubmitting
                    ? "Отправляем заявку..."
                    : "Отправить заявку"}
                </span>
              </button>

              <p className="text-center text-xs leading-relaxed text-[#0c0d1c]/60">
                Ваши контактные данные не отображаются публично.
              </p>
            </form>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};
