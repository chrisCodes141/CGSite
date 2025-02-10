import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../singletonServices/blog.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  protected view: boolean = true;

  blogs: Blog[] = [];
  title: string = '';
  text: string = '';

  ngOnInit(): void{
    this.view = true;
    this.loadBlogs();
  }

  constructor(private blogService: BlogService) {}

  loadBlogs() {
    this.blogs = this.blogService.getBlogs();
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
  
  blogsView(){
    this.view = !this.view;
  }

}

