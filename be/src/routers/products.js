import { Router } from "express";
import { createProduct, getAllProducts } from "../controllers/products";

const RouterProduct = Router();

RouterProduct.get("/", getAllProducts);
RouterProduct.post("/", createProduct);

export default RouterProduct;
