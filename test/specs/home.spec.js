const assert = require('assert');

describe('Sauce Demo Home Page -- BrandonGibbons', () => {
    it('should have the right title', () => {
        browser.url('https://www.saucedemo.com');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Swag Labs');
    });
});