import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 p-4">
        <Sidebar />
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
