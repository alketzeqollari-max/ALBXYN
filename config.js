// Environment configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5173';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';
const ENV = import.meta.env.VITE_ENV || 'development';

export const config = {
    apiBaseUrl: API_BASE_URL,
    openaiKey: OPENAI_API_KEY,
    env: ENV,
    isDevelopment: ENV === 'development',
    isProduction: ENV === 'production',
    debug: ENV === 'development',
};

// Validate configuration
if (config.isProduction && !OPENAI_API_KEY) {
    console.warn('Warning: OPENAI_API_KEY is not set in production environment');
}

export default config;
