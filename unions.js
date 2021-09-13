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
