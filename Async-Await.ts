/**Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una
promesa usando Async para ello. Luego, llame a la función y trate de imprimir su valor de retorno. ¿Cuál
es el resultado de la impresión? ¿un valor numérico ? ¿una promesa ? */


// Función async que retorna el cuadrado de un número como promesa
async function cuadradoAsync(num: number): Promise<number> {
	return num * num;
}

// Llamada a la función y se imprime el valor de retorno
const resultado = cuadradoAsync(5);
console.log(resultado); // Imprime: Promise { <pending> }
// Para obtener el valor numérico, se debe usar await o .then()


/** Cree una función llamada “resultado” que retorne una promesa usando “return new Promise”, de tal
manera que la promesa en su bloque de instrucciones implemente setTimeout demorandose seis
segundos para resolverse con valor 8. Luego, llame a la función e imprima su resultado, ¿qué resultado
obtiene? ¿una promesa?, ¿ un entero ? */

function result(): Promise<number> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(8);
		}, 6000); // 6 segundos
	});
}

const promesa = result();
console.log(promesa); // Imprime: Promise { <pending> }
// Para obtener el valor numérico, se debe usar await o .then()
promesa.then((valor) => {
	console.log(valor); // Imprime: 8
});

/**Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función
“resultado” de tal manera que la ejecución se detenga hasta obtener el valor retornado por “resultado”,
luego, eleve tal valor al cuadrado y este sea impreso. Use Async - Await. ¿ Qué imprimió ? ¿una
promesa?, ¿ un entero ?
a) ¿Qué cláusula usamos para que una función retorne una promesa sin crearla explícitamente
dentro de la función ?
b) Si necesitamos capturar el valor de una promesa, ¿ qué cláusula usamos ?
c) ¿Cuál es la condición para poder usar la cláusula await ?
 */

// Función async que espera el resultado de 'result', lo eleva al cuadrado e imprime el resultado
async function cuadradoAsincrono() {
	const valor = await result();
	const cuadrado = valor * valor;
	console.log(cuadrado); // Imprime: 64
}

cuadradoAsincrono();

// Respuestas teóricas:
// a) Usamos la cláusula 'async' para que una función retorne una promesa sin crearla explícitamente.
// b) Usamos la cláusula 'await' para capturar el valor de una promesa.
// c) La condición es que 'await' solo puede usarse dentro de funciones declaradas como 'async'.