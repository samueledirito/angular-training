import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: ':id/edit',
    component: PostFormComponent,
  },
  {
    path: ':id',
    component: DetailComponent,
  },
  {
    path: '',
    component: PostListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
