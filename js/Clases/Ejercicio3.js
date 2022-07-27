// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulos{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    
    mostrarPropiedades(){
        document.write(`<p>El alto del rectangulo es: ${this.alto}, y su ancho es: ${this.ancho} <br></p>`)
        document.write(`<p>El perimetro es: ${this.perimetro()} <br></p>`);
        document.write(`<p>El area es: ${this.area()} <br></p>`)
    }
    perimetro(){
    return this.ancho*2 + this.alto*2;
    }
    area(){
    return this.ancho*this.alto;
    }
    modificarPropiedades(alto,ancho){
    let newAlto = parseInt(prompt(`El alto actual es ${this.alto}, ingrese el numero de su nuevo valor altura`));
    let newAncho = parseInt(prompt(`El alto actual es ${this.ancho}, ingrese el numero de su nuevo valor anchura`));
    if(isNaN(newAlto) || isNaN(newAncho) || newAncho < 0 || newAlto < 0){
        alert("Inregesa numeros, y que sean positivos!!");
        return this.modificarPropiedades();
    }
    
    if(this.alto != newAlto || this.ancho != newAncho){
        this.alto = newAlto;
        this.ancho = newAncho;
    } else {
        alert("Ingresaste los mismos valores en ancho y alto! Elige otros!")
        return this.modificarPropiedades();
    }
    }
}

let rectangulo1 = new Rectangulos(20,40);
rectangulo1.mostrarPropiedades();
rectangulo1.modificarPropiedades();
rectangulo1.mostrarPropiedades();

