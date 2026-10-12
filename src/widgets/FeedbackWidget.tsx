import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Send, Database, MessageSquare, User, Mail, Eye, X, CheckCircle2 } from 'lucide-react';
import { saveLead, getLeads, getLocalLeads } from '../services/leadService';
import { LeadSubmission } from '../types';
import { AnimatedSection } from '../components/AnimatedSection';

export const FeedbackWidget: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [role, setRole] = useState<'jury' | 'investor' | 'school' | 'partner' | 'user'>('jury');
  const [interest, setInterest] = useState<'pilot' | 'investment' | 'beta' | 'partnership'>('pilot');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadsList, setLeadsList] = useState<LeadSubmission[]>([]);
  const [showSubmissionsModal, setShowSubmissionsModal] = useState(false);

  useEffect(() => {
    setLeadsList(getLocalLeads());
    getLeads().then((leads) => setLeadsList(leads)).catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setIsSubmitting(true);
    try {
      const saved = await saveLead({
        name,
        contact,
        role,
        interest,
        message
      });

      setLeadsList((prev) => [saved, ...prev]);
      setIsSuccess(true);
      setName('');
      setContact('');
      setMessage('');

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch {}
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-[#F4F9FF] via-[#FFF8FC] to-[#F4F9FF] relative overflow-hidden border-y-[3px] border-[#0c0d1c]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFE6F2] text-[#C9005E] border-[2.5px] border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-xs font-black uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Обратная связь для жюри и инвесторов</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c0d1c] tracking-tight mb-4">
            Оставить заявку на пилот или задать вопрос
          </h2>
          <p className="text-sm sm:text-base text-[#0c0d1c]/80 font-semibold">
            Мы открыты к партнерствам, совместным пилотным проектам с лицеями и гимназиями, а также к диалогу с бизнес-ангелами и фондами.
          </p>
        </div>

        <div className="unscroll-card-casual p-5 sm:p-10 bg-white border-3 sm:border-4 border-[#0c0d1c] relative shadow-[0_8px_0_0_#0c0d1c] sm:shadow-[0_12px_0_0_#0c0d1c]">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-20 h-20 rounded-full bg-[#18f870] border-4 border-[#0c0d1c] shadow-[0_6px_0_0_#0c0d1c] flex items-center justify-center mx-auto mb-6 text-[#0c0d1c]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#0c0d1c] mb-3">
                Заявка успешно принята!
              </h3>
              <p className="text-sm sm:text-base text-[#0c0d1c]/80 font-medium max-w-md mx-auto mb-8">
                Спасибо за интерес к Unscroll! Команда свяжется с вами в течение рабочего дня.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="unscroll-btn-pink px-8 py-3.5 text-sm font-black cursor-pointer shadow-[0_4px_0_0_#0c0d1c]"
              >
                Отправить еще одно обращение
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-xs font-black text-[#0c0d1c] uppercase tracking-wider mb-2">
                    Ваше имя / Компания
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#0c0d1c]/40" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Например, Александр (Жюри / Инвестор)"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#F8FAFF] border-2 border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-sm font-bold text-[#0c0d1c] placeholder:text-[#0c0d1c]/30 focus:outline-none focus:border-[#FF007A] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#0c0d1c] uppercase tracking-wider mb-2">
                    Контакт (Email или Telegram)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#0c0d1c]/40" />
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="alex@venture.fund или @alex_tg"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#F8FAFF] border-2 border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-sm font-bold text-[#0c0d1c] placeholder:text-[#0c0d1c]/30 focus:outline-none focus:border-[#FF007A] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-xs font-black text-[#0c0d1c] uppercase tracking-wider mb-2">
                    Ваша роль
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as any)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFF] border-2 border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-sm font-bold text-[#0c0d1c] focus:outline-none focus:border-[#FF007A] focus:bg-white cursor-pointer"
                  >
                    <option value="jury">Член жюри / Эксперт</option>
                    <option value="investor">Бизнес-ангел / Венчурный фонд</option>
                    <option value="school">Представитель школы / Лицея</option>
                    <option value="partner">Потенциальный партнер</option>
                    <option value="user">Пользователь / Родитель</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#0c0d1c] uppercase tracking-wider mb-2">
                    Цель обращения
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value as any)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFF] border-2 border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-sm font-bold text-[#0c0d1c] focus:outline-none focus:border-[#FF007A] focus:bg-white cursor-pointer"
                  >
                    <option value="pilot">Запрос на пилотную фазу</option>
                    <option value="investment">Обсуждение инвестиций ($131 336)</option>
                    <option value="beta">Доступ к ранней бете</option>
                    <option value="partnership">Партнерство и интеграция</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-[#0c0d1c] uppercase tracking-wider mb-2">
                  Комментарий или предложение
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Интересует пилот в нашей школе / условия раунда / техническое демо..."
                  className="w-full p-4 rounded-xl bg-[#F8FAFF] border-2 border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c] text-sm font-bold text-[#0c0d1c] placeholder:text-[#0c0d1c]/30 focus:outline-none focus:border-[#FF007A] focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl unscroll-btn-pink text-base font-black flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-[0_6px_0_0_#0c0d1c]"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSubmitting ? 'Сохраняем заявку...' : 'Отправить заявку в Unscroll'}
                </span>
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t-2 border-[#0c0d1c]/10 text-xs font-bold text-[#0c0d1c]/60">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#00c8e6]" />
                  <span>Заявки сохраняются локально и синхронизируются с Firebase Firestore.</span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowSubmissionsModal(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#FF007A] hover:underline cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Список заявок в MVP ({leadsList.length})</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

      {showSubmissionsModal && (
        <div className="fixed inset-0 z-50 bg-[#0c0d1c]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-4 border-[#0c0d1c] shadow-[0_16px_0_0_#0c0d1c] max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b-2 border-[#0c0d1c] flex items-center justify-between bg-[#F8FAFF]">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-[#FF007A]" />
                <h3 className="font-heading text-lg font-black text-[#0c0d1c]">
                  Заявки в базе (Firestore Sync)
                </h3>
              </div>
              <button
                onClick={() => setShowSubmissionsModal(false)}
                className="p-1.5 rounded-lg border-2 border-[#0c0d1c] hover:bg-white text-[#0c0d1c] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {leadsList.length === 0 ? (
                <p className="text-center py-8 text-sm font-bold text-[#0c0d1c]/50">
                  Пока нет сохраненных заявок.
                </p>
              ) : (
                leadsList.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-4 rounded-2xl bg-[#F8FAFF] border-2 border-[#0c0d1c] shadow-[0_3px_0_0_#0c0d1c]"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="font-heading text-sm font-black text-[#0c0d1c]">
                          {lead.name}
                        </div>
                        <div className="text-xs font-bold text-[#FF007A]">
                          {lead.contact}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white border border-[#0c0d1c] text-[10px] font-black uppercase text-[#0c0d1c]">
                        {lead.role}
                      </span>
                    </div>

                    {lead.message && (
                      <p className="text-xs text-[#0c0d1c]/80 font-medium mb-3">
                        «{lead.message}»
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-[#0c0d1c]/10 text-[11px] font-bold text-[#0c0d1c]/50">
                      <span>{new Date(lead.createdAt).toLocaleString('ru-RU')}</span>
                      <span className="text-[#009E38] font-black flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Синхронизировано с Firestore</span>
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t-2 border-[#0c0d1c] bg-[#F8FAFF] flex justify-end">
              <button
                onClick={() => setShowSubmissionsModal(false)}
                className="px-6 py-2.5 rounded-xl unscroll-btn-purple text-xs font-black cursor-pointer shadow-[0_3px_0_0_#0c0d1c]"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </AnimatedSection>
  );
};
