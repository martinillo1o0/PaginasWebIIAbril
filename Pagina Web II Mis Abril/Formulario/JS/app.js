
//Se crea lafuncion encargada de mostrar en los los console.log mediante los parametros del evento 
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


//Se crea lafalerta la cual nbos indica que se subio la informacion
function alerta(event) {
    event.preventDefault();
    alert('Información enviada');

}

//Se crea la funcion que se encarga de cambiar de color segun si mantienes presionado o no la cassilla del formulario
function cambiar(elementoInput) {
    elementoInput.style.background = 'yellow'

}

function regresar(elementoInput) {
    elementoInput.style.background = 'white'
}