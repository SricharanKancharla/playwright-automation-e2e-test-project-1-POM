const {test,expect} = require("@playwright/test");
const POManager = require("../pageobjects/PO_manager");
const dataSet = require("../test-data/Data.json");

test("Adding Product to cart", async ({page})=>
{
    const credentials = dataSet.login[0]

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(credentials.mail,credentials.password);

    const dashboard = poManager.getDashboard();
    await dashboard.addToCart(dataSet.productName);
    await expect(page.getByText(dataSet.addedtocart)).toBeVisible();
    await page.getByText(dataSet.addedtocart).screenshot({path:"./screenshots/addToCartTest/Product Added Alert.png"})

});