
//clase que actua como una interfaz para la carga de pasajeros
class CargaPasajeros {
    llevarPasajeros(){

    }
}

//clase que actua como una interfaz para la carga de mercancia
class CargaMercancia {
    llevarMercancia() {

    }
}

//clase que compone ambas interfaces en una sola para asi poder heredar ambas funciones (esto en javascript)
class MercanciaYPasajeros {
    constructor(){
        this.CargarPasajeros = new CargaPasajeros()
        this.CargarMercancia = new CargaMercancia()
    }
    //se declaran los metodos mediantes los objetos de las clases que se componen
    llevarPasajeros(){
        this.CargarPasajeros.llevarPasajeros()
    }

    llevarMercancia(){
        this.CargarMercancia.llevarMercancia()
    }
    
}

//clase carro que hereda la clase composicion de mercancia y pasajeros, ya que es capas de tener ambas implementaciones
class Carro extends MercanciaYPasajeros {
    llevarPasajeros(){
        //implementacion de carro en pasajeros
    }
    llevarMercancia(){
        //implementacion de carro en mercancia

    }
}

//clase que hereda la interfaz de cargarMercancia ya que unicamente puede usar esa implementacion
class Camion extends CargarMercancia {
    llevarMercancia(){
        //implementacion de camion en mercancia
    }
}
//--------------------------------
//esto cumple el principio de sustitución de Liskov porque si digamos tuvieramos la siguiente interfaz
class tiposCarga {
    llevarPasajeros(){

    }
    llevarCarga(){

    }
}
//y ahora procedieramos a llavar a la clase camion, aqui la clase camion estaria heredando el metodo de
/*llevar pasajeros a pesar que en ningun momento utiliza esta implementacion, por lo que nos vieramos
forzados a añadir una excepción a esa implementación para evitar errores de codigo. Y al hacer eso violamos
el principio de sustitución de liskiv (o al menos fue de esa forma que lo entendi)*/ 
class Camion extends tiposCarga {
    llevarMercancia(){
        //implementacion de camion en mercancia
    }
    llevarPasajeros(){
        //excepcion
        console.log("no puedes implementar esta clase en camion")
    }
}