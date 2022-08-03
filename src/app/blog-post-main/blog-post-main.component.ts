import {Component, OnInit, AfterViewInit, ViewChildren, QueryList} from '@angular/core';


@Component({
  selector: 'app-blog-post-main.main',
  templateUrl: './blog-post-main.component.html',
  styleUrls: ['./blog-post-main.component.css', '../app.component.css']
})
export class BlogPostMainComponent implements OnInit, AfterViewInit {

  url: any = "";

  @ViewChildren("img") images!: QueryList<any>;

  reduceImages = () : void => {
    for(let img of this.images)
    {
        img.height = "400px";
        img.width = "300px";
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.url = sessionStorage.getItem("url");
    sessionStorage.clear();
  }
  ngAfterViewInit() {
    if(this.images.length > 0)
    this.reduceImages();
  }
}
