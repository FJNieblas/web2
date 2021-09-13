function saludar2(): void {
    console.log("Hola mundo... Cruel");
}

saludar2();

console.log();
//-----------------------------------------

function saludar3(nombre: string){
    console.log(`Hola ${nombre}`)
}

saludar3('Nieblas');
console.log();

function elevarAlCuadrado(base: number): number {
    return base * base;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log('Numero elevado: ' + numeroAlCuadrado);
console.log();

//FUNCIONES ANONIMAS
const nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
console.log();
nombres.forEach((s) => {
    console.log(s.toUpperCase());
});
console.log();
//------------------------------------

//LITERALES
function imprimir(estadoCivil: 'soltero' | 'casado'){
    console.log(estadoCivil);
}

imprimir('soltero');
console.log();
//------------------------------------
//FUNCIONES COMO EXPRESIONES
function saludar4(fn: (a:string) => void) {
    fn("Hola Mundo");
}

function imprimirEnConsola(s: string) {
    console.log(s)
}

saludar4(imprimirEnConsola);
console.log();

//CONSTRUCTOR SIGNATURE

interface Transporte {
    nombre: string;
}

class Caballo implements Transporte {
    constructor(public nombre: string) {}
}

class Automovil implements Transporte{
    constructor(public nombre: string) {}
}

type ConstructorDeTransporte = {
    new (nombre: string): Transporte;
};

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string) {
    return new ctr(nombre);
}

const miCaballo = construirTransporte(Caballo, "Paso Fino");
const miAutomovil = construirTransporte(Automovil, "Toyota ");

console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);
console.log();
//PARÁMETROS OPCIONALES

function f(n: number) {
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); //se especifica un argumento
}

/*function f2(n?: number){
    //...
}

function f3(n = 10){
    //...
}*/
//-----------
//PARÁMETROS OPCIONALES EN LOS CALLBACKS

function miIterador(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i=0; i<=arr.length; i++){
        callback(arr[i]);
    }
}

miIterador([1, 2, 3], (a) => console.log(a));
miIterador([1, 2, 3], (a,i) => console.log(a, i));
console.log();
//USO DE "THIS"

const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    },
}

console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
console.log();
const usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: () => {
        this.admin = true;
    },
};

console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);
console.log();
//REST PARAMETERS

function multiplicar(n: number, ...m: number[]) : number {
    return m.reduce((p, c) => {
        return p * c;
    }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));
console.log();

// PARAMETER DESTRUCTURING

function sumar(num) {
    return num.a + num.b + num.c;
}

const numeros = {a: 1, b: 2, c: 3};

console.log(sumar(numeros));
console.log();

// @ts-ignore
function sumar2({a, b, c}): number {
    return a + b + c;
}

console.log(sumar2({a: 1, b: 2, c: 3}));
console.log();

function sumar3({a, b, c} : {a: number, b: number, c: number}): number {
    return a + b + c;
}

console.log(sumar3({a: 1, b: 2, c: 3}));
console.log();


