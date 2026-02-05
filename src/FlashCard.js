import React from "react";

function ProductCard({ name, price, image, inStock }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p style={styles.price}>₹{price}</p>

      <span
        style={{
          ...styles.stock,
          backgroundColor: inStock ? "#d4edda" : "#f8d7da",
          color: inStock ? "#155724" : "#721c24",
        }}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div style={styles.container}>
      <ProductCard
        name="Wireless Mouse"
        price={799}
        image="https://via.placeholder.com/200"
        inStock={true}
      />

      <ProductCard
        name="Keyboard"
        price={1299}
        image="https://via.placeholder.com/200"
        inStock={false}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    padding: "30px",
  },
  card: {
    width: "220px",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    textAlign: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  price: {
    fontWeight: "bold",
    margin: "8px 0",
  },
  stock: {
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "14px",
    display: "inline-block",
  },
};
