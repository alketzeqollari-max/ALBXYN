// Utility function to create page URLs
export const createPageUrl = (pageName) => {
    const pageMap = {
        'Home': '/',
        'Phraseology': '/phraseology',
        'AlbaniaMap': '/albania-map',
        'AIAssistant': '/ai-assistant',
        'About': '/about',
    };
    return pageMap[pageName] || '/';
};

// Theme utilities
export const getTheme = () => {
    return localStorage.getItem('theme') || 'dark';
};

export const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
};

// Data formatting utilities
export const formatCityName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
};

export const getRegionColor = (region) => {
    const colors = {
        'Veri': 'bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-400',
        'Qendër': 'bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-400',
        'Jug': 'bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-400',
    };
    return colors[region] || colors['Veri'];
};

export const getRegionLabel = (region) => {
    const labels = {
        'Veri': 'Veriu',
        'Qendër': 'Qendra',
        'Jug': 'Jugu',
    };
    return labels[region] || region;
};

// API utilities
export const apiCall = async (endpoint, options = {}) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
    const response = await fetch(`${baseUrl}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
    }

    return response.json();
};
