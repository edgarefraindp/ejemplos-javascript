//Evento tradicional
//elemento.onEvento = nombreFuncion
//document.getElementById('enlace').onEvento = function(){ acciones de evento

//Escuchador nivel2
//elemento.addEventListener('evento', nombreFuncion)
//document.getElementById('enlace').addEventListener('evento', function(){acciones fr evento})

var numeros =  document.getElementsByClassName("numero")
function ClickNumero() 
{
    console.log("ña")
}
numeros.forEach(function(elemento)
{
    elemento.addEventListener('onClick', ClickNumero)
    console.log(elemento)
})

