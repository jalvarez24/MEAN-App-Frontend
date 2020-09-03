import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liked-posts',
  templateUrl: './liked-posts.component.html',
  styleUrls: ['./liked-posts.component.css']
})
export class LikedPostsComponent implements OnInit {

  posts: any = []
  username: string = ''
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { 
    this._myservice.getUserName()
    .subscribe(
      data => this.username = data.toString(),
      error => {
        this._router.navigate(['../login'], { relativeTo: this._activatedRoute })
      }
    )
  }
  getUserPosts(): void {
    this.posts = this._myservice.getUserPosts()
  }

  ngOnInit(): void {
    this.getUserPosts()
  }

}
