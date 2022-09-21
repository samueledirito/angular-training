import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post, PostResponse, PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts().pipe(
      map((response: PostResponse) => {
        return response.map((item) => ({
          id: item.id,
          body: item.body,
          title: item.title,
        }));
      })
    );
  }
}
