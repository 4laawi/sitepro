'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Article {
    id: string
    title: string
    excerpt: string
    image: string
    category: string
    date: string
    readTime: string
    slug: string
    featured: boolean
}

interface BlogHeroProps {
    articles: Article[]
}

export default function BlogHero({ articles }: BlogHeroProps) {
    const [currentIdx, setCurrentIdx] = useState(0)

    const nextArticle = () => {
        setCurrentIdx((prev) => (prev + 1) % articles.length)
    }

    const prevArticle = () => {
        setCurrentIdx((prev) => (prev - 1 + articles.length) % articles.length)
    }

    const featuredArticle = articles[currentIdx]

    return (
        <section className="mb-20 px-4 md:px-0 relative group">
            <div className="relative rounded-[40px] overflow-hidden aspect-[21/10] bg-gray-900 shadow-2xl border border-gray-100">
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={featuredArticle.id}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            fill
                            className="object-cover opacity-60 transition-transform duration-700 hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                            <div className="flex gap-3 mb-6">
                                <span className="px-3 py-1 bg-primary-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Mise en avant</span>
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-wider">{featuredArticle.category}</span>
                            </div>
                            <Link href={featuredArticle.slug} className="block hover:text-primary-400 transition-colors">
                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl"
                                >
                                    {featuredArticle.title}
                                </motion.h2>
                            </Link>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="hidden md:block text-gray-300 text-lg mb-8 line-clamp-2 max-w-2xl"
                            >
                                {featuredArticle.excerpt}
                            </motion.p>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="flex flex-wrap items-center justify-between gap-8 border-t border-white/10 pt-8"
                            >
                                <div className="flex items-center gap-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary-500 border-2 border-white/20 overflow-hidden relative">
                                            <Image src="/Untitled design (3).webp" alt="ali taghi" fill className="object-cover" />
                                        </div>
                                        <div>
                                            <span className="block text-white font-medium text-sm">Ali Taghi</span>
                                            <span className="block text-gray-400 text-[10px] uppercase tracking-wider">Expertise Digitale</span>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block">
                                        <span className="block text-gray-400 text-[10px] mb-1 uppercase tracking-widest">Publié le</span>
                                        <span className="block text-white font-medium text-sm">{featuredArticle.date}</span>
                                    </div>
                                </div>
                                <Link href={featuredArticle.slug} className="group/btn flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Lire la suite</span>
                                    <div className="w-10 h-10 md:w-12 md:h-12 border border-white/20 rounded-full flex items-center justify-center transition-all group-hover/btn:border-white group-hover/btn:bg-white/10">
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-8 right-4 md:-right-8 flex justify-between pointer-events-none">
                <button
                    onClick={prevArticle}
                    className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all pointer-events-auto opacity-50 group-hover:opacity-100 shadow-2xl"
                    aria-label="Previous article"
                >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button
                    onClick={nextArticle}
                    className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all pointer-events-auto opacity-50 group-hover:opacity-100 shadow-2xl"
                    aria-label="Next article"
                >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {articles.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIdx(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIdx ? 'bg-primary-500 w-8' : 'bg-white/40 hover:bg-white/60'}`}
                    />
                ))}
            </div>
        </section>
    )
}
