/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantsContract';
import FavoriteIdb from '../src/scripts/data/favorite-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteIdb.getAllRestaurant()).forEach(
      async (restaurant) => {
        await FavoriteIdb.deleteRestaurant(restaurant.id);
      },
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteIdb);
});
