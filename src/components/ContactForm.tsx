'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            // Use the existing Google Apps Script endpoint from ContactSection if needed, 
            // or a similar one. For now, let's mock the success state after a delay.
            await new Promise((resolve) => setTimeout(resolve, 1500))

            setIsSubmitted(true)
            setFormData({ fullName: '', phone: '', email: '' })

            setTimeout(() => setIsSubmitted(false), 5000)
        } catch (err) {
            setError('Une erreur est survenue. Veuillez réessayer.')
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
                        placeholder="Nom complet"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-green-500/30 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white/10 transition-all"
                    />
                </div>
                <div className="flex-1">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Numéro de téléphone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-green-500/30 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white/10 transition-all"
                    />
                </div>
                <div className="flex-1">
                    <input
                        type="email"
                        name="email"
                        placeholder="Adresse email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-green-500/30 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white/10 transition-all"
                    />
                </div>
            </div>

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
                            Envoi...
                        </span>
                    ) : isSubmitted ? (
                        <span className="flex items-center gap-2">
                            <CheckCircle size={18} />
                            Envoyé !
                        </span>
                    ) : (
                        'Envoyer'
                    )}
                </motion.button>
            </div>

            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </form>
    )
}
