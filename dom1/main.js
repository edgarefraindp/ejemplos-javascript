//var cajas = document.getElementsByTagName("div")
//cajas[0].textContent = "HolaMundo"
//cajas[1].innerHTML = '<b>Hola Javascript</b>'

var caja = document.getElementById('primera')

caja.textContent = 'primera caja'

//Esto no es recomendables
//document.write('<div class = "caja">Otra caja</div>')

//Paso 1->Crear elemento
var elementoNuevo = document.createElement("div")
//Paso 2->Crear contenido
var nodoContenido = document.createTextNode('nuevo elemento')
//Paso 3->Añadir contenido al elemento
elementoNuevo.appendChild(nodoContenido)
//Paso 4->Agregar atributos al elemento
elementoNuevo.setAttribute('class', 'caja colorCoral')
//paso 5->Agregar el nuevo elemento al Documento
//document.appendChild(elementoNuevo) //--> no se puede remplazar el elemento raiz
var contedor = document.getElementById("contedor")
//contenedor.appendChild(elementoNuevo)//Lo coloca al final
var primera = document.getElementById('segunda')
contenedor.insertBefore(elementoNuevo, primera)

//Elimina la caja con ID=Tercera
//var tercera = document.getElementById('tercera')
//contenedor.removeChild(tercera)
contenedor.removeChild(document.getElementById('tercera'))
