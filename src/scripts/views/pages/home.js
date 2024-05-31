import HungerSource from '../../data/hungerdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import createLoader from '../../components/loader';
import createErrorMessage from '../../components/error-message';

const Home = {
  async render() {
    return `
      <main tabindex="0" id="mainContent" class="main-resto_container">
        <section class="content">
          <div class="main-resto_label">
            <h2 tabindex="0">Explore Restaurant</h2>
          </div>
          <div class="search-container">
            <input
              type="text"
              id="search-input"
              placeholder="Masukkan nama restoran..."
            />
          </div>
          <div id="main-resto_list" class="list-resto">
            ${createLoader()}
          </div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.list-resto');
    const searchInput = document.querySelector('#search-input');

    try {
      const allRestaurants = await HungerSource.restaurantList();

      const renderRestaurants = (restaurants) => {
        restaurantContainer.innerHTML = '';

        if (restaurants.length === 0) {
          restaurantContainer.innerHTML = createErrorMessage(
            'Restoran tidak ditemukan',
          );
          return;
        }

        restaurants.forEach((restaurant) => {
          restaurantContainer.innerHTML
            += createRestaurantItemTemplate(restaurant);
        });
      };

      const filterRestaurants = async () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
          const searchResult = await HungerSource.searchRestaurant(query);
          renderRestaurants(searchResult);
        } else {
          renderRestaurants(allRestaurants);
        }
      };

      searchInput.addEventListener('input', filterRestaurants);

      renderRestaurants(allRestaurants);
    } catch (error) {
      restaurantContainer.innerHTML = createErrorMessage(
        'Gagal memuat data restoran',
      );
      console.error(error);
    }
  },
};

export default Home;
