var marcasDeAutos;
(function (marcasDeAutos) {
    marcasDeAutos[marcasDeAutos["Toyota"] = 100] = "Toyota";
    marcasDeAutos[marcasDeAutos["Chevrolet"] = 101] = "Chevrolet";
    marcasDeAutos[marcasDeAutos["Ford"] = 102] = "Ford";
})(marcasDeAutos || (marcasDeAutos = {}));
var tacoma = marcasDeAutos.Toyota;
console.log(tacoma);
console.log(marcasDeAutos[0]);
