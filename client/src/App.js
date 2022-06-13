import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

import LandingPage from './components/LandingPage';
import CreateUser from './components/CreateUser'
import Catalog from './components/Catalog';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/createuser' element={<CreateUser />} />
          <Route path='/catalog' element={<Catalog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
