import React from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';

const ItemList = ({ productosList }) => {
    return (
        <div className='contenedorListaProductos'>
            {
                productosList.map((data) => <Item key={data.id} contenido={data} />)
            }
        </div>
    );
};


export default ItemList;