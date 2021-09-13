function saludar5(persona: {nombre: string; edad: number}) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar5({nombre: "Luis", edad: 22}));
console.log();

interface Persona{
    nombre: string;
    edad: number;
}

function saludar22(persona: Persona){
    return `Hola ${persona.nombre}`;
}

console.log(saludar22({ nombre: "Elena", edad: 25}));
console.log();

type Persona2 = {
    nombre: string;
    edad: number;
}

function saludar33(persona: Persona2){
    return `Hola ${persona.nombre}`;
}

console.log(saludar33({nombre: "Anabel", edad: 30}));
console.log();

//---------------------------------------------------------------------

//PROPIEDADES OPCIONALES

interface Computadora {
    os: 'windows' | 'linux' | 'mac';
    monitor?: 'crt' | 'led';
    memoria: number;
    procesador: 'intel' | 'amd';
}

function imprimir2(computador: Computadora){
    console.log(`Sistema Operativo: ${computador.os}`);
    console.log(`Memmoria: ${computador.memoria}`);
    console.log(`Procesador: ${computador.procesador}`);
}

imprimir2({
    os: 'windows',
    memoria: 8,
    procesador: 'intel',
})

//--------------------------------------------------------------------

//READONLY PROPERTIES

interface Perro {
    readonly raza: string;
}

const miCachorro: Perro = { raza: "Shitzu" };
console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);
console.log();

//miCachorro.raza= 'pitbull';

//------------------------------------


interface Persona3 {
    edad: number
}

interface EdadNoEscribible {
    readonly edad: number
}

const Luis: Persona3 = { edad: 20 };
const Pedro: EdadNoEscribible = Luis;


Luis.edad++;
//Pedro.edad++;

console.log('Luis edad: ' + Luis.edad);
console.log('Pedro edad: ' + Pedro.edad);
console.log();

//---------------------------------------------------------
//EXTENDER TIPOS

interface Direccion {
    nombre: string;
    calle: string;
    numero: string;
    ciudad: string;
    pais: string;
    codigoPostal: string;
}

interface DireccionDeUnDepartamento extends Direccion {
    unidad: string;
}


//EXTENDER MULTIPLES TIPOS
interface Computadora2 {
    memoria2: string;
    procesador2: string;
    hdd: string;
}

interface SistemaOperativo {
    so: string;
    version: string;
}

interface Portatil extends Computadora2, SistemaOperativo {
    bateria: string;
    monitor2: string;
    teclado: string;
}

interface Servidor extends Computadora2, SistemaOperativo {
    conexion: string;
}

const macbookPro: Portatil = {
    memoria2: "16G",
    procesador2: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
    bateria: "litio",
    monitor2: "17 pulgadas",
    teclado: "español",
};

const UbuntuServer: Servidor = {
    memoria2: "64G",
    procesador2: "intel",
    hdd: "4TB",
    so: "ubuntu",
    version: "trusty",
    conexion: "etherned",
};

type Portatil2 = Computadora2 & SistemaOperativo;

const macbookPro2: Portatil2 = {
    memoria2: "16G",
    procesador2: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
}

//------------------------------------------------
//GENERICS

/*interface Caja {
    contenido: any
}*/

interface Caja {
    contenido: unknown;
}

let x: Caja = {
    contenido: "Hola Mundo",
};

//mediante typeof podemos verificar si el tipo es string
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}

//mediante "as tipo" podemos decirle al compilador que esto es siempre string
console.log((x.contenido as string).toLocaleLowerCase());
console.log();

//------------------------------------------------------

interface CajaNumber {
    contenido: number;
}

interface CajaString {
    contenido: string;
}

interface CajaBoolean {
    contenido: boolean;
}

function setContenido(caja: CajaNumber, nuevoContenido: string): void;
function setContenido(caja: CajaString, nuevoContenido: number): void;
function setContenido(caja: CajaBoolean, nuevoContenido: boolean): void;
function setContenido(caja: {contenido: any}, nuevoContenido: any) {
    caja.contenido = nuevoContenido;
}

interface Caja2<T> {
    contenido: T;
}

let cajaDeString: Caja2<string> = {contenido: "Hola Mundo"};
let cajaDeNumero: Caja2<number> = {contenido: 100};
let cajaDeFecha: Caja2<Date> = {contenido: new Date()};

type Cajita<T> = {
    contenido: T;
};

let cajaDeString2: Cajita<string> = {contenido: "Hola Mundo"};
let cajaDeNumero2: Cajita<number> = {contenido: 100};
let cajaDeFecha2: Cajita<Date> = {contenido: new Date()};

//---------------------------------------------------------------
//ARRAY TYPE

const imprimirTareas = (v: Array<string>) => {
    v.forEach((v) => {
        console.log(v);
    });
};

const misTareas: string[] = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];

imprimirTareas(misTareas);

//-----------------------------------------------
//READONLY ARRAY TYPE

const miLista: ReadonlyArray<string> = ["a", "b", "c"];
//miLista.push("d"); <- Esta linea generaría un error

//const miLista2 = new ReadonlyArray('a', 'b', 'c');

const miLista3: ReadonlyArray<string> = ['a', 'b', 'c'];

//--------------------------------------------------------------
// TUPLES

type Auto = [string, number];

const prius: Auto = ['Toyota', 2015]
const civic: Auto = ['Honda', 2016]

console.log('El Prius es marca: ', prius[0], ' y el modelo: ', prius[1]);
console.log('El Civic es marca: ', civic[0], ' y el modelo: ', civic[1]);

const prius2: [string, number] = ["Toyota", 2015];
const [marca, modelo] = prius2;

console.log("La marca del priud es: ", marca);
console.log("El modelo del prius es: ", modelo);


//-----------------------------------------------------------
//REST TUPLES

type StringNumberBooleans = [string, number, ...boolean[]];
const a: StringNumberBooleans = ["a", 1, true, false, true];

type Auto2 = readonly [string, number];
const prius3: Auto2 = ["Toyota", 2014];

//prius3[0] = 'Honda'; <-- Esta línea generaría un error
//------
