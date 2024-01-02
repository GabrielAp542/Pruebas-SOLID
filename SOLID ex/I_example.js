class TipoCombustible {
    diesel(){}
    gasolina(){}
    electrico(){}
}

class Tesla extends TipoCombustible {
    electrico(){
        //implementación
    }
}

//clase interfaz para los vehiculos que son Electricos
class combustibleElectrico {
    electrico(){}
}

//clase interfaz para los vehiculos que son a Diesel
class combustiblediesel {
    diesel(){
        
    }
}

//clase interaz para los vehiculos a  gasolina
class combustibleGasolinaSuper {
    gasolinaSuper(){
        
    }
}

//clase interfaz gasolina regular
class combustibleGasolinaRegular {
    gasolinaRegular(){
        
    }
}

//clase Camioneta que implementa el combustible diesel
class Camioneta extends combustiblediesel {
    diesel(){
        //implementación
    }
}

//este codigo cumple con el principio de segregacion de interfaces porque:
/*
    El principio establece que es mejor tener varias inferfaces para cosas especificas que una sola
    intefaz para un todo. Este principio va de la mano con el anterior ya que de esta manera evitamos igualmente
    que una clase herede metodos que no va a utilizar de la clase padre y tengamos que crear exepciones que
    a la larga puede producir errores y el codigo se vera menos organizado. En el ejemplo las interfaces estan
    separadas en los diferentes tipos de combustible y la clase solamente hereda la interfaz que corresponde
    a su tipo de combustible (en caso de implementar mas de una se tendria que crear una composición, esto ya 
    que javascript no permite heredar mas de una clase. Pero en lenguajes como c# esto si se puede por lo que
    ahi es mas sencillo de implementar)
*/
//ejemplo donde no se cumple el principio
class TipoCombustible {
    diesel(){}
    gasolina(){}
    electrico(){}
}

class Tesla extends TipoCombustible {
    electrico(){
        //implementación
    }
}