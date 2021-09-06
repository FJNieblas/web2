//No tiene punto final ya que dispara una excepcion
function error(mensaje) {
    throw new Error(mensaje);
}
//No tiene punto final ya que dispara un error
function fallo() {
    return error("Reportar fallo");
}
//No finaliza ya que posee un loop infinito
function loopInfinito() {
    while (true) { }
}
//------------------------------------
