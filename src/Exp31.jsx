const ProductCard = ({ name, price, category, stock, imageUrl }) => {
  const isLowStock = stock < 5 && stock > 0;
  const isOutOfStock = stock === 0;

  // Formatting price to Indian Rupee format (e.g., 1,50,000.00)
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt={name} style={styles.image} />
        <span style={styles.categoryBadge}>{category}</span>
      </div>
      
      <div style={styles.details}>
        <h3 style={styles.productName}>{name}</h3>
        {/* Changed from $ to formatted INR */}
        <p style={styles.price}>{formattedPrice}</p>
        
        <div style={styles.stockContainer}>
          <span style={{
            ...styles.stockIndicator,
            backgroundColor: isOutOfStock ? '#ff4d4d' : isLowStock ? '#ffa502' : '#2ed573'
          }} />
          <span style={styles.stockText}>
            {isOutOfStock ? 'Out of Stock' : isLowStock ? `Only ${stock} left!` : 'In Stock'}
          </span>
        </div>

        <button 
          disabled={isOutOfStock} 
          style={{...styles.button, opacity: isOutOfStock ? 0.5 : 1}}
        >
          {isOutOfStock ? 'Unavailable' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

/**
 * --- PARENT COMPONENT: App ---
 * Manages the data and renders multiple ProductCards.
 */
export default function App() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, category: "Electronics", stock: 12, imageUrl: "https://picsum.photos/id/26/300/200" },
    { id: 2, name: "Ergonomic Chair", price: 189.50, category: "Furniture", stock: 3, imageUrl: "https://picsum.photos/id/201/300/200" },
    { id: 3, name: "Mechanical Keyboard", price: 75.00, category: "Accessories", stock: 0, imageUrl: "https://picsum.photos/id/160/300/200" },
    { id: 4, name: "Smart Watch", price: 150.00, category: "Electronics", stock: 20, imageUrl: "https://picsum.photos/id/1/300/200" }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Modern Tech Store</h1>
        <p>Dynamic Product Grid using React Props</p>
      </header>
      
      <div style={styles.grid}>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            stock={product.stock}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

// --- MODERN CSS-IN-JS STYLING ---
const styles = {
  container: { padding: '40px 20px', backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' },
  header: { textAlign: 'center', marginBottom: '40px' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
    gap: '25px', 
    maxWidth: '1200px', 
    margin: '0 auto' 
  },
  card: { 
    backgroundColor: '#fff', 
    borderRadius: '12px', 
    overflow: 'hidden', 
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
    display: 'flex',
    flexDirection: 'column'
  },
  imageContainer: { position: 'relative', height: '180px' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  categoryBadge: { 
    position: 'absolute', top: '10px', right: '10px', 
    backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', 
    padding: '4px 10px', borderRadius: '20px', fontSize: '12px' 
  },
  details: { padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' },
  productName: { margin: '0 0 10px 0', fontSize: '18px', color: '#333' },
  price: { fontSize: '22px', fontWeight: 'bold', color: '#1a73e8', margin: '0 0 15px 0' },
  stockContainer: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' },
  stockIndicator: { width: '10px', height: '10px', borderRadius: '50%' },
  stockText: { fontSize: '14px', color: '#666' },
  button: { 
    marginTop: 'auto', padding: '12px', border: 'none', 
    borderRadius: '8px', backgroundColor: '#333', color: '#fff', 
    fontWeight: 'bold', cursor: 'pointer' 
  }
};