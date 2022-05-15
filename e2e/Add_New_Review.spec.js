Feature('Add New Review');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('add new review to first restaurant', ({ I }) => {
    I.wait(2);
    I.seeElement('.card_item_title a');
    I.click(locate('.card_item_title a').first());
    I.seeElement('.detail_review_item');
    I.fillField('name', 'izdiharalwin');
    I.fillField('content', 'Testing e2e');
    I.click('.submit');
    I.see('izdiharalwin', '.review__name');
    I.see('Testing e2e', '.review__body');
});
