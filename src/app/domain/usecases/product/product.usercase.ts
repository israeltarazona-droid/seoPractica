import { Injectable } from '@angular/core';
import { ProductGateway } from '../../gateway/product.gateway';
@Injectable()
export class ProductUsecase {
  constructor(public productGateway: ProductGateway) { }

  getAllProducts() {
    return this.productGateway.getAllProducts();
  }
}
