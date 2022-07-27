// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar(montoIngresar){
         montoIngresar = parseFloat(prompt("Cuanto dinero desea ingresar!"))
        this.saldo += montoIngresar
    },

    extraer(montoExtraer) {
        montoExtraer = parseFloat(prompt("Cuanto dinero desea extraer!"))
        if(this.saldo >= montoExtraer){
            this.saldo -= montoExtraer
        } else {
        alert("Saldo insuficiente")
        }
    },

    informar() {
        document.write(`<p>El saldo que tiene la cuenta del titular ${this.titular} es de: ${this.saldo}</p>`)
    },
}
cuenta.informar();
cuenta.ingresar()
cuenta.informar();
cuenta.extraer();
cuenta.informar();
cuenta.extraer();
cuenta.informar();