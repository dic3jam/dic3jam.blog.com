import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent} from "./include/sidebar/sidebar.component";
import { FooterComponent } from './include/footer/footer.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { BlogPageMainComponent } from './blog-page-main/blog-page-main.component';
import { BlogPostMainComponent } from './blog-post-main/blog-post-main.component';
import { ResumeMainComponent } from './resume-main/resume-main.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HomeMainComponent,
    BlogPageMainComponent,
    BlogPostMainComponent,
    ResumeMainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeMainComponent},
      {path: 'Blog', component: BlogPageMainComponent},
      {path: 'Resume', component: ResumeMainComponent},
      {path: 'Post', component: BlogPostMainComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
