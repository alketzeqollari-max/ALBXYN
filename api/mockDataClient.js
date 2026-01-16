// Mock API Client - Local Data Management
// Replaces base44 dependency

const mockPhrases = [
    {
        id: 1,
        phrase: 'Të jetë si peshku në ujë',
        category: 'emërore',
        literal_meaning: 'Të jesh si një peshk në ujë',
        figurative_meaning: 'Të jesh në rrethinat e tua të kënaqshme',
        example_usage: 'Në farmë, ai është si peshku në ujë.',
        notes: 'Shprehje popullore e vjetër'
    },
    {
        id: 2,
        phrase: 'Të kenë guxim luani',
        category: 'foljore',
        literal_meaning: 'Guxim i një luani',
        figurative_meaning: 'Të jesh shumë i guxueshëm',
        example_usage: 'Ajo me guxim luani kërkoi të folte përpara.'
    },
    {
        id: 3,
        phrase: 'Syri i ujkut',
        category: 'mbiemërore',
        literal_meaning: 'Syri i ujkut',
        figurative_meaning: 'Dikush me shikime të këqija ose të dëmshme',
        example_usage: 'Mos u afro, ka synin e ujkut.'
    },
    {
        id: 4,
        phrase: 'Të pijë ajrin e ndonjeri',
        category: 'ndajfoljore',
        literal_meaning: 'Të pijë ajrin e dikujt',
        figurative_meaning: 'Të të zini jashtë shtëpisë',
        example_usage: 'Nëse nuk behesh mirë, do të pish ajrin tim!'
    },
    {
        id: 5,
        phrase: 'Koka e gomari',
        category: 'mbiemërore',
        literal_meaning: 'Koka e nje gomareje',
        figurative_meaning: 'Person i paarsyeshëm, i ngurte',
        example_usage: 'Ai është kokë gomareje, nuk ndryshon kurrë'
    }
];

const mockCityWisdom = [
    {
        city_name: 'Tiranë',
        region: 'Qendër',
        wise_words: [
            {
                text: 'Në Tiranë, secili ka mendimin e vet.',
                meaning: 'Në kryeqytet ka shumë perspektiva të ndryshme',
                origin: 'Thënie popullore'
            }
        ]
    },
    {
        city_name: 'Shkodër',
        region: 'Veri',
        wise_words: [
            {
                text: 'Shkodra është e ftohtë, por zemrat janë të nxehtë.',
                meaning: 'Malgradì klimës, njerëzit janë të ngrohtë',
                origin: 'Tradita shkodrane'
            }
        ]
    },
    {
        city_name: 'Vlorë',
        region: 'Jug',
        wise_words: [
            {
                text: 'Deti i Vlorës flet për lirinë.',
                meaning: 'Lidhja me lirinë dhe historinë',
                origin: 'Histori kombëtare'
            }
        ]
    }
];

class MockDataClient {
    constructor() {
        this.phrases = [...mockPhrases];
        this.cityWisdom = [...mockCityWisdom];
    }

    async getPhraselist() {
        return this.phrases;
    }

    async getCityWisdomList() {
        return this.cityWisdom;
    }

    async getWisdomByCity(cityName) {
        return this.cityWisdom.find(w => w.city_name === cityName) || null;
    }

    async addPhrase(phrase) {
        phrase.id = Math.max(...this.phrases.map(p => p.id), 0) + 1;
        this.phrases.push(phrase);
        return phrase;
    }

    async addCityWisdom(wisdom) {
        this.cityWisdom.push(wisdom);
        return wisdom;
    }
}

export const mockDataClient = new MockDataClient();

// Export mock base44 structure for compatibility
export const base44 = {
    entities: {
        Phrase: {
            list: () => mockDataClient.getPhraselist(),
            add: (data) => mockDataClient.addPhrase(data)
        },
        CityWisdom: {
            list: () => mockDataClient.getCityWisdomList(),
            get: (cityName) => mockDataClient.getWisdomByCity(cityName),
            add: (data) => mockDataClient.addCityWisdom(data)
        }
    },
    integrations: {
        Core: {
            InvokeLLM: async (config) => {
                // This will be handled by Netlify function
                try {
                    const response = await fetch('/.netlify/functions/llm-chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(config)
                    });
                    const data = await response.json();
                    return data.response || 'Unable to get response';
                } catch (error) {
                    console.error('LLM error:', error);
                    return 'Na vjen keq, ndodhi një gabim në përgjigjen e AI.';
                }
            }
        }
    }
};
