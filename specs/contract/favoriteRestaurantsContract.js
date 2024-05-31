/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
  });

  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([]);
  });

  it('can return all of the Restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([
      { id: 1 },
    ]);
  });

  it('should remove favorite Restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    await favoriteRestaurant.deleteRestaurant(2);

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([
      { id: 1 },
    ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    await favoriteRestaurant.deleteRestaurant(3);

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
