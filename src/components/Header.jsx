// Import NavLink for navigation styling!
import { NavLink } from 'react-router-dom';

// just a simple horizontal navigation bar for now based on mockups
function Header() {
    return (
        <nav className="navbar">
            {/* NavLink applies an "active" style when route matches via white underline in this case */}
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>Shop</NavLink>
            <NavLink to="/admin" className={({ isActive }) => isActive ? "active" : ""}>Admin Portal</NavLink>
        </nav>
    );
}

export default Header;
