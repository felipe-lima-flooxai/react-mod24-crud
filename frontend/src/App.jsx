import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import './App.css'
import Logo from './components/template/Logo'
import Nav from './components/template/Nav'
import Main from './components/template/Main'
import Footer from './components/template/Footer'


function App() {

  return (
    <>
      <div className='app'>
        <Logo></Logo>
        <Nav></Nav>
        <Main icon='home' title='Início' subtitle='Segundo Projeto do capítulo de React'></Main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
