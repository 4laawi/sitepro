import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const apiKey = process.env.OPENROUTER_API_KEY;

        // List of models to try in order of preference
        const models = [
            'meta-llama/llama-3.1-405b-instruct:free',
            'meta-llama/llama-3.3-70b-instruct:free',
            'meta-llama/llama-3.1-8b-instruct:free'
        ];

        if (!apiKey) {
            console.error('CHAT_ERROR: OPENROUTER_API_KEY is missing.');
            return NextResponse.json({ error: 'Configuration error: API key missing.' }, { status: 500 });
        }

        let lastError = null;

        for (const model of models) {
            try {
                console.log(`CHAT_INFO: Trying model ${model}...`);
                const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
                        'X-Title': process.env.NEXT_PUBLIC_SITE_NAME || 'Sitepro Assistant',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        model: model,
                        messages: [
                            {
                                role: 'system',
                                content: `Tu es l’assistant commercial officiel de Sitepro.ma, une agence web basée au Maroc.

OBJECTIF :
Qualifier les besoins du visiteur avant de proposer une solution ou un prix.

RÈGLES :
- Pose toujours 1 question de clarification avant de donner une réponse détaillée.
- Réponds brièvement par défaut.
- Les prix sont toujours des estimations “à partir de”.
- Ton professionnel, clair et orienté business.

SERVICES (ESTIMATIONS) :
- Site vitrine : à partir de 1 500 DH
- Site e-commerce : à partir de 3 000 DH
- Projet web professionnel / grande échelle : 5 000 DH et plus
- SEO sérieux + design moderne : à partir de 5 000 DH

INFO AGENCE :
- Sites sur mesure
- Possibilité de copier ou s’inspirer de tout exemple fourni
- Agence marocaine avec des centaines de clients satisfaits
- Contact : numéro whatsapp : 0663711164

LANGUE :
- Français par défaut, autre langue si demandée.`,
                            },
                            ...messages,
                        ],
                    }),
                });

                const data = await response.json();

                if (response.ok && data.choices && data.choices[0]?.message) {
                    console.log(`CHAT_INFO: Success with model ${model}`);
                    return NextResponse.json(data);
                } else {
                    console.warn(`CHAT_WARN: Model ${model} failed with status ${response.status}:`, data);
                    lastError = data;
                }
            } catch (err) {
                console.error(`CHAT_ERROR: Exception with model ${model}:`, err);
                lastError = err;
            }
        }

        // If all models failed
        return NextResponse.json({
            error: 'Désolé, le service d\'IA est temporairement indisponible.',
            details: lastError
        }, { status: 500 });

    } catch (error) {
        console.error('CHAT_ERROR: Internal exception:', error);
        return NextResponse.json({ error: 'Une erreur interne est survenue.' }, { status: 500 });
    }
}
