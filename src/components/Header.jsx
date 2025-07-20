// Import NavLink for navigation styling!
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ display: 'flex', gap: '2rem', padding: '1rem', backgroundColor: '#8B7E74' }}>
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