import { useCartContext } from '../../context/cartContext';

const Cart = () => {

    const { cartList, eliminarListaCart, eliminaItemCart, totalPago } = useCartContext()

    console.log(cartList)
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
                        }) :
                        <h1>No ha realizado ninguna compra.</h1>
                }
            </div>
            {
                cartList.length > 0 &&
                <div>
                    Candidad Total a pagar: ${totalPago}
                </div>
            }

            {
                cartList.length > 0 && <button onClick={eliminarListaCart}>Eliminar Compra</button>
            }

        </>
    );
};

export default Cart;