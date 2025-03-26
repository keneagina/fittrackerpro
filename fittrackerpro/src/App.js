// src/App.js
import React from 'react';
import Header from './components/Header';
import BMIForm from './components/BMIForm';
import CalorieForm from './components/CalorieForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <BMIForm />
        <CalorieForm />
      </main>
    </div>
  );
};

export default App;
