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
    constructor(contactos = {}){
        this.contactos = contactos;
    }
    set agregarContacto(contacto){
        if(Object.keys(this.contactos).length < 10){
            this.contactos.push(contacto);
        } else {
            document.write(`<p>La agenda esta llena! Debes eliminar para seguir almacenando otro contacto.</p>`)
        }
    }
    set existeContacto(contacto){
        for(let i = 0; i < Object.keys(this.contactos).length; i++){
            if(contacto == this.contactos[i]){
                document.write(`<p>El contacto '${contacto}' esta en su lista de contactos.</p>`)
            }
        }
    }
    get listarContactos(){
        for(let i = 0; i < Object.keys(this.contactos).length; i++){
            document.write(`<ol>
            <li>${this.contactos[i]}</li>
            </ol>`)
        }
    }
    set buscarContacto(nombre){
        for(let i = 0; i < Object.keys(this.contactos).length; i++){
            for(let propiedades in this.contactos){
                if(propiedades == this.contactos[i].nombre){
                    document.write(`${this.contactos[i].telefono} es el telefono de ${nombre}`)
                }
            }
        }
    }
    set eliminarContacto(nombre){
        for(let i = 0; i < Object.keys(this.contactos).length; i++){
            for(let propiedades in this.contactos){
                if(propiedades == this.contactos[i].nombre){
                    delete this.contactos[i]
                } else {
                    document.write(`<p>No existe un contacto con ese nombre en tu agenda.</p>`)
                }
            }
            
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
        }
    }

}
class Contacto extends AgendaTelefonica{
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}
const contacto2 = new Contacto("Nico2", 1235)

const agenda = new AgendaTelefonica();

agenda.huecosLibres;
agenda.agendaLlena;
agenda.listarContactos;
agenda.agregarContacto(contacto2) 







// const contacto1 = new Contacto("Nico1", 1235)
// const contacto2 = new Contacto("Nico2", 1235)
// const contacto3 = new Contacto("Nico3", 1236)
// const contacto4 = new Contacto("Nico4", 1237)
// const contacto5 = new Contacto("Nico5", 1238)
// const contacto6 = new Contacto("Nico6", 1239)
// const contacto7 = new Contacto("Nico7", 1230)
// const contacto8 = new Contacto("Nico8", 1231)
// const contacto9 = new Contacto("Nico9", 1232)
// const contacto0 = new Contacto("Nico1", 1233)

// const agenda = new AgendaTelefonica();

// agenda.agregarContacto(contacto0)
// agenda.agregarContacto(contacto1)
// agenda.agregarContacto(contacto2)
// agenda.agregarContacto(contacto3)
// agenda.agregarContacto(contacto4)
// agenda.agregarContacto(contacto5)
// agenda.agregarContacto(contacto6)
// agenda.agregarContacto(contacto7)
// agenda.agregarContacto(contacto8)
// agenda.agregarContacto(contacto9)


