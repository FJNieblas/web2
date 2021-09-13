var _this = this;
function saludar2() {
    console.log("Hola mundo... Cruel");
}
saludar2();
console.log();
//-----------------------------------------
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3('Nieblas');
console.log();
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log('Numero elevado: ' + numeroAlCuadrado);
console.log();
//FUNCIONES ANONIMAS
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
console.log();
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
console.log();
//------------------------------------
//LITERALES
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir('soltero');
console.log();
//------------------------------------
//FUNCIONES COMO EXPRESIONES
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar4(imprimirEnConsola);
console.log();
var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(Caballo, "Paso Fino");
var miAutomovil = construirTransporte(Automovil, "Toyota ");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);
console.log();
//PARÁMETROS OPCIONALES
function f(n) {
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); //se especifica un argumento
}
/*function f2(n?: number){
    //...
}

function f3(n = 10){
    //...
}*/
//--------
//PARÁMETROS OPCIONALES EN LOS CALLBACKS
function miIterador(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        callback(arr[i]);
    }
}
miIterador([1, 2, 3], function (a) { return console.log(a); });
miIterador([1, 2, 3], function (a, i) { return console.log(a, i); });
console.log();
//USO DE "THIS"
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    }
};
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
console.log();
var usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        _this.admin = true;
    }
};
console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);
console.log();
//REST PARAMETERS
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
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
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
console.log();
// @ts-ignore
function sumar2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar2({ a: 1, b: 2, c: 3 }));
console.log();
function sumar3(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar3({ a: 1, b: 2, c: 3 }));
console.log();
