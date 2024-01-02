
//principio de responsabilidad unica
//clase negocio encargadad de manejar los datos del negocio
class negocio {
    constructor(nombre, lugar, ingresos, gastos){
        this.ingresos = ingresos
        this.gastos = gastos
        this.nombre = nombre
        this.lugar = lugar
    }
}

//clase encargada de calcular las gancias
class calcularIngresos {
    obtenerIngresos(negocio){
        return negocio.ingresos - negocio.gastos
    }
}

//clase encargada de subir los datos del negocio
class subirDatosNegocio {
    subirDatos(negocio){
        //implementacion
    }
}

//clase encargada de generar un reporte con los datos del negocio e ingresos
class reporteNegocio{
    generarReporte(negocio){
        console.log(negocio.nombre);
        console.log(negocio.lugar);
        console.log(calcularIngresos.obtenerIngresos(business));
    }
}
//instancia de los datos del negocio
const business = new negocio("pizzeria business", "los heroes", 200, 20);
//objetos de las clases a utilizar
const calcularIngresos = new calcularIngresos();
const subirDatosNegocio = new subirDatosNegocio();

//implementacion del codigo
subirDatosNegocio.subirDatos();
reporteNegocio.generarReporte();

//se cumple el principio de responsabilidad unica porque:
/*
    cada clase tiene una unica responsabilidad e implementacion definida, de esta manera facilitaria por
    ejemplo agregar un envio de email con los datos del reporte a la implementacion de codigo sin tener
    que modificar el codigo ya existente
*/