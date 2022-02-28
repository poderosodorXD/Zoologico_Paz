export const productosArray = [
    { id: 1, imagen: 'img/GorroZoologico.jpg', nombre: 'Gorro Zoologico 1', stock: 15, precio: 2 },
    { id: 2, imagen: 'img/GorroZoologico.jpg', nombre: 'Gorro Zoologico 2', stock: 30, precio: 5 },
    { id: 3, imagen: 'img/GorroZoologico.jpg', nombre: 'Gorro Zoologico 3', stock: 5, precio: 8 },
    { id: 4, imagen: 'img/GorroZoologico.jpg', nombre: 'Gorro Zoologico 4', stock: 10, precio: 7 },
    { id: 5, imagen: 'img/GorroZoologico.jpg', nombre: 'Gorro Zoologico 5', stock: 8, precio: 9 },
    { id: 6, imagen: 'img/GorroZoologico.jpg', nombre: 'Gorro Zoologico 6', stock: 11, precio: 11 },
    { id: 7, imagen: 'img/GorroZoologico.jpg', nombre: 'Gorro Zoologico 7', stock: 20, precio: 6 }
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