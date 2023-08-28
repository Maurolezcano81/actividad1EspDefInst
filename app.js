async function recorrerJson(archivo){
    return fetch(`./${archivo}.json`)
    .then(response => response.json())
    .then(resultados => {
        return resultados
    });
}

function mostrarInicio(){
    const elementoContenido = document.getElementById('contenido');
    if(elementoContenido){
        elementoContenido.style.display = 'none';
    }
    
    const elementoMain = document.getElementById('main');
    const elementoMainOpacity = document.createElement('div');
    elementoMainOpacity.setAttribute('class', 'main-opacity');
    elementoMainOpacity.setAttribute('id', 'biblioteca');

    recorrerJson('libros').then(data=>{
        results = data;
        for (libro in results){
            //DIV CONTENEDOR
            const elementoDivCard = document.createElement('div');
                elementoDivCard.setAttribute('class', 'card');
            // IMAGEN
            const elementoDivImg = document.createElement('div');
                elementoDivImg.setAttribute('class', 'card-img')
            const elementoImg = document.createElement('img');
                elementoImg.setAttribute('src', results[libro].rutaimagen);
        
            // DIV TEXTO
            const elementoDivTexto = document.createElement('div');
                elementoDivTexto.setAttribute('class', 'card-text');
            const elementoTitulo = document.createElement('h4');
                elementoTitulo.setAttribute('class', 'card-titulo');
                elementoTitulo.textContent = results[libro].nombre;
        
            const elementoAutor = document.createElement('p');
                elementoAutor.setAttribute('class', 'card-autor');
                elementoAutor.textContent = "Autor: " + results[libro].autor;
        
            // DIV BOTON
            const elementoDivBoton = document.createElement('div');
            const elementoBoton = document.createElement('button');
                elementoBoton.setAttribute('class', 'card-boton');
                elementoBoton.textContent = "Ver mas...";
        
            // APPENDS
            elementoDivTexto.appendChild(elementoTitulo);
            elementoDivTexto.appendChild(elementoAutor);
            elementoDivImg.appendChild(elementoImg);
            elementoDivBoton.appendChild(elementoBoton);
            elementoDivCard.appendChild(elementoDivImg);
            elementoDivCard.appendChild(elementoDivTexto);
            elementoDivCard.appendChild(elementoDivBoton)
        

            elementoMainOpacity.appendChild(elementoDivCard);
            elementoMain.appendChild(elementoMainOpacity);
        }
        const arrayBotones = document.querySelectorAll('.card-boton');
        arrayBotones.forEach((botonIndividual, indice) =>{
            botonIndividual.addEventListener('click', ()=>{
                const libroApretado = results[indice];
                mostrarContenido(libroApretado);
            })
        })
    })
}

function cambiarClase(valoracion){
    if(valoracion >= 1 && valoracion <= 2){
        return 'valoracionMala';
    } else if(valoracion >= 2 && valoracion <=3.7){
        return 'valoracionIntermedia';
    } else{
        return 'valoracionBuena';
    }
}

function mostrarAutor(){
    alert("No hice la parte de autores profe jeje")
}

function mostrarContenido(libro){
    const elementoMapa = document.getElementById('mapa');
    elementoMapa.innerHTML = `
    <a href="index.html" class="mapa-enlaces">Inicio</a>
    <span class="mapa-separadores">/</span>
    <a onclick="mostrarAutor()" class="mapa-enlaces">${libro.autor}</a>
    <span class="mapa-separadores">/</span>
    <a onclick="mostrarContenido()" class="mapa-enlaces">${libro.nombre}</a>
    `
    const elementoMain = document.getElementById('main');
    elementoMain.innerHTML = '';
    const librosDetalles = `
        <div class= "contenido">

            <div class="contenidoImagen">
            <img src="${libro.rutaimagen}" alt="${libro.nombre}">
            </div>

            <div class="contenidoTitulo">
                <h2>${libro.nombre}</h2>
            </div>

            <div class="contenidoExtra">
            <p>Autor: ${libro.autor}</p>
            <p>Fecha de Publicacion: ${libro.anio_publicado}</p>
            <p>Editorial</p>
            </div>

            <div class="contenidoSinopsis">
                <h3>Sinopsis                
                <p class="contenido__style">
                </p></h3>

                <p>${libro.sinopsis}</p>
            </div>
            

            <div class="contenidoBoton">
            <a href="index.html" class="contenidoBoton" id="volver">Volver</a>
            </div>

            <div class="contenidoValoracion ${cambiarClase(libro.valoracion)}">
            <p>Puntaje: </p>
            <p>${libro.valoracion}</p>
            </div>


        </div>
    `

    elementoMain.innerHTML = librosDetalles;

}

