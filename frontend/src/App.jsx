import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import './App.css'
import Logo from './components/template/Logo'
import Nav from './components/template/Nav'
import Home from './components/home/Home';
import Footer from './components/template/Footer'
import AppRoutes from './Routes';


function App() {

  return (
    <>
      <div className='app'>
        <Logo></Logo>
        <Nav></Nav>
        <AppRoutes /> {/* AQUI entram as rotas */}
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
