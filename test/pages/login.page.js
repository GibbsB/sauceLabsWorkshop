class LoginPage {
    get usernameElem() {
        return $('#user-name');
    }

    get passwordElem() {
        return $('#password');
    }

    get loginButtonElem() {
        return $('input[type=submit]');
    }

    get errorMessageElem() {
        return $('h3[data-test=error]');
    }

    open() {
        browser.url('/');
    }

    isErrorMessagePresent() {
        return LoginPage.errorMessageElem.isDisplayed();
    }

    loginWithStandardUser() {
        LoginPage.usernameElem.addValue("standard_user");
        LoginPage.passwordElem.addValue("secret_sauce");
        LoginPage.loginButtonElem.click();
    }
}

module.exports = new LoginPage();