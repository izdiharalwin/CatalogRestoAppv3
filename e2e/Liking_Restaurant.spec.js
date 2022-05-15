const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('.empty__container');
    I.see("You haven't added a favorite restaurant yet", '.empty__message');
});

Scenario('like and unlike for first restaurant', async ({ I }) => {
    I.see("You haven't added a favorite restaurant yet", '.empty__message');
    I.amOnPage('/');
    // like first restaurant
    I.wait(2);
    I.seeElement('.card_item_title a');
    I.click(locate('.card_item_title a').first());
    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const firstRestaurantTitle = await I.grabTextFrom(locate('.card_item_title a').first());
    const likedRestaurantTitle = await I.grabTextFrom('.card_item_title a');
    assert.strictEqual(likedRestaurantTitle, firstRestaurantTitle);
    // unlike first restaurant
    I.wait(2);
    I.click(locate('.card_item_title a').first());
    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('.empty__container');
    I.see("You haven't added a favorite restaurant yet", '.empty__message');
});
