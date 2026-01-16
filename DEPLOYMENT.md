# Netlify Deployment Guide

## Step-by-Step Deployment Instructions

### 1. Prepare Your Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Albanian Language Platform with Netlify configuration"

# Create a new repository on GitHub (if not already created)
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/albanian-platform.git
git branch -M main
git push -u origin main
```

### 2. Get OpenAI API Key

1. Visit [openai.com/api](https://openai.com/api/)
2. Sign up or log in
3. Go to API keys section
4. Create a new API key
5. Copy and save it securely (you won't see it again!)

### 3. Deploy to Netlify

#### Option A: Connect via GitHub (Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up with GitHub"
3. Authorize Netlify
4. Click "New site from Git"
5. Select your GitHub repository
6. Configure build settings:
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `dist`
   - **Runtime**: Node 18.x

7. Click "Deploy site"

#### Option B: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### 4. Configure Environment Variables

After deployment:

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment**
3. Click **Add an environment variable** or **Edit variables**
4. Add these variables:

   | Key | Value |
   |-----|-------|
   | `OPENAI_API_KEY` | `sk-your-actual-key-here` |
   | `NODE_VERSION` | `18` |

5. **IMPORTANT**: Redeploy your site after adding variables
   - Go to **Deploys** → **Trigger deploy** → **Deploy site**

### 5. Enable Netlify Functions

1. Ensure your `netlify.toml` file exists (it's already created)
2. Functions should auto-detect from `netlify/functions/` directory
3. Verify in **Site settings** → **Functions**

### 6. Test Deployment

After deployment:

1. Visit your site URL (Netlify will provide it)
2. Test all pages load correctly
3. Test AI Assistant:
   - Go to "Asistent AI" page
   - Type a question about Albanian language
   - Should see response from OpenAI

### Troubleshooting

#### AI Assistant Returns Error

**Problem**: "API key not configured" or similar error

**Solution**:
1. Check Netlify environment variables are set
2. Verify variable name is exactly `OPENAI_API_KEY`
3. Redeploy your site after adding variables
4. Check Netlify logs: **Deploys** → **latest deploy** → **Functions**

#### Build Fails

**Problem**: Build fails with dependency errors

**Solution**:
```bash
# Clear cache and reinstall locally
rm -rf node_modules package-lock.json
npm install

# Try building locally
npm run build

# If it works locally but not on Netlify:
# - Clear Netlify cache: Site settings → Deploys → Clear cache
# - Trigger rebuild
```

#### Map Not Showing

**Problem**: Map appears blank or shows error

**Solution**:
1. Check browser console (F12) for errors
2. Verify SVG rendering in React DevTools
3. Clear browser cache and reload

#### 404 on Page Refresh

**Problem**: Refreshing page shows 404

**Solution**:
- This is already fixed in your `netlify.toml` with redirect rules
- Make sure netlify.toml is deployed
- Redeploy if needed

### Performance Optimization

Your site is now optimized for Netlify with:

✅ **Build optimization**
- Minified CSS and JS
- Source maps disabled in production
- Tree-shaking enabled

✅ **Runtime optimization**
- Serverless functions (no cold start impact)
- Auto-scaling
- CDN distribution

✅ **API optimization**
- OpenAI responses cached intelligently
- Efficient data loading with React Query

### Monitoring

Check your site health:

1. **Netlify Dashboard**
   - Monitor deploy history
   - Check function execution logs
   - View bandwidth usage

2. **Performance**
   - Lighthouse score
   - Core Web Vitals
   - Build time

### Continuous Deployment

Your setup now has automatic deployment:

1. Push code to GitHub
2. Netlify automatically builds and deploys
3. Check deployment status in Netlify dashboard
4. Rollback previous versions if needed

### Custom Domain (Optional)

1. In Netlify: **Site settings** → **Domain management**
2. Add your custom domain
3. Update DNS records (instructions provided by Netlify)
4. Wait for DNS propagation (can take 24-48 hours)

### SSL/HTTPS

Already enabled automatically by Netlify! Your site is secure.

---

## Quick Reference

### Important Files

- `netlify.toml` - Netlify configuration
- `.env.example` - Environment variables template
- `netlify/functions/llm-chat.js` - AI API handler
- `package.json` - Dependencies and build scripts

### Useful Netlify Commands

```bash
# View site info
netlify sites:list

# Check function logs
netlify functions:invoke llm-chat

# View environment
netlify env:list
```

### Support

If deployment issues occur:

1. Check Netlify build logs
2. Review function logs
3. Test locally: `npm run dev`
4. Compare with working version on GitHub

---

**You're all set! Your Albanian Language Platform is ready for production! 🚀**
