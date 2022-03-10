import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ contenido }) => {

    const { nombre, imagen, precio, stock, id } = contenido;

    return (
        <>
            <div className='Item'>
                <p className='txtTituloProducto'>{nombre}</p>
                <div className='boxImagenItem'>
                    <img className='imgProducto' src={imagen} alt={nombre} />
                    <p className='txtPrecioProducto'>$ {precio}</p>
                </div>
                <ItemCount contador={1} stock={stock} />
                <div className='btnDetalle'>
                    <Link to={`/tienda/detalle/${id}`}>
                        <button>Detalle</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Item;