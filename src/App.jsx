import './App.css';
import Header from './components/header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() { //componente

  return (
    <div className='contenedorPrincipal'>
      <Header />

      <ItemListContainer mensaje={'Próximamente novedades de nuestro catálogo.'} />

      <ItemDetailContainer />

    </div>
  );
}

export default App;
