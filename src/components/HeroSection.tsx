'use client'

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import './HeroSection.css';

interface HeroSectionProps {
  lang?: 'FR' | 'EN';
}

export default function HeroSection({ lang = 'FR' }: HeroSectionProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [websiteType, setWebsiteType] = useState('');
  const [sector, setSector] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const t = {
    FR: {
      badge: 'Agence Création Site Web Maroc',
      title: 'Création de site web professionnel au Maroc',
      description: (
        <>
          Notre <strong className="font-semibold text-title">agence de création de sites web</strong> au <strong className="font-semibold text-title">Maroc</strong> conçoit des solutions sur mesure, entièrement optimisées pour le <strong className="font-semibold text-title">SEO</strong> et les nouveaux <strong className="font-semibold text-title">moteurs d’IA</strong>.
        </>
      ),
      cta: 'Obtenir mon devis site web',
      emailConsult: 'Consultation par Email ?',
      modalTitle: 'Obtenez Votre Devis Gratuit',
      labelName: 'Votre Nom',
      placeholderName: 'Entrez votre nom',
      labelType: 'Type de site',
      placeholderType: 'Sélectionnez un type',
      types: ['Site vitrine', 'E-commerce', 'Site de réservation', 'Projet sur mesure'],
      labelSector: 'Quel est votre secteur d’activité ?',
      sectors: ['Restaurant / Café', 'Magasin / Boutique', 'Services / Coaching', 'Autre'],
      labelDeadline: 'Quand en avez-vous besoin ?',
      deadlines: ['Dans 1 semaine', 'Dans 1 mois', 'Flexible'],
      prev: 'Précédent',
      next: 'Continuer',
      submit: 'Envoyer sur WhatsApp',
      trust: '97% de nos clients sont satisfaits',
      waGreeting: 'Bonjour Sitepro.ma 👋',
      waMessage: 'Je souhaite obtenir un devis pour la création de mon site web.',
      waInfo: 'Voici les informations :',
      waThanks: 'Merci de me recontacter au plus vite pour en discuter. 📩',
      waName: 'Nom',
      waType: 'Type de site',
      waSector: 'Secteur d\'activité',
      waDeadline: 'Deadline'
    },
    EN: {
      badge: 'Website Design Agency Morocco',
      title: 'Professional Website Creation in Morocco',
      description: (
        <>
          Our <strong className="font-semibold text-title">website creation agency</strong> in <strong className="font-semibold text-title">Morocco</strong> designs custom solutions, fully optimized for <strong className="font-semibold text-title">SEO</strong> and new <strong className="font-semibold text-title">AI engines</strong>.
        </>
      ),
      cta: 'Get my website quote',
      emailConsult: 'Any questions?',
      modalTitle: 'Get Your Free Quote',
      labelName: 'Your Name',
      placeholderName: 'Enter your name',
      labelType: 'Website Type',
      placeholderType: 'Select a type',
      types: ['Showcase site', 'E-commerce', 'Booking site', 'Custom project'],
      labelSector: 'What is your business sector?',
      sectors: ['Restaurant / Café', 'Shop / Boutique', 'Services / Coaching', 'Other'],
      labelDeadline: 'When do you need it?',
      deadlines: ['Within 1 week', 'Within 1 month', 'Flexible'],
      prev: 'Previous',
      next: 'Continue',
      submit: 'Send on WhatsApp',
      trust: '97% of our clients are satisfied',
      waGreeting: 'Hello Sitepro.ma 👋',
      waMessage: 'I would like to get a quote for the creation of my website.',
      waInfo: 'Here is the information:',
      waThanks: 'Please contact me as soon as possible to discuss. 📩',
      waName: 'Name',
      waType: 'Website type',
      waSector: 'Business sector',
      waDeadline: 'Deadline'
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep !== 4 || !canProceed()) return;

    const message = [
      t.waGreeting,
      t.waMessage,
      t.waInfo,
      `- ${t.waName} : ${name}`,
      `- ${t.waType} : ${websiteType}`,
      `- ${t.waSector} : ${sector}`,
      `- ${t.waDeadline} : ${deadline}`,
      '',
      t.waThanks,
    ].join('\n');

    const phone = '212663711164';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    closeModal();
  };

  const canProceed = () => {
    if (currentStep === 1) return name.trim().length > 1;
    if (currentStep === 2) return websiteType !== '';
    if (currentStep === 3) return sector !== '';
    if (currentStep === 4) return deadline !== '';
    return false;
  };

  const openModal = () => {
    setIsModalOpen(true);
    setCurrentStep(1);
    setName('');
    setWebsiteType('');
    setSector('');
    setDeadline('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setName('');
    setWebsiteType('');
    setSector('');
    setDeadline('');
  };

  return (
    <section ref={sectionRef} className="bg-gray-200 snipcss-odHLl overflow-hidden">
      <div className="container grid-cols-1 md:pt-[120px] md:pb-[40px] py-[60px] px-5 mx-auto max-w-screen-xl md:grid-cols-2 gap-x-8 grid items-center">
        <motion.div
          style={{ y: isMobile ? 0 : contentY, opacity: isMobile ? 1 : opacity }}
          className="col-span-1 flex sm:px-[0] px-[20px] flex-col custom-row-gap gap-y-[20px] md:mb-0 md:pr-10 text-center md:text-left"
        >
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[rgba(37,99,235,0.08)] rounded-[60px]">
              <span className="w-3 h-3 bg-[#2563eb] rounded-full flex-shrink-0"></span>
              <span className="md:text-[17px] text-[15px] poppins-semibold tracking-[-0.5px] text-[#022545]">
                {t.badge}
              </span>
            </div>
          </div>
          <h1 className="title-hero-section"> {t.title} </h1>
          {t.description && (
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto md:mx-0">
              {t.description}
            </p>
          )}
          <div>
            <button
              onClick={openModal}
              className="relative overflow-hidden text-center cursor-pointer transition-all duration-200 group py-[18px] px-[56px] text-[18px] poppins-semibold rounded-xl hover:bg-title bg-[#2563eb]"
            >
              <span className="transition-transform duration-200 flex items-center justify-center ease-out group-hover:-translate-y-[150%] text-white">
                {t.cta}
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out translate-y-[150%] group-hover:translate-y-0 text-white">
                {t.cta}
              </span>
            </button>
          </div>
          <div className="flex flex-col md:items-start items-center">
            <p className="text-title text-[13px] font-[500] py-[5px] mb-[10px] tracking-[1.2px]">
              {t.emailConsult}
            </p>
            <p className="border-bottom text-[34px] poppins-semibold text-title">
              contact@sitepro.ma
            </p>
          </div>
        </motion.div>
        <motion.div
          style={{ y: isMobile ? 0 : imageY, opacity: isMobile ? 1 : opacity }}
          className="col-span-1 flex z-10 justify-center"
        >
          <div className="relative w-full">
            <div className="relative w-full">
              <Image
                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post.webp"
                alt={t.badge}
                width={1080}
                height={1080}
                quality={95}
                className="w-full h-auto max-w-[620px] mx-auto md:p-2 p-1 transition-transform duration-700 rounded-xl"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative bg-[#f8fafc] rounded-[40px] shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={closeModal}
                aria-label="Fermer le formulaire"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-6 right-6 w-10 h-10 bg-[#f1f5f9] hover:bg-[#e2e8f0] rounded-full flex items-center justify-center transition-colors duration-200 z-10"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="p-10 pt-12">
                <h3 className="text-[32px] leading-[1.2] font-bold mb-8 text-[#1e293b] text-center max-w-[300px] mx-auto">
                  {t.modalTitle}
                </h3>

                {/* Step Indicators Snappy */}
                <div className="flex items-center justify-center mb-10 px-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center text-[15px] font-bold transition-all duration-200 relative z-10 ${step === currentStep
                          ? 'bg-[#2563eb] text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]'
                          : step < currentStep
                            ? 'bg-[#2563eb] text-white'
                            : 'bg-[#e2e8f0] text-gray-500'
                          }`}
                      >
                        {step < currentStep ? <Check size={18} strokeWidth={3} /> : step}
                      </div>
                      {step < 4 && (
                        <div className="w-[40px] md:w-[60px] h-[2px] bg-[#e2e8f0] mx-0">
                          <motion.div
                            className="h-full bg-[#2563eb]"
                            initial={false}
                            animate={{ width: step < currentStep ? '100%' : '0%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="min-h-[140px]"
                      >
                        <label className="block text-base font-semibold text-[#334155] mb-2.5">{t.labelName} <span className="text-red-500 opacity-80">*</span></label>
                        <input
                          type="text"
                          placeholder={t.placeholderName}
                          autoFocus
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-[#2563eb] transition-all duration-200 shadow-sm placeholder:text-gray-400"
                        />
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="min-h-[140px]"
                      >
                        <label className="block text-base font-semibold text-[#334155] mb-2.5">{t.labelType}</label>
                        <select
                          value={websiteType}
                          onChange={(e) => setWebsiteType(e.target.value)}
                          className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-[#2563eb] transition-all duration-200 shadow-sm appearance-none cursor-pointer"
                        >
                          <option value="">{t.placeholderType}</option>
                          {t.types.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="min-h-[140px]"
                      >
                        <label className="block text-base font-semibold text-[#334155] mb-2.5">{t.labelSector}</label>
                        <div className="grid grid-cols-2 gap-3">
                          {t.sectors.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setSector(option)}
                              className={`p-4 rounded-xl border-2 transition-all duration-200 text-[13px] font-bold ${sector === option
                                ? 'border-[#2563eb] bg-blue-50 text-[#2563eb]'
                                : 'border-gray-50 bg-white hover:border-gray-200 text-gray-600'
                                }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 4 && (
                      <motion.div
                        key="step-4"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="min-h-[140px]"
                      >
                        <label className="block text-base font-semibold text-[#334155] mb-2.5">{t.labelDeadline}</label>
                        <div className="space-y-2.5">
                          {t.deadlines.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setDeadline(option)}
                              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-sm font-bold text-left ${deadline === option
                                ? 'border-[#2563eb] bg-blue-50 text-[#2563eb]'
                                : 'border-gray-50 bg-white hover:border-gray-200 text-gray-600'
                                }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between pt-4">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="text-sm font-semibold text-gray-500 hover:text-[#2563eb] transition-colors"
                      >
                        {t.prev}
                      </button>
                    ) : <div />}

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(currentStep + 1)}
                        disabled={!canProceed()}
                        className="px-8 py-3.5 bg-[#2563eb] text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        {t.next}
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!canProceed()}
                        className="px-8 py-3.5 bg-green-500 text-white rounded-2xl font-bold shadow-lg shadow-green-500/20 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        {t.submit}
                      </button>
                    )}
                  </div>
                </form>

                {/* Trust Footer */}
                <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-start gap-2.5">
                  <div className="w-2.5 h-2.5 bg-[#10b981] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                  <span className="text-[13px] font-medium text-gray-500">
                    {t.trust}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
