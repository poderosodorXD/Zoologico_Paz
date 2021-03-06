import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import HomePage from './components/Page/Home/HomePage';
import CartContextProvider from './context/cartContext';

function App() {

  return (
    <div className='contenedorPrincipal'>

      <CartContextProvider>

        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/tienda/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/' element={<HomePage />} />

            <Route path='/tienda/:categoriaId' element={<ItemListContainer mensaje={'Próximamente novedades de nuestro catálogo.'} />} />
            <Route path='/tienda' element={<ItemListContainer mensaje={'Próximamente novedades de nuestro catálogo.'} />} />

            <Route path='/cart' element={<Cart />} />

            <Route path='/*' element={<Navigate to={'/'} replace />} />

          </Routes>
        </BrowserRouter>

      </CartContextProvider>
    </div>
  );
}

export default App;
