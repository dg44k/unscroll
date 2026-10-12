import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Clock, 
  Trophy, 
  Activity, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Upload,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const HeroWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomVideoUrl(url);
      setIsPlaying(true);
    }
  };

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-[92vh] pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden flex items-center bg-rainbow-mesh"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-r from-[#FF007A]/22 via-[#FFE600]/20 to-[#00F0FF]/22 rounded-full blur-[120px] -z-10 animate-pulse-glow" />
        <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[#00F0FF]/22 blur-3xl animate-float-soft" />
        <div className="absolute top-1/3 -right-24 w-88 h-88 rounded-full bg-[#FF007A]/20 blur-3xl animate-float-reverse" />
        <div className="absolute bottom-10 left-8 w-80 h-80 rounded-full bg-[#FFE600]/20 blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left min-w-0 max-w-full">
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-[#0c0d1c] tracking-tight leading-[1.14] mb-5 sm:mb-6 break-words max-w-full"
            >
              Тамагочи, с которым хочется{' '}
              <span className="relative inline-block text-[#FF007A]">
                <span className="relative z-10">меньше залипать</span>
                
                <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3.5 sm:h-5 pointer-events-none -z-0">
                  <svg 
                    viewBox="0 0 280 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M2 12C35 4 68 18 100 11C132 4 165 18 198 11C230 4 255 16 278 10" 
                      stroke="#FFE600" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="M2 12C35 4 68 18 100 11C132 4 165 18 198 11C230 4 255 16 278 10" 
                      stroke="#00F0FF" 
                      strokeWidth="3.5" 
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>{' '}
              в бесконечных лентах.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-lg lg:text-xl text-[#0c0d1c]/85 font-semibold leading-relaxed max-w-2xl mb-6 sm:mb-8"
            >
              Unscroll превращает сокращение времени в TikTok, Reels, Shorts и других бесконечных лентах в увлекательную игру, где растёт твой питомец, появляются награды, а друзья помогают не сдаваться.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10"
            >
              <a
                href="#solution"
                className="unscroll-btn-yellow px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg flex items-center justify-center gap-3 cursor-pointer text-center"
              >
                <span>Как работает механика</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>

              <a
                href="#pilot"
                className="unscroll-btn-cyan px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg flex items-center justify-center gap-2.5 cursor-pointer text-center"
              >
                <span>Запрос на пилот</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-xl"
            >
              <div className="bg-white p-2.5 sm:p-4 rounded-2xl border-[2.5px] border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-black text-[#0c0d1c]/60 mb-1 truncate">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00c8e6] flex-shrink-0" />
                  <span className="truncate">Норма</span>
                </div>
                <div className="text-sm sm:text-xl font-heading font-black text-[#0c0d1c] truncate">
                  230 мин
                </div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#009E38] truncate">
                  Плавный спад
                </div>
              </div>

              <div className="bg-white p-2.5 sm:p-4 rounded-2xl border-[2.5px] border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-black text-[#0c0d1c]/60 mb-1 truncate">
                  <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF007A] flex-shrink-0" />
                  <span className="truncate">Сберегли</span>
                </div>
                <div className="text-sm sm:text-xl font-heading font-black text-[#0c0d1c] truncate">
                  3 ч 31 мин
                </div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#FF007A] truncate">
                  За сегодня
                </div>
              </div>

              <div className="bg-white p-2.5 sm:p-4 rounded-2xl border-[2.5px] border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-black text-[#0c0d1c]/60 mb-1 truncate">
                  <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ff9900] flex-shrink-0" />
                  <span className="truncate">Серия</span>
                </div>
                <div className="text-sm sm:text-xl font-heading font-black text-[#0c0d1c] truncate">
                  14 дней
                </div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#0c0d1c]/60 truncate">
                  Без сгорания
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative flex flex-col items-center justify-center w-full min-w-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-[300px] xs:max-w-[330px] sm:max-w-[370px] mx-auto"
            >
              
              <div className="relative rounded-[2.75rem] p-2.5 sm:p-3 border-4 border-[#0c0d1c] shadow-[0_12px_0_0_#0c0d1c,0_25px_50px_rgba(255,0,122,0.22)] bg-[#0c0d1c] overflow-hidden">
                
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#0c0d1c] rounded-full z-30 flex items-center justify-center gap-1.5 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-[#1e2038]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#18f870] animate-ping" />
                </div>

                <div 
                  onClick={togglePlay}
                  className="relative rounded-[2.25rem] bg-[#121424] overflow-hidden aspect-[9/16] w-full flex items-center justify-center cursor-pointer group"
                >
                  <video
                    ref={videoRef}
                    src={"/video.mp4"}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover select-none pointer-events-none"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  <AnimatePresence>
                    {!isPlaying && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-20"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#FF007A] border-3 border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] flex items-center justify-center text-white transform hover:scale-105 transition-transform">
                          <Play className="w-7 h-7 fill-white ml-1" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                      title={isMuted ? 'Включить звук' : 'Выключить звук'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="absolute top-8 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                    <div className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-black border border-white/10 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#18F870] animate-pulse" />
                      <span>Демо интерфейса</span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="hidden sm:flex absolute -bottom-4 -left-6 z-30 bg-white px-3.5 py-2 rounded-2xl border-2 border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] items-center gap-2 animate-float-soft">
                <div className="w-7 h-7 rounded-xl bg-[#E5FFE9] border border-[#0c0d1c] flex items-center justify-center text-[#008A2E]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-[#0c0d1c]/50 uppercase leading-none">
                    Питомец
                  </div>
                  <div className="text-xs font-black text-[#0c0d1c]">
                    Растет от дисциплины
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-4 -right-4 z-30 bg-white px-3.5 py-2 rounded-2xl border-2 border-[#0c0d1c] shadow-[0_4px_0_0_#0c0d1c] items-center gap-2 animate-float-reverse">
                <Sparkles className="w-4 h-4 text-[#FF007A]" />
                <span className="text-xs font-black text-[#0c0d1c]">
                  3D & Тамагочи
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
