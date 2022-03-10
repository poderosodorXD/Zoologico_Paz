import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({ data }) => {
    const { imagen, nombre, descripcion, precio, stock } = data;
    return (
        <div className='boxItemDet'>
            <div className='imgDet'>
                <img src={imagen} alt={nombre} />
            </div>
            <div className='informacionDet'>
                <h1>{nombre}</h1>
                <p className='descripcionInfoDet'>{descripcion}</p>
                <p className='precioInfoDet'>Precio: $ {precio}</p>
                <div className='contadorDetBox'>
                    <ItemCount contador={1} stock={stock} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;