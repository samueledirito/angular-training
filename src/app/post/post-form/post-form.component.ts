import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable, switchMap } from 'rxjs';
import { PostResponse, PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  post$!: Observable<PostResponse>;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private postService: PostService
  ) {
    this.form = this.fb.group({
      id: [],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(
      filter((params) => Boolean(params['id'])),
      switchMap(({ id }) => this.postService.getPost(id))
    );

    this.post$.subscribe((post) => {
      this.form.patchValue(post);
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }
}
