import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRoutingModule } from './post-routing.module';
import { PostService } from './post.service';

@NgModule({
  declarations: [PostListComponent, DetailComponent, PostFormComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PostService],
})
export class PostModule {}
