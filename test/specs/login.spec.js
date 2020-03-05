const put = require("../pages/login.page.js");
const expect = require('chai').expect;

describe('Login -- Brandon Gibbons', () => {
    beforeEach(() => {
        put.open();
    });

    it('should be able to login with the standard user', () => {
        put.loginWithStandardUser();
        expect(browser.getUrl()).to.include('/inventory.html');
    });
});