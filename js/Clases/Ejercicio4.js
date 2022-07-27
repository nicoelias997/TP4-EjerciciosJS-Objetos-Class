// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimirDatos(){
        document.write(`<table border>
        <tr>
        <td>Codigo producto</td>
        <td>Nombre producto</td>
        <td>Precio producto</td>
        </tr>
        <tr>
        <td>${this.codigo}</td>
        <td>${this.nombre}</td>
        <td>$${this.precio}</td>
        </tr>
        </table>`)
    }
}
let productos = [];
let producto1 = new Producto("F303132", "Adidas RunPro", 18000);
let producto2 = new Producto("J101112", "Xiami l2", 45000);
let producto3 = new Producto("M999897", "VW gol 1.6", 1800000);
productos.push(producto1,producto2,producto3);

for(let i = 0; i < productos.length; i++){
    productos[i].imprimirDatos();
}