import { Injectable } from '@angular/core';
import { PostPair, postPair } from './PostPair';

@Injectable({
  providedIn: 'root'
})
export class BlogPostReaperService {

  private postList: PostPair[] = [];

  reapPosts = () : PostPair[] => {
    if(this.postList.length > 0)
      return this.postList;
    else
    {
      this.staticPostGen();
      return this.postList;
    }
  }

  staticPostGen = () : void => {
    this.postList.push(postPair("How to Speak", "assets/Posts/how-to-speak.md"));
    this.postList.push(postPair("Tribe", "assets/Posts/Tribe.md"));
    this.postList.push(postPair("The Shop", "assets/Posts/The-Shop.md"));
    this.postList.push(postPair("What Does the Internet Mean to You", "assets/Posts/what-does-the-internet-mean-to-you.md"));
  }

  constructor() { }

}
