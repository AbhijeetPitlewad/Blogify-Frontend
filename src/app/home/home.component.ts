import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: any;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(){
    this.blogService.getAllBlogs().subscribe(data=>{
      console.log(data);
      console.log(data.blogs);
      this.blogs=data.blogs;
    })

    // try {
    //   this.blogService.getAllBlogs().subscribe((data) => {
    //     this.blogs = data;
    //   })
    // } catch (err) {
    //   console.log(err);
    // }

  }

}
