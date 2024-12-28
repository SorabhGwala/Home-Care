// const mongoose = require("mongoose");
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30,
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    level: {
        type: Number,
        required: true,
    },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
