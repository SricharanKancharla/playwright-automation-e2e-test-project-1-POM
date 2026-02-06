const {test,expect} = require("@playwright/test");
const POManager = require("../pageobjects/PO_manager");
const dataSet = require("../test-data/Data.json");

test("Ckeckout from cart", async ({page})=>
{
    const credentials = dataSet.login[0]

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(credentials.mail,credentials.password);

    const dashboard = poManager.getDashboard();
    await dashboard.addToCart(dataSet.productName);

    await poManager.goToCart();
    await expect(page.getByText(dataSet.productName)).toBeVisible();

    const cartPage = poManager.getCartPage();
    await cartPage.checkOut();

});