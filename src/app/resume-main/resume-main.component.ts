import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-main.main',
  templateUrl: './resume-main.component.html',
  styleUrls: ['./resume-main.component.css', '../app.component.css']
})
export class ResumeMainComponent implements OnInit {

  pdfsrc : string = "assets/resume.pdf"

  constructor() { }

  ngOnInit(): void {
  }

}
