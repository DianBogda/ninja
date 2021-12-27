// Tarea Ninja.-
// Ninja
// Salidas de ejemplo
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();

// Crea una clase Ninja
// agregar un atributo: nombre
// agregar un atributo: salud
// agrega un atributo: velocidad - da un valor predeterminado de 3
// agrega un atributo: fuerza - dé un valor predeterminado de 3
// agrega un método: sayName () - Esto debería registrar el nombre de Ninja en la consola
// agrega un método: showStats () - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
// agrega un método: drinkSake () - Esto debería agregar +10 de salud al Ninja

class Ninja{
    constructor(name){
        this.name=name;  
        // this.fuerza=0;      
        // this.velocidad=0;          
        // this.salud=0;      
    }
    sayName(){
        this.name=Ninja.name;
        console.log("Nombre: " + this.name);
    }
    showStats(){
        const stats=[];
        this.name=Ninja.name;
        this.fuerza=3;
        this.velocidad=3;
        this.salud=0;
        stats.push("Nombre: " + this.name, "Fuerza: " + this.fuerza, "Velocidad: " + this.velocidad, "Salud: " + this.salud);
        console.log(stats);
    }
    drinkSake(){
        this.salud +=10;
        console.log("Salud: " + this.salud);
    }
}

const ninja1 = new Ninja("Hyabusa");
console.log(Ninja.name); // Ninja
console.log(ninja1.name); // Hyabusa
ninja1.sayName(); // Nombre: Ninja
ninja1.showStats(); // [ 'Nombre: Ninja', 'Fuerza: 3', 'Velocidad: 3', 'Salud: 100' ]
ninja1.drinkSake(); // Salud: 10
