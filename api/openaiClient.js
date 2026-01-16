// OpenAI API Client for Netlify Functions
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY;

export const callOpenAI = async (prompt, model = 'gpt-3.5-turbo') => {
    if (!OPENAI_API_KEY) {
        throw new Error('OPENAI_API_KEY is not configured');
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer $}`,
            },
            body: JSON.stringify({
                model,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant specialized in Albanian language, phraseology, and culture. Always respond in Albanian unless specifically asked otherwise.',
                    },
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                temperature: 0.7,
                max_tokens: 1000,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'OpenAI API error');
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('OpenAI API error:', error);
        throw error;
    }
};

// Mock implementation for development
export const callOpenAIMock = async (prompt) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return mock response based on prompt content
    const lowerPrompt = prompt.toLowerCase();

    if (lowerPrompt.includes('frazeologji') || lowerPrompt.includes('phrase')) {
        return 'Frazeologjia shqiptare është shumë e pasur. Përmes historisë, shqiptarët kanë zhvilluar shprehje idiomatike të bukura që pasqyrojnë kulturën dhe traditat e tyre. Për shembull, "Të jetë si peshku në ujë" do të thotë të jesh në rrethinat e tua të kënaqshme.';
    }

    if (lowerPrompt.includes('harta') || lowerPrompt.includes('map')) {
        return 'Harta e Shqipërisë përfshin 61 bashki të ndara në tre rajone kryesore: Veriu, Qendra dhe Jugu. Çdo rajon ka karakteristika unike kulturore dhe dialektore.';
    }

    if (lowerPrompt.includes('historia') || lowerPrompt.includes('history')) {
        return 'Gjuha shqipe ka një histori të gjatë, duke përfshirë periudhën iliire, mesjetën dhe modernitetin. Dokumenti më i vjetër në gjuhën shqipe është Formula e Pagëzimit (1462).';
    }

    return 'Përgjigje e përgjithshme: Faleminderit për pyetjen tuaj rreth gjuhës shqipe! Si mund të ju ndihmoj më konkretisht?';
};
