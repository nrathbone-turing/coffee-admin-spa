// Import necessary modules from React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AdminPortal from './pages/AdminPortal';

function App() {
  return (
    // Wrap the entire app in Router for client-side navigation
    <Router>
      {/* Persistent navigation bar */}
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