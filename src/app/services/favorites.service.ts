import { Injectable, signal } from '@angular/core';
import { General } from '../interfaces/general.interface';


@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  readonly movies = signal<General[]>([
    { tittle: 'Hopper, operación castor', myScore: 8 },
    { tittle: 'V de venganza', myScore: 9 },
    { tittle: 'La era de hielo 1', myScore: 9 },
    { tittle: 'El rey león 1', myScore: 9 },
    { tittle: 'El conjuro 1', myScore: 7 },
    { tittle: 'Mama', myScore: 7 },
    { tittle: 'Terminator 2', myScore: 9 },
    { tittle: 'Depredador 1', myScore: 9 },
    { tittle: 'Hobbs y Shaw', myScore: 8 },
    { tittle: 'Donde están las rubias', myScore: 9 },
    { tittle: 'Coraline y la puerta secreta', myScore: 10 },
  ]);

  readonly series = signal<General[]>([
    { tittle: 'Death Note', myScore: 8 },
    { tittle: 'Los elegidos', myScore: 8 },
    { tittle: 'Jujutsu Kaisen', myScore: 9 },
    { tittle: 'Que madre tan padre', myScore: 6 },
    { tittle: 'Danny Phantom', myScore: 9 },
    { tittle: 'Dragon Ball Z', myScore: 9 },
    { tittle: 'Stranger Things', myScore: 8 },
    { tittle: 'El juego del calamardo 1', myScore: 8 },
    { tittle: 'Hasta que el dinero nos separe', myScore: 6 },
    { tittle: 'En familia con Chabelo', myScore: 8 },
  ]);

  readonly songs = signal<General[]>([
    { tittle: 'Algo de mí', myScore: 9, singer: 'Camilo Sesto' },
    { tittle: "It's My Life", myScore: 10, singer: 'Bon Jovi' },
    { tittle: 'Tu llegaste cuando menos te esperaba', myScore: 10, singer: 'Leo Dan' },
    { tittle: 'I Like the Way You Kiss Me', myScore: 10, singer: 'Artemisa' },
    { tittle: 'Hijo de la luna', myScore: 10, singer: 'Mecano' },
    { tittle: 'Chop Suey!', myScore: 10, singer: 'System of a Down' },
    { tittle: 'The Beautiful People', myScore: 9, singer: 'Marilyn Manson' },
    { tittle: 'Como quien pierde una estrella', myScore: 10, singer: 'Alejandro Fernández' },
    { tittle: 'Quiero dormir cansado', myScore: 10, singer: 'Emanuel' },
    { tittle: 'Labios rotos', myScore: 10, singer: 'Zoé' },
  ]);
}
