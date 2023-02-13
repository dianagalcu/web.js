// //seleccion por clase que puede ser especifico o general
// // por id es especifico
// // por etiqueta sera general

// //get element se utiliza por nombre de etiqueta, nombre de clase y id

// console.log(document.getElementsByTagName("p"))
// console.log(document.getElementsByClassName("parrafo"))
// console.log(document.getElementById("parrafo"))
// //estas 3 son las mas utilizadas

// document.getElementsByName("name")
// document.getElementsByTagNameNS("p")// este ya no se utiliza para js si mlo encuentro cambiarla por el getElementsByTagName


// //ecms + 6 script estandariza el funcionameinto de js, query selector

// console.log(document.querySelector("p"))//por nombre de etiqueta le pongo en parentesis el nombre de la etiqueta
// console.log(document.querySelector(".parrafo")) //clase
// console.log(document.querySelector("#parrafo"))//id
// console,log(document.querySelectorAll("#parrafo"))// aqui puedo trabajar todos los id que requiera o lo que necesite

// const parrafo = document.querySelector(".parrafo").textContent ="hola mundo" //esta forma tiene prioridad ante las de abajo
// console.log(parrafo)
// //si quiero que se muestren todos los de elemento parrafo debo hacerlo con el querySelectorAll
// parrafo.textContent = "nuevo parrafo"
// parrafo.innerHTML = "nuevo parrafo iner"// estas 2 bajo cascada 

// const parrafo = document.querySelector(".parrafo")
// let nombre = prompt("Ingrese un nombre")
// parrafo.textContent = nombre

// const enlace = document.querySelector("a")
// enlace.textContent = "nuevo enlace"
// enlace.href = "https://www.google.com"
// enlace.target = "_blanck"

// const nombre = document.querySelector("#nombre")
// console.log(nombre)
// nombre.value = "Diana Alvarez"
// nombre.type = "color"
// nombre.type = "submit"
// para texto solo con value de resto con type




