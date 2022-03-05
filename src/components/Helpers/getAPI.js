export const productosArray = [
    { id: 1, imagen: 'img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 1', nombre: 'Gorro Zoologico 1', stock: 15, precio: 2 },
    { id: 2, imagen: 'img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 2', nombre: 'Gorro Zoologico 2', stock: 30, precio: 5 },
    { id: 3, imagen: 'img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 3', nombre: 'Gorro Zoologico 3', stock: 5, precio: 8 },
    { id: 4, imagen: 'img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 4', nombre: 'Gorro Zoologico 4', stock: 10, precio: 7 },
    { id: 5, imagen: 'img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 5', nombre: 'Gorro Zoologico 5', stock: 8, precio: 9 },
    { id: 6, imagen: 'img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 6', nombre: 'Gorro Zoologico 6', stock: 11, precio: 11 },
    { id: 7, imagen: 'img/GorroZoologico.jpg', descripcion: 'Hola soy descripción 7', nombre: 'Gorro Zoologico 7', stock: 20, precio: 6 }
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

// export const getDetalle = new Promise((resolve, reject) => {
//     let url = 'https://zoologico.com/det/gorra';
//     if (url === 'https://zoologico.com/det/gorra') {
//         setTimeout(() => {
//             resolve(productosArray.find(item => item.id = 2));
//         }, 2000);
//     } else {
//         reject('400 Bad Request')
//     }
// })

export const getDetalle2 = async (idDetalle) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                (async () => {
                    let response = await fetch('productoData.json')
                    let data = await response.json() 
                    resolve(data.productosArray.find(item => item.id === idDetalle))
                })()
            } catch (error) {
                reject(error)
            }
        }, 2000);
    });
    return await promise;
}