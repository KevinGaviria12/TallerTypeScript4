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
const coche1 = new Coche("Toyota", "Corolla");
coche1.mostrarDetalles();
const coche2 = Coche.crearCoche("Honda", "Civic");
coche2.mostrarDetalles();
/**Cree e instancie una clase robot con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
públicas y dos privadas, dos deben ser pasadas al constructor, las otras dos, deben ser inicializadas
dentro de la clase. */
/**Cree e instancie una clase PC con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
públicas y dos privadas, todas deben ser pasadas al constructor. */ 
