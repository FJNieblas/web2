//------------------------------------
let esVerdadero = true;
console.log(esVerdadero);
//------------------------------------
let entero: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;
//------------------------------------
let marca: string = 'toyota';
let modelo: string = "tacoma";

let nombre: string = "Raul";
let apellido: string = "Jimenez";
let impresion: string = `
Nombre: ${nombre}
Apellido: ${apellido}
`;
//------------------------------------
let listaDeNumeros: number[] = [1, 2, 3];

//listaDeNumeros.push('a');

let listaDeNumeros2: Array<number> = [1, 2, 3];

let futbolista: [string, number];
futbolista = ['Raul Jimenez', 28]

console.log(`El nombre es ${futbolista[0]}`)
console.log(`Su edad es ${futbolista[1]}`)
//------------------------------------

let variablesinTipo: any = 'Hola Pedrito';
variablesinTipo = 100;

let valorDesconocido: unknown = 4;
valorDesconocido = true;

//------------------------------------

let variableSinDefinir: undefined = undefined;
let variableNula: null = null;
//------------------------------------