/* eslint-disable no-undef */
const assert = require('assert');

Feature('Adding and Seeing Restaurant Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('adding and seeing a restaurant`s review', async ({ I }) => {
  I.waitForElement('.restaurants-content', 5);
  I.seeElement('.restaurants-content');

  I.click(locate('.restaurants-content').first());

  I.waitForElement('.form-review form', 5);
  I.seeElement('.form-review form');

  const reviewText = 'test123';
  I.fillField('inputName', 'aa');
  I.fillField('inputReview', reviewText);
  I.click('#submit-review');

  I.waitForElement('.body-review', 5);
  const lastReview = locate('.body-review').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  const reviewTextWithoutDate = lastReviewText.split('\n')[0].trim();
  assert.strictEqual(reviewText, reviewTextWithoutDate);
});
