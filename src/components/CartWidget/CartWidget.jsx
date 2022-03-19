import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import '../CartWidget/CartWidget.css'

const CartWidget = () => {
    const { contadorPro } = useCartContext();

    return (
        <>
            <Link to={'/cart'} className='linkCartEstilo'>
                <div className='carritoCompraIco'>
                    <img src="/img/iconoCarritoCompra.png" alt="Carrito de Compra" />
                    <p className='candidadProductos'>{contadorPro !== 0 && contadorPro}</p>
                </div>
            </Link>
        </>
    );
};

export default CartWidget;