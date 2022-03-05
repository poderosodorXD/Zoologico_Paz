import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({ data }) => { 
    return (
        <div className='boxItemDet'>
            <div className='imgDet'>
                <img src={data.imagen} alt={data.nombre} />
            </div>
            <div className='informacionDet'>
                <h1>{data.nombre}</h1>
                <p className='descripcionInfoDet'>{data.descripcion}</p>
                <p className='precioInfoDet'>Precio: $ {data.precio}</p>
                <div className='contadorDetBox'> 
                    <ItemCount contador={1} stock={data.stock} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;