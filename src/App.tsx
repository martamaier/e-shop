import React from 'react';
import './App.scss';
import Header from "./layout/Header";
import Banner from "./layout/Banner";
import Products from "./containers/Products";
import Footer from "./layout/Footer";
import CartContainer from "./containers/CartContainer";

function App() {
  return (
      <div className="App">
        <Header />
        <Banner />
        <Products />
        <CartContainer />
        <Footer />
      </div>
  );
}

export default App;
