import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MOCK_PRODUCT } from '../../../infractructure/adapters/product/product.adapter.mock';
import { ProductUsecase } from '../../../domain/usecases/product/product.usercase';
import { Product } from '../../../models/product.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class ProductSandbox {
  constructor(
    public productUsecase: ProductUsecase,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  public getAllProducts() {
    return this.productUsecase.getAllProducts();
  }

  public getProduct(slug: string) {
    return MOCK_PRODUCT.find(a => a.slug === slug) ?? null;

  }

  addStructuredData(product: any) {
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": [product.image],
        "description": product.description,
        "sku": product.sku,
        "brand": {
          "@type": "Brand",
          "name": product.brand
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": product.currency,
          "price": product.price,
          "availability": `https://schema.org/${product.availability}`
        },
        "aggregateRating": product.rating ? {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "reviewCount": 1
        } : undefined
      });
      document.head.appendChild(script);
    }
  }

}
