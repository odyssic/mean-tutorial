import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[];

  getPosts() {
    return [...this.posts];
  }

  addPost(post: Post) {
    const Post = { title: post.title, content: post.content };
  }
}
