//No tiene punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}

//No tiene punto final ya que dispara un error
function fallo(): never {
    return error("Reportar fallo");
}

//No finaliza ya que posee un loop infinito
function loopInfinito(): never {
    while (true){}
}

//------------------------------------