import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
// import { useState, useEffect } from 'react'

import LandingPage from './components/LandingPage';
import CreateUser from './components/CreateUser'
import Catalog from './components/Catalog';
import CreateCatalog from './components/CreateCatalog';

import CurrentUserProvider from './contexts/CurrentUser';

function App() {
  return (
    <div className='App'>
      <CurrentUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/createuser' element={<CreateUser />} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/createcatalog' element={<CreateCatalog/>} />
        </Routes>
      </BrowserRouter>
      </CurrentUserProvider>

      <footer className='footer'>
          <a href="">Created by Gael Zarco</a>
      </footer>
    </div>
  );
}

export default App;
