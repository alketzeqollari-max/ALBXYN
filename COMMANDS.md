# COMMAND REFERENCE

## Installation

```bash
# Install all dependencies
npm install

# Install specific package
npm install package-name

# Install dev dependencies
npm install --save-dev package-name

# Clear cache and reinstall (if having issues)
rm -rf node_modules package-lock.json
npm install
```

## Development

```bash
# Start development server with hot reload
npm run dev

# Development on custom port
npm run dev -- --port 3000

# Start and open in browser
npm run dev -- --open

# Watch for file changes without server
npm run dev -- --watch
```

## Building

```bash
# Build for production
npm run build

# Build with source maps (debugging)
npm run build -- --sourcemap

# Preview production build locally
npm run preview

# Clean build artifacts
rm -rf dist
npm run build
```

## Testing & Debugging

```bash
# Open browser DevTools
# Press F12 in browser

# Check for console errors
# Check Network tab for API calls

# Check function logs
# Go to Netlify dashboard → Logs
```

## Git Commands

```bash
# Initialize git repository
git init

# Check status
git status

# Stage files
git add .
git add filename.js

# Commit changes
git commit -m "Your message here"
git commit -m "Initial commit"

# Create branch
git branch branch-name
git checkout branch-name
git checkout -b branch-name

# Switch branches
git checkout main
git checkout develop

# Push to GitHub
git push
git push origin main
git push -u origin branch-name

# Pull from GitHub
git pull

# View commit history
git log

# View changes
git diff
git diff filename.js
```

## Netlify CLI Commands

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link local project to Netlify site
netlify link

# Deploy to preview
netlify deploy

# Deploy to production
netlify deploy --prod

# View site info
netlify sites:list

# View environment variables
netlify env:list

# View function logs
netlify functions:invoke llm-chat

# Check build status
netlify deploys:list

# Cancel current build
netlify builds:cancel
```

## Environment & Configuration

```bash
# Check Node version
node -v

# Check npm version
npm -v

# View installed packages
npm list
npm list --depth=0

# Outdated packages
npm outdated

# Update packages
npm update

# Clean npm cache
npm cache clean --force
```

## File Operations

```bash
# Copy file
cp source.js dest.js

# Move/rename file
mv old-name.js new-name.js

# Create directory
mkdir folder-name

# Create nested directories
mkdir -p path/to/folder

# Remove file
rm filename.js

# Remove directory
rm -rf folder-name

# List files
ls
ls -la

# Print working directory
pwd

# Change directory
cd folder-name
cd ..
cd ~
```

## Development Server

```bash
# Access development server
http://localhost:5173

# Access on network (from other devices)
http://your-ip:5173

# API requests from dev
fetch('/.netlify/functions/llm-chat', {
  method: 'POST',
  body: JSON.stringify({ prompt: '...' })
})
```

## Production Build

```bash
# Access production preview
npm run preview
# Visit http://localhost:4173

# Serve from dist folder
npx serve dist
```

## Common Workflows

### Start Development Session
```bash
npm install      # Install dependencies (first time only)
npm run dev      # Start dev server
# Edit code in VS Code
# Changes auto-reload in browser
```

### Deploy to Production
```bash
npm run build    # Build for production
git add .        # Stage changes
git commit -m "Deploy to production"
git push         # Push to GitHub
# Netlify auto-deploys from GitHub
```

### Add New Package
```bash
npm install package-name
npm run dev      # Test it works
git add .
git commit -m "Add package-name"
git push
```

### Fix Issues
```bash
# Clear everything and restart
rm -rf node_modules dist .netlify
npm install
npm run dev
```

### Deploy Bug Fix
```bash
# Make your fix
npm run dev      # Test locally
npm run build    # Verify build works
git add .
git commit -m "Fix: description of fix"
git push         # Netlify deploys automatically
```

## Debugging Commands

```bash
# Check if port is in use
netstat -an | grep 5173  # macOS/Linux
netstat -ano | findstr :5173  # Windows

# Kill process on port
kill -9 $(lsof -t -i:5173)  # macOS/Linux
netstat -ano | findstr :5173 | findstr LISTENING  # Windows

# Check API response
curl -X POST http://localhost:5173/.netlify/functions/llm-chat \
  -H "Content-Type: application/json" \
  -d '{"prompt":"test"}'

# View environment variables
printenv | grep VITE  # macOS/Linux
set | findstr VITE   # Windows
```

## VS Code Useful Commands

```bash
# Open folder in VS Code
code .

# Open specific file
code filename.js

# VS Code command palette
Ctrl + Shift + P (Windows/Linux)
Cmd + Shift + P (macOS)

# Search in files
Ctrl + Shift + F (Windows/Linux)
Cmd + Shift + F (macOS)

# Format document
Alt + Shift + F (Windows/Linux)
Option + Shift + F (macOS)

# Open integrated terminal
Ctrl + ` (backtick)
```

## Package.json Scripts

```bash
# Run script from package.json
npm run script-name

# Available scripts in this project:
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Useful npm Shortcuts

```bash
npm i            # Same as npm install
npm i -D         # Same as npm install --save-dev
npm un           # Same as npm uninstall
npm ls           # Same as npm list
npm start        # Runs "start" script from package.json
npm test         # Runs "test" script from package.json
```

## Network & API

```bash
# Test OpenAI API connectivity
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer sk-your-key"

# Check Netlify function
curl https://your-site.netlify.app/.netlify/functions/llm-chat
```

## File Permissions (Linux/macOS)

```bash
# Make script executable
chmod +x setup.sh

# Run shell script
./setup.sh

# Make all .sh files executable
find . -name "*.sh" -exec chmod +x {} \;
```

## Monitoring & Logs

```bash
# Real-time Netlify logs
netlify logs --function=llm-chat --tail

# View build logs
netlify builds:log

# Export environment
netlify env:export

# Import environment
netlify env:import .env
```

## Emergency Commands

```bash
# Stop running server
Ctrl + C (in terminal)

# Clear terminal
clear (macOS/Linux)
cls (Windows)

# Exit node REPL
.exit (or Ctrl + D)

# Soft reset (keep data)
npm install

# Hard reset (lose node_modules)
rm -rf node_modules package-lock.json && npm install

# Reset Netlify
netlify unlink
netlify link
```

---

**Quick Reference:**
- `npm run dev` → Start coding
- `npm run build` → Prepare for production
- `git push` → Deploy to Netlify
- Check logs if something breaks!
