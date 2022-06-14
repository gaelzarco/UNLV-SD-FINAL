import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'

import LandingPage from './components/LandingPage';
import CreateUser from './components/CreateUser'
import Catalog from './components/Catalog';
import CreateCatalog from './components/CreateCatalog';
import ProductView from './components/ProductView'

import CurrentUserProvider from './contexts/CurrentUser';

function App() {
  return (
    <div className='Main'>
      <nav className='navbar'>
      <a className='brand' href='/'>MERN</a>
        <ul>
          <li>
            <a href='/catalog'>Catalog</a>
          </li>
          <li>
            <a href='/catalog/create'>Create Product</a>
          </li>
          <li>
            <a href='/user/login'>Login</a>
          </li>
          <li>
            <a href='/user/create'>Sign-Up</a>
          </li>
          <li>
            <a href='/cart'>Cart</a>
          </li>
        </ul>
      </nav>
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
        <a href="https://github.com/gaelzarco">Created by Gael Zarco</a>
    </footer>
    </div>
  );
}

export default App;
