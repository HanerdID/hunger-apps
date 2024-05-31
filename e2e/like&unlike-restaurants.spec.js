/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking and Unliking a Restaurant');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#main-resto_list');
  I.see(
    'Tidak ada restoran favorite',
    '.restaurant-item__not__found',
  );
});

Scenario('like a restaurant', async ({ I }) => {
  I.see(
    'Tidak ada restoran favorite',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/#');

  I.waitForElement('.restaurants-name', 5);
  I.seeElement('.restaurants-name');

  const firstRestaurant = locate('.restaurants-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.waitForElement('.restaurants-item', 5);
  I.seeElement('.restaurants-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurants-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.restaurants-name');
});

Scenario('unlike a restaurants', async ({ I }) => {
  I.see(
    'Tidak ada restoran favorite',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/#');

  I.waitForElement('.restaurants-name', 5);
  I.seeElement('.restaurants-name');

  const firstRestaurant = locate('.restaurants-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.waitForElement('.restaurants-item', 5);
  I.seeElement('.restaurants-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurants-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.restaurants-name');

  const firstRestaurantLiked = locate('.restaurants-name').first();
  I.click(firstRestaurantLiked);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.waitForElement('.restaurant-item__not__found', 5);
  I.see(
    'Tidak ada restoran favorite',
    '.restaurant-item__not__found',
  );
});
