import React from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';
import { getListaProductos } from '../Helpers/getAPI';
import { useState, useEffect } from 'react'

const ItemList = () => {
    const [productosList, setProductosList] = useState([]);

    useEffect(() => {

        getListaProductos.then((respuesta) => {
            return respuesta;
        })
            .then((data) => { setProductosList(data) })
            .catch(error => console.log(error))
            .finally(() => { console.log('finaliza la llamada API getListaProductos con 2s') })
    }, [])


    return (
        <div className='contenedorListaProductos'>
            {
                productosList.map((data) => <Item key={data.id} contenido={data} />)
            }
        </div>
    );
};


export default ItemList;