/**
 * Main App Component
 * 
 * Root component that renders the home page
 * Can be extended with React Router for multiple pages
 */

import Home from './pages/Home.jsx';

export default function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}
