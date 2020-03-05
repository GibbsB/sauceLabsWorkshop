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

    it('should throw error to login with an invalid user', function () {
        put.loginWithBadUser();
        expect(put.isErrorMessagePresent()).to.equal(true);
    });

    it('should throw error to login with an invalid password', function () {
        put.loginWithBadPassword();
        expect(put.isErrorMessagePresent()).to.equal(true);
    });
});