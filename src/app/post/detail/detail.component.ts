import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, Observable, switchMap } from 'rxjs';
import { PostResponse, PostService } from '../post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  params$!: Observable<Params>;
  post$!: Observable<PostResponse>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(
      filter((params) => Boolean(params['id'])),
      switchMap(({ id }) => this.postService.getPost(id))
    );
  }
}
