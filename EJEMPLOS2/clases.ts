class Punto {
    x: number;
    y: number;

    //asignatura normal usando valores por default
    constructor(x = 10, y = 10) {
        this.x = x;
        this.y = y;
    }
}

const miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;

let miPunto2 = new Punto();
console.log(miPunto2.x);
console.log(miPunto2.y);
console.log();
//--------------------------------------------------------

class Saludo {
    readonly nombre: string = "mundo";

    constructor(nuevoNombre: string) {
        if (!!nuevoNombre) {
            this.nombre = nuevoNombre;
        }
    }

    /*asignarNuevoNombre(nuevoNombre: string){
        this.nombre = nuevoNombre; //error, no es posible asignar valor fuera del constructor
    }*/
}

const miNombre = new Saludo("Elio");
//miNombre.nombre = "Alejandro"; //no es posible asignar valor fuera del constructor

//-----------------------------------------------------------------------

class Punto2{
    //uso de sobrecarga
    /*constructor(x: number, y: number);
    constructor(s: string);
    constructor(xs: number | string, y?: number) {
    }*/
}

//-----------------------------------------------------------------------

class Figura {
    lados = 0;
}

class Circulo extends Figura {
    constructor() {
        //this.lados = 2; no es posible acceder a un elemento de la clase padre antes de super
        super();
    }
}
//-----------------------------------------------------------------------

class Video {
    titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    reproducir(): void {
        console.log(`${this.titulo} se está reproduciendo`);
    }
}

const miVideo = new Video("año nuevo");
miVideo.reproducir();
console.log();
//-----------------------------------------------------------------------

let titulo = "mi graduacion"; // (1)

class Video2 {
    titulo: string; // (2)

    asignarTitulo(nuevoTitulo: string) {
        titulo = nuevoTitulo; //Esto hace referencia a (1)
        this.titulo = nuevoTitulo; //Esto hace referencia a (2)
    }
}

//-----------------------------------------------------------------------

class Desfile {
    private _participantes = 0;

    get participantes(): number {
        return this._participantes;
    }

    set participantes(v: number) {
        this._participantes = v;
    }
}

const desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes); //100
console.log();
//-----------------------------------------------------------------------

interface Encendible {
    encender(): void;
}

class Television implements Encendible{
    encender(): void {
        console.log("El televisor se ha encendido");
    }
}
console.log();

//-----------------------------------------------------------------------

interface Verificable {
    verificar(nombre: string): boolean;
}

class NombreVerificable implements Verificable {
    verificar(nombre): boolean { //nombre se convierte en un parámetro de tipo any
        return nombre.toLowerCase();
    }
}

//-----------------------------------------------------------------------

class Animal {
    moverse() {
        console.log("El animal se mueve");
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("El perro ladra");
    }
}

const miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();
console.log();

//-----------------------------------------------------------------------

class Padre {
    saludar() {
        console.log("Hola");
    }
}

class Hijo extends Padre {
    saludar(nombre?: string) {

        if (!!nombre) {
            console.log(`Hola ${nombre}`);
        } else {
            super.saludar();
        }
    }
}

const hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");
console.log();
//-----------------------------------------------------------------------

class Definicion {
    nombre = "definicion";
    constructor() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

class Implementacion extends Definicion {}

const d = new Implementacion();
//-----------------------------------------------------------------------

class Saludo2 {
    public saludar() {
        console.log("Saludar!");
    }
}

const inst = new Saludo2();
inst.saludar();
console.log();

//-----------------------------------------------------------------------

class Saludo3 {
    protected getDestinatario() {
        return "amigos";
    }
}

class SaludoEspecial extends Saludo3{
    saludar() {
        console.log(`Hola ${this.getDestinatario()}`); //accedemos al metodo protedted
    }
}

const saludo: SaludoEspecial = new SaludoEspecial();
saludo.saludar();
//saludo.getDestinatario(); error, no se tiene acceso de forma pública

//-----------------------------------------------------------------------

class Base {
     protected m = 10;
}

class Derivada extends Base {
    m = 15;
}

const i = new Derivada();
console.log(i.m);
console.log();
//-----------------------------------------------------------------------

class Base2 {
    protected x: number = 1;
}

class Derivada1 extends Base2{
    protected x: number = 5;
}

class Derivada2 extends Base2 {
    imprimirX(c1: Derivada2) {
        console.log(c1.x);
    }
}
//-----------------------------------------------------------------------

class Base3 {
    //private x = 0;
}

class Derivada3 extends Base3 {
    imprimirX() {
      // console.log(this.x); Esta linea genera un error
    }
}

const b = new Base3();
/*console.log(b.x); //Esta linea genera un error
console.log();*/
//-----------------------------------------------------------------------

class A {
    private x = 10;

    public imprimirX(otra: A) {
        console.log(otra.x);
    }
}

const b2 = new A();
b2.imprimirX(new A());
console.log();
//-----------------------------------------------------------------------

class MiClase {
    static x = 10;

    static imprimirX() {
        //para acceder a una propiedad estatica utilizamos this dentro de un metodo estatico
        console.log(`El valor de X es: ${this.x}`);
    }

    imprimirX() {
        //para acceder a una propiedad estatica usamos el nombre de la clase dentro de un metodo de una instancia
        console.log(`El valor de X de una instancia es: ${MiClase.x}`);
    }
}

//para acceder a un metodo lo hacemos directamente desde la clase
MiClase.imprimirX();

//para acceder a una propiedad estatica lo hacemos directamente desde la clase
console.log(`El valor obtenido de X es: ${MiClase.x}`);

const miClase = new MiClase();
miClase.imprimirX();
console.log();
//-----------------------------------------------------------------------

class MiClase2 {
    //private static x = 10;
}

//console.log(MiClase2.x); esta linea generará un error
//Property 'x' is private and only accessible within class 'MiClase'

//-----------------------------------------------------------------------

class Base4 {
    static saludar() {
        console.log("Hola Mundo");
    }
}

class Derivada4 extends Base4 {}

Derivada4.saludar();
console.log();

//-----------------------------------------------------------------------

/*class Base {
   static name = 'S!'; esta linea generará un error
   //static property name 'name' conflicts with built-in property 'Function.name' of constructor function 'Base'
}*/

//-----------------------------------------------------------------------

class Caja<T> {
    contenido: T;

    constructor(value: T) {
        this.contenido = value;
        console.log(this.contenido);
    }
}

type Juguete = {
    nombre: string;
};

const misJuguetes: Juguete[] = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });

const miCajaDeJuguetes: Caja<Juguete[]> = new Caja(misJuguetes);

type Maquillaje = {
    nombre: string;
};

const miMaquillaje: Maquillaje[] = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });

const miCajaDeMaquillaje: Caja<Maquillaje[]> = new Caja(miMaquillaje);
//-----------------------------------------------------------------------

class Caja2 {
    contenido = "";
    set(valor: string){
        this.contenido = valor;
        return this;
    }
}

const miCaja3: Caja2 = new Caja2();
const valorRetornado = miCaja3.set("Joyas");
console.log(miCaja3);
console.log(valorRetornado);
console.log();

//-----------------------------------------------------------------------

class Caja3 {
    contenido = "";

    constructor(contenido: string) {
        this.contenido = contenido;
    }

    igualQue(otro: this) {
        return otro.contenido === this.contenido;
    }
}

const caja1 = new Caja3("Joyas");
const caja2 = new Caja3("Joyas");
const caja3 = new Caja3("Maquillaje");

console.log(caja1.igualQue(caja2));
console.log(caja1.igualQue(caja3));
console.log();
//-----------------------------------------------------------------------

class Caja4 {
    contenido = "";

    /*igualQue(otro: this){
        //return this.contenido === otraInstancia.contenido;
    }*/
}

class CajaDerivada extends Caja4 {
    otroContenidoo = "";
}

const base = new Caja4();
const derivada = new CajaDerivada();
//derivada.igualQue(base); base no extiende de derivada, esto generará un error
//Argument of type 'Caja4' is not assignable to parameter of type 'CajaDerivada'

//-----------------------------------------------------------------------

class Video3 {
    constructor(
        public readonly nombre: string,
        public readonly duracion: number,
        public readonly formato: "mp4" | "mkv" | "web"
    ) {}
}

const miVideo3: Video3 = new Video3("vacaciones", 60, "mp4");

console.log(`Mi video de: ${miVideo3.nombre}`);
console.log(`Tiene una duracion de: ${miVideo3.duracion} segundos`);
console.log(`Y el formato es: ${miVideo3.formato}`);
console.log();
//-----------------------------------------------------------------------

const miClase2 = class <T> {
    contenido: T;
    constructor(v: T) {
        this.contenido = v;
    }
};

const miInstancia = new miClase2("Un video de 12 minutos");

console.log(`El contenido del video es: ${miInstancia.contenido}`);









