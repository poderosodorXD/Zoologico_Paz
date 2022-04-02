import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getListaProductosHome2 } from '../Helpers/getAPI';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css'


const ItemListContainer = ({ mensaje }) => {
    const [productosList, setProductosList] = useState([]);
    const [loading, setLoaging] = useState(true);
    const { categoriaId } = useParams();

    useEffect(() => {

        getListaProductosHome2(categoriaId === undefined ? 0 : categoriaId).then((respuesta) => {
            return respuesta;
        }).then((data) => {
            setProductosList([...data].filter(item => item.stock >= 5))
        }).catch(error => console.log(error))
            .finally(() => { setLoaging(false) })


    }, [categoriaId])

    return (
        <>
            <h2 className='txtMensaje-ilc'>{mensaje}</h2>
            <div className='FiltrosListProductos'>
                <Link to={'/tienda'}><button className={categoriaId === undefined ? 'activo' : ''}>Todos</button></Link>
                <Link to={'/tienda/gorros'}><button className={categoriaId === 'gorros' ? 'activo' : ''}>Gorras</button></Link>
                <Link to={'/tienda/polos'}><button className={categoriaId === 'polos' ? 'activo' : ''}>Polos</button></Link>
            </div>
            {
                loading === true ? (<><h1>Cargando Productos</h1></>) :
                    <ItemList productosList={productosList} />
            }
        </>
    );
};

export default ItemListContainer;