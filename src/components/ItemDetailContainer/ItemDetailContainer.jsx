import React from 'react';
import { useState, useEffect } from 'react';
import { getDetalle, getDetalle2 } from '../Helpers/getAPI';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/ItemDetailContainer.css';


const ItemDetailContainer = () => {
    // const [productoDet, setProductoDet] = useState([]);
    const [productoDet2, setProductoDet2] = useState([]);
    const [loading, setLoading] = useState(true);
    // useEffect(() => {

    //     getDetalle.then((respuesta) => {
    //         return respuesta;
    //     })
    //         .then((data) => { setProductoDet(data) })
    //         .catch(error => console.log(error))
    //         .finally(() => { console.log('finaliza la llamada API getDetalle con 2s') })
    // }, [])

    const montarDetalle = (idDetalle) => {
        getDetalle2(idDetalle).then((resp) => {
            return resp;
        })
            .then((data) => { setProductoDet2(data) })
            .catch(error => console.log(error))
            .finally(() => { console.log('finaliza la llamada api get detalle 2s'); setLoading(false); })
    }

    useEffect(() => {
        montarDetalle(5);
    }, [])

    // console.log(productoDet)
    // console.log('productoDet2: ', productoDet2)
    return (
        <div className='contenedorDetalle'>
            {
                loading === true ? (<><h1>Cargando Pagina</h1></>)
                    :
                    <ItemDetail data={productoDet2} />
            }
        </div>
    );
};

export default ItemDetailContainer;