import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Subject } from 'rxjs';

import { Post } from './post.model';

({
  providedIn: 'root',
});
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
=======
import { Title } from '@angular/platform-browser';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[];
>>>>>>> 261a1d25e2e0ba9633d1b3f8ce8f78995dd52c5e

  getPosts() {
    return [...this.posts];
  }

<<<<<<< HEAD
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };

    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
=======
  addPost(post: Post) {
    const Post = { title: post.title, content: post.content };
>>>>>>> 261a1d25e2e0ba9633d1b3f8ce8f78995dd52c5e
  }
}
