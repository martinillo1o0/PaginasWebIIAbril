import { Component, inject } from '@angular/core';
import { FavoriteItemComponent } from '../../components/favorite-item/favorite-item';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites-series',
  standalone: true,
  imports: [FavoriteItemComponent],
  templateUrl: './favorites-series.html',
  styleUrl: './favorites-series.css',
})
export class FavoritesSeries {
  private favoritesService = inject(FavoritesService);
  favoritesSeries = this.favoritesService.series;

  onFavorite(item: { tittle: string; myScore: number; singer?: string }) {
    console.log('Serie marcada', item.tittle);
  }
}
