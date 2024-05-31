/* eslint-disable no-undef */
const assert = require('assert');

Feature('Search a Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('search a restaurant', async ({ I }) => {
  I.waitForElement('.restaurants-content', 5);
  I.seeElement('.restaurants-content');

  const searchQuery = 'kafe kita';
  I.fillField('#search-input', searchQuery);
  I.pressKey('Enter');

  I.waitForElement('.restaurants-content', 5);
  const firstRestaurant = locate('.restaurants-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  assert.ok(firstRestaurantName.toLowerCase().includes(searchQuery));
});
