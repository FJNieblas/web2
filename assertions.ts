

let algunValor: unknown = "Esto es un string";
let longitudDelString: number = (algunValor as string).length;

let algunValor2: unknown = "Este es un string";
let longitudDelString2: number = (<string>algunValor2).length;
//------------------------------------