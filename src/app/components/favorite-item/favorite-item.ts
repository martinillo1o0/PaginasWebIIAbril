import { Component, EventEmitter, Input, Output } from '@angular/core';
import { General } from '../../interfaces/general.interface';

// Decorador que define la configuración del componente.
@Component({
  // Nombre de la etiqueta HTML con la que se utilizará este componente.
  selector: 'app-favorite-item',

  // Indica que es un componente independiente (Standalone Component),
  // por lo que no necesita declararse en un NgModule.
  standalone: true,

  // Archivo que contiene la plantilla HTML del componente.
  templateUrl: './favorite-item.html',

  // Archivo que contiene los estilos CSS del componente.
  styleUrl: './favorite-item.css',
})

// Clase que define la lógica del componente.
export class FavoriteItemComponent {

  // Recibe desde el componente padre el objeto que contiene
  // la información del elemento favorito.
  @Input() item!: General;

  // Recibe un valor booleano que indica si debe mostrarse
  // el nombre del cantante. Por defecto es false.
  @Input() showSinger = false;

  // Evento que envía al componente padre el elemento seleccionado
  // cuando el usuario realiza la acción correspondiente.
  @Output() toggleFavorite = new EventEmitter<General>();
}
