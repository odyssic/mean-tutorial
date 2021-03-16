<<<<<<< HEAD
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

=======
>>>>>>> 261a1d25e2e0ba9633d1b3f8ce8f78995dd52c5e
import { PostsService } from './../../posts.service';
import { Post } from './../../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
<<<<<<< HEAD
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
=======
export class PostListComponent {
  @Input() posts: Post[] = [];

  constructor(public postsService: PostsService) {}
>>>>>>> 261a1d25e2e0ba9633d1b3f8ce8f78995dd52c5e
}
