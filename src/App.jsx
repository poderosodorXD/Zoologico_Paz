import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() { //componente

  return (
    <div className='contenedorPrincipal'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/tienda/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/' element={<h1>Home</h1>} />{/*POR REALIZAR */}
          <Route path='/exhibiciones' element={<h1>Exhibiciones</h1>} /> {/*POR REALIZAR */}

          <Route path='/tienda/:categoriaId' element={<ItemListContainer mensaje={'Próximamente novedades de nuestro catálogo.'} />} />
          <Route path='/tienda' element={<ItemListContainer mensaje={'Próximamente novedades de nuestro catálogo.'} />} />
          
          <Route path='/cart' element={<h1>Cart</h1>} />

          <Route path='/*' element={<Navigate to={'/'} replace />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
