import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Moon, Sun, Book, Map, Home, MessageSquare, History, Menu, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {
    const [theme, setTheme] = useState('dark');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    const navItems = [
        { name: 'Ballina', path: 'Home', icon: Home },
        { name: 'Frazeologji', path: 'Phraseology', icon: Book },
        { name: 'Harta e Shqipërisë', path: 'AlbaniaMap', icon: Map },
        { name: 'Asistent AI', path: 'AIAssistant', icon: MessageSquare },
        { name: 'Historia', path: 'About', icon: History },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50 dark:from-slate-950 dark:via-red-950/20 dark:to-slate-950 transition-colors duration-500">
            <style>{`
        :root {
          --primary: 0 72% 51%;
          --primary-foreground: 0 0% 100%;
          --accent: 0 84% 45%;
          --accent-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 0 0% 9%;
 