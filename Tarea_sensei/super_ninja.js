// Tarea Super Ninja.-
// ejemplo de salida
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
// superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

// crear una clase Sensei que hereda de la clase Ninja
// agregar un atributo: sabiduría - predeterminado a 10
// crear un método: speakWisdom ()
// crear un método: drinkSake ()
class Ninja{
    constructor(name){
        this.name=name;        
    }
    drinkSake(){
        return "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."     
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);        
    }
    showStats(){
        this.name=superSensei.name;
        this.salud=210;
        this.velocidad=10;
        this.fuerza=10;
        console.log(`"Nombre: ${this.name}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}"`);
    }
    newAttribute(){
        this.sabiduria=10;
        console.log(`"Sabiduría: ${this.sabiduria}"`);
    }
    speakWisdom(){
        const message=super.drinkSake();
        console.log(`"${message}"`);        
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.showStats(); // "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
superSensei.newAttribute(); // "Sabiduría: 10"
superSensei.speakWisdom(); // "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
