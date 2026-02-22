export interface Article {
  title: string;
  description: string;
  content: string;
  author: string;
  publishedDate: string;
  updatedDate?: string;
  image?: string;
  slug: string;
}