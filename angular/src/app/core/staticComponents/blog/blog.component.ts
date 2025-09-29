import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../singletonServices/blog.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-blog',
    imports: [CommonModule, FormsModule],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  protected view: boolean = true;

  expandedBlogs: boolean[] = [];

  blogs: Blog[] = [];
  title: string = '';
  text: string = '';

  ngOnInit(): void {
    this.view = true;
    this.loadBlogs();
    this.addExampleBlogs();
  }

  constructor(private blogService: BlogService) { }

  loadBlogs() {
    this.blogs = this.blogService.getBlogs();
    this.expandedBlogs = new Array(this.blogs.length).fill(false);
  }

  addBlog(): void {
    if (this.title.trim() && this.text.trim()) {
      const newBlog: Blog = { title: this.title, text: this.text };
      this.blogService.addBlog(newBlog);
      this.loadBlogs();
      this.title = '';
      this.text = '';
    }
  }

  deleteBlog(index: number): void {
    this.blogService.deleteBlog(index);
    this.loadBlogs();
  }

  blogsView() {
    this.view = !this.view;
  }

  toggleExpand(index: number): void {
    this.expandedBlogs[index] = !this.expandedBlogs[index];
  }

  addExampleBlogs() {
    const blogs = this.blogService.getBlogs();

    if (blogs.length === 0){
      const exampleBlogs: Blog[] = [
        { title: 'Hey there!', text: 'Welcome to the blog section!'},
        { title: 'These are just a couple example', text: 'Please create your own ^^! Play around with the various functionalities, such as the red X (delete my neighbor, not me!), read more to expand, and create more to fill this page with posts!'}
      ];

      exampleBlogs.forEach(blog => this.blogService.addBlog(blog));
      this.loadBlogs();
    }
  }

}

