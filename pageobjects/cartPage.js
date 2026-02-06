class cartPage{
    constructor(page){
        this.page = page;
    }

    async checkOut(){
        await this.page.getByRole("button",{name:"Checkout"}).click();
    }

}

module.exports = cartPage;