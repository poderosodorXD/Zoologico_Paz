import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getListaProductosHome, getListaProductosHome2 } from '../Helpers/getAPI';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({ mensaje }) => {
    const [productosList, setProductosList] = useState([]);
    const [loading, setLoaging] = useState(true);
    const { categoriaId } = useParams();

    // useEffect(() => {

    //     if (categoriaId) {
    //         setLoaging(true)
    //         getListaProductosHome().then((respuesta) => {
    //             return respuesta;
    //         }).then((data) => {
    //             setProductosList(data.filter(val => val.categoria === categoriaId))
    //         }).catch(error => console.log(error))
    //             .finally(() => { setLoaging(false) })
    //     } else {
    //         setLoaging(true)
    //         getListaProductosHome().then((respuesta) => {
    //             return respuesta;
    //         }).then((data) => {
    //             setProductosList(data)
    //         }).catch(error => console.log(error))
    //             .finally(() => { setLoaging(false) })
    //     }
    // }, [categoriaId])

    useEffect(() => {

        getListaProductosHome2(categoriaId === undefined ? 0 : categoriaId).then((respuesta) => {
            return respuesta;
        }).then((data) => {
            setProductosList(data)
        }).catch(error => console.log(error))
            .finally(() => { setLoaging(false) })

    }, [categoriaId])

    return (
        <>
            <h2 className='txtMensaje-ilc'>{mensaje}</h2>
            <div className='FiltrosListProductos'>
                <Link to={'/tienda'}><button>Todos</button></Link>
                <Link to={'/tienda/gorros'}><button>Gorras</button></Link>
                <Link to={'/tienda/polos'}><button>Polos</button></Link>
            </div>
            {
                loading === true ? (<><h1>Cargando Productos</h1></>) :
                    <ItemList productosList={productosList} />
            }
        </>
    );
};

export default ItemListContainer;