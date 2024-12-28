const Cart = require("../models/cart.model");

async function createCart(user){


    try {
        const cart= new Cartt({user});
        const creatCart=await cart.save()
        return creatCart;
        
    } catch (error) {
     throw new Error(error.message)   
    }
}
module.exports={createCart};
