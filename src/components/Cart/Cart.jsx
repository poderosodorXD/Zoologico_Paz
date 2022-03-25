import { useCartContext } from '../../context/cartContext';
import { addOrden, updateStock } from '../Helpers/getAPI';
import { useState } from 'react'

const Cart = () => {

    const { cartList, eliminarListaCart, eliminaItemCart, totalPago } = useCartContext()

    const [compraInfo, setCompraInfo] = useState(0);

    console.log(cartList)


    const OrdenarPedido = () => {
        let ordenar =
        {
            buyer: { nombre: 'Juan', phone: '965153905', email: 'juan.paz.uch@gmail.com' },
            totalPago
        };
        ordenar.items = cartList.map(item => ({ id: item.id, nombre: item.nombre, precio: (item.precio * item.cantidad) }));

        console.log('hola', ordenar);

        addOrden(ordenar)
            .then(rest => console.log(`Tu id de compra es: ${rest.id}`))
            .catch(error => console.error(error))
            .finally(() => console.log('Termino su compra.'))

        updateStock(cartList)
            .then(rest => console.log(rest))

        eliminarListaCart()
        setCompraInfo(1)
    };


    return (
        <>
            <div>
                {
                    cartList.length > 0 ?
                        cartList.map((data, i) => {
                            return (
                                <div key={`${data.id}${i}`}>
                                    <li>{data.nombre} Precio: {data.precio} Cantidad: {data.cantidad}
                                        <button onClick={() => { console.log(`Mi Id es: ${data.id}`); eliminaItemCart(data.id) }}>Eliminar</button>
                                    </li>
                                </div>
                            )
                        }) : compraInfo === 1 ? <h1>Compra Realizada.</h1>
                            : <h1>No ha realizado ninguna compra.</h1>
                }
            </div>
            {
                cartList.length > 0 &&
                <div>
                    Candidad Total a pagar: ${totalPago}
                </div>
            }

            {
                cartList.length > 0 && <>
                    <button onClick={eliminarListaCart}>Eliminar Compra</button>
                    <button onClick={OrdenarPedido}>Ordenar Pedido</button>
                </>
            }


        </>
    );
};

export default Cart;