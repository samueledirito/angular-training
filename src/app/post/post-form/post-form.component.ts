import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Observable, switchMap } from 'rxjs';
import { PostResponse, PostService, User } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  post$!: Observable<PostResponse>;
  form: FormGroup;
  users$!: Observable<User[]>;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: [],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          this.notContainsAsterisks,
        ],
      ],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  notContainsAsterisks(control: AbstractControl): ValidationErrors | null {
    if (control.value.includes('*')) return { notContainsAsterisks: true };
    else return null;
  }

  ngOnInit(): void {
    this.users$ = this.postService.getUsers();

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

    this.postService.savePost(this.form.value).subscribe(() => {
      this.router.navigateByUrl('/posts');
    });
  }
}
