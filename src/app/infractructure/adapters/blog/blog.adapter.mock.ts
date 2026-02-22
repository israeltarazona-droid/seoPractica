import { delay, lastValueFrom, of } from "rxjs";
import { BlogGateway } from "../../../domain/gateway/blog.gateway";
import { Article } from "../../../models/article.model";
export const timeWaitLoad = 100;

export const MOCK_ARTICLES: Article[] = [
  {
    title: 'Beneficios del café artesanal para la salud',
    description: 'Descubre cómo el café artesanal puede aportar antioxidantes y mejorar tu concentración.',
    content: `
      El café artesanal no solo es una bebida deliciosa,
      también contiene antioxidantes naturales que ayudan
      a combatir los radicales libres.

      Beneficios principales:
      - Mejora la concentración
      - Aumenta la energía
      - Puede reducir el riesgo de algunas enfermedades

      La clave está en la calidad del grano y el método de preparación.
    `,
    author: 'María Barista',
    publishedDate: '2026-02-01',
    updatedDate: '2026-02-10',
    image: 'https://picsum.photos/800/400?coffee',
    slug: 'beneficios-cafe-artesanal-salud'
  },
  {
    title: 'Tipos de chocolate y sus diferencias',
    description: 'Aprende a distinguir entre chocolate negro, con leche y blanco.',
    content: `
      El chocolate se clasifica según su contenido de cacao.

      - Chocolate negro: alto porcentaje de cacao, sabor intenso.
      - Chocolate con leche: más dulce y cremoso.
      - Chocolate blanco: sin sólidos de cacao.

      El porcentaje de cacao influye en el sabor y beneficios nutricionales.
    `,
    author: 'Carlos Chocolatier',
    publishedDate: '2026-01-20',
    image: 'https://picsum.photos/800/400?chocolate',
    slug: 'tipos-de-chocolate-y-diferencias'
  },
  {
    title: 'Cómo preparar el espresso perfecto en casa',
    description: 'Guía paso a paso para lograr un espresso con crema y sabor equilibrado.',
    content: `
      Preparar un buen espresso requiere:
      - Molino ajustado correctamente
      - Presión adecuada
      - Café fresco

      El tiempo ideal de extracción es entre 25 y 30 segundos.
      La crema debe ser densa y de color avellana.
    `,
    author: 'Laura Coffee',
    publishedDate: '2025-12-15',
    updatedDate: '2025-12-18',
    image: 'https://picsum.photos/800/400?espresso',
    slug: 'como-preparar-espresso-perfecto'
  },
  {
    title: 'Maridaje: café y chocolate, combinación perfecta',
    description: 'Descubre cómo combinar café y chocolate para potenciar sabores.',
    content: `
      El café y el chocolate comparten notas aromáticas similares.

      Recomendaciones:
      - Café intenso con chocolate negro 70%
      - Café suave con chocolate con leche
      - Espresso con trufas artesanales

      La clave está en equilibrar amargor, dulzura y acidez.
    `,
    author: 'Andrés Gourmet',
    publishedDate: '2025-11-10',
    image: 'https://picsum.photos/800/400?coffee,chocolate',
    slug: 'maridaje-cafe-y-chocolate'
  }
];
export class BlogAdapterMock extends BlogGateway {

  override getAllArtics(): Promise<Array<any>> {
    return lastValueFrom(of(MOCK_ARTICLES).pipe(delay(timeWaitLoad)));
  }

}
