import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog-post-main.main',
  templateUrl: './blog-post-main.component.html',
  styleUrls: ['./blog-post-main.component.css', '../app.component.css']
})
export class BlogPostMainComponent implements OnInit {

  url: any = "";

  constructor() { }

  ngOnInit(): void {
    this.url = sessionStorage.getItem("url");
    sessionStorage.clear();
  }

}
