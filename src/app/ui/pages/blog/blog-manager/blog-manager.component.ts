import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogSandbox } from '../blog.sandbox';
import { BlogUsecase } from '../../../../domain/usecases/blog/blog.usercase';
import { BlogGateway } from '../../../../domain/gateway/blog.gateway';
import { BlogAdapterMock } from '../../../../infractructure/adapters/blog/blog.adapter.mock';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from '../../../shared/molescules/bread-crumb/bread-crumb.component';
import { seoPragmaBlog } from '../../../../util/constants';


@Component({
  selector: 'app-blog-manager',
  standalone: true,
  imports: [RouterLink, CommonModule, BreadCrumbComponent],
  providers:[BlogSandbox, BlogUsecase, {provide: BlogGateway , useClass : BlogAdapterMock}],
  templateUrl: './blog-manager.component.html',
  styleUrl: './blog-manager.component.scss'
})
export class BlogManagerComponent {
  public articles!: any
  routing = seoPragmaBlog.route;
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    public blogSandbox: BlogSandbox
  ) { }

  ngOnInit(): void {
    this.blogSandbox.getAllArtics().then((result) => {
      this.articles = result
    })
  }
}
