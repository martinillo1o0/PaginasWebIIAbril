function mostrar(event) {
    event.preventDefault();
    const form = document.getElementById('formulario');

    let nombre = form['texto1'].value;
    let edad = form['texto2'].value;

    alert('Información enviada');
    console.log('Información enviada:');
    console.log('Nombre:', nombre);
    console.log('Edad:', edad);
}



function alerta(event) {
    event.preventDefault();
    alert('Información enviada');

}


function cambiar(elementoInput) {
    elementoInput.style.background = 'yellow'

}

function regresar(elementoInput) {
    elementoInput.style.background = 'white'
}