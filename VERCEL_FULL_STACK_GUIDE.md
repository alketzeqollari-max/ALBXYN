# 🚀 Full-Stack Vercel Deployment Guide

This is a **complete full-stack application** with:
- **Frontend**: React + Vite running on Vercel
- **Backend**: Serverless Functions in `/api/` running on Vercel
- **AI Integration**: OpenAI GPT-3.5-turbo via `/api/chat`
- **Testing**: `/api/hello` endpoint to verify backend status

---

## 📁 Project Structure

```
.
├── api/                          # Serverless Functions (auto-exposed at /api/*)
│   ├── hello.js                 # Test endpoint: GET /api/hello
│   └── chat.js                  # AI chat: POST /api/chat
├── src/                          # React frontend source
│   ├── pages/
│   │   └── Home.jsx            # Main page (fetches from /api/hello and /api/chat)
│   ├── components/              # React components
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
├── vercel.json                 # Vercel deployment config
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies & scripts
└── .env.example                # Environment variables template
```

---

## 🔧 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Create `.env` File
Copy `.env.example` to `.env` and add your OpenAI API key:
```bash
cp .env.example .env
```

Edit `.env`:
```
OPENAI_API_KEY=sk-your-actual-api-key-here
NODE_ENV=development
```

### 3. Run Locally
```bash
npm run dev
```

Your app will be available at **http://localhost:5173**

#### Test the Backend:
- **Frontend loads**: http://localhost:5173
- **Test endpoint**: http://localhost:5173/api/hello (should show "Hello from backend!")
- **Chat endpoint**: Use the form on the page to test /api/chat with OpenAI

---

## 📤 Deploy to Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Full-stack Vercel deployment ready"
git push origin main
```

### 2. Deploy to Vercel
Option A: **Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

Option B: **Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Click "Deploy"

### 3. Configure Environment Variables
After deployment, set environment variables in Vercel dashboard:

1. Go to your project settings
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - Key: `OPENAI_API_KEY`
   - Value: `sk-your-actual-api-key-here`
4. Re-deploy the project

### 4. Verify Deployment
Once live on Vercel:
- **Frontend**: https://your-project.vercel.app
- **API Test**: https://your-project.vercel.app/api/hello
- **Chat API**: Use the form to test OpenAI integration

---

## 🔑 Environment Variables

### Local Development (`.env`)
```
OPENAI_API_KEY=sk-your-key-here
NODE_ENV=development
```

### Vercel Production
Set in Vercel Dashboard → Settings → Environment Variables:
- `OPENAI_API_KEY` = Your OpenAI API key

---

## 📝 API Endpoints

### `/api/hello` (GET)
Simple test endpoint to verify backend is running.

**Response:**
```json
{
  "message": "Hello from backend!",
  "timestamp": "2024-01-16T12:34:56.789Z",
  "nodeEnv": "production"
}
```

### `/api/chat` (POST)
AI-powered chat using OpenAI.

**Request:**
```json
{
  "prompt": "Tell me about Albanian culture"
}
```

**Response:**
```json
{
  "response": "Albanian culture is...",
  "timestamp": "2024-01-16T12:34:56.789Z"
}
```

---

## 🐛 Troubleshooting

### **"Cannot find module" error**
- Clear `node_modules`: `rm -rf node_modules && npm install`
- Rebuild: `npm run build`

### **API 404 error**
- Ensure serverless functions are in `/api/*.js`
- Check that `vercel.json` exists and is valid
- Re-deploy: `vercel --prod`

### **OpenAI API error**
- Verify `OPENAI_API_KEY` is set in Vercel dashboard
- Check your OpenAI account has credits
- Ensure API key is valid: https://platform.openai.com/account/api-keys

### **CORS errors**
- Already enabled in `/api/*.js` handlers
- Check browser console for exact error
- Verify frontend URL matches CORS configuration

---

## 📚 Key Files

| File | Purpose |
|------|---------|
| `api/hello.js` | Simple test endpoint with CORS |
| `api/chat.js` | OpenAI integration with error handling |
| `src/pages/Home.jsx` | Frontend component fetching from both endpoints |
| `vercel.json` | Vercel-specific configuration |
| `vite.config.js` | Frontend build configuration |
| `.env.example` | Template for environment variables |

---

## ✅ Deployment Checklist

- [ ] Clone the repository locally
- [ ] Run `npm install`
- [ ] Create `.env` with `OPENAI_API_KEY`
- [ ] Test locally: `npm run dev`
- [ ] Push to GitHub: `git push`
- [ ] Deploy to Vercel (CLI or Dashboard)
- [ ] Set `OPENAI_API_KEY` in Vercel environment variables
- [ ] Visit `https://your-project.vercel.app`
- [ ] Test `/api/hello` endpoint
- [ ] Test chat form with OpenAI

---

## 🎉 Success!

Your full-stack application is now:
- ✅ Built with modern React + Vite
- ✅ Deployed on Vercel (serverless everywhere)
- ✅ Powered by OpenAI GPT-3.5-turbo
- ✅ CORS-enabled for cross-origin requests
- ✅ Production-ready with environment variables

**Next Steps:**
- Add more API endpoints in `/api/*.js`
- Build more React components in `/src/components/`
- Scale your application with more features
- Monitor performance in Vercel Analytics

Enjoy your full-stack app! 🚀
