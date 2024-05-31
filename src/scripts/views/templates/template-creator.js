import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<article tabindex="0" class="restaurants-item">
  <a href="/#/detail/${restaurant.id}">
    <div class="restaurants-content">
    <img class="restaurants-image lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId
}" alt="Gambar ${restaurant.name}" tabindex="0"/>
      <p tabindex="0" class="restaurants-city" alt="kota restoran">${
  restaurant.city
}
      </p>
      <span class="restaurants-rating" 
        aria-label="rating resto ${restaurant.rating}">Rating: &star; ${
  restaurant.rating
}</span>
      <p tabindex="0" class="restaurants-name" alt="nama restoran">${
  restaurant.name
}</p>
      <p class="restaurants-description" alt="deskripsi restoran">${
  restaurant.description
}</p>
    </div>
  </a>
</article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
  <div tabindex="0" class="container-info">
    <div class="img-container">
    <img class="restaurants-image-container lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId
}" alt="Gambar ${restaurant.name}" tabindex="0"/>
    </div>
    <ul class="detail-info">
      <li class="resto-name">
        <i title="restaurant"></i>
        <p class="detail-name-address-rating">${restaurant.name}</p>
      </li>
    
      <li class="resto-address">
      <i class="material-icons" style="font-size:16px">location_on</i>
        <p class="detail-name-address-rating">${restaurant.address}, ${
  restaurant.city
}</p>
      </li>
    
      <li class="resto-rating">
        <p class="detail-name-address-rating">Rating: &star; ${
  restaurant.rating
}</p>
      </li>
      <h4 style="color: black"> Description: </h4>
      <li><p class="detail-desc">${restaurant.description}</p></li>
    
      <li class="resto-category">${restaurant.categories
    .map(
      (category) => `
            <span class="category">${category.name}</span>
          `,
    )
    .join('')}
      </li>
    </ul>
  </div>
        
      <h2 tabindex="0" id="restaurants-detail-subtitle"><span>List Menu</span></h2>
        <div class="restaurant-detail__menu-list">
          <div class="foods">
          <h3>Food</h3>
          </hr>
            <ul class="restaurant-detail__foods">
              ${restaurant.menus.foods
    .map(
      (food) => `
              <li>${food.name}</li>`,
    )
    .join('')}
            </ul>
          </div>
          <div class="drinks">
          <h3>Drink</h3>
          </hr>
            <ul class="restaurant-detail__drinks">
              ${restaurant.menus.drinks
    .map(
      (drink) => `
              <li>${drink.name}</li>`,
    )
    .join('')}
            </ul>
          </div>
        </div>
      <h2 tabindex="0" id="restaurants-detail-subtitle"><span>Reviews</span></h2>
        <div tabindex="0" class="detail-review">
          ${restaurant.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="header-review">
              <p class="name-review">${review.name}</p>
              </div>
              
            <div class="body-review">
              ${review.review}
            </div>
            <p class="date-review">${review.date}</p>
          </div>
          `,
    )
    .join('')}
        </div>
</div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      class="empty"
    >
      <path d="M0 0H24V24H0z" fill="none"></path>
      <path
        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      class="filled"
    >
      <path fill="none" d="M0 0H24V24H0z"></path>
      <path
        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
      ></path>
    </svg>
    Like
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like liked">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      class="empty"
      style="opacity: 0;"
    >
      <path d="M0 0H24V24H0z" fill="none"></path>
      <path
        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      class="filled"
      style="opacity: 1; fill: red;"
    >
      <path fill="none" d="M0 0H24V24H0z"></path>
      <path
        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
      ></path>
    </svg>
    Unlike
  </button>
`;

export {
  createLikeButtonTemplate,
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createUnlikeButtonTemplate,
};
