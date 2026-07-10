import { Component, inject } from '@angular/core';
import { FavoriteItemComponent } from '../../components/favorite-item/favorite-item';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites-songs',
  standalone: true,
  imports: [FavoriteItemComponent],
  templateUrl: './favorites-songs.html',
  styleUrl: './favorites-songs.css',
})
export class FavoritesSongs {
  private favoritesService = inject(FavoritesService);
  favoritesSongs = this.favoritesService.songs;

  onFavorite(item: { tittle: string; myScore: number; singer?: string }) {
    console.log('Canción marcada', item.tittle);
  }
}
