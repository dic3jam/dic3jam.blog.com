import { Component, OnInit } from '@angular/core';
import {PostPair} from "../include/blog-post-reaper/PostPair";
import {BlogPostReaperService} from "../include/blog-post-reaper/blog-post-reaper.service";

@Component({
  selector: 'app-blog-page-main.main',
  templateUrl: './blog-page-main.component.html',
  styleUrls: ['./blog-page-main.component.css', '../app.component.css']
})
export class BlogPageMainComponent implements OnInit {

  postList: PostPair[] = [];

  store = (url: string) : void => {
    sessionStorage.clear();
    sessionStorage.setItem("url", url);
  }

  constructor(private reaper: BlogPostReaperService) {

  }

  ngOnInit(): void {
      this.postList = this.reaper.reapPosts();
  }

}
