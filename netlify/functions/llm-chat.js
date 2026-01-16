// Netlify Function for LLM Integration
const fetch = require('cross-fetch');

exports.handler = async (event) => {
    // Enable CORS
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed', headers };
    }

    try {
        const { prompt, add_context_from_internet } = JSON.parse(event.body);

        if (!prompt) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Prompt is required' }),
                headers
            };
        }

        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            console.error('OPENAI_API_KEY not configured');
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'API key not configured' }),
                headers
            };
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'Ti je një asistent AI i specializuar në gjuhën shqipe, frazeologjinë, mençurinë popullore dhe kulturën shqiptare. Përgjigju gjithmonë në gjuhën shqipe në mënyrë të dobishme, miqësore dhe informative.',
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
            console.error('OpenAI API error:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'OpenAI API error', details: error.error?.message }),
                headers
            };
        }

        const data = await response.json();
        const responseText = data.choices[0].message.content;

        return {
            statusCode: 200,
            body: JSON.stringify({ response: responseText }),
            headers
        };
    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
            headers
        };
    }
};
