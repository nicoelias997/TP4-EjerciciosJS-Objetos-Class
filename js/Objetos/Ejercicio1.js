// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    marca: `fiat` ,
    modelo: `Siena 1.7 ELX TD`,
    año: 2007,
    color: `gris`,
    kilometraje: 185000,
    autonomia: 12,
    caja4x4: false,
    encendido: () => {
            document.write("Encendiste el vehiculo, a donde vamos?")
        },
    apagado: () => {
        
            document.write("Apagaste el vehiculo")
    }
}
auto.encendido();
    