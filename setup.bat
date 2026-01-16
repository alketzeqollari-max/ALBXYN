@echo off
REM Albanian Language Platform - Quick Setup Script for Windows
REM Run this script to set up the project quickly

echo.
echo 🇦🇱 Setting up Albanian Language Platform...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js version:
node -v
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Create .env file if it doesn't exist
if not exist .env (
    echo.
    echo 📝 Creating .env file...
    copy .env.example .env
    echo ⚠️  IMPORTANT: Edit .env and add your OpenAI API key
    echo    Get your key from: https://platform.openai.com/api-keys
    echo.
)

REM Display next steps
echo.
echo ✅ Setup complete!
echo.
echo 📋 Next steps:
echo   1. Edit .env file and add your OpenAI API key
echo   2. Run: npm run dev
echo   3. Open: http://localhost:5173
echo.
echo 🚀 For deployment to Netlify, see DEPLOYMENT.md
echo.
pause
