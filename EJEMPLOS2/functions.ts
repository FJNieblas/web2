function saludar2(): void {
    console.log("Hola mundo... Cruel");
}

saludar2();
//------------------------------------

function saludar3(nombre: string){
    console.log(`Hola ${nombre}`)
}

saludar3('Nieblas');

function elevarAlCuadrado(base: number): number {
    return base * base;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log('Numero elevado: ' + numeroAlCuadrado);

//FUNCIONES ANONIMAS
const nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});
//------------------------------------

//LITERALES
function imprimir(estadoCivil: 'soltero' | 'casado'){
    console.log(estadoCivil);
}

imprimir('soltero');

//------------------------------------
//FUNCIONES COMO EXPRESIONES
function saludar4(fn: (a:string) => void) {
    fn("Hola Mundo");
}

function imprimirEnConsola(s: string) {
    console.log(s)
}

saludar4(imprimirEnConsola);