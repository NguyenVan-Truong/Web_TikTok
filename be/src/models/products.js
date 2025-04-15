import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    ma: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    giaKhuyenMai: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Products = mongoose.model("Products", productsSchema);
