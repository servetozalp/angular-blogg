import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecentBlogsComponent } from './recent-blogs/recent-blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { LikeDislikeService } from './like-dislike.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogHeaderComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    RecentBlogsComponent,
    BlogDetailsComponent,
    BlogFooterComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [LikeDislikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
