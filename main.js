function saludar(nombre) {
    return "Hola , " + nombre;
}
console.log(saludar("Geovany"));
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
//Pedro.edad++;
console.log('Luis edad: ' + Luis.edad);
console.log('Pedro edad: ' + Pedro.edad);
