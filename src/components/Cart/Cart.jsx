import { useCartContext } from '../../context/cartContext';
import { agregarOrden, actualizaStock } from '../Helpers/getAPI';
import { useState } from 'react'
import FormCart from './FormCart';
import ItemCart from './ItemCart';
import { validateForm } from '../Helpers/validaciones';
import './Cart.css'

const Cart = () => {

    const { cartList, eliminarListaCart, eliminaItemCart, totalPago } = useCartContext()

    const [compraInfo, setCompraInfo] = useState(0)
    const [IdCompra, setIdCompra] = useState(0)

    const [formDatos, setFormDatos] = useState({ nombre: "", celular: "", email: "" })

    const [errors, setErrors] = useState({})

    const OrdenarPedido = async (e) => {
        e.preventDefault()

        setErrors(validateForm(formDatos));

        if (Object.keys(errors).length === 0
            && document.getElementById("nombre").value !== ''
            && document.getElementById("celular").value !== ''
            && document.getElementById("email").value !== '') {

            let nuevoFormDatos = {}
            nuevoFormDatos.nombre = formDatos.nombre;
            nuevoFormDatos.celular = formDatos.celular;
            nuevoFormDatos.email = formDatos.email;

            let ordenar =
            {
                buyer: nuevoFormDatos,
                totalPago
            };
            ordenar.items = cartList.map(item => ({ id: item.id, nombre: item.nombre, precio: (item.precio * item.cantidad) }))

            await agregarOrden(ordenar)
                .then(rest => (setIdCompra(rest.id)))
                .catch(error => console.error(error))
                .finally(() => setCompraInfo(1))

            await actualizaStock(cartList)
                .then(rest => console.log(rest))

            eliminarListaCart()
            setFormDatos({ nombre: "", celular: "", email: "" })
        }
    }

    const cambiosInput = (e) => {
        const { name, value } = e.target;
        setFormDatos({
            ...formDatos,
            [name]: value
        })
    };

    const cambioFueraFoco = (e) => {
        cambiosInput(e);
        setErrors(validateForm(formDatos));
    };

    return (
        <div className='contenidoCarritoCompra'>
            <div className='miCompraContenido'>
                {
                    cartList.length > 0 ? <>
                        <div className='imprimeListaCarrito'>
                            {cartList.map((data, i) => <ItemCart key={`${data.id}${i}`} data={data} eliminaItemCart={eliminaItemCart} />)}
                        </div>
                        <p className='cantidadTotalEstilo'> Candidad Total a pagar: <label>${totalPago}</label></p>
                        <button className='limpiarCompraEstilo' onClick={eliminarListaCart}>Eliminar Compra</button>
                    </>
                        : compraInfo === 1 ? <h1>Compra Realizada, su ID de compra es: {IdCompra !== 0 && IdCompra}</h1>
                            : <h1>No ha realizado ninguna compra.</h1>
                }
            </div>

            {
                cartList.length > 0 &&
                <div className='contenedorFormulario'>
                    <p className='tituloFormulario'>¡Ordena tu compra ya!</p>
                    <FormCart cambiosInput={cambiosInput} cambioFueraFoco={cambioFueraFoco} formDatos={formDatos} errors={errors} OrdenarPedido={OrdenarPedido} />
                </div>
            }

        </div>

    );
};

export default Cart;