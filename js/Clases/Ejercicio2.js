// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta{
    constructor(titular, saldo = 0){
        this.titular = titular;
        this.saldo = saldo;
    }
    set ingresar(montoIngresar){
        this.saldo += montoIngresar;
        document.write(`<p>Has ingresado: $${montoIngresar}</p>`)
    }
    set extraer(montoExtraer){
        if(this.saldo >= montoExtraer){
        this.saldo -= montoExtraer;
        document.write(`<p>Has retirado: $${montoExtraer}</p>`)

        } else {
            alert(`Saldo insuficiente. Has intentado extraer: $${montoExtraer}. Su saldo es $${this.saldo}.`)
            document.write(`Saldo insuficiente. Has intentado extraer: $${montoExtraer}. Su saldo es $${this.saldo}.`);
        }
    }
    get informar(){
        document.write(`<p>El saldo del titular '${this.titular} es de: $${this.saldo}</p>`)
    }

}
const cuentaAlex = new Cuenta("Alex");



do{
    let estadoCuenta = prompt("Bienvenidos a su cuenta, que operacion desea realizar? 1. Ingresar. 2. Extraer. 3. Estado de cuenta");

    estadoCuenta.toLowerCase();

switch(estadoCuenta){
    case '1':
    case 'ingresar':
    montoIngresar = parseFloat(prompt("Cuanto dinero desea ingresar?"));
    cuentaAlex.ingresar = montoIngresar;
    break;

    case '2':
    case 'extraer':
        montoExtraer = parseFloat(prompt("Cuanto dinero desea extraer?"));
        cuentaAlex.extraer = montoExtraer;
        break;
    
    case '3':
    case 'informar':
        cuentaAlex.informar;
        break;
    
    default: 
    alert(`Ingresa un numero del 1 al 3 con su respectiva actividad que desea ejecutar.`)
}
} while(confirm("¿Desea seguir operando?"))

// cuentaAlex.ingresar = 500
// cuentaAlex.extraer = 300
// cuentaAlex.informar;
// cuentaAlex.ingresar = 1000
// cuentaAlex.extraer  = 1300
// cuentaAlex.informar;