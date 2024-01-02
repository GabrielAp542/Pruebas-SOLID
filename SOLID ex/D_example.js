//definición de abstracción/interfaz
class CargadorDeCombustible {
    cargarCombustible(){

    }
}

//clase con la implementacion concreta que hereda y depende de la interfaz
class CargarDiesel extends CargadorDeCombustible {
    cargarCombustible(){
        //implementación de cargar diesel
        console.log("diesel")
    }
}

//clase con la implementación concreta que hereda y depende de la interfaz
class CargarGasolina extends CargadorDeCombustible {
    cargarCombustible(){
        //implementación de cargar gasolina
        console.log("gasolina")
    }
}

//clase alta que depende de la abstracción
class BombaDeGasolina {
    constructor(combustible){
        this.combustible = combustible
    }

    llenarCombustible(){
        this.combustible.cargarCombustible();
    }
}

//objetos de la clase
const gasolina = new CargarGasolina()
const diesel = new CargarDiesel()

//implementación de codigo
const bombaDeGasolina = new BombaDeGasolina(diesel);
bombaDeGasolina.llenarCombustible();

/*este codigo cumple el principio de Inversión de dependencia ya que tanto la clase alta como la clase baja
con implementaciones concretas dependen de la interfaz. De este modo obtenemos mas agilidad y flexibilidad
con el codigo y evitamos posibles errores */