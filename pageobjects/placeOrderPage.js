const {expect} = require("@playwright/test");

class placeOrderPage{
    constructor(page){
        this.page = page;
        this.cvv = page.getByRole('textbox').nth(1);
        this.expiryYear = page.getByRole('combobox').nth(1);
        this.name = page.getByRole('textbox').nth(2);
        this.coupon = page.getByRole('textbox').nth(3);
        this.couponButton = page.getByRole('button',{name: "Apply Coupon"});
        this.couponalert = page.getByText("Coupon Applied");
        this.country = page.getByRole('textbox').nth(5);
        this.placeOrderButton = page.getByText("PLACE ORDER");
    }

    async fillPersonalinfo(cvv,expiryYear,name){
        await this.cvv.fill(cvv);
        await this.expiryYear.selectOption(expiryYear);
        await this.name.fill(name);
    }

    async applyCoupon(coupon){
        await this.coupon.fill(coupon);
        await this.couponButton.click();
        await expect(this.couponalert).toBeVisible();
        await this.couponalert.screenshot({path:"./screenshots/placingOrderTest/couponapplied.png"});

    }

    async fillShippinginfo(fillcountry,country){
        await this.country.pressSequentially(fillcountry,{delay:150});
        await this.page.getByText(country,{exact: true}).click();
    }

    async placeOrder(){
        await this.placeOrderButton.click();
    }

}
module.exports = placeOrderPage;