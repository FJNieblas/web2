function imprimirId(id: number |  string){
    console.log(`El id es ${id}`);
}

imprimirId(1);
imprimirId('abc');

function imprimirId2(id: number | string){
    if (typeof id === "string") {
        console.log(`El id es ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }
}

imprimirId2('este_es_mi_id');
imprimirId2(100.234234123);
//------------------------------------