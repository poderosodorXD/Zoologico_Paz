import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetalle2 } from '../Helpers/getAPI';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [productoDet, setProductoDet] = useState({});
    const [loading, setLoading] = useState(true);
    const { detalleId } = useParams();


    useEffect(() => {
        getDetalle2(detalleId).then((resp) => {
            return resp;
        }).then((data) => { setProductoDet(data) })
            .catch(error => console.log(error))
            .finally(() => { setLoading(false); })
    }, [detalleId])

    return (
        <div className='contenedorDetalle'>
            {
                loading === true ? (<><h1>Cargando Detalle</h1></>)
                    :
                    <ItemDetail data={productoDet} />
            }
        </div>
    );
};

export default ItemDetailContainer;