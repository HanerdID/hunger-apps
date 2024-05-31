import FavoriteIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <main tabindex="0" id="mainContent" class="main-resto_container">
        <section class="content">
            <h2 tabindex="0" class="restaurants-page-title">
              Favorite
            </h2>
            <h2 class="restaurant-item__not__found"></h2>
            <div id="main-resto_list" class="list-resto"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteIdb.getAllRestaurant();
    const restaurantContainer = document.getElementById('main-resto_list');
    const empty = document.querySelector('.restaurant-item__not__found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <h3>Tidak ada restoran favorite</h3>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
