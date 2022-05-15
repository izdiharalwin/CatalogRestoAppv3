import { itActsAsFavoriteRestoModel } from './contract/favoriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestoIdb.getAllResto()).forEach(async (resto) => {
            await FavoriteRestoIdb.deleteResto(resto.id);
        });
    });

    itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
