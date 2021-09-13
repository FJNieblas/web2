function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number {
    return x.length;
}

console.log(longitud("Hola Mundo"));
console.log(longitud([1, 2, 3, 4, 5]));

//---------------------------------------------
console.log();
console.log();
//-----
function calcularLongitud(x: any[] | string) {
    return x.length;
}

console.log(calcularLongitud("Hola Mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5]));