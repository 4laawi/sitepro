'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const Chatbot = dynamic(() => import('@/components/Chatbot'), {
    ssr: false
});

const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), {
    ssr: false
});

export default function ClientOnlyWrapper() {
    return (
        <>
            <SmoothScroll />
            <Chatbot />
        </>
    );
}
