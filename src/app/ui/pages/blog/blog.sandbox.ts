import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BlogUsecase } from '../../../domain/usecases/blog/blog.usercase';
import { MOCK_ARTICLES } from '../../../infractructure/adapters/blog/blog.adapter.mock';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class BlogSandbox {
  constructor(
    public blogUsecase: BlogUsecase,
        @Inject(PLATFORM_ID) private platformId: Object // <-- Inyección para saber si es browser
  ) { }

  public getAllArtics() {
    return this.blogUsecase.getAllArtics();
  }

  public getArticle(slug: string) {
    return MOCK_ARTICLES.find(a => a.slug === slug) ?? null;

  }

addStructuredData(article: any) {
    // Solo ejecutamos este código en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.description,
        "image": article.image,
        "author": {
          "@type": "Person",
          "name": article.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Tu Empresa",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tusitio.com/logo.png"
          }
        },
        "datePublished": article.publishedAt,
        "dateModified": article.updatedAt
      });

      document.head.appendChild(script);
    }
  }

}
