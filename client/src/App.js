import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

import LandingPage from './components/LandingPage';
import CreateUser from './components/CreateUser'

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
            <Route path='/createuser' element={<CreateUser />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
