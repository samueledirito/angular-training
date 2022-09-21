import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type PostResponse = {
  id: number;
  userId: number;
  body: string;
  title: string;
}[];

export type Post = {
  id: number;
  body: string;
  title: string;
};

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
