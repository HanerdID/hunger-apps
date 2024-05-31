import HungerSource from '../data/hungerdb-source';
import UrlParser from '../routes/url-parser';

const addReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputReviewName = document.getElementById('inputName');
  const inputReview = document.getElementById('inputReview');
  const reviewContainer = document.querySelector('.detail-review');

  const dataInput = {
    id: url.id,
    name: inputReviewName.value,
    review: inputReview.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <div class="detail-review-item">
      <div class="header-review">
        <p class="name-review">${dataInput.name}</p>
      </div>
      <div class="body-review">
        ${dataInput.review}
        <p class="date-review">${date}</p>
      </div>
    </div>
  `;

  await HungerSource.addReview(dataInput);
  reviewContainer.innerHTML += newReview;
  inputReviewName.value = '';
  inputReview.value = '';
};

export default addReview;
