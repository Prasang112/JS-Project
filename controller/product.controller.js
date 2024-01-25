import Product from "../model/product.model.js";

export const add = (request, response, next) => {
    console.log(request.body.categoryId)
    console.log(request.file);
    let filename = request.file.filename;
    let categoryId = request.body.categoryId;
    let productName = request.body.productName;
    let price = request.body.price;
    let brand = request.body.brand;
    let description = request.body.description;
    let image = "images/"+filename;
    // console.log(categoryId+" "+productName+" "+price+" "+brand+" "+description+" "+image);

    let product = new Product(categoryId, productName, price, brand, description, image);
    console.log(product);
    product.add()
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Product Add Successfully" });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}

export const update = (request, response, next) => {

    let product_id = request.body.product_id;
    let productName = request.body.productName;
    let price = request.body.price;
    let brand = request.body.brand;
    let description = request.body.description;
    let image = request.body.image;

    let product = new Product(null, productName, price, brand, description, image);
    console.log(product);
    product.update(product_id)
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Product update successfully" });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });
}
export const remove = (request, response, next) => {

    let product_id = request.body.product_id;

    let product = new Product(product_id);

    product.remove(product_id)
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "Remove product successfully" });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });

}
export const productList = (request, response) => {
    Product.productList()
        .then(result => {
            return response.status(200).json({ Data: result });
        }).catch(err => {
            return response.status(500).json({ Error: "Internal Server Error" });
        });
}

export const particularProduct = (request, response, next) => {
    let productId = request.body.productId;

    Product.particularProduct(productId)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Data: result });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
}

export const productListByCategory = (request, response, next) => {
    let categoryId = request.body.categoryId;

    Product.productListByCategory(categoryId)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Data: result });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });
}