/**
 * Home Page Component
 * 
 * Main page that fetches data from the backend API (/api/hello)
 * and displays the response.
 */

import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  // Fetch hello message from backend on component mount
  useEffect(() => {
    const fetchHello = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/hello');
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        setMessage(data.message);
        setError(null);
      } catch (err) {
        setError(err.message);
        setMessage('Failed to fetch message');
      } finally {
        setLoading(false);
      }
    };

    fetchHello();
  }, []);

  // Handle chat submission
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    
    if (!chatMessage.trim()) {
      return;
    }

    try {
      setChatLoading(true);
      setChatResponse('');

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: chatMessage }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setChatResponse(data.response);
    } catch (err) {
      setChatResponse(`Error: ${err.message}`);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="max-w-2xl mx-auto">
        {/* Hello API Section */}
        <section className="mb-12 bg-slate-800 rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
            🇦🇱 Albanian Platform
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Backend Status</h2>
            
            {loading ? (
              <div className="text-blue-400 animate-pulse">Connecting to backend...</div>
            ) : error ? (
              <div className="text-red-400 p-4 bg-red-900/20 rounded">
                ❌ {error}
              </div>
            ) : (
              <div className="text-green-400 p-4 bg-green-900/20 rounded">
                ✅ {message}
              </div>
            )}
          </div>

          {/* Chat Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ask AI Assistant</h2>
            
            <form onSubmit={handleChatSubmit} className="space-y-4">
              <textarea
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about Albanian culture, language, or traditions..."
                className="w-full p-3 rounded bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:border-red-500 focus:outline-none resize-none"
                rows="4"
              />
              
              <button
                type="submit"
                disabled={chatLoading}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded transition-all"
              >
                {chatLoading ? 'Thinking...' : 'Send Message'}
              </button>
            </form>

            {chatResponse && (
              <div className="mt-6 p-4 bg-slate-700 rounded border border-green-500">
                <p className="text-sm text-slate-300 mb-2">AI Response:</p>
                <p className="text-white">{chatResponse}</p>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-slate-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Full-Stack Architecture</h2>
          <ul className="space-y-3 text-slate-300">
            <li>✅ <strong>Frontend:</strong> React + Vite, runs on Vercel</li>
            <li>✅ <strong>Backend:</strong> Serverless Functions in /api/, runs on Vercel</li>
            <li>✅ <strong>/api/hello:</strong> Test endpoint returning status</li>
            <li>✅ <strong>/api/chat:</strong> AI chat powered by OpenAI GPT-3.5-turbo</li>
            <li>✅ <strong>CORS Enabled:</strong> Serverless functions accept cross-origin requests</li>
            <li>✅ <strong>Environment Variables:</strong> Securely configured in Vercel dashboard</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
