import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export type PostResponse = {
  id: number;
  userId: number;
  body: string;
  title: string;
};

export type PostsResponse = PostResponse[];

export type Post = {
  id: number;
  body: string;
  title: string;
};

export type UsersResponse = UserResponse[];

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export type User = {
  id: number;
  name: string;
  phone: string;
};

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getPost(id: number): Observable<PostResponse> {
    return this.http.get<PostResponse>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<UsersResponse>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) =>
          users.map(({ id, name, phone }) => ({ id, name, phone }))
        )
      );
  }

  savePost(post: Post) {
    return of('vabbè, non deve funzionare per forza.');
  }
}
