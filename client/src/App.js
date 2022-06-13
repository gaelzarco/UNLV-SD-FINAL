import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
// import { useState, useEffect } from 'react'

import LandingPage from './components/LandingPage';
import CreateUser from './components/CreateUser'
import Catalog from './components/Catalog';
import CreateCatalog from './components/CreateCatalog';
import ProductView from './components/ProductView'

import CurrentUserProvider from './contexts/CurrentUser';

function App() {
  return (
    <div className='Main'>
      <div className='App'>
      <CurrentUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/user/create' element={<CreateUser/>} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/catalog/create' element={<CreateCatalog/>} />
          <Route path='/catalog/product/:id' element={<ProductView/>} />
        </Routes>
      </BrowserRouter>
      </CurrentUserProvider>
    </div>
    <footer className='footer'>
        <a href="">Created by Gael Zarco</a>
    </footer>
    </div>
  );
}

export default App;
