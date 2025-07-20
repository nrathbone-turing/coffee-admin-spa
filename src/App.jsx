// Import necessary modules from React Router -- important for SPA to handle page transitions without full reloads
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// then import all the other shared components and pages
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AdminPortal from './pages/AdminPortal';

// Root-level App component that defines the layout and page navigation
function App() {
  return (
    // Wrap the entire app in Router for client-side navigation
    <Router>
      {/* Persistent navigation bar visible on all pages*/}
      <Header />

      {/* Define the individual page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </Router>
  );
}

export default App;