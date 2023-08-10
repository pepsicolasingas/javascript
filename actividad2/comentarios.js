console.log("");

function enviar()
{
var nombre = document.getElementById("nombre").value;
alert("Hola " + nombre + " :)");
}

function agregarComentario() {
    var comentarioInput = document.getElementById("comentario").value;
    if (comentarioInput === "") {
    return;
    }
    var contenedorComentarios = document.getElementById("contenedor-comentarios");
    var nuevoComentario = document.createElement("div");
    nuevoComentario.innerHTML = comentarioInput;
    nuevoComentario.classList.add("comentario");
    contenedorComentarios.appendChild(nuevoComentario);
    document.getElementById("comentario").value = "";
    }

    function cambiarContenido()
{
var elemento = document.getElementById("boton-compra1");
elemento.innerHTML = "¡Producto agregado!";
}

{
    var elemento = document.getElementById("boton-compra2");
    elemento.innerHTML = "¡Producto agregado!";
    }z

    {
        var elemento = document.getElementById("boton-compra3");
        elemento.innerHTML = "¡Producto agregado!";
        }