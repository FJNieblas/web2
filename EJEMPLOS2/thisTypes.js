var Caja = /** @class */ (function () {
    function Caja() {
        this.contenido = "";
    }
    Caja.prototype.set = function (valor) {
        this.contenido = valor;
        return this;
    };
    return Caja;
}());
var miCaja = new Caja();
var valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);
