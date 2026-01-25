'use client';

import dynamic from 'next/dynamic';

const ScrollVelocityComponent = dynamic(() => import('./ScrollVelocity'), { ssr: false });

export default function ScrollVelocity(props: any) {
    return <ScrollVelocityComponent {...props} />;
}
