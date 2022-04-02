import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({ data }) => {
    const { imagen, nombre, descripcion, precio, stock } = data;
    const [cambiaBoton, setCambiaBoton] = useState(0);

    const { agregarCart } = useCartContext();


    const onAdd = (numero) => {
        console.log(`La cantidad de productos adquiridos es: ${numero}`);
        setCambiaBoton(numero)
        agregarCart({ ...data, cantidad: numero })
    }


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
                            : <>
                                <Link to={'/cart'}>
                                    <button className='btnLinkCart'>Terminar mi compra</button>
                                </Link> 
                                <Link to={'/tienda'}>
                                    <button className='btnLinkCart'>Volver a la Tienda</button>
                                </Link>
                            </>

                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;