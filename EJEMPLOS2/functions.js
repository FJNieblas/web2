function saludar2() {
    console.log("Hola mundo... Cruel");
}
saludar2();
//------------------------------------
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3('Nieblas');
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log('Numero elevado: ' + numeroAlCuadrado);
//FUNCIONES ANONIMAS
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
//------------------------------------
//LITERALES
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir('soltero');
//------------------------------------
//FUNCIONES COMO EXPRESIONES
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar4(imprimirEnConsola);
