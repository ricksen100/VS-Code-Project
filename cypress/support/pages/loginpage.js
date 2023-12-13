class LoginPage
{
    get LoginPageElements()
    {
        return require('../locators/loginlocators');
    }
    launchurl()
    {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/")
    }
    entercredentials(username,password)
    {
        cy.xpath(this.LoginPageElements.username).type(username)
        cy.xpath(this.LoginPageElements.password).type(password)
        cy.xpath(this.LoginPageElements.loginbutton).click()
    }
    signoff()
    {
        cy.xpath(this.LoginPageElements.option).click()
        cy.xpath(this.LoginPageElements.signoff).click()
    }
}
module.exports = LoginPage;