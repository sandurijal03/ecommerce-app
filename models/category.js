const { model, Schema } = require('mongoose');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
  },
  { timestamps: true },
);

module.exports = model('Category', categorySchema);
