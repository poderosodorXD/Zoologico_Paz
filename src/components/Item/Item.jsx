import React from 'react';
import '../Item/Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({contenido}) => {  
    return (
        <>
            <div className='Item'>
                <p className='txtTituloProducto'>{contenido.nombre}</p>
                <div className='boxImagenItem'>
                    <img className='imgProducto' src={contenido.imagen} alt={contenido.nombre} />
                    <p className='txtPrecioProducto'>$ {contenido.precio}</p>
                </div>
                <ItemCount contador={1} stock={contenido.stock} />
            </div>
        </>
    );
};

export default Item;