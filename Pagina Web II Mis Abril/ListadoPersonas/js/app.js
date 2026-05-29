const personas = [
    new Persona('Juan', 'Pérez'),
    new Persona('Karla', 'Lara')
];
//Se creo un objeto llamado persona el cual por defecto  mostrara a 2 personas.

function mostrarPersonas(){
    console.log('Mostrar personas');
    let text = '';
    for(let persona of personas){
        console.log(persona);
        text += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = text;
}

//La funcion de arriba sirve para mostrar las personas que agreguemos con el boton y las que vienen por default
//En el objeto personas. Este se ve en el recuadro blanco.

function agregarPersona(){

const forms = document.forms['formulario'];
const nombre = forms['nombre'];
const apellido = forms['apellido'];

if (nombre.value != '' && apellido.value != ''){
const persona = new Persona(nombre.value, apellido.value);
console.log(persona);
personas.push(persona);
mostrarPersonas();
}else{
    alert('No puedes ingresar datos vacios');
}

}
/* 
Essta ultima funcion de agregarPerdsona 
lo que hace es agregar en el recuadro blanco las personas mediante un formuilario y boton.
A su vez tiene una condicion que impide subir cosas en blanco.
*/