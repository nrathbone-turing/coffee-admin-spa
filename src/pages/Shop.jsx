// This is the Shop page that lists coffee products in a grid like the second provided mockup image
import ProductCard from '../components/ProductCard';

function Shop() {
  return (
    <div style={{ padding: '1rem' }}>
      {/* Placeholder grid – not yet connected to db.json, will do that later to fetch and map products */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {/* <ProductCard product={...} /> */}
      </div>
    </div>
  );
}

export default Shop;