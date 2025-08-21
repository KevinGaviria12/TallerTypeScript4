"use strict";
/**Cree e instancie una clase coche con un método no estático y otro estático, dos propiedades, una pública
y una privada, ambas deben ser pasadas al constructor */
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarDetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
    static crearCoche(marca, modelo) {
        return new Coche(marca, modelo);
    }
}
const coche1 = new Coche("Chevrolet", "Spark GT");
coche1.mostrarDetalles();
const coche2 = Coche.crearCoche("Honda", "Civic");
coche2.mostrarDetalles();
/**Cree e instancie una clase robot con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
públicas y dos privadas, dos deben ser pasadas al constructor, las otras dos, deben ser inicializadas
dentro de la clase. */
class Robot {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.bateria = 100; // Inicializada dentro de la clase
        this.id = Robot.generarId(); // Inicializada dentro de la clase
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}, un robot de tipo ${this.tipo}.`);
    }
    mostrarBateria() {
        console.log(`Nivel de batería: ${this.bateria}%`);
    }
    static generarId() {
        return 'RBT-' + Math.floor(Math.random() * 10000);
    }
    static descripcion() {
        console.log("Los robots pueden realizar tareas automatizadas");
    }
}
const robot1 = new Robot("Astro Bot", "Asistente");
robot1.saludar();
robot1.mostrarBateria();
Robot.descripcion();
/**Cree e instancie una clase PC con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
públicas y dos privadas, todas deben ser pasadas al constructor. */
class play {
    constructor(marca, procesador, ram, almacenamiento) {
        this.marca = marca;
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
    }
    mostrarEspecificaciones() {
        console.log(`Marca: ${this.marca}, Procesador: ${this.procesador}, RAM: ${this.ram}GB, Almacenamiento: ${this.almacenamiento}GB`);
    }
    actualizarRam(nuevaRam) {
        this.ram = nuevaRam;
        console.log(`RAM actualizada a ${this.ram}GB`);
    }
    static comparar(play1, play2) {
        if (play1.ram > play2.ram) {
            console.log(`${play1.marca} tiene más RAM que ${play2.marca}`);
        }
        else if (play1.ram < play2.ram) {
            console.log(`${play2.marca} tiene más RAM que ${play1.marca}`);
        }
        else {
            console.log("Ambas tienen la misma cantidad de RAM");
        }
    }
    static descripcion() {
        console.log("Una play 5 Pro es mas potente");
    }
}
const play1 = new play("Sony", "AMD Ryzen", 16, 2000);
play1.mostrarEspecificaciones();
play1.actualizarRam(32);
play.descripcion();
