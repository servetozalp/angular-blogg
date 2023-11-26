import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog-repository/blog-repository';
import { BlogService } from '../blog.service';
import { LikeDislikeService } from '../like-dislike.service';

@Component({
  selector: 'recent-blogs',
  templateUrl: './recent-blogs.component.html',
  styleUrls: ['./recent-blogs.component.css'],
  providers: [LikeDislikeService]
})
export class RecentBlogsComponent implements OnInit {

  constructor( private blogService: BlogService, public likeDislikeService: LikeDislikeService ){}

  recentBlogs : Blog[] = [
    {
      blogID: "1",
      title: "blog 1",
      thumbnailUrl: "https://picsum.photos/1000/1000",
      body: "blog 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique quas non, maiores placeat itaque, deserunt repellendus pariatur officia, numquam repudiandae laudantium? Expedita magnam similique quaerat error cum corrupti asperiores eius! Placeat pariatur maxime ipsum numquam quasi, in suscipit ratione dolores, soluta itaque ab vel dolorum harum tenetur labore ullam rem iure officiis iusto? Laudantium praesentium sunt ab, iure repellat a quidem eligendi natus tempore iste omnis voluptates fuga ex repudiandae consequatur libero doloremque ipsa, ipsum soluta architecto. Quidem nobis voluptas architecto explicabo harum totam veniam possimus natus itaque laborum porro labore distinctio accusamus quis odit optio maiores facilis, unde, id vel! Temporibus et dolorem at aut perferendis natus expedita rem cumque ea quam non repellendus doloremque earum, voluptate laboriosam quisquam hic? Facilis quidem error esse molestiae corrupti animi adipisci doloremque nemo delectus quas accusantium numquam nam beatae porro quaerat nobis facere harum at exercitationem possimus, a, doloribus rerum incidunt.",
      creationDate: new Date("2023-12-17T10:30:00Z"),
      likes: 8,
      dislikes: 2,
      comments: [
        
      ]
    },

    {
      blogID: "2",
      title: "blog 2",
      thumbnailUrl: "https://picsum.photos/1000/999",
      body: "blog 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique quas non, maiores placeat itaque, deserunt repellendus pariatur officia, numquam repudiandae laudantium? Expedita magnam similique quaerat error cum corrupti asperiores eius! Placeat pariatur maxime ipsum numquam quasi, in suscipit ratione dolores, soluta itaque ab vel dolorum harum tenetur labore ullam rem iure officiis iusto? Laudantium praesentium sunt ab, iure repellat a quidem eligendi natus tempore iste omnis voluptates fuga ex repudiandae consequatur libero doloremque ipsa, ipsum soluta architecto. Quidem nobis voluptas architecto explicabo harum totam veniam possimus natus itaque laborum porro labore distinctio accusamus quis odit optio maiores facilis, unde, id vel! Temporibus et dolorem at aut perferendis natus expedita rem cumque ea quam non repellendus doloremque earum, voluptate laboriosam quisquam hic? Facilis quidem error esse molestiae corrupti animi adipisci doloremque nemo delectus quas accusantium numquam nam beatae porro quaerat nobis facere harum at exercitationem possimus, a, doloribus rerum incidunt.",
      creationDate: new Date("2023-11-17T10:30:00Z"),
      likes: 14,
      dislikes: 2,
      comments: [
        
      ]
    },

    {
      blogID: "3",
      title: "blog 3",
      thumbnailUrl: "https://picsum.photos/1000/998",
      body: "blog 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique quas non, maiores placeat itaque, deserunt repellendus pariatur officia, numquam repudiandae laudantium? Expedita magnam similique quaerat error cum corrupti asperiores eius! Placeat pariatur maxime ipsum numquam quasi, in suscipit ratione dolores, soluta itaque ab vel dolorum harum tenetur labore ullam rem iure officiis iusto? Laudantium praesentium sunt ab, iure repellat a quidem eligendi natus tempore iste omnis voluptates fuga ex repudiandae consequatur libero doloremque ipsa, ipsum soluta architecto. Quidem nobis voluptas architecto explicabo harum totam veniam possimus natus itaque laborum porro labore distinctio accusamus quis odit optio maiores facilis, unde, id vel! Temporibus et dolorem at aut perferendis natus expedita rem cumque ea quam non repellendus doloremque earum, voluptate laboriosam quisquam hic? Facilis quidem error esse molestiae corrupti animi adipisci doloremque nemo delectus quas accusantium numquam nam beatae porro quaerat nobis facere harum at exercitationem possimus, a, doloribus rerum incidunt.",
      creationDate: new Date("2023-11-17T10:30:00Z"),
      likes: 7,
      dislikes: 2,
      comments: [
        
      ]
    },

  ]

  
  ngOnInit() {
    this.blogService.getRecentBlogs().subscribe(blogs => {
      this.recentBlogs = blogs;
    });
    this.recentBlogs.forEach(blog => {
      blog.likes = this.likeDislikeService.getLikesCount(blog.blogID);
      blog.dislikes = this.likeDislikeService.getDislikesCount(blog.blogID);
    });
  }

  getLikesCount(blogID: string):number {
    return this.likeDislikeService.getLikesCount(blogID);
  }
  
  getDislikesCount(blogID: string):number {
    return this.likeDislikeService.getDislikesCount(blogID);
  }
  
}
