import createErrorMessage from '../../components/error-message';
import createLoader from '../../components/loader';
import FavoriteIdb from '../../data/favorite-idb';
import HungerSource from '../../data/hungerdb-source';
import UrlParser from '../../routes/url-parser';
import addReview from '../../utils/add-review';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div tabindex="0" class="main">
        <h2 tabindex="0" class="restaurants-page-title">Detail Restaurant</h2>
        <section id="restaurants-detail">
          ${createLoader()}
        </section>
        <div class="like" id="likeButtonContainer"></div>
      </div>

      <div class="form-review">
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label">Name</label>
            <input name="inputName" type="text" class="form-control" id="inputName" required>
          </div>
          <div class="mb-3">
            <label for="inputReview" class="form-label">Review</label>
            <textarea name="inputReview" class="form-control" id="inputReview" rows="3" required></textarea>
          </div>
          <button id="submit-review" type="submit" class="btn">Submit</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurants-detail');

    try {
      const restaurant = await HungerSource.restaurantDetail(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(
        restaurant.restaurant,
      );

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteIdb,
        restaurant: {
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          city: restaurant.restaurant.city,
          pictureId: restaurant.restaurant.pictureId,
          description: restaurant.restaurant.description,
          rating: restaurant.restaurant.rating,
        },
      });

      const submit = document.getElementById('submit-review');
      submit.addEventListener('click', (event) => {
        event.preventDefault();
        addReview();
      });
    } catch (error) {
      restaurantContainer.innerHTML = createErrorMessage(
        'Gagal memuat detail restoran',
      );
      console.error(error);
    }
  },
};

export default Detail;
