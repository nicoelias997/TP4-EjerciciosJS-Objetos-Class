// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.
// Crea un menú con opciones por consola para probar todas estas funcionalidades.

class AgendaTelefonica{
    constructor(contactos = []){
        this.contactos = contactos;
    }
    set agregarContacto(contacto){
        if((this.contactos).length < 10){
            this.contactos.push(contacto)
        } else {
            alert(`La agenda esta llena! Debes eliminar para seguir almacenando otro contacto.`)
            document.write(`<p>La agenda esta llena! Debes eliminar para seguir almacenando otro contacto.</p>`)
        }
    
}
    get listarContactos(){
    for(let i = 0; i < this.contactos.length; i++){    
        document.write(`<ul>
        <li>${i + 1}. ${this.contactos[i].nombre}: ${this.contactos[i].telefono}</li>
        </ul>`)
    }
}
    get agendaLlena(){
    if(Object.keys(this.contactos).length === 10){
        document.write(`<p>La agenda esta LLENA.</p>`)
    } else {
        document.write(`<p>La agenda tiene espacios disponibles.</p>`)
    }
   
}
    get huecosLibres(){
    if(Object.keys(this.contactos).length < 10){
        document.write(`<p>Su agenda tiene: ${10 - Object.keys(this.contactos).length} espacios disponibles</p>`)
    } else {
        document.write(`<p>Su agenda no tiene espacios disponibles.</p>`)
        
    }
}


    set existeContacto(contacto){
        if(this.contactos.includes(contacto)){
            document.write(`<p>El contacto '${contacto.nombre}' esta en su lista de contactos.</p>`);    
            }   
        else {
            document.write(`<p>El contacto '${contacto.nombre}' NO esta en su lista de contactos.</p>`);            
        }
    }


   
    set buscarContacto(nombre){
        for(let i = 0; i < this.contactos.length; i++){
            if(this.contactos[i].nombre === nombre){
            document.write(`<p>El telefono de ${nombre} es: ${this.contactos[i].telefono}.</p>`);
            } 
        }   
}
    
    set eliminarContacto(contacto){
            if(this.contactos.includes(contacto)){
              this.contactos.splice(contacto,1);
              alert(`Hemos eliminado a ${contacto.nombre} de su agenda.`)
              document.write(`<p>Hemos eliminado a ${contacto.nombre} de su agenda.</p>`)
            } else {
                document.write(`No pudimos eliminar a ${contacto.nombre} porque no existe en tu agenda.`);
            }
        }
    }
class Contacto {
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}
const agenda = new AgendaTelefonica();

const contacto0 = new Contacto("Nico0", 1235);
const contacto1 = new Contacto("Nico1", 1235);
const contacto2 = new Contacto("Nico2", 1235);
const contacto3 = new Contacto("Nico3", 1236);
const contacto4 = new Contacto("Nico4", 1237);
const contacto5 = new Contacto("Nico5", 1238);
const contacto6 = new Contacto("Nico6", 1239);
const contacto7 = new Contacto("Nico7", 1230);
const contacto8 = new Contacto("Nico8", 1231);
const contacto9 = new Contacto("Nico9", 1232);
const contacto10 = new Contacto("Nico10", 12345);

agenda.agregarContacto = contacto0;
agenda.agregarContacto = contacto1;
agenda.agregarContacto = contacto2;
agenda.agregarContacto = contacto3;
agenda.agregarContacto = contacto4;
agenda.agregarContacto = contacto5;
agenda.agregarContacto = contacto6;
agenda.agregarContacto = contacto7;
agenda.agregarContacto = contacto8;
agenda.agregarContacto = contacto9;
agenda.agregarContacto = contacto10; //agregar contactos funciona bien!

agenda.listarContactos; //listar contactos funciona bien
agenda.agendaLlena;
agenda.huecosLibres; //funciona estas dos!

agenda.existeContacto = contacto0;
agenda.existeContacto = contacto1;
agenda.existeContacto = contacto10;

agenda.buscarContacto = "Nico2";
agenda.buscarContacto = "Nico3";
agenda.buscarContacto = "Nico10";

agenda.eliminarContacto = contacto4;
agenda.eliminarContacto = contacto5;
agenda.eliminarContacto = contacto6;
agenda.eliminarContacto = contacto10;

agenda.listarContactos; 
agenda.agendaLlena;
agenda.huecosLibres;

 
