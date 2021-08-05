import React from 'react';
import './App.css';
import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="app-page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
