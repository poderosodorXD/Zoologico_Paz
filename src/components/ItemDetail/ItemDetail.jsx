import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({ data }) => {
    const { imagen, nombre, descripcion, precio, stock } = data;
    const [cambiaBoton, setCambiaBoton] = useState(0);

    const onAdd = (numero) => {
        console.log(`La cantidad de productos adquiridos es: ${numero}`);
        setCambiaBoton(numero)
    }

    console.log(cambiaBoton)
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
                    {
                        cambiaBoton === 0 ? <ItemCount contador={1} stock={stock} onAdd={onAdd} />
                            : <Link to={'/cart'}>
                                <button className='btnLinkCart'>Terminar mi compra</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;