"use strict";
class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
    get getPrice() {
        return this.price;
    }
    get getQuantity() {
        return this.quantity;
    }
    set setName(name) {
        this.name = name;
    }
    set setPrice(price) {
        this.price = price;
    }
    set setQuantity(quantity) {
        this.quantity = quantity;
    }
    inputData() {
        this.name = String(prompt("nhập tên sản phẩm"));
        this.price = Number(prompt("nhập giá sản phẩm"));
        this.quantity = Number(prompt("nhập số lượng sản phẩm"));
    }
    displayData() {
        console.log(this.id + "" + this.name + "" + this.price + "" + this.quantity);
    }
}
class Bakery {
    constructor() {
        this.productList = [];
    }
    createProduct() {
        let id = 1;
        if (this.productList.length > 0) {
            id = this.productList[this.productList.length - 1].id + 1;
        }
        let name = String(prompt("nhập tên sản phẩm"));
        let price = Number(prompt("nhập giá sản phẩm"));
        let quantity = Number(prompt("nhập số lượng sản phẩm"));
        const newProduct = new Product(id, name, price, quantity);
        this.productList.push(newProduct);
    }
    showAllCart() {
        const products = this.productList.filter((product) => {
            product.getId, product.getName, product.getPrice, product.getQuantity;
        });
        return products;
    }
    deleteProduct(id) {
        // const index = this.productList.findIndex((product) => product.id === id);
        // this.productList.splice(index, 1);
        const newList = this.productList.filter((product) => product.id !== id);
        this.productList = newList;
    }
    updateProduct(id) {
        let name = String(prompt("nhập tên sản phẩm"));
        let price = Number(prompt("nhập giá sản phẩm"));
        let quantity = Number(prompt("nhập số lượng sản phẩm"));
        const fixProduct = this.productList.map((item) => {
            if (item.id == id) {
                return Object.assign(Object.assign({}, item), { name,
                    price,
                    quantity });
            }
            return item;
        });
        this.productList = [...fixProduct];
    }
    buyProduct(id) {
        const product = this.productList.find((product) => product.id == id);
        if (product === undefined) {
            alert("sản phẩm không tồn tại");
            return;
        }
        if (product.getQuantity > 0) {
            product.setQuantity = product.getQuantity - 1;
            const newProduct = new Product(product.getId, product.getName, product.getPrice, product.getQuantity);
            return newProduct;
        }
        else {
            alert("Sản phẩm hết hàng");
            return;
        }
    }
}
const store = new Bakery();
function createProduct() {
    store.createProduct();
}
// store.deleteProduct(1);
console.log(store.showAllCart());
class Cart {
    constructor() {
        this.myCart = [];
    }
    // Trừ sản phẩm
    buyProduct(id) {
        const product = store.buyProduct(id);
        // name, id, price từ --> Bakery --> tạo 1 sản phẩm mới với số lượng là 1 --> cart
        if (!product) {
            return;
        }
        const productCart = this.myCart.find((productInCart) => productInCart.id === product.id);
        if (productCart) {
            productCart.setQuantity = productCart.getQuantity + 1;
        }
        else {
            this.myCart.push(product);
        }
    }
    showAllCart() {
        const products = this.myCart.filter((product) => {
            product.getId, product.getName, product.getPrice, product.getQuantity;
        });
        return products;
    }
}
const user_1 = new Cart();
user_1.buyProduct(3);
user_1.buyProduct(3);
console.log(user_1.showAllCart());
