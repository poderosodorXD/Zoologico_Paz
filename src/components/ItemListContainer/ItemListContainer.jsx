import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({ mensaje }) => { 
    return (
        <>
            <h2 className='txtMensaje-ilc'>{mensaje}</h2>
            
            <ItemCount contador={1} stock={10} nombreProducto={'Gorro Zoologico'} />
        </>
    );
};

export default ItemListContainer;