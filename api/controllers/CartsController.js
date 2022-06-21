

/**
 * CartsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Carts = require("../models/Carts");

module.exports = {
    
    agregar: async (req, res) => {
        const cart = await Carts.find({ _id: req.params.id_cart })
        cart[0].products.push(req.params.id_product)
        const updated = await Carts.updateOne({ _id: req.params.id_cart }, {
            products: cart[0].products
        })
        res.json(updated)
    },

    quitar: async (req, res) => {
        const cart = await Carts.find({ _id: req.params.id_cart })
        let index = cart[0].products.indexOf(req.params.id_product)
        if (cart[0].products.includes(req.params.id_product)) {
            cart[0].products.splice(index, 1)
        }
        const updated = await Carts.updateOne({ _id: req.params.id_cart }, {
            products: cart[0].products
        })
        res.json(updated)
    }

};

