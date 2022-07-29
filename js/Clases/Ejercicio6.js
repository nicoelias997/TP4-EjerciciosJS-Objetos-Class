// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    constructor(isbn, titulo, autor, paginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    
    get mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.paginas} paginas.</p>`)
    }
}
const libro1 = new Libro(123345, "Proyecto 1", "Nico Elias", 321);
const libro2 = new Libro(12345, "Proyecto 2", "Nicolas Elias", 123);

libro1.mostrarLibro;
libro2.mostrarLibro;

if(libro1.paginas > libro2.paginas){
    document.write(`<p>${libro1.titulo} tiene mas paginas que ${libro2.titulo}.</p>`);
} else if(libro1.paginas < libro2.paginas){
    document.write(`<p>${libro2.titulo} tiene mas paginas que ${libro1.titulo}.</p>`);
} else {
    document.write(`<p>${libro1.titulo} y ${libro2.titulo} tienen la misma cantidad de paginas.</p>`)
}



