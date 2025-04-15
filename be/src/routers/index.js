import RouterCart from "./cart";
import RouterProduct from "./products";

export function Router(app) {
  app.use("/api/v1/products", RouterProduct);
  app.use("/api/v1/cart", RouterCart);
}
