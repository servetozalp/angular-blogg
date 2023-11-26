import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Blog } from './blog-repository/blog-repository';
@Injectable({
  providedIn: 'root'
})
export class BlogRepositoryService {
  private blogs: BehaviorSubject<Blog[]> = new BehaviorSubject<Blog[]>([]);
  blogs$ = this.blogs.asObservable();

  addBlog(blog: Blog) {
    const currentBlogs = this.blogs.value;
    this.blogs.next([...currentBlogs, blog]);
  }
}
