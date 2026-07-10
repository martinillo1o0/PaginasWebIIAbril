// Importa el pipe UpperCasePipe para transformar texto a mayúsculas en la plantilla.
import { UpperCasePipe } from '@angular/common';

// Importa el decorador Component y la función signal de Angular.
import { Component, signal } from '@angular/core';

// Decorador que configura el componente.
@Component({
  // Nombre de la etiqueta HTML con la que se utilizará este componente.
  selector: 'app-my-profile',

  // Indica que el componente es Standalone.
  standalone: true,

  // Pipes que estarán disponibles dentro de la plantilla HTML.
  imports: [UpperCasePipe],

  // Archivo HTML asociado al componente.
  templateUrl: './my-profile.html',

  // Archivo CSS asociado al componente.
  styleUrl: './my-profile.css',
})

// Clase que contiene la lógica del componente.
export class MyProfile {

  // Signal que almacena el nombre del usuario.
  name = signal('Martin Isaias Perez Zarate');

  // Signal que almacena la edad del usuario.
  age = signal('24');

  // Signal que almacena los gustos del usuario.
  likes = signal('El helado, las hamburguesos y los chetos');

  // Signal que almacena el deporte favorito del usuario.
  favoriteSport = signal('Basquetball y football');

  // Método que modifica parte de la información del perfil.
  changeInformation() {

    // Actualiza el nombre.
    this.name.set('Martin Isaias Perez Zarate');

    // Actualiza los gustos del usuario.
    this.likes.set('Tambien los camarones empanizados y las quesadilas con guisados');

    // Actualiza el deporte favorito.
    this.favoriteSport.set('Atletismo');
  }

  // Método que restaura la información original del perfil.
  getBackInformation() {

    // Restablece el nombre original.
    this.name.set('Martin Isaias Perez Zarate');

    // Restablece la edad original.
    this.age.set('24');

    // Restablece los gustos originales.
    this.likes.set('El helado, las hamburguesos y los chetos');

    // Restablece el deporte favorito original.
    this.favoriteSport.set('Basquetball y football');
  }
}
