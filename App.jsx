import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './Layout';
import Home from './Pages/Home';
import Phraseology from './Pages/Phraseology';
import AlbaniaMap from './Pages/Albania Map';
import AIAssistant from './Pages/AIAssistant';
import About from './Pages/About';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/phraseology" element={<Phraseology />} />
                        <Route path="/albania-map" element={<AlbaniaMap />} />
                        <Route path="/ai-assistant" element={<AIAssistant />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}
