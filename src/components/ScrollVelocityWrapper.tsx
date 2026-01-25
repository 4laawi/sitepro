'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

interface ScrollVelocityProps {
    texts: string[];
    [key: string]: unknown;
}

const ScrollVelocityComponent = dynamic(() => import('./ScrollVelocity'), { ssr: false }) as ComponentType<ScrollVelocityProps>;

export default function ScrollVelocity(props: ScrollVelocityProps) {
    return <ScrollVelocityComponent {...props} />;
}
