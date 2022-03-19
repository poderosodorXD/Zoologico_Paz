import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

function CartContextProvider({ children }) {
    const [contadorPro, setContadorPro] = useState(0)
    const [totalPago, setTotalPago] = useState(0);
    const [cartList, setcartList] = useState([])


    const agregarCart = (item) => {

        if (ValidaItemDuplicado(item.id) === undefined) {
            setcartList([...cartList, item])

            candidadProductos()
            pagoTotalProductos()
        } else {
            const index = cartList.findIndex((obj) => obj.id === item.id);

            cartList[index] = {
                ...cartList[index],
                // categoria: item.categoria,
                // descripcion: item.descripcion,
                // id: item.id,
                // imagen: item.imagen,
                // nombre: item.nombre,
                // precio: item.precio,
                // stock: item.stock,
                cantidad: item.cantidad
            };
            candidadProductos()
            pagoTotalProductos()
        } 
    }

    const eliminarListaCart = () => {
        setcartList([])
    }

    const ValidaItemDuplicado = (id) => {
        return cartList.find(obj => obj.id === id)
    }

    const eliminaItemCart = (id) => {
        let newList = [...cartList].filter(data => data.id !== id)
        setcartList(newList)
    }

    const candidadProductos = () => {
        let count = cartList.reduce((acc, current) => acc + current.cantidad, 0)
        setContadorPro(count)
    }

    const pagoTotalProductos = () => {
        let pago = cartList.reduce((acc, current) => acc + (current.cantidad * current.precio), 0)
        setTotalPago(pago)
    }


    useEffect(() => {
        candidadProductos()
        pagoTotalProductos()
    })

    return (
        <CartContext.Provider value={{
            cartList,
            contadorPro,
            totalPago,
            agregarCart,
            eliminarListaCart,
            eliminaItemCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider

