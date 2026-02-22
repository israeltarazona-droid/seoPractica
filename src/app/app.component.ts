import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { FooterComponent } from './ui/shared/organisms/footer/footer.component';
import { HeaderComponent } from './ui/shared/organisms/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'seoPractica';
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  ngOnInit() {
    //Meta Tags- ROBOTS
    //con esta etiqueta evitamos que los motores de busqueda indexen la pagina IMPORTANTE
    // this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    //https://search.google.com/test/rich-results/result?id=3xgPXBeMobO3beoDiJf_Sw

    //Insetar JSON-LD - SHEMA.ORG
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      nombre: 'Laboratorio para implementar SEO en pragma - assessment',
      url: '',
      logo: '',
      marcas_relacionadas: ['PARMALAT', 'NESTLE', 'ALPINA', 'COLANTA'],
      direccion: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle 123 # 45-67',
        country: 'Colombia',
        postalCode: '110111',
        addressLocality: 'Bogotá',
        addressRegion: 'DC',
      },
      tag: [
        'tortas',
        'café',
        'panadería',
        'bebidas calientes',
        'bebidas frías',
      ],
      nit: '123456789',
      telefono: '+57 123 4567890',
      sameAs: ['https://www.facebook.com/cafeconleche'],
    });
    this.doc.head.appendChild(script);
  }
}
