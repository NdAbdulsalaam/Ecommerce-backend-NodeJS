import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '@/styles/main.css'

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';


const App = () => {
  return (
    <div className='text-3xl font-bold text-red-400'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                  <Route index element={ <Home /> } />
                  <Route path="about" element={ <About /> } /> 
                  <Route path="contact" element={ <Contact /> } />
                /</Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
