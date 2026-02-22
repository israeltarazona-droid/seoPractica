import { Product } from "../../models/product.model";

export abstract class ProductGateway {
  abstract getAllProducts(): Promise<Array<Product>>;
}
