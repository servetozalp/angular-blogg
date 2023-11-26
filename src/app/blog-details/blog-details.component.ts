import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog-repository/blog-repository';
import { BlogService } from '../blog.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { AuthServiceService } from '../auth-service.service';
import { LikeDislikeService } from '../like-dislike.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
  providers: [LikeDislikeService]
})
export class BlogDetailsComponent implements OnInit {
  blogID: string;
  blogDetails: Blog;
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
    public authService: AuthServiceService,
    public likeDislikeService: LikeDislikeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.blogID = params['blogID'];
      this.blogService.getBlogByID(this.blogID).pipe(
        catchError(() => of(null))
      ).subscribe(blog => {
        if (blog) {
          this.blogDetails = blog;
          // Retrieve comments from local storage
          const storedComments = localStorage.getItem(`comments_${this.blogID}`);
          if (storedComments) {
            this.blogDetails.comments = JSON.parse(storedComments);
          }
        } else {
          console.error('Blog not found');
        }
      });
    });
  }

  addComment() {
    if (this.newComment && this.blogDetails) {
      this.blogDetails.comments.push(this.newComment);
      localStorage.setItem(`comments_${this.blogID}`, JSON.stringify(this.blogDetails.comments));

      this.newComment = '';
      console.log('Comment added successfully.');
    }
  }

  goBack() {
    this.location.back();
  }

  removeComment(index: number) {
    if (confirm('Are you sure you want to remove this comment?')) {
      this.blogDetails.comments.splice(index, 1);
      localStorage.setItem(`comments_${this.blogID}`, JSON.stringify(this.blogDetails.comments));
      console.log('Comment removed successfully.');
    }
  }
  
  like() {
    this.likeDislikeService.like(this.blogID);
  }

  dislike() {
    this.likeDislikeService.dislike(this.blogID);
  }
  
}
