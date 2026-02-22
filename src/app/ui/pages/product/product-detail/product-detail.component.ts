import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../models/product.model';
import { ProductSandbox } from '../product.sandbox';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from '../../../shared/molescules/bread-crumb/bread-crumb.component';
import { ProductUsecase } from '../../../../domain/usecases/product/product.usercase';
import { ProductGateway } from '../../../../domain/gateway/product.gateway';
import { ProductAdapterMock } from '../../../../infractructure/adapters/product/product.adapter.mock';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, BreadCrumbComponent],
  providers:[ProductSandbox, ProductUsecase, { provide: ProductGateway, useClass: ProductAdapterMock }],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {


  public product!: Product | null
  public routing!: any
  constructor(
    private route: ActivatedRoute,
    public productSandbox: ProductSandbox,
    private title: Title,
    private meta: Meta

  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug === null) {
      return
    }
    this.product = this.productSandbox.getProduct(slug)
    const data = {
      title: 'Artículo',
      subtitle: '',
      route: [{ text: 'Inicio', src: '../inicio' }, { text: 'Blog', src: './blog' }, { text: this.product !== null ? this.product.name : '', src: './blog' },],
    };
    this.routing = data.route
    this.setSEO(this.product)
  }


  setSEO(product: any) {
    console.log(product.brand);
    this.title.setTitle(product.brand);
    this.meta.updateTag({
      name: 'description',
      content: product.description
    });

    this.meta.updateTag({
      property: 'og:title',
      content: product.brand
    });

    this.meta.updateTag({
      property: 'og:description',
      content: product.description
    });

    this.meta.updateTag({
      property: 'og:image',
      content: product.image
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'article'
    });
    this.productSandbox.addStructuredData(this.product)
  }

}
