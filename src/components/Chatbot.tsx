'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Bot, Trash2, SendHorizontal } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [hasNotification, setHasNotification] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedChat = localStorage.getItem('sitepro_chat_history');
        if (savedChat) {
            setMessages(JSON.parse(savedChat));
            setHasNotification(false);
        } else {
            setMessages([
                { role: 'assistant', content: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?' }
            ]);
        }

        // Show proactive greeting bubble after 3 seconds if not already interacting
        const greetingTimer = setTimeout(() => {
            if (!isOpen && !savedChat) {
                setShowGreeting(true);
            }
        }, 3000);

        // Show notification badge after 10 seconds to simulate a new message arrival
        const notificationTimer = setTimeout(() => {
            if (!isOpen) {
                setHasNotification(true);
            }
        }, 10000);

        return () => {
            clearTimeout(greetingTimer);
            clearTimeout(notificationTimer);
        };
    }, [isOpen]);

    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('sitepro_chat_history', JSON.stringify(messages));
        }
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleOpen = () => {
        setIsOpen(!isOpen);
        setShowGreeting(false);
        setHasNotification(false);
    };

    const handleSend = async (textOverride?: string) => {
        const messageContent = textOverride || input;
        if (!messageContent.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: messageContent };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        if (!textOverride) setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages.slice(-5) }), // Send last 5 messages for context
            });

            const data = await response.json();
            if (data.choices && data.choices[0]?.message) {
                setMessages([...newMessages, data.choices[0].message]);
            } else {
                console.error('Chat API Error Response:', data);
                setMessages([...newMessages, { role: 'assistant', content: 'Désolé, je rencontre une petite difficulté technique.' }]);
            }
        } catch (error) {
            console.error('Chat application error:', error);
            setMessages([...newMessages, { role: 'assistant', content: 'Une erreur est survenue.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        const defaultMsg: Message[] = [{ role: 'assistant', content: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?' }];
        setMessages(defaultMsg);
        localStorage.removeItem('sitepro_chat_history');
    };

    const predefinedQuestions = [
        "Je veux un site web",
        "Combien coûte un site web ?",
        "Je veux une application mobile"
    ];

    return (
        <>
            {/* Proactive Greeting Bubble */}
            <AnimatePresence>
                {showGreeting && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="fixed bottom-24 right-6 z-50 bg-white px-4 py-2 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-2 cursor-pointer"
                        onClick={handleOpen}
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <p className="text-sm font-medium text-gray-700">Besoin d&apos;aide ? Je suis là !</p>
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-blue-100 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {/* Pulsing Back Glow */}
                {!isOpen && (
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-blue-500 rounded-full blur-lg"
                    />
                )}

                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOpen}
                    className="relative p-4 sm:p-5 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center overflow-visible"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                            >
                                <X className="w-6 h-6 sm:w-7 sm:h-7" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="open"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                className="relative flex items-center justify-center"
                            >
                                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
                                {hasNotification && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1.1 }}
                                        className="absolute -top-6 sm:-top-7 -right-2 sm:-right-3 w-4 h-4 sm:w-5 sm:h-5 bg-[#ff4d4d] text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center rounded-full shadow-lg"
                                    >
                                        1
                                    </motion.span>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[85vw] sm:w-[400px] h-[500px] sm:h-[550px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="relative">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                        <Bot size={20} className="sm:size-6" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 border-2 border-white rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm sm:text-base">Assistant Sitepro</h3>
                                    <p className="text-[9px] sm:text-[10px] opacity-90 uppercase tracking-widest font-medium">Réponse instantanée</p>
                                </div>
                            </div>
                            <button
                                onClick={clearChat}
                                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
                                title="Effacer la conversation"
                            >
                                <Trash2 size={16} className="sm:size-[18px]" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 sm:y-4 scroll-smooth bg-gray-50/50"
                        >
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                                        : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-3 sm:p-4 rounded-2xl rounded-tl-none flex gap-1.5 shadow-sm border border-gray-100">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce [animation-duration:0.8s]"></span>
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* Predefined Questions */}
                        {!isLoading && messages.length <= 1 && (
                            <div className="px-4 py-2 flex flex-wrap gap-2 bg-gray-50/50 border-t border-gray-100/50">
                                {predefinedQuestions.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSend(q)}
                                        className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-white border border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm active:scale-95"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 sm:p-5 border-t border-gray-100 bg-white">
                            <div className="relative flex items-center bg-gray-50 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Écrivez votre message..."
                                    className="flex-1 bg-transparent border-none focus:outline-none text-xs sm:text-sm text-gray-800 placeholder:text-gray-400"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!input.trim() || isLoading}
                                    className="ml-2 p-1.5 sm:p-2 bg-blue-600 text-white hover:bg-blue-700 rounded-xl transition-all disabled:opacity-30 disabled:hover:bg-blue-600 shadow-lg shadow-blue-200"
                                >
                                    <SendHorizontal size={16} className="sm:size-[18px]" />
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 mt-3">
                                <span className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">AI Assistant by Sitepro.ma</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
