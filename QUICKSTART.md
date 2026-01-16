# 🚀 QUICK REFERENCE CARD

## Start Here - 5 Minutes to Running

### Step 1: Install (1 min)
```bash
npm install
```

### Step 2: Configure (1 min)
```bash
# Edit .env file
# Add your OpenAI API key from https://platform.openai.com/api-keys
VITE_OPENAI_API_KEY=sk-your-key-here
```

### Step 3: Run (1 min)
```bash
npm run dev
```
Visit: **http://localhost:5173**

### Step 4: Test (2 min)
- Click through all pages
- Try the map
- Test AI Assistant
- Toggle dark mode

---

## Commands Cheat Sheet

```bash
npm run dev          # 🏃 Start development server
npm run build        # 📦 Build for production
npm run preview      # 👀 Preview production locally
```

---

## Deploy to Netlify (5 min)

1. Push to GitHub:
```bash
git add .
git commit -m "Ready for production"
git push
```

2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub
5. Build: `npm run build` | Publish: `dist`
6. Add env: `OPENAI_API_KEY=sk-...`
7. Deploy!

---

## File Locations

| What | Where |
|------|-------|
| Pages | `Pages/` |
| Components | `Components/` |
| Styles | `index.css` |
| Config | `netlify.toml` |
| API | `api/mockDataClient.js` |
| Functions | `netlify/functions/llm-chat.js` |
| Build | `dist/` (after npm run build) |

---

## Troubleshooting (30 sec)

| Issue | Solution |
|-------|----------|
| "No API key" | Add to `.env`: `VITE_OPENAI_API_KEY=sk-...` |
| Build fails | `rm -rf node_modules` then `npm install` |
| Dev server won't start | Port 5173 may be in use, try `npm run dev` again |
| Map not showing | Clear browser cache, check console for errors |
| AI not responding | Check OpenAI API key validity |

---

## Key Files to Know

- `.env` - Your secrets (local only)
- `netlify.toml` - Netlify configuration
- `package.json` - Dependencies
- `vite.config.js` - Build settings
- `netlify/functions/llm-chat.js` - AI backend

---

## Environment Variables

### Development (.env)
```
VITE_OPENAI_API_KEY=sk-your-key
VITE_API_BASE_URL=http://localhost:5173
VITE_ENV=development
```

### Production (Netlify Settings)
```
OPENAI_API_KEY=sk-your-key
NODE_VERSION=18
```

---

## Project Structure

```
📁 Your Project
├── 📄 netlify.toml          ← Netlify config
├── 📄 package.json          ← Dependencies
├── 📄 .env                  ← YOUR KEYS (local only)
├── 📁 api/                  ← API clients
├── 📁 netlify/functions/    ← Backend functions
├── 📁 Components/           ← React components
├── 📁 Pages/                ← Page components
└── 📁 dist/                 ← Build output (after build)
```

---

## Features Included

- ✅ Dark/Light mode
- ✅ Responsive design
- ✅ 61 municipalities map
- ✅ 1000+ idioms database
- ✅ AI assistant (OpenAI)
- ✅ History & culture info
- ✅ Search & filters

---

## Links

- 📚 Full Docs: `README.md`
- 🚀 Deployment Guide: `DEPLOYMENT.md`
- 📋 What Changed: `CHANGES_MADE.md`
- ✅ Setup Guide: `SETUP_COMPLETE.md`

---

## One-Liners

```bash
# Get started fast
npm install && npm run dev

# Build and deploy
npm run build && netlify deploy --prod

# Check Node version
node -v    # Should be v18+

# Check installed packages
npm list --depth=0
```

---

## 🔐 Security Reminders

1. ✅ Never commit `.env` file
2. ✅ Keep API keys private
3. ✅ Use Netlify environment variables in production
4. ✅ `.gitignore` already configured correctly

---

## 📞 Need Help?

1. Check `README.md` for features
2. Check `DEPLOYMENT.md` for deployment
3. Check `SETUP_COMPLETE.md` for setup
4. Check browser console for errors (F12)
5. Check Netlify logs for function errors

---

**You're all set! Happy coding! 🎉**
