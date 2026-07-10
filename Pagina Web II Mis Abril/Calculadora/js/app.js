function sumar() {
    const formSuma = document.getElementById('formulario');

    let operador1 = formSuma['Operador1'];
    let operador2 = formSuma['Operador2'];

    let resultado = parseInt(operador1.value) + parseInt(operador2.value);

    if (isNaN(resultado)) {
        resultado = 'La operación no tiene números';
    }

    document.getElementById('resultadoSuma').innerHTML = `Resultado de suma es: ${resultado}`;
    console.log("Resultado de suma es:" +resultado);
}
//En base a la funcion anterior, hacemos el formulario para las demas funciones las cuales son las de resta, multiplicacion y division
function restar() {
    const formResta = document.getElementById('formulario');
//Creamos una constanre que almacele la lectura del ID del formulario
    let operador1 = formResta['Operador1'];
    let operador2 = formResta['Operador2'];
//Despues creamos 2 variables para que almacenen los operadores recibidos 
    let resultado = parseInt(operador1.value) - parseInt(operador2.value);
//En otra variable guardamos el parseo delos 2 operadores recibidos y hacemos la operacion corresponduentes 
    if (isNaN(resultado)) {
        resultado = 'La operación no tiene números';
    }
//Creamos un if el cual sobnre escribe el mensaje por default en caso de no recibir ningun dato
    document.getElementById('resultadoResta').innerHTML = `Resultado de resta es: ${resultado}`;
//Reflejamos el resultado.
    console.log("Resultado de resta es:" +resultado);
}
//Lo mismo aca y se repite a las demas funciones.
function multiplicar() {
    const formMulti = document.getElementById('formulario');

    let operador1 = formMulti['Operador1'];
    let operador2 = formMulti['Operador2'];

    let resultado = parseInt(operador1.value) * parseInt(operador2.value);

    if (isNaN(resultado)) {
        resultado = 'La operación no tiene números';
    }

    document.getElementById('resultadoMulti').innerHTML = `Resultado de multiplicacion es: ${resultado}`;
        console.log("Resultado de Multiplicacion es:" +resultado);
}

//Lo mismo para aca
function dividir() {
    const formDiv = document.getElementById('formulario');

    let operador1 = formDiv['Operador1'];
    let operador2 = formDiv['Operador2'];

    let resultado = parseInt(operador1.value) / parseInt(operador2.value);

    if (isNaN(resultado)) {
        resultado = 'La operación no tiene números';
    }
   

    document.getElementById('resultadoDiv').innerHTML = `Resultado de division es: ${resultado}`;


        console.log("Resultado de Division es:" +resultado);
}