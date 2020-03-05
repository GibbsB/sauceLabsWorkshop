const put = require('../pages/login.page.js');

describe('login -- Brandon Gibbons', function () {
    beforeEach(() => {
        browser.url('/');
    });

    it('should be able to login with the standard user', function () {
        put.loginWithStandardUser();
        expect(browser.getUrl()).to.include('/inventory.html');
    });
});