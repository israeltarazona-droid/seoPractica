import { Article } from "../../models/article.model";

export abstract class BlogGateway {
  abstract getAllArtics(): Promise<Array<Article>>;
}
