import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private storageKey = 'blogsList';

  constructor() {}

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  getBlogs(): Blog[] {
    if (!this.isLocalStorageAvailable()) return [];
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveBlogs(blogs: Blog[]): void {
    if (!this.isLocalStorageAvailable()) return;
    localStorage.setItem(this.storageKey, JSON.stringify(blogs));
  }

  addBlog(blog: Blog): void {
    const blogs = this.getBlogs();
    blogs.push(blog);
    this.saveBlogs(blogs);
  }

  deleteBlog(index: number): void {
    const blogs = this.getBlogs();
    blogs.splice(index, 1);
    this.saveBlogs(blogs);
  }
}
