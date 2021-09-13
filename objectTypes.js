function saludar5(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar5({ nombre: "Luis", edad: 22 }));
console.log();
function saludar2(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar2({ nombre: "Elena", edad: 25 }));
console.log();
function saludar3(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar3({ nombre: "Anabel", edad: 30 }));
console.log();
function imprimir(computador) {
    console.log("Sistema Operativo: " + computador.os);
    console.log("Memmoria: " + computador.memoria);
    console.log("Procesador: " + computador.procesador);
}
imprimir({
    os: 'windows',
    memoria: 8,
    procesador: 'intel'
});
var miCachorro = { raza: "Shitzu" };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
console.log();
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
//Pedro.edad++;
console.log('Luis edad: ' + Luis.edad);
console.log('Pedro edad: ' + Pedro.edad);
console.log();
var macbookPro = {
    memoria2: "16G",
    procesador2: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
    bateria: "litio",
    monitor2: "17 pulgadas",
    teclado: "español"
};
var UbuntuServer = {
    memoria2: "64G",
    procesador2: "intel",
    hdd: "4TB",
    so: "ubuntu",
    version: "trusty",
    conexion: "etherned"
};
var macbookPro2 = {
    memoria2: "16G",
    procesador2: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina"
};
var x = {
    contenido: "Hola Mundo"
};
//mediante typeof podemos verificar si el tipo es string
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}
//mediante "as tipo" podemos decirle al compilador que esto es siempre string
console.log(x.contenido.toLocaleLowerCase());
console.log();
function setContenido(caja, nuevoContenido) {
    caja.contenido = nuevoContenido;
}
var cajaDeString = { contenido: "Hola Mundo" };
var cajaDeNumero = { contenido: 100 };
var cajaDeFecha = { contenido: new Date() };
var cajaDeString2 = { contenido: "Hola Mundo" };
var cajaDeNumero2 = { contenido: 100 };
var cajaDeFecha2 = { contenido: new Date() };
//---------------------------------------------------------------
//ARRAY TYPE
var imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var misTareas = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];
imprimirTareas(misTareas);
//-----------------------------------------------
//READONLY ARRAY TYPE
var miLista = ["a", "b", "c"];
//miLista.push("d"); <- Esta linea generaría un error
//const miLista2 = new ReadonlyArray('a', 'b', 'c');
var miLista3 = ['a', 'b', 'c'];
var prius = ['Toyota', 2015];
var civic = ['Honda', 2016];
console.log('El Prius es marca: ', prius[0], ' y el modelo: ', prius[1]);
console.log('El Civic es marca: ', civic[0], ' y el modelo: ', civic[1]);
var prius2 = ["Toyota", 2015];
var marca = prius2[0], modelo = prius2[1];
console.log("La marca del priud es: ", marca);
console.log("El modelo del prius es: ", modelo);
var a = ["a", 1, true, false, true];
var prius3 = ["Toyota", 2014];
//prius3[0] = 'Honda'; <-- Esta línea generaría un error
