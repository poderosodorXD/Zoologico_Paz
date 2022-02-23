import React from 'react';
import '../ItemCount/ItemCount.css';
import { useState } from 'react'

const ItemCount = ({ contador, stock , nombreProducto}) => {

    const [count, setContador] = useState(contador)

    const aumentaItem = () => {
        count < stock ? setContador(count + 1) : console.log(`Contador no puede exceder al stock de ${stock} unidades`)
    }

    const descuentaItem = () => {
        count <= 1 ? console.log('Contador no puede ser menor a 1') : setContador(count - 1)
    }

    const onAdd = (numero) => {
        console.log(`La cantidad de productos adquiridos es: ${numero}`);
    }

    return (
        <div className='itemProducto'>
            <div className='contenedorCarrito'>
                <span className='restarCantidad' onClick={() => descuentaItem()}></span>
                <label className='txtCantidad'>{count}</label>
                <span className='aumentarCantidad' onClick={() => aumentaItem()}></span>
            </div>
            <div className='infoItem'>
                <p className='txtTituloProducto'>{nombreProducto}</p>
                <div className='infoItem2'>
                    <img className='imgProducto' src="img/GorroZoologico.jpg" alt="Gorro Zoologico" />
                    <button onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;