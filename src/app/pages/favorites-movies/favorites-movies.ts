// Importa el decorador Component y la función inject desde Angular.
import { Component, inject } from '@angular/core';

// Importa el componente reutilizable que mostrará cada elemento favorito.
import { FavoriteItemComponent } from '../../components/favorite-item/favorite-item';

// Importa el servicio que proporciona la información de los favoritos.
import { FavoritesService } from '../../services/favorites.service';

// Decorador que configura el componente.
@Component({
  // Nombre de la etiqueta HTML con la que se utilizará este componente.
  selector: 'app-favorites-movies',

  // Indica que es un componente Standalone.
  standalone: true,

  // Componentes que este componente necesita para funcionar.
  imports: [FavoriteItemComponent],

  // Archivo HTML asociado al componente.
  templateUrl: './favorites-movies.html',

  // Archivo CSS asociado al componente.
  styleUrl: './favorites-movies.css',
})

// Clase que contiene la lógica del componente.
export class FavoritesMovies {

  // Inyecta el servicio de favoritos para acceder a los datos.
  private favoritesService = inject(FavoritesService);

  // Obtiene la lista de películas favoritas desde el servicio.
  favoritesMovies = this.favoritesService.movies;

  // Método que se ejecuta cuando una película es marcada como favorita.
  // Recibe el objeto de la película enviado por el componente hijo.
  onFavorite(item: { tittle: string; myScore: number; singer?: string }) {

    // Muestra en la consola el título de la película seleccionada.
    console.log('Película marcada', item.tittle);
  }
}
