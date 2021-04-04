const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: Image,
            required: true,
            trim: true
        },
        quantity: {
            type: Number,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        }
    }
)