import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/productos')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

 

return (
  <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '20px', backgroundColor: '#fff0f5' }}>
    <h1 style={{ textAlign: 'center', color: '#d63384', fontWeight: 'bold' }}>
      💖 E-commerce by Cuisi
    </h1>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}
    >
      {products.map(product => (
        <div
          key={product.id}
          style={{
            border: '1px solid #f8d7da',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(214, 51, 132, 0.2)',
            padding: '15px',
            textAlign: 'center',
            backgroundColor: '#fff',
            transition: 'transform 0.2s ease-in-out'
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src={product.imagen_url}
            alt={product.nombre}
            style={{
              width: '140px',
              height: '140px',
              objectFit: 'contain',
              margin: '0 auto',
              display: 'block',
              borderRadius: '8px'
            }}
            onClick={() => window.open(product.imagen_url, '_blank')}
          />
          <h3 style={{ margin: '10px 0', color: '#d63384', fontSize: '18px' }}>
            {product.nombre}
          </h3>
          <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#6f42c1' }}>
            ${product.precio} USD
          </p>
          <button
            style={{
              marginTop: '10px',
              padding: '10px 15px',
              backgroundColor: '#f5a9d0ff',
              color: '#fff',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            💕 Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  </div>
);

 
  
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);