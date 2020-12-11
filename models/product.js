const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: 'Category',
      maxlength: true,
    },
    quantity: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      required: false,
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Product', productSchema);
