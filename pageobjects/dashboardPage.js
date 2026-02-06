 
 class dashboard{
    constructor(page){
        this.page = page;
        this.product = page.locator(".card-body");
    }
    
    async addToCart(productname){
        await this.product.filter({hasText:productname}).getByRole("button",{name:"Add To Cart"}).click();
    }

 }
 module.exports = dashboard;