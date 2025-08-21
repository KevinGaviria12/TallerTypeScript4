/**Cree e instancie una clase coche con un método no estático y otro estático, dos propiedades, una pública
y una privada, ambas deben ser pasadas al constructor */

class Coche {
    public marca: string;
    private modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public mostrarDetalles(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }

    public static crearCoche(marca: string, modelo: string): Coche {
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
    public nombre: string;
    public tipo: string;
    private bateria: number;
    private id: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.bateria = 100; // Inicializada dentro de la clase
        this.id = Robot.generarId(); // Inicializada dentro de la clase
    }

    public saludar(): void {
        console.log(`Hola, soy ${this.nombre}, un robot de tipo ${this.tipo}.`);
    }

    public mostrarBateria(): void {
        console.log(`Nivel de batería: ${this.bateria}%`);
    }

    public static generarId(): string {
        return 'RBT-' + Math.floor(Math.random() * 10000);
    }

    public static descripcion(): void {
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
    public marca: string;
    public procesador: string;
    private ram: number;
    private almacenamiento: number;

    constructor(marca: string, procesador: string, ram: number, almacenamiento: number) {
        this.marca = marca;
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
    }

    public mostrarEspecificaciones(): void {
        console.log(`Marca: ${this.marca}, Procesador: ${this.procesador}, RAM: ${this.ram}GB, Almacenamiento: ${this.almacenamiento}GB`);
    }

    public actualizarRam(nuevaRam: number): void {
        this.ram = nuevaRam;
        console.log(`RAM actualizada a ${this.ram}GB`);
    }

    public static comparar(play1: play, play2: play): void {
        if (play1.ram > play2.ram) {
            console.log(`${play1.marca} tiene más RAM que ${play2.marca}`);
        } else if (play1.ram < play2.ram) {
            console.log(`${play2.marca} tiene más RAM que ${play1.marca}`);
        } else {
            console.log("Ambas tienen la misma cantidad de RAM");
        }
    }

    public static descripcion(): void {
        console.log("Una play 5 Pro es mas potente");
    }
}

const play1 = new play("Sony", "AMD Ryzen", 16, 2000);
play1.mostrarEspecificaciones();
play1.actualizarRam(32);
play.descripcion();
