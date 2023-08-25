fetch('./libros.json')
.then(response => response.json())
.then(results => {
    const elementoMain = document.getElementById('main');
    const elementoMainOpacity = document.createElement('div');
    elementoMainOpacity.setAttribute('class', 'main-opacity');
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
})
