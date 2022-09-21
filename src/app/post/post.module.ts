import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PostListComponent } from './post-list/post-list.component';
import { PostRoutingModule } from './post-routing.module';
import { PostService } from './post.service';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, PostRoutingModule, HttpClientModule],
  providers: [PostService],
})
export class PostModule {}
