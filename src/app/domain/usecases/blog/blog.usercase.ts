import { Injectable } from '@angular/core';
import { BlogGateway } from '../../gateway/blog.gateway';
@Injectable()
export class BlogUsecase {
  constructor(public blogGateway: BlogGateway) { }

  getAllArtics() {
    return this.blogGateway.getAllArtics();
  }
}
