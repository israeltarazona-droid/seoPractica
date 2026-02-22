import { Component } from '@angular/core';
import { seoPragma } from '../../../../util/constants';
import { BreadCrumbComponent } from '../../../shared/molescules/bread-crumb/bread-crumb.component';
import { CardComponent } from '../../../shared/molescules/card/card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductSandbox } from '../product.sandbox';
import { ProductUsecase } from '../../../../domain/usecases/product/product.usercase';
import { ProductGateway } from '../../../../domain/gateway/product.gateway';
import { ProductAdapterMock } from '../../../../infractructure/adapters/product/product.adapter.mock';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [BreadCrumbComponent, MatGridListModule, CommonModule, RouterLink],
  providers: [ProductSandbox, ProductUsecase, { provide: ProductGateway, useClass: ProductAdapterMock }],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  public listProducts!: any
  routing = seoPragma.route;
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    public productSandbox: ProductSandbox
  ) { }

  ngOnInit(): void {
    this.productSandbox.getAllProducts().then((result) => {
      console.log(result)
      this.listProducts = result
    })
  }

}
