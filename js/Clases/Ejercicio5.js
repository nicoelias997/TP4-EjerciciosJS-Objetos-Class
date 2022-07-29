// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }
    mostrarGeneracion(){
        if(this.nacimiento < 1930 || this.nacimiento > 2010){
            document.write(`<p>${this.nombre}, con edad: ${this.edad} no pertenece a niguna generacion.</p>`)
        } 
        else if(this.nacimiento >= 1930 && this.nacimiento <= 1948){
            document.write(`<p>${this.nombre}, con edad: ${this.edad} pertenece a la <strong>Silent Generation</strong>, referidas a los niños de la posguerra.<br>Su rango caracteristico es la <strong>austeridad</strong></p>`)
        }
        else if(this.nacimiento >= 1949 && this.nacimiento <= 1968){
            document.write(`<p>${this.nombre}, con edad: ${this.edad} pertenece a la <strong>Baby Boom</strong>.<br>Su rango caracteristico es la <strong>ambicion</strong></p>`)
        }
        else if(this.nacimiento >= 1969 && this.nacimiento <= 1980){
            document.write(`<p>${this.nombre}, con edad: ${this.edad} pertenece a la <strong>generacion X</strong>.<br>Su rango caracteristico es la <strong>obsesion por el exito</strong></p>`)
        }
        else if(this.nacimiento >= 1981 && this.nacimiento <= 1993){
            document.write(`<p>${this.nombre}, con edad: ${this.edad} pertenece a la <strong>generacion Y</strong>, llamados tambien milennials.<br>Su rango caracteristico es la <strong>frustracion</strong></p>`)
        }
        else if(this.nacimiento >= 1994 && this.nacimiento <= 2010){
            document.write(`<p>${this.nombre}, con edad: ${this.edad} pertenece a la <strong>generacion Z</strong>.<br>Su rango caracteristico es la <strong>irreverencia</strong></p>`)
        }
    }
    esMayorDeEdad(){
        if(this.edad >= 18){
            document.write(`${this.nombre} eres mayor de edad.`)
        }
        if(this.edad < 18 || isNaN(this.edad)){
            document.write(`${this.persona} eres menor de edad, debes esperar a cumplir 18 años!`)
        }
    }
    mostrarDatos(){
        document.write(`<ul>
        <li>Nombre: ${this.nombre}.</li>
        <li>Edad: ${this.edad}.</li>
        <li>Dni: ${this.dni}.</li>
        <li>Sexo: ${this.sexo}.</li>
        <li>Peso: ${this.peso} kg.</li>
        <li>Altura: ${this.altura} metros.</li>
        <li>Fecha de nacimiento: ${this.nacimiento}.</li>
        </ul>`)
    }
    generarDni(){
        let dni = Math.floor((Math.random() * (99999999 - 1 + 1)) + 1);
        this.dni = dni;
    }
 }
let persona1 = new Persona("Nicolas", 24, 40696673, "masculino",80, 181, 1997);
persona1.mostrarGeneracion();
persona1.mostrarDatos()
persona1.generarDni();
persona1.esMayorDeEdad();
persona1.mostrarDatos();
