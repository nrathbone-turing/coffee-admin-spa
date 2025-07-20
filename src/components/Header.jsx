// Import NavLink for navigation styling!
import { NavLink } from 'react-router-dom';

// just a simple horizontal navigation bar for now based on mockups
function Header() {
  return (
    <nav 
        style={{ 
            display: 'flex', 
            gap: '2rem', 
            padding: '1rem', 
            backgroundColor: '#8B7E74' 
        }}
    >
      {/* NavLink applies an "active" style when route matches via white underline in this case */}
      <NavLink to="/" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: 'white' })}>
        Home
      </NavLink>
      <NavLink to="/shop" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: 'white' })}>
        Shop
      </NavLink>
      <NavLink to="/admin" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: 'white' })}>
        Admin Portal
      </NavLink>
    </nav>
  );
}

export default Header;