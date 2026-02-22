import { Component } from '@angular/core';
// import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogSandbox } from '../blog.sandbox';
import { BlogGateway } from '../../../../domain/gateway/blog.gateway';
import { BlogUsecase } from '../../../../domain/usecases/blog/blog.usercase';
import { BlogAdapterMock } from '../../../../infractructure/adapters/blog/blog.adapter.mock';
import { CommonModule } from '@angular/common';
import { Article } from '../../../../models/article.model';
import { Title, Meta } from '@angular/platform-browser';
import { seoPragma } from '../../../../util/constants';
import { BreadCrumbComponent } from '../../../shared/molescules/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, BreadCrumbComponent],
  providers: [BlogSandbox, BlogUsecase, { provide: BlogGateway, useClass: BlogAdapterMock }],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {

  public article!: Article | null
  public routing!: any

  constructor(
    private route: ActivatedRoute,
    public blogSandbox: BlogSandbox,
    private title: Title,
    private meta: Meta

  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug === null) {
      return
    }
    this.article = this.blogSandbox.getArticle(slug)
    const data = {
      title: 'Artículo',
      subtitle: '',
      route: [{ text: 'Inicio', src: '../inicio' }, { text: 'Blog', src: './blog' }, { text: this.article !== null ? this.article.title : '', src: './blog' },],
    };
    this.routing = data.route
    this.setSEO(this.article)
  }

  setSEO(article: any) {
    this.title.setTitle(article.title);
    this.meta.updateTag({
      name: 'description',
      content: article.description
    });

    this.meta.updateTag({
      property: 'og:title',
      content: article.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: article.description
    });

    this.meta.updateTag({
      property: 'og:image',
      content: article.image
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'article'
    });
    this.blogSandbox.addStructuredData(this.article)
  }
}
