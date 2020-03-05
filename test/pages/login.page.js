class LoginPage {
    static get usernameElem() {
        return $('#user-name');
    }

    static get passwordElem() {
        return $('#password');
    }

    static get loginButtonElem() {
        return $('input[type=submit]');
    }

    static get errorMessageElem() {
        return $('h3[data-test=error');
    }

    static open() {
        browser.url('/');
    }

    static isErrorMessagePresent() {
        return LoginPage.errorMessageElem.isDisplayed();
    }

    static loginWithStandardUser() {
        LoginPage.usernameElem.addValue("standard_user");
        LoginPage.passwordElem.addValue("secret_sauce");
        LoginPage.loginButtonElem.click();
    }
}

module.exports = new LoginPage();