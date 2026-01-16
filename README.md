# Albanian Language Platform

A modern, interactive platform for exploring Albanian language, phraseology, and culture.

## Features

- **Phraseology**: Browse and search Albanian idioms and expressions
- **Interactive Map**: Explore Albania's 61 municipalities and local wisdom
- **AI Assistant**: Chat with an AI specialized in Albanian language
- **Cultural Heritage**: Learn about the history and evolution of the Albanian language

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Query
- React Router
- Netlify Functions + OpenAI API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Add your OpenAI API key
# Edit .env and set VITE_OPENAI_API_KEY=sk-your-key-here
```

### Development

```bash
# Start development server
npm run dev

# Visit http://localhost:5173
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Netlify

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Configure Environment Variables**
   - Go to Site settings → Environment
   - Add `OPENAI_API_KEY` with your API key
   - Add `NODE_VERSION=18` (or your preferred version)

4. **Deploy**
   - Push changes to GitHub - Netlify will auto-deploy

## Environment Variables

### Development (.env)
```
VITE_OPENAI_API_KEY=sk-your-api-key
VITE_API_BASE_URL=http://localhost:5173
VITE_ENV=development
```

### Production (Netlify)
Set these in Netlify Site Settings → Environment:
- `OPENAI_API_KEY`: Your OpenAI API key
- `NODE_VERSION`: 18 or higher

## File Structure

```
├── api/
│   ├── mockDataClient.js    # Local data API (replaces base44)
│   └── openaiClient.js      # OpenAI integration
├── Components/
│   ├── map/
│   │   ├── AlbaniaMapSVG.jsx
│   │   └── CityModal.jsx
│   └── UserNotFoundError/
├── Entities/                # Data schemas
│   ├── CityWisdom
│   └── Phrase
├── Pages/                   # Page components
│   ├── Home.jsx
│   ├── Phraseology.jsx
│   ├── AlbaniaMap.jsx
│   ├── AIAssistant.jsx
│   └── About.jsx
├── netlify/
│   └── functions/
│       └── llm-chat.js      # Serverless function for AI
├── Layout.js
├── main.jsx
├── vite.config.js
├── netlify.toml
└── package.json
```

## Features Configuration

### AI Assistant
- Uses OpenAI GPT-3.5-turbo API
- Specialized prompts for Albanian language topics
- Fallback mock responses for development

### Map Functionality
- Interactive SVG map with 61 municipalities
- Click to view city wisdom and sayings
- Filter by region (North/Center/South)
- Search functionality

### Phraseology
- Browse 1000+ Albanian idioms
- Filter by grammatical category
- Search functionality
- Example usage and explanations

## Troubleshooting

### OPENAI_API_KEY not found
- Ensure .env file exists in root directory
- Check key is set correctly: `VITE_OPENAI_API_KEY=sk-...`
- In Netlify, verify environment variables in Site settings

### Map not displaying
- Check browser console for errors
- Ensure municipality data is loading
- Verify SVG coordinates are valid

### AI Assistant not responding
- Check OpenAI API key validity
- Verify Netlify function is deployed
- Check network tab for `/api/llm-chat` requests

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review existing GitHub issues
3. Create a new issue with details

---

Made with ❤️ for the Albanian language and culture
