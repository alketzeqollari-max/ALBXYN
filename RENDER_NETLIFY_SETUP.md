# Setup: Frontend (Netlify) + Backend (Render.com)

## 🎯 Architecture

```
Frontend (Netlify)
    ↓ API calls to
Backend (Render.com)
    ↓ calls
OpenAI API
```

---

## 📋 LOCAL DEVELOPMENT

### 1. Setup Backend (Terminal 1)

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your OpenAI API key
npm start
```

Backend runs on: **http://localhost:5000**

### 2. Setup Frontend (Terminal 2)

```bash
npm install
npm run dev
```

Frontend runs on: **http://localhost:5173**

### Test Locally
1. Visit http://localhost:5173
2. Go to "Asistent AI"
3. Type a question
4. Should see response from backend ✅

---

## 🚀 DEPLOY TO RENDER + NETLIFY

### Step 1: Deploy Backend to Render.com

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Go to render.com**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select your branch

3. **Configure Build Settings**
   - **Name:** albanian-backend (or your choice)
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Select "Node"

4. **Add Environment Variables**
   - Click "Advanced" → "Add Environment Variable"
   - **Key:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key from https://platform.openai.com/api-keys
   - Click "Add"

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (shows "Live")
   - Note your backend URL: `https://albanian-backend.onrender.com`

---

### Step 2: Deploy Frontend to Netlify

1. **Update Frontend .env for Production**
   
   Edit the file `c:\Users\alket\OneDrive\Desktop\New folder\.env`:
   ```
   VITE_API_BASE_URL=https://albanian-backend.onrender.com
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update backend URL for production"
   git push
   ```

3. **Go to netlify.com**
   - Click "New site from Git"
   - Connect GitHub repository
   - Select your branch

4. **Configure Build**
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy"

5. **Wait for Deployment**
   - Netlify shows your site URL (e.g., `https://your-site.netlify.app`)
   - Site is now LIVE! 🎉

---

## ✅ TEST LIVE SITE

1. Visit your Netlify URL
2. Click through all pages
3. Go to "Asistent AI"
4. Ask a question about Albanian language
5. Should see response from your Render backend ✅

---

## 🔧 FOLDER STRUCTURE

```
Your Project/
├── frontend/ (what's in root now)
│   ├── src/
│   ├── Pages/
│   ├── Components/
│   ├── .env
│   ├── vite.config.js
│   ├── package.json
│   └── App.jsx
│
└── backend/ (NEW)
    ├── server.js
    ├── package.json
    ├── .env.example
    └── .gitignore
```

---

## 📞 TROUBLESHOOTING

### Backend won't start locally
```bash
cd backend
npm install
npm start
```
Should show: `🚀 Server running on port 5000`

### Frontend can't reach backend
- Check `.env` has correct `VITE_API_BASE_URL`
- Backend should be running on `http://localhost:5000`
- Check browser console for errors (F12)

### AI responses say "error"
- Check Render.com has `OPENAI_API_KEY` environment variable set
- Check API key is valid
- Redeploy on Render after adding variable

### Build fails on Netlify
- Check `.env` is configured for production URL
- Push updated `.env` configuration
- Trigger redeploy on Netlify

---

## 🎊 YOU'RE DONE!

Now you have:
✅ Frontend (React) on Netlify
✅ Backend (Express) on Render.com
✅ OpenAI integration working
✅ Everything communicating properly

**Enjoy your deployed app!** 🚀
