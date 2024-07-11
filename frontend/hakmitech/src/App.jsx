import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from './components/Home';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import { CareerForm } from './components/Career';
import ContactForm from './components/ContactForm';
import BlogPage from './components/AllBlogs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareerForm />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/allblogs" element={<BlogPage />} />

      </Routes>



      
    </BrowserRouter>
  );
}

export default App;