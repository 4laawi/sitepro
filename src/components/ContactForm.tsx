'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface ContactFormProps {
    lang?: 'FR' | 'EN';
}

export default function ContactForm({ lang = 'FR' }: ContactFormProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        projectType: '',
        otherProjectType: '',
        delay: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const t = {
        FR: {
            fullName: "Nom complet",
            projectType: "Type de projet",
            otherProjectType: "Spécifiez votre projet",
            delay: "Délai souhaité",
            sending: "Envoi...",
            sent: "Envoyé !",
            send: "Envoyer",
            error: "Une erreur est survenue. Veuillez réessayer.",
            whatsappMsg: (name: string, type: string, delay: string) =>
                `Salam, je m'appelle ${name}. J'aimerais créer un site web de type : ${type}. Délai souhaité : ${delay}.`,
            projectTypes: [
                "Location de voiture", "Clinique / Docteur", "Café / Restaurant", "Agent immobilier",
                "Agence", "Entreprise", "E-commerce", "Hôtel / Riad", "Autre"
            ],
            delays: [
                "En urgence (< 2 semaines)", "2 à 4 semaines", "1 à 2 mois", "Plus de 2 mois"
            ]
        },
        EN: {
            fullName: "Full Name",
            projectType: "Project Type",
            otherProjectType: "Specify your project",
            delay: "Desired Timeline",
            sending: "Sending...",
            sent: "Sent!",
            send: "Send",
            error: "An error occurred. Please try again.",
            whatsappMsg: (name: string, type: string, delay: string) =>
                `Hello, my name is ${name}. I would like to create a website for: ${type}. Desired timeline: ${delay}.`,
            projectTypes: [
                "Car Rental", "Clinic / Doctor", "Cafe / Restaurant", "Real Estate Agent",
                "Agency", "Company", "E-commerce", "Hotel / Riad", "Other"
            ],
            delays: [
                "Urgent (< 2 weeks)", "2 to 4 weeks", "1 to 2 months", "More than 2 months"
            ]
        }
    }[lang];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            // Construct WhatsApp message
            const projectInfo = formData.projectType === (lang === 'EN' ? 'Other' : 'Autre')
                ? `${formData.projectType} (${formData.otherProjectType})`
                : formData.projectType;

            const message = t.whatsappMsg(formData.fullName, projectInfo, formData.delay);
            const whatsappUrl = `https://wa.me/212663711164?text=${encodeURIComponent(message)}`;

            // Mock submission delay
            await new Promise((resolve) => setTimeout(resolve, 800))

            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            setIsSubmitted(true)
            setFormData({ fullName: '', projectType: '', otherProjectType: '', delay: '' })

            setTimeout(() => setIsSubmitted(false), 5000)
        } catch {
            setError(t.error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <input
                        type="text"
                        name="fullName"
                        placeholder={t.fullName}
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-primary-500/30 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all appearance-none"
                    />
                </div>
                <div className="flex-1">
                    <div className="relative">
                        <select
                            name="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-primary-500/30 rounded-full px-6 py-4 text-white focus:outline-none focus:border-primary-400 focus:bg-[#022545] transition-all appearance-none cursor-pointer"
                        >
                            <option value="" disabled className="text-gray-400 bg-[#022545]">{t.projectType}</option>
                            {t.projectTypes.map(type => (
                                <option key={type} value={type} className="text-white bg-[#022545]">{type}</option>
                            ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="relative">
                        <select
                            name="delay"
                            required
                            value={formData.delay}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-primary-500/30 rounded-full px-6 py-4 text-white focus:outline-none focus:border-primary-400 focus:bg-[#022545] transition-all appearance-none cursor-pointer"
                        >
                            <option value="" disabled className="text-gray-400 bg-[#022545]">{t.delay}</option>
                            {t.delays.map(option => (
                                <option key={option} value={option} className="text-white bg-[#022545]">{option}</option>
                            ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {formData.projectType === (lang === 'EN' ? 'Other' : 'Autre') && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <input
                            type="text"
                            name="otherProjectType"
                            placeholder={t.otherProjectType}
                            required
                            value={formData.otherProjectType}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-primary-500/30 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all appearance-none"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex justify-center mt-8">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`px-12 py-4 rounded-full font-bold text-white transition-all shadow-xl ${isSubmitted ? 'bg-green-600' : 'bg-green-500 hover:bg-green-400'
                        }`}
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            {t.sending}
                        </span>
                    ) : isSubmitted ? (
                        <span className="flex items-center gap-2">
                            <CheckCircle size={18} />
                            {t.sent}
                        </span>
                    ) : (
                        t.send
                    )}
                </motion.button>
            </div>

            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </form>
    )
}

