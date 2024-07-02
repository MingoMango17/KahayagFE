


import mongoose, { Schema, model, models } from 'mongoose'

const menuItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
});

const menuSchema = new mongoose.Schema({
    menu: {
        tanghalian: [menuItemSchema],
        dessert: [menuItemSchema],
        pizza: [menuItemSchema],
        snacks: [menuItemSchema],
        soups: [menuItemSchema],
        drinks: [menuItemSchema]

    }
});

export default mongoose.models.Menu || mongoose.model('Menu', menuSchema);

