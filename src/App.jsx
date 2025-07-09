import { useState } from 'react';
import productData from './assets/product.json'; 
import List from './components/List';
import Navbar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [products, setProductsToDisplay] = useState(productData);

  const deleteProduct = (productId) => {
    const newList = products.filter((product) => product.id !== productId);
    setProductsToDisplay(newList);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <h1>Productlist</h1>
          <List items={products} onDelete={deleteProduct} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
