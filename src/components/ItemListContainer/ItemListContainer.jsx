import React from 'react';
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({ mensaje }) => { 
    return (
        <>
            <h2 className='txtMensaje-ilc'>{mensaje}</h2>
        </>
    );
};

export default ItemListContainer;