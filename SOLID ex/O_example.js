
//principio de aberto y cerrado

//clase padre que actua como abstraccion para el metodo agregar
class Carro {
    agregar(){
        throw new Error("no hay clase hija");
    }
}

//clase hija con la implementacion de el vehiculo electrico
class CarroElectrico extends Carro {
    agregar() {
        //codigo carro electrico
        console.log("agregando carro electrico")
    }
}


//clase hija con la implementacion de el vehiculo a gasolina
class CarroGasolina extends Carro {
    agregar() {
        //codigo carro Gasolina
        console.log("agregando carro gasolina")
    }
}


//clase hija con la implementacion de el vehiculo hibrido
class CarroHibrido extends Carro {
    agregar(){
        //codigo carro Hibrido
        console.log("agregando carro hibrido")
    }
}

//funcion que tiene como parametro la clase en funcion de el vehiculo a utilizar
function agregarCarro(carro) {
    carro.agregar();
}
//objetvo de la clase a utilizar
const carroElectrico = new CarroElectrico();

//implementacion
agregarCarro(carroElectrico);

//este codigo cumple el principio de abierto y cerrado porque:
/*
    Si quisieramos agregar por ejemplo un carro de Diesel con una nueva implementacion, solo bastaria
    con agregar una clase que tmb tendra la funcion agregar con su propia implementacion. Asi no hay
    necesidad de modificar codigo de la funcion agregarCarro o de la clase carro para agregar
    una nueva implementacion
*/


