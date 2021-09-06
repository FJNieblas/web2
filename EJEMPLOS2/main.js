function saludar(nombre) {
    return "Hola , " + nombre;
}
console.log(saludar("Geovany"));
//------------------------------------
var esVerdadero = true;
console.log(esVerdadero);
//------------------------------------
var entero = 6;
var hexadecimal = 0xf00d;
var binario = 10;
var octal = 484;
//------------------------------------
var marca = 'toyota';
var modelo = "tacoma";
var nombre = "Raul";
var apellido = "Jimenez";
var impresion = "\nNombre: " + nombre + "\nApellido: " + apellido + "\n";
//------------------------------------
var listaDeNumeros = [1, 2, 3];
//listaDeNumeros.push('a');
var listaDeNumeros2 = [1, 2, 3];
var futbolista;
futbolista = ['Raul Jimenez', 28];
console.log("El nombre es " + futbolista[0]);
console.log("Su edad es " + futbolista[1]);
//------------------------------------
var marcasDeAutos;
(function (marcasDeAutos) {
    marcasDeAutos[marcasDeAutos["Toyota"] = 100] = "Toyota";
    marcasDeAutos[marcasDeAutos["Chevrolet"] = 101] = "Chevrolet";
    marcasDeAutos[marcasDeAutos["Ford"] = 102] = "Ford";
})(marcasDeAutos || (marcasDeAutos = {}));
var tacoma = marcasDeAutos.Toyota;
console.log(tacoma);
console.log(marcasDeAutos[0]);
//------------------------------------
var variablesinTipo = 'Hola Pedrito';
variablesinTipo = 100;
var valorDesconocido = 4;
valorDesconocido = true;
//------------------------------------
function saludar2() {
    console.log("Hola mundo... Cruel");
}
saludar2();
//------------------------------------
var variableSinDefinir = undefined;
var variableNula = null;
//------------------------------------
//No tiene punto final ya que dispara una excepcion
function error(mensaje) {
    throw new Error(mensaje);
}
//No tiene punto final ya que dispara un error
function fallo() {
    return error("Reportar fallo");
}
//No finaliza ya que posee un loop infinito
function loopInfinito() {
    while (true) { }
}
//------------------------------------
/*declare function crear(o: object): void;

crear({ prop: 0 });
crear(null);
crear(undefined);
crear([]);
*/
//false es un tipo primitivo, por lo cual se generará un error
//crear(false);
//------------------------------------
function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(1);
imprimirId('abc');
function imprimirId2(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed(2));
    }
}
imprimirId2('este_es_mi_id');
imprimirId2(100.234234123);
//------------------------------------
var algunValor = "Esto es un string";
var longitudDelString = algunValor.length;
var algunValor2 = "Este es un string";
var longitudDelString2 = algunValor2.length;
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
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada x es : " + punto.x);
    console.log("La coordenada y es : " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
//------------------------------------
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function imprimirEtiqueta2(etiqueta) {
    console.log(etiqueta.label);
}
;
var miEtiqueta2 = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta2(miEtiqueta2);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
var punto1 = { x: 10, y: 20 };
punto1.x = 20;
//------------------------------------
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir('soltero');
//------------------------------------
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar4(imprimirEnConsola);
