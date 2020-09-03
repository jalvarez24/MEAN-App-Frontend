import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'liked-posts', component: LikedPostsComponent },
  { path: '**', redirectTo: '/feed', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
