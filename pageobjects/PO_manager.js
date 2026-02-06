const loginPage = require('./loginPage');
const dashboard = require('./dashboardPage');
const cartPage = require('./cartPage');
const placeOrderPage = require('./placeOrderPage');

class POManager{
    constructor(page){
        this.page = page;
    }

    getLoginPage(){
        return new loginPage(this.page);
    }
    getDashboard(){
        return new dashboard(this.page);
    }
    getCartPage(){
        return new cartPage(this.page);
    }
    getPlaceOrderPage(){
        return new placeOrderPage(this.page);
    }
    async goToCart(){
        await this.page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}
module.exports = POManager;