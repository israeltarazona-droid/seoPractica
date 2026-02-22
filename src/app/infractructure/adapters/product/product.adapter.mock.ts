import { delay, lastValueFrom, of } from "rxjs";
import { ProductGateway } from "../../../domain/gateway/product.gateway";
import { Product } from "../../../models/product.model";
export const timeWaitLoad = 100;

export const MOCK_PRODUCT: Product[] = [
  {
    name: 'Dulce de café',
    description: 'Caramelo de café, con chocolate',
    image: '../../../../assets/images/products/dulce_cafe.png',
    price: 5.50,
    currency: 'USD',
    availability: 'InStock',
    sku: 'DC001',
    brand: 'Café & Chocolate',
    slug: 'dulce-de-cafe',
    rating: 5
  },
  {
    name: 'Batido de café',
    description: 'Batido de café con helado de vainilla',
    image: '../../../../assets/images/products/batido_cafe.png',
    price: 6.00,
    currency: 'USD',
    availability: 'InStock',
    sku: 'BC002',
    brand: 'Café & Chocolate',
    slug: 'batido-de-cafe',
    rating: 5
  },
  {
    name: 'Torta de café',
    description: 'Torta de café con crema batida y cubierta de almendras',
    image: '../../../../assets/images/products/torta_cafe.png',
    price: 12.00,
    currency: 'USD',
    availability: 'InStock',
    sku: 'TC003',
    brand: 'Café & Chocolate',
    slug: 'torta-de-cafe',
    rating: 5
  },
  {
    name: 'Choco café',
    description: 'Trozos de chocolate con café, perfectos para repostería',
    image: '../../../../assets/images/products/choco_cafe.png',
    price: 8.00,
    currency: 'USD',
    availability: 'InStock',
    sku: 'CC004',
    brand: 'Café & Chocolate',
    slug: 'choco-cafe',
    rating: 5
  },
  {
    name: 'Grano de café',
    description: 'Bolsa de un kilo de café para tostar y procesar',
    image: '../../../../assets/images/products/cafe_grano.png',
    price: 15.00,
    currency: 'USD',
    availability: 'InStock',
    sku: 'GC005',
    brand: 'Café & Chocolate',
    slug: 'grano-de-cafe',
    rating: 5
  },
  {
    name: 'Café molido',
    description: 'Café molido para el consumo, procesado a mano',
    image: '../../../../assets/images/products/molido_cafe.png',
    price: 10.00,
    currency: 'USD',
    availability: 'InStock',
    sku: 'CM006',
    brand: 'Café & Chocolate',
    slug: 'cafe-molido',
    rating: 5
  },
  {
    name: 'Cereza de café',
    description: 'Cereza de café para ser secada, pelada y molida',
    image: '../../../../assets/images/products/cereza_cafe.png',
    price: 7.50,
    currency: 'USD',
    availability: 'InStock',
    sku: 'CC007',
    brand: 'Café & Chocolate',
    slug: 'cereza-de-cafe',
    rating: 5
  }
];

export class ProductAdapterMock extends ProductGateway {

  override getAllProducts(): Promise<Array<any>> {
    return lastValueFrom(of(MOCK_PRODUCT).pipe(delay(timeWaitLoad)));
  }

}
