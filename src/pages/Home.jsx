import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Coffee R Us</h1>
      <p>The go to store for your coffee needs</p>
      <NavLink to="/shop" className="cta-button">Shop Now</NavLink>
    </div>
  );
}

export default Home;