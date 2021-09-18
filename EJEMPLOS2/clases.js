var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Punto = /** @class */ (function () {
    //asignatura normal usando valores por default
    function Punto(x, y) {
        if (x === void 0) { x = 10; }
        if (y === void 0) { y = 10; }
        this.x = x;
        this.y = y;
    }
    return Punto;
}());
var miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;
var miPunto2 = new Punto();
console.log(miPunto2.x);
console.log(miPunto2.y);
console.log();
//--------------------------------------------------------
var Saludo = /** @class */ (function () {
    function Saludo(nuevoNombre) {
        this.nombre = "mundo";
        if (!!nuevoNombre) {
            this.nombre = nuevoNombre;
        }
    }
    return Saludo;
}());
var miNombre = new Saludo("Elio");
//miNombre.nombre = "Alejandro"; //no es posible asignar valor fuera del constructor
//-----------------------------------------------------------------------
var Punto2 = /** @class */ (function () {
    function Punto2() {
    }
    return Punto2;
}());
//-----------------------------------------------------------------------
var Figura = /** @class */ (function () {
    function Figura() {
        this.lados = 0;
    }
    return Figura;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo() {
        //this.lados = 2; no es posible acceder a un elemento de la clase padre antes de super
        return _super.call(this) || this;
    }
    return Circulo;
}(Figura));
//-----------------------------------------------------------------------
var Video = /** @class */ (function () {
    function Video(titulo) {
        this.titulo = titulo;
    }
    Video.prototype.reproducir = function () {
        console.log(this.titulo + " se est\u00E1 reproduciendo");
    };
    return Video;
}());
var miVideo = new Video("año nuevo");
miVideo.reproducir();
console.log();
//-----------------------------------------------------------------------
var titulo = "mi graduacion"; // (1)
var Video2 = /** @class */ (function () {
    function Video2() {
    }
    Video2.prototype.asignarTitulo = function (nuevoTitulo) {
        titulo = nuevoTitulo; //Esto hace referencia a (1)
        this.titulo = nuevoTitulo; //Esto hace referencia a (2)
    };
    return Video2;
}());
//-----------------------------------------------------------------------
var Desfile = /** @class */ (function () {
    function Desfile() {
        this._participantes = 0;
    }
    Object.defineProperty(Desfile.prototype, "participantes", {
        get: function () {
            return this._participantes;
        },
        set: function (v) {
            this._participantes = v;
        },
        enumerable: false,
        configurable: true
    });
    return Desfile;
}());
var desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes); //100
console.log();
var Television = /** @class */ (function () {
    function Television() {
    }
    Television.prototype.encender = function () {
        console.log("El televisor se ha encendido");
    };
    return Television;
}());
console.log();
var NombreVerificable = /** @class */ (function () {
    function NombreVerificable() {
    }
    NombreVerificable.prototype.verificar = function (nombre) {
        return nombre.toLowerCase();
    };
    return NombreVerificable;
}());
//-----------------------------------------------------------------------
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.moverse = function () {
        console.log("El animal se mueve");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.ladrar = function () {
        console.log("El perro ladra");
    };
    return Perro;
}(Animal));
var miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();
console.log();
//-----------------------------------------------------------------------
var Padre = /** @class */ (function () {
    function Padre() {
    }
    Padre.prototype.saludar = function () {
        console.log("Hola");
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.saludar = function (nombre) {
        if (!!nombre) {
            console.log("Hola " + nombre);
        }
        else {
            _super.prototype.saludar.call(this);
        }
    };
    return Hijo;
}(Padre));
var hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");
console.log();
//-----------------------------------------------------------------------
var Definicion = /** @class */ (function () {
    function Definicion() {
        this.nombre = "definicion";
        console.log("Mi nombre es " + this.nombre);
    }
    return Definicion;
}());
var Implementacion = /** @class */ (function (_super) {
    __extends(Implementacion, _super);
    function Implementacion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Implementacion;
}(Definicion));
var d = new Implementacion();
//-----------------------------------------------------------------------
var Saludo2 = /** @class */ (function () {
    function Saludo2() {
    }
    Saludo2.prototype.saludar = function () {
        console.log("Saludar!");
    };
    return Saludo2;
}());
var inst = new Saludo2();
inst.saludar();
console.log();
//-----------------------------------------------------------------------
var Saludo3 = /** @class */ (function () {
    function Saludo3() {
    }
    Saludo3.prototype.getDestinatario = function () {
        return "amigos";
    };
    return Saludo3;
}());
var SaludoEspecial = /** @class */ (function (_super) {
    __extends(SaludoEspecial, _super);
    function SaludoEspecial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaludoEspecial.prototype.saludar = function () {
        console.log("Hola " + this.getDestinatario()); //accedemos al metodo protedted
    };
    return SaludoEspecial;
}(Saludo3));
var saludo = new SaludoEspecial();
saludo.saludar();
//saludo.getDestinatario(); error, no se tiene acceso de forma pública
//-----------------------------------------------------------------------
var Base = /** @class */ (function () {
    function Base() {
        this.m = 10;
    }
    return Base;
}());
var Derivada = /** @class */ (function (_super) {
    __extends(Derivada, _super);
    function Derivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 15;
        return _this;
    }
    return Derivada;
}(Base));
var i = new Derivada();
console.log(i.m);
console.log();
//-----------------------------------------------------------------------
var Base2 = /** @class */ (function () {
    function Base2() {
        this.x = 1;
    }
    return Base2;
}());
var Derivada1 = /** @class */ (function (_super) {
    __extends(Derivada1, _super);
    function Derivada1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 5;
        return _this;
    }
    return Derivada1;
}(Base2));
var Derivada2 = /** @class */ (function (_super) {
    __extends(Derivada2, _super);
    function Derivada2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada2.prototype.imprimirX = function (c1) {
        console.log(c1.x);
    };
    return Derivada2;
}(Base2));
//-----------------------------------------------------------------------
var Base3 = /** @class */ (function () {
    function Base3() {
    }
    return Base3;
}());
var Derivada3 = /** @class */ (function (_super) {
    __extends(Derivada3, _super);
    function Derivada3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada3.prototype.imprimirX = function () {
        // console.log(this.x); Esta linea genera un error
    };
    return Derivada3;
}(Base3));
var b = new Base3();
/*console.log(b.x); //Esta linea genera un error
console.log();*/
//-----------------------------------------------------------------------
var A = /** @class */ (function () {
    function A() {
        this.x = 10;
    }
    A.prototype.imprimirX = function (otra) {
        console.log(otra.x);
    };
    return A;
}());
var b2 = new A();
b2.imprimirX(new A());
console.log();
//-----------------------------------------------------------------------
var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase.imprimirX = function () {
        //para acceder a una propiedad estatica utilizamos this dentro de un metodo estatico
        console.log("El valor de X es: " + this.x);
    };
    MiClase.prototype.imprimirX = function () {
        //para acceder a una propiedad estatica usamos el nombre de la clase dentro de un metodo de una instancia
        console.log("El valor de X de una instancia es: " + MiClase.x);
    };
    MiClase.x = 10;
    return MiClase;
}());
//para acceder a un metodo lo hacemos directamente desde la clase
MiClase.imprimirX();
//para acceder a una propiedad estatica lo hacemos directamente desde la clase
console.log("El valor obtenido de X es: " + MiClase.x);
var miClase = new MiClase();
miClase.imprimirX();
console.log();
//-----------------------------------------------------------------------
var MiClase2 = /** @class */ (function () {
    function MiClase2() {
    }
    return MiClase2;
}());
//console.log(MiClase2.x); esta linea generará un error
//Property 'x' is private and only accessible within class 'MiClase'
//-----------------------------------------------------------------------
var Base4 = /** @class */ (function () {
    function Base4() {
    }
    Base4.saludar = function () {
        console.log("Hola Mundo");
    };
    return Base4;
}());
var Derivada4 = /** @class */ (function (_super) {
    __extends(Derivada4, _super);
    function Derivada4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derivada4;
}(Base4));
Derivada4.saludar();
console.log();
//-----------------------------------------------------------------------
/*class Base {
   static name = 'S!'; esta linea generará un error
   //static property name 'name' conflicts with built-in property 'Function.name' of constructor function 'Base'
}*/
//-----------------------------------------------------------------------
var Caja = /** @class */ (function () {
    function Caja(value) {
        this.contenido = value;
        console.log(this.contenido);
    }
    return Caja;
}());
var misJuguetes = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });
var miCajaDeJuguetes = new Caja(misJuguetes);
var miMaquillaje = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });
var miCajaDeMaquillaje = new Caja(miMaquillaje);
//-----------------------------------------------------------------------
var Caja2 = /** @class */ (function () {
    function Caja2() {
        this.contenido = "";
    }
    Caja2.prototype.set = function (valor) {
        this.contenido = valor;
        return this;
    };
    return Caja2;
}());
var miCaja3 = new Caja2();
var valorRetornado = miCaja3.set("Joyas");
console.log(miCaja3);
console.log(valorRetornado);
console.log();
//-----------------------------------------------------------------------
var Caja3 = /** @class */ (function () {
    function Caja3(contenido) {
        this.contenido = "";
        this.contenido = contenido;
    }
    Caja3.prototype.igualQue = function (otro) {
        return otro.contenido === this.contenido;
    };
    return Caja3;
}());
var caja1 = new Caja3("Joyas");
var caja2 = new Caja3("Joyas");
var caja3 = new Caja3("Maquillaje");
console.log(caja1.igualQue(caja2));
console.log(caja1.igualQue(caja3));
console.log();
//-----------------------------------------------------------------------
var Caja4 = /** @class */ (function () {
    function Caja4() {
        this.contenido = "";
        /*igualQue(otro: this){
            //return this.contenido === otraInstancia.contenido;
        }*/
    }
    return Caja4;
}());
var CajaDerivada = /** @class */ (function (_super) {
    __extends(CajaDerivada, _super);
    function CajaDerivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otroContenidoo = "";
        return _this;
    }
    return CajaDerivada;
}(Caja4));
var base = new Caja4();
var derivada = new CajaDerivada();
//derivada.igualQue(base); base no extiende de derivada, esto generará un error
//Argument of type 'Caja4' is not assignable to parameter of type 'CajaDerivada'
//-----------------------------------------------------------------------
var Video3 = /** @class */ (function () {
    function Video3(nombre, duracion, formato) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.formato = formato;
    }
    return Video3;
}());
var miVideo3 = new Video3("vacaciones", 60, "mp4");
console.log("Mi video de: " + miVideo3.nombre);
console.log("Tiene una duracion de: " + miVideo3.duracion + " segundos");
console.log("Y el formato es: " + miVideo3.formato);
console.log();
//-----------------------------------------------------------------------
var miClase2 = /** @class */ (function () {
    function class_1(v) {
        this.contenido = v;
    }
    return class_1;
}());
var miInstancia = new miClase2("Un video de 12 minutos");
console.log("El contenido del video es: " + miInstancia.contenido);
