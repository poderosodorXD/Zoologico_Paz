

const ItemCart = ({ data, eliminaItemCart }) => {
    return (
        <li className="elementoProducto">
            <div className="imagenEP">
                <img src={data.imagen} alt={data.nombre} />
            </div>
            <div className="informacionYeliminarContenido">
                <div className="info">
                    <p>{data.nombre}</p>
                    <p>Precio: ${data.precio}</p>
                    <p>Cantidad: ${data.cantidad}</p>
                </div>
                <button onClick={() => { eliminaItemCart(data.id) }}>Eliminar</button>
            </div> 
        </li>
    );
};

export default ItemCart;