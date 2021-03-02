import { Post } from './../../post.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  @Input() posts: Post[] = [];
  // { title: 'First Post', content: 'This is the first post' },
  // { title: 'Second Post', content: 'This is the second post' },
  // { title: 'Third Post', content: 'This is the third post' },
}
