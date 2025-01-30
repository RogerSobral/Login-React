import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Sidebar from './components/Sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Analytics from './pages/Analytics';
import About from './pages/About';
import ListShopping from './pages/ListShopping';
import Friends from './pages/Friends';

import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setRegister] = useState(true); // Começa como `false` para exibir Login primeiro

  return (
    <>
      {isLogin ? (
        <div className='container_body'>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/productList" element={<ProductList />} />
              <Route path="/listShopping" element={<ListShopping />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Sidebar>
        </div>
      ) : isRegister ? (
        <div className="app_login"><Login setIsLogin={setIsLogin} setRegister={setRegister} /></div>
        
      ) : (
        <div className="app_login"><Register setRegister={setRegister} /></div>
        
      )}
    </>
  );
}

export default App;




// instalar
// npm install @types/react-router-dom