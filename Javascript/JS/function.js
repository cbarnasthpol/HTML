/**

document.getElementById('boton').onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById('demo').innerHTML ="Estamos probando nuestro primer evento en JS";
}



document.addEventListener('click',function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById('demo').innerHTML ="Estamos probando nuestro primer evento en JS";
});

*/

document.getElementById('boton').addEventListener('click',function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById('demo').innerHTML ="Estamos probando nuestro primer evento en JS";
});


document.getElementById('boton_color').addEventListener('click',function(){
    console.log("cambio color de fondo");
    var colorfondo = Math.floor(Math.random()*(16777217))
    console.log (colorfondo);
    var Hexa = colorfondo.toString(16);
    console.log ("#"+Hexa);
    document.body.style.backgroundColor="#"+Hexa;
});