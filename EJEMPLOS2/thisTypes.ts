class Caja {
    contenido = "";
    set(valor: string){
        this.contenido = valor;
        return this;
    }
}

const miCaja: Caja = new Caja();
const valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);