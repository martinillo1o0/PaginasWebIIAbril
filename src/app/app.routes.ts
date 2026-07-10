import { Routes } from '@angular/router';
import { MyProfile } from './pages/my-profile/my-profile';
import { FavoritesSongs } from './pages/favorites-songs/favorites-songs';
import { FavoritesSeries } from './pages/favorites-series/favorites-series';
import { FavoritesMovies } from './pages/favorites-movies/favorites-movies';

export const routes: Routes = [
 {
    path: 'perfil',
    component: MyProfile
  },

  {
    path: 'favCancion',
    component: FavoritesSongs
  },

  {
    path: 'favserie',
    component: FavoritesSeries

  },
   {
    path: 'favPeli',
    component: FavoritesMovies

  },

  {
    path: '**',
    redirectTo: ''

  }


];
