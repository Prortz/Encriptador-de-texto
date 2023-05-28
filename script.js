function encriptar(){

    let frase = document.getElementById("textoEncriptado").value.toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    //i: toma letras mayusculas y minusculas; m: toma en cuenta las lineas; g: toma toda la oracion

    let Encriptado = frase.replace(/e/img, "enter")
                                .replace(/o/img,"ober")
                                .replace(/i/img,"imes")
                                .replace(/a/img,"ai")
                                .replace(/u/img,"ufat");
    
    if (frase.length != 0){
        document.getElementById("textoEncriptado").value = Encriptado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/encriptado.jpg";
  } else {
        muñeco.src = "./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
  }                           

   
}

function desencriptar(){

    let frase = document.getElementById("textoEncriptado").value.toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    //i: toma letras mayusculas y minusculas; m: toma en cuenta las lineas; g: toma toda la oracion

    let Encriptado = frase.replace(/enter/img, "e")
                                .replace(/ober/img,"o")
                                .replace(/imes/img,"i")
                                .replace(/ai/img,"a")
                                .replace(/ufat/img,"u");

   if (frase.length != 0){
        document.getElementById("textoEncriptado").value = Encriptado;
        tituloMensaje.textContent = "Texto Desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/desencriptado.jpg";
  } else {
        muñeco.src = "./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
  }        
    
}

function copiar(){
    
    textoEncriptado.select();
    navigator.clipboard.writeText(textoEncriptado.value)
    textoEncriptado.value = "";
    swal("Ooops!", "Texto Copiado", "warning");
    tituloMensaje.textContent = "Texto Copiado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./imagenes/copiado.jpg";

}