import Cart from "../model/cart.model.js";
import CartItem from "../model/cart-item.model.js";

export const addProductToCart = async (request, response, next) => {
    try {
        let userId = request.body.userId;
        let productId = request.body.productId;

        let result = await Cart.isCartExist(userId);

        if (!result.length)
            result = await Cart.createCart(userId);

        let cartId = result[0].Cart_Id;

        await CartItem.saveCartItem(cartId, productId);
        return response.status(200).json({ message: "Item saved in cart" });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

export const removeProductToCart = (request, response, next) => {
    let cartId = request.body.cartId;

    Cart.removeProductToCart(cartId)
        .then(result => {
            return response.status(200).json({ message: "Product remove Successfully" });
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error" });
        });
}