import React from 'react';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({ mensaje }) => { 
    return (
        <>
            <h2 className='txtMensaje-ilc'>{mensaje}</h2>

            <ItemList /> 
        </>
    );
};

export default ItemListContainer;