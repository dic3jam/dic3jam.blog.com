import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main.main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {
  thinking: string;
  reading: string;

  constructor() {
    this.thinking = "assets/Blurbs/thinking.md";
    this.reading = "assets/Blurbs/reading.md";
  }

  ngOnInit(): void {
  }

}
