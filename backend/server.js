const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for Netlify frontend
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:3000',
        'https://localhost',
        process.env.NETLIFY_URL || '*'
    ]
}));

app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running!' });
});

// AI Chat endpoint - calls OpenAI
app.post('/api/chat', async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'API key not configured' });
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
            return res.status(500).json({ error: error.error?.message || 'OpenAI API error' });
        }

        const data = await response.json();
        const responseText = data.choices[0].message.content;

        res.json({ response: responseText });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
