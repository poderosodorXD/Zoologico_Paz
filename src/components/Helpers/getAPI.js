import { getFirestore, doc, getDoc, collection, getDocs, query, where, onSnapshot, addDoc, documentId, writeBatch } from 'firebase/firestore'

export const productosArray = [
    { id: 1, imagen: '/img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 1', nombre: 'Gorro Zoologico 1', stock: 15, precio: 2 },
    { id: 2, imagen: '/img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 2', nombre: 'Gorro Zoologico 2', stock: 30, precio: 5 },
    { id: 3, imagen: '/img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 3', nombre: 'Gorro Zoologico 3', stock: 5, precio: 8 },
    { id: 4, imagen: '/img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 4', nombre: 'Gorro Zoologico 4', stock: 10, precio: 7 },
    { id: 5, imagen: '/img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 5', nombre: 'Gorro Zoologico 5', stock: 8, precio: 9 },
    { id: 6, imagen: '/img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 6', nombre: 'Gorro Zoologico 6', stock: 11, precio: 11 },
    { id: 7, imagen: '/img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 7', nombre: 'Gorro Zoologico 7', stock: 20, precio: 6 }
]



export const getListaProductos = new Promise((resolve, reject) => {
    let url = 'https://zoologico.com/productos';
    if (url === 'https://zoologico.com/productos') {
        setTimeout(() => {
            resolve(productosArray);
        }, 2000);
    } else {
        reject('400 Bad Request')
    }
})

export const getListaProductosHome = async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                (async () => {
                    let response = await fetch('/productoData.json')
                    let data = await response.json()
                    resolve(data.productosArray)
                })()
            } catch (error) {
                reject(error)
            }
        }, 300);
    })
    return await promise;
}

export const getListaProductosHome2 = async (categoria) => {
    let promise = new Promise((resolve, reject) => {
        try {
            (async () => {
                const db = getFirestore()
                if (categoria === 0) {
                    const queryColection = await collection(db, 'items')
                    getDocs(queryColection)
                        .then(data => {
                            resolve(data.docs.map(data => ({ id: data.id, ...data.data() })))
                        })
                } else {
                    const queryColection = await collection(db, 'items')
                    const queryFilter = await query(queryColection, where('categoria', '==', categoria))
                    getDocs(queryFilter)
                        .then(data => {
                            resolve(data.docs.map(data => ({ id: data.id, ...data.data() })))
                        })
                }
            })()
        } catch (error) {
            reject(error)
        }
    });
    return await promise;
}

export const getDetalle = async (idDetalle) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                (async () => {
                    let response = await fetch('/productoData.json')
                    let data = await response.json()
                    resolve(data.productosArray.find(item => item.id === idDetalle))
                })()
            } catch (error) {
                reject(error)
            }
        }, 300);
    });
    return await promise;
}

export const getDetalle2 = async (id) => {
    let promise = new Promise((resolve, reject) => {
        try {
            (async () => {
                const db = getFirestore()
                const queryDb = await doc(db, 'items', id)
                getDoc(queryDb).then((data) => {
                    resolve({ id: data.id, ...data.data() })
                })
            })()
        } catch (error) {
            reject(error)
        }
    });
    return await promise;
}


export const addOrden = async (ordenar) => {
    let promise = new Promise((resolve, reject) => {
        try {
            (async () => {
                const db = getFirestore();
                const queryCollection = await collection(db, 'orders')
                await addDoc(queryCollection, ordenar)
                    .then(rest => resolve(rest))
            })()
        } catch (error) {
            reject(error)
        }
    });
    return await promise;
}

export const updateStock = async (cartList) => {
    let promise = new Promise((resolve, reject) => {
        try {
            (async () => {
                const db = getFirestore();
                const queryCollection = await collection(db, 'items')

                const queryCollectionStock = await query(
                    queryCollection,
                    where(documentId(), 'in', cartList.map(item => item.id))
                )

                const batch = writeBatch(db)

                await getDocs(queryCollectionStock)
                    .then(
                        resp => resp.docs.forEach(element => {
                            batch.update(element.ref, {
                                stock: element.data().stock - cartList.find(item => item.id === element.id).cantidad
                            })
                        })
                    )

                batch.commit()
                resolve('Stock actualizado')
            })()
        } catch (error) {
            reject(error)
        }
    });
    return await promise;
}