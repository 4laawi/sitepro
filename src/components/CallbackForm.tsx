'use client'

import { useState, useEffect } from 'react'

const delayMapping: Record<string, string[]> = {
    'mvp': [
        '1 à 2 mois (Lancement rapide)',
        '2 à 3 mois (Version complète)',
        'Plus de 3 mois'
    ],
    'ios-android': [
        '3 à 4 mois',
        '4 à 5 mois',
        'Plus de 6 mois'
    ],
    'native': [
        '4 à 5 mois',
        '5 à 6 mois',
        '6 à 8 mois',
        'Plus de 8 mois'
    ],
    'erp-mobile': [
        '5 à 6 mois',
        '6 à 8 mois',
        '8 à 10 mois',
        'Plus de 10 mois'
    ],
    'super-app': [
        '6 à 8 mois',
        '8 à 12 mois',
        '1 an et plus'
    ],
    'default': [
        '1 à 2 mois',
        '3 à 4 mois',
        '5 à 6 mois',
        'Plus de 6 mois'
    ]
}

export default function CallbackForm() {
    const [appType, setAppType] = useState('')
    const [delay, setDelay] = useState('')
    const [delays, setDelays] = useState<string[]>(delayMapping.default)

    useEffect(() => {
        if (appType && delayMapping[appType]) {
            setDelays(delayMapping[appType])
            setDelay('') // Reset delay when app type changes to force a new selection
        }
    }, [appType])

    return (
        <form className="mt-12 max-w-5xl mx-auto space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Nom complet"
                        className="w-full bg-white/5 border border-primary-500/30 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all appearance-none"
                    />
                </div>
                <div className="flex-1">
                    <div className="relative">
                        <select
                            className="w-full bg-white/5 border border-primary-500/30 rounded-full px-6 py-4 text-white focus:outline-none focus:border-primary-400 focus:bg-[#022545] transition-all appearance-none cursor-pointer"
                            value={appType}
                            onChange={(e) => setAppType(e.target.value)}
                        >
                            <option value="" disabled className="text-gray-400 bg-[#022545]">Type d'application</option>
                            <option value="ios-android" className="text-white bg-[#022545]">Application iOS & Android (Cross-platform)</option>
                            <option value="native" className="text-white bg-[#022545]">Application Native (Swift/Kotlin)</option>
                            <option value="mvp" className="text-white bg-[#022545]">MVP / Prototype rapide</option>
                            <option value="erp-mobile" className="text-white bg-[#022545]">Solution métier / ERP Mobile</option>
                            <option value="super-app" className="text-white bg-[#022545]">Super App / Marketplace mobile</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="relative">
                        <select
                            className="w-full bg-white/5 border border-primary-500/30 rounded-full px-6 py-4 text-white focus:outline-none focus:border-primary-400 focus:bg-[#022545] transition-all appearance-none cursor-pointer"
                            value={delay}
                            onChange={(e) => setDelay(e.target.value)}
                        >
                            <option value="" disabled className="text-gray-400 bg-[#022545]">Délai souhaité</option>
                            {delays.map((d, i) => (
                                <option key={i} value={d} className="text-white bg-[#022545]">{d}</option>
                            ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button
                    type="submit"
                    className="px-12 py-4 rounded-full font-bold text-white bg-green-500 hover:bg-green-400 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                    Envoyer
                </button>
            </div>
        </form>
    )
}
