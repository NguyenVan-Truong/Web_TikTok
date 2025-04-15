import { Products } from "../models/products";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createProduct = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
